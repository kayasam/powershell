import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const projectRoot = path.resolve(import.meta.dirname, '..')
const stageRoot = path.resolve(process.argv[2] || '')
const fromTemplate = process.argv.includes('--from-template')
if (!stageRoot.startsWith(projectRoot + path.sep)) {
  throw new Error(`Dossier de préparation hors du projet : ${stageRoot}`)
}

const chapterNames = (await readdir(path.join(stageRoot, 'cours'), { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && /^\d{2}-/.test(entry.name))
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b, 'fr', { numeric: true }))
if (!chapterNames.length) throw new Error('Aucun chapitre pour la page d’accueil.')

const labels = [
  'Fondations PowerShell',
  'Pipeline et logique',
  'Système et robustesse',
  'Scripts et automatisation',
  'Administration',
]
const groups = labels.map(() => [])
for (const [index, slug] of chapterNames.entries()) {
  const group = Math.min(groups.length - 1, Math.floor((index * groups.length) / chapterNames.length))
  groups[group].push(slug)
}

const cards = groups.map((slugs, index) => {
  const first = slugs[0]
  const last = slugs.at(-1)
  const firstNumber = first.slice(0, 2)
  const lastNumber = last.slice(0, 2)
  const range = firstNumber === lastNumber ? `Chapitre ${firstNumber}` : `Chapitres ${firstNumber}–${lastNumber}`
  return `  <a class="ps-module-card" href="https://kayasam.github.io/powershell/cours/${first}/"><span class="ps-module-card__number">${String(index + 1).padStart(2, '0')}</span><small>${range}</small><strong>${labels[index]}</strong><span>Cours, version interactive, quiz et travaux pratiques accessibles depuis l’arborescence.</span></a>`
}).join('\n')

const homepagePath = path.join(stageRoot, 'index.md')
const template = await readFile(fromTemplate ? path.join(projectRoot, 'site-content', 'index.md') : homepagePath, 'utf8')
if (!template.includes('{{CHAPTER_COUNT}}') || !template.includes('{{MODULE_CARDS}}')) {
  throw new Error('Les marqueurs du modèle de la page d’accueil sont absents.')
}
await writeFile(homepagePath, template.replace('{{CHAPTER_COUNT}}', String(chapterNames.length)).replace('{{MODULE_CARDS}}', cards), 'utf8')
console.log(`Accueil synchronisé : ${chapterNames.length} chapitres et ${groups.length} modules.`)
