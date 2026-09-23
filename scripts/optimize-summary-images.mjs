import { readdir, unlink } from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const imagesRoot = path.resolve(process.argv[2] || "")
const projectRoot = path.resolve(import.meta.dirname, "..")
if (!imagesRoot.startsWith(projectRoot + path.sep)) {
  throw new Error(`Dossier d’images hors du projet : ${imagesRoot}`)
}

const sheets = (await readdir(imagesRoot)).filter((name) => /^\d{2}_.+\.png$/i.test(name))
for (const name of sheets) {
  const source = path.join(imagesRoot, name)
  const destination = path.join(imagesRoot, `${path.parse(name).name.toLowerCase()}.webp`)
  await sharp(source).webp({ quality: 82, effort: 4 }).toFile(destination)
  await unlink(source)
}

console.log(`${sheets.length} fiches récapitulatives optimisées en WebP.`)
