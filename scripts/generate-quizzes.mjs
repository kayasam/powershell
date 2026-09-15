import { copyFile, mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const projectRoot = path.resolve(import.meta.dirname, '..')
const stageRoot = path.resolve(process.argv[2] || '')
const conceptsRoot = path.join(projectRoot, 'scripts', 'quiz-concepts')
const templatePath = path.join(projectRoot, 'site-content', 'cours', 'quiz', 'quiz-template.html')
const coursesRoot = path.join(stageRoot, 'cours')
const quizRoot = path.join(coursesRoot, 'quiz')
const assetsRoot = path.join(stageRoot, 'assets', 'quiz')
const siteUrl = 'https://kayasam.github.io/powershell'

if (!stageRoot.startsWith(projectRoot + path.sep)) {
  throw new Error(`Dossier de préparation hors du projet : ${stageRoot}`)
}

function titleOf(document, slug) {
  const frontmatter = document.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  const title = frontmatter?.[1].match(/^title:\s*(.+)$/m)?.[1].trim()
  if (!title) throw new Error(`Titre absent pour ${slug}`)
  return title.replace(/^['"]|['"]$/g, '')
}

function buildQuestions(concepts) {
  const questions = []
  for (const [index, [term, definition]] of concepts.entries()) {
    const contrasts = [1, 3, 6].map((offset) => concepts[(index + offset) % concepts.length])
    const formats = [
      {
        theme: 'Comprendre la notion',
        question: `Quelle définition correspond à « ${term} » ?`,
        correct: definition,
        alternatives: contrasts.map((item) => item[1]),
      },
      {
        theme: 'Retrouver la commande ou le concept',
        question: `Quel concept correspond à cette description : « ${definition} » ?`,
        correct: term,
        alternatives: contrasts.map((item) => item[0]),
      },
    ]
    for (const format of formats) {
      const answer = questions.length % 4
      const choices = format.alternatives.slice()
      choices.splice(answer, 0, format.correct)
      questions.push({
        theme: format.theme,
        question: format.question,
        choices,
        answer,
        explanation: `« ${term} » : ${definition}. Les autres choix renvoient à « ${contrasts.map((item) => item[0]).join(' », « ')} » ; comparez leur rôle avant de continuer.`,
      })
    }
  }
  return questions
}

const conceptFiles = (await readdir(conceptsRoot)).filter((name) => name.endsWith('.json')).sort()
const conceptBank = Object.assign(
  {},
  ...(await Promise.all(conceptFiles.map(async (name) => JSON.parse(await readFile(path.join(conceptsRoot, name), 'utf8'))))),
)
const chapters = (await readdir(coursesRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && /^\d{2}-/.test(entry.name))
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b, 'fr', { numeric: true }))

const missing = chapters.filter((slug) => !(slug in conceptBank))
const obsolete = Object.keys(conceptBank).filter((slug) => !chapters.includes(slug))
if (missing.length || obsolete.length) {
  throw new Error(`Banque des quiz désynchronisée. Manquants : ${missing.join(', ') || 'aucun'}. Obsolètes : ${obsolete.join(', ') || 'aucun'}.`)
}

const template = await readFile(templatePath, 'utf8')
if (!template.includes('QUIZ_ID')) throw new Error('Le modèle HTML du quiz doit contenir QUIZ_ID.')

await mkdir(quizRoot, { recursive: true })
await mkdir(assetsRoot, { recursive: true })
for (const asset of ['quiz.css', 'quiz-engine.js']) {
  await copyFile(path.join(projectRoot, 'site-content', 'assets', 'quiz', asset), path.join(assetsRoot, asset))
}
const bank = {}

for (const slug of chapters) {
  const concepts = conceptBank[slug]
  if (!Array.isArray(concepts) || concepts.length !== 10) {
    throw new Error(`${slug} doit contenir exactement 10 notions pour ses 20 questions.`)
  }
  const terms = new Set()
  const definitions = new Set()
  for (const concept of concepts) {
    if (!Array.isArray(concept) || concept.length !== 2 || typeof concept[0] !== 'string' || concept[0].trim().length < 1 || typeof concept[1] !== 'string' || concept[1].trim().length < 12) {
      throw new Error(`Notion incomplète dans le quiz ${slug}.`)
    }
    if (terms.has(concept[0]) || definitions.has(concept[1])) {
      throw new Error(`Notion ou explication répétée dans le quiz ${slug} : ${concept[0]}`)
    }
    terms.add(concept[0])
    definitions.add(concept[1])
  }

  const chapterDocument = await readFile(path.join(coursesRoot, slug, `${slug}.md`), 'utf8')
  const chapterTitle = titleOf(chapterDocument, slug)
  const quizUrl = `${siteUrl}/cours/quiz/${slug}.html`
  const questions = buildQuestions(concepts)
  const distribution = [0, 0, 0, 0]
  for (const question of questions) {
    if (question.choices.length !== 4 || new Set(question.choices).size !== 4) {
      throw new Error(`Quatre choix distincts attendus dans le quiz ${slug}.`)
    }
    distribution[question.answer] += 1
  }
  if (questions.length !== 20 || distribution.some((count) => count !== 5)) {
    throw new Error(`Réponses A/B/C/D déséquilibrées dans ${slug} : ${distribution.join('/')}`)
  }

  bank[slug] = {
    id: slug,
    title: `Quiz — ${chapterTitle}`,
    chapter: chapterTitle,
    intro: '20 questions pour vérifier vos repères avant de passer aux exercices pratiques.',
    chapterLink: `../${slug}/`,
    questions,
  }

  await writeFile(path.join(quizRoot, `${slug}.html`), template.replaceAll('QUIZ_ID', slug), 'utf8')
  await writeFile(
    path.join(coursesRoot, slug, 'quiz.md'),
    `---\ntitle: "Quiz"\n---\n\n# Quiz du chapitre\n\n<div class="ps-interactive-launch">\n  <strong>20 questions · objectif 16/20</strong>\n  <span>Quatre choix par question, réponse expliquée et progression sauvegardée.</span>\n  <a href="${quizUrl}">Ouvrir le quiz en plein écran →</a>\n</div>\n\n<iframe class="ps-course-frame" src="${quizUrl}" title="Quiz PowerShell ${chapterTitle.replaceAll('"', '&quot;')}" loading="eager"></iframe>\n`,
    'utf8',
  )
}

await writeFile(assetsRoot + path.sep + 'quiz-banks.js', `window.powerShellQuizBanks = ${JSON.stringify(bank)};\n`, 'utf8')
console.log(`${chapters.length} quiz produits, 20 questions chacun, réponses A/B/C/D : 5/5/5/5.`)
