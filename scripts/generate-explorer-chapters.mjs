import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const projectRoot = path.resolve(import.meta.dirname, '..')
const coursesRoot = path.join(projectRoot, 'content', 'cours')
const outputPath = path.join(projectRoot, 'quartz', 'styles', 'explorer-chapters.generated.scss')
const checkOnly = process.argv.includes('--check')

function sassString(value) {
  return JSON.stringify(value)
}

function chapterTitle(document, slug) {
  const frontmatter = document.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  const title = frontmatter?.[1].match(/^title:\s*(.+)$/m)?.[1].trim()
  if (!title) throw new Error(`Titre du chapitre absent : ${slug}`)
  return title.replace(/^['"]|['"]$/g, '')
}

function chapterStyle(index, count) {
  const phases = [
    ['var(--ps-foundations)', 'BASE'],
    ['var(--ps-pipeline)', 'OUTILS'],
    ['var(--ps-files)', 'SYSTÈME'],
    ['var(--ps-scripts)', 'SCRIPT'],
    ['var(--ps-ad)', 'ADMIN'],
  ]
  return phases[Math.min(phases.length - 1, Math.floor((index * phases.length) / count))]
}

const chapters = (await readdir(coursesRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && /^\d{2}-/.test(entry.name))
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b, 'fr', { numeric: true }))

if (!chapters.length) throw new Error('Aucun chapitre public trouvé pour l’explorateur.')

const rules = []
for (const [index, slug] of chapters.entries()) {
  const chapterFile = path.join(coursesRoot, slug, `${slug}.md`)
  const title = chapterTitle(await readFile(chapterFile, 'utf8'), slug)
  const [accent, badge] = chapterStyle(index, chapters.length)
  rules.push(`
.explorer-content .folder-container[data-folderpath=${sassString(`cours/${slug}/index`)}] {
  @include explorer.chapter-card(${accent}, ${sassString(badge)}, ${sassString(title)});
}

.explorer-content li:has(> a.nav-file-title[href$=${sassString(`/cours/${slug}/${slug}`)}]) {
  display: none;
}

body[data-slug^=${sassString(`cours/${slug}/`)}]
  .explorer-content .folder-container[data-folderpath=${sassString(`cours/${slug}/index`)}] {
  border-color: color-mix(in srgb, var(--chapter-accent) 55%, var(--lightgray));
  background: color-mix(in srgb, var(--chapter-accent) 14%, var(--light));
}`)
}

const output = `// Généré par scripts/generate-explorer-chapters.mjs depuis les titres du coffre.
// Ne pas modifier ce fichier à la main : la préparation de publication le recrée.
@use "./explorer-powershell.scss" as explorer;
${rules.join('\n')}
`

if (checkOnly) {
  const current = await readFile(outputPath, 'utf8')
  if (current !== output) throw new Error('Le thème des chapitres n’est plus synchronisé.')
} else {
  await writeFile(outputPath, output, 'utf8')
}

console.log(`${chapters.length} cartes de chapitre synchronisées avec le coffre.`)
