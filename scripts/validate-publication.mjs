import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve(process.argv[2] || '')
const projectRoot = path.resolve(import.meta.dirname, '..')
if (!root.startsWith(projectRoot + path.sep)) throw new Error('Validation hors du projet interdite.')

const errors = []
async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name)
    if (entry.isDirectory()) await visit(filename)
    else if (/\.(?:md|html|js|css)$/.test(entry.name)) {
      const document = await readFile(filename, 'utf8')
      const relative = path.relative(root, filename).replaceAll(path.sep, '/')
      if (/\uFFFD|SchÃ|Ã©|Ã¨|Ãª|Ã |â†’|â€™/.test(document)) errors.push(`${relative} : encodage UTF-8 abîmé`)
      if (/^cours\/tp-fil-rouge\/.*\.md$/.test(relative) && /(?:^## La solution complète|\bsolutions\/|\bsolution complète est dans)/im.test(document)) {
        errors.push(`${relative} : solution formateur visible`)
      }
      if (/\/cours-interactif\.md$/.test(relative) && !document.includes('Ouvrir en plein écran →')) {
        errors.push(`${relative} : lien plein écran absent ou abîmé`)
      }
      for (const match of document.matchAll(/href="([^"]*(?:jeu-fil-rouge|\d{2}-[^"/]+-interactif)(?:[?#][^"]*)?)"/g)) {
        if (!/\.html(?:[?#]|$)/.test(match[1])) errors.push(`${relative} : lien interactif sans .html : ${match[1]}`)
      }
    }
  }
}

await visit(root)
if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
} else {
  console.log('Publication contrôlée : UTF-8, solutions et liens interactifs conformes.')
}
