import { copyFile, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises"
import path from "node:path"

const sourceRoot = path.resolve(process.argv[2] || "")
const stageRoot = path.resolve(process.argv[3] || "")
const projectRoot = path.resolve(import.meta.dirname, "..")
if (!stageRoot.startsWith(projectRoot + path.sep)) {
  throw new Error(`Dossier de préparation hors du projet : ${stageRoot}`)
}

const proceduresRoot = path.join(sourceRoot, "procedures")
const outputRoot = path.join(stageRoot, "tp-final-active-directory")
const resourcesRoot = path.join(outputRoot, "ressources")
const publicImagesRoot = path.join(stageRoot, "Ressources", "images")

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

async function markdownFiles(directory) {
  return (await readdir(directory, { withFileTypes: true }))
    .filter(
      (entry) => entry.isFile() && entry.name.endsWith(".md") && !entry.name.includes("excalidraw"),
    )
    .map((entry) => path.join(directory, entry.name))
}

const selected = []
for (const filename of await markdownFiles(path.join(proceduresRoot, "TP"))) {
  const basename = path.basename(filename, ".md")
  const match = basename.match(/^([0-3]{2})\.TP-(Debutant|Avance)-(.+)$/i)
  const setupMatch = basename.match(/^00\.(\d)-(.+)$/i)
  if (!match && !setupMatch) continue
  const destination = setupMatch
    ? setupMatch[1] === "0"
      ? "demarrer-ici.md"
      : `preparation/0${setupMatch[1]}-${slugify(setupMatch[2])}.md`
    : `${match[3].toLowerCase()}/${match[2].toLowerCase()}.md`
  selected.push({ filename, destination })
}

for (const [folder, section] of [
  ["01-AD", "ad"],
  ["02-DFS", "dfs"],
  ["03-GPO", "gpo"],
]) {
  for (const filename of await markdownFiles(path.join(proceduresRoot, folder, "Manuel"))) {
    const basename = path.basename(filename, ".md")
    const destination = `${section}/guide/${basename === "00-Index" ? "index" : slugify(basename)}.md`
    selected.push({ filename, destination })
  }
}

const byBasename = new Map()
for (const item of selected) {
  const key = slugify(path.basename(item.filename, ".md"))
  const values = byBasename.get(key) ?? []
  values.push(item)
  byBasename.set(key, values)
}

const indexAliases = new Map([
  ["01-ad-arborescence-manuel", "ad/guide/index.md"],
  ["02-dfs-deploiement-procedure", "dfs/guide/index.md"],
  ["03-gpo-home-procedure", "gpo/guide/index.md"],
  ["guide-deploiement-fournil", "index.md"],
])
const forbiddenReferences = [
  "Explication-Script-",
  "01-AD-Arborescence.ps1",
  "02-DFS-Deploiement.ps1",
  "03-GPO-Home.ps1",
  "00-Deploiement-Complet.ps1",
  "correction de ce TP",
  "scripts/ du TP",
]

function resolveTarget(sourceFile, target) {
  const key = slugify(path.basename(target.replaceAll("\\", "/")))
  if (indexAliases.has(key)) return indexAliases.get(key)
  const candidates = byBasename.get(key) ?? []
  if (candidates.length === 1) return candidates[0].destination
  if (candidates.length > 1) {
    const sameDirectory = candidates.find(
      (item) => path.dirname(item.filename) === path.dirname(sourceFile),
    )
    if (sameDirectory) return sameDirectory.destination
  }
  return null
}

function titleOf(document, fallback) {
  return document.match(/^#\s+(.+)$/m)?.[1].trim() ?? fallback
}

function escapeTitle(title) {
  return title.replaceAll('"', '\\"')
}

await rm(outputRoot, { recursive: true, force: true })
await mkdir(resourcesRoot, { recursive: true })
await mkdir(publicImagesRoot, { recursive: true })

const unresolved = []
for (const item of selected) {
  let document = await readFile(item.filename, "utf8")
  document = document
    .split(/\r?\n/)
    .filter((line) => !forbiddenReferences.some((reference) => line.includes(reference)))
    .join("\n")

  if (path.basename(item.filename, ".md") === "00.5-Poste-de-Travail") {
    document = document.replace(
      /## B7 — Déposer les fichiers du TP[\s\S]*?\n---\n\n# ÉTAPE C/,
      `## B7 — Télécharger les fichiers nécessaires au TP

> 🖥️ **SUR DC01** — terminal VSCode, en administrateur

\`\`\`powershell
New-Item -ItemType Directory -Path "C:\\Deploy" -Force | Out-Null
$baseUrl = "https://kayasam.github.io/powershell/tp-final-active-directory/ressources"

Invoke-WebRequest "$baseUrl/orga-fournil.csv" -OutFile "C:\\Deploy\\orga-fournil.csv"
Invoke-WebRequest "$baseUrl/utilisateurs-fournil.csv" -OutFile "C:\\Deploy\\utilisateurs-fournil.csv"
Invoke-WebRequest "$baseUrl/set-networklocation.ps1" -OutFile "C:\\Deploy\\Set-NetworkLocation.ps1"

Get-ChildItem C:\\Deploy | Select-Object Name, Length
\`\`\`

Ces trois fichiers suffisent pour réaliser les parcours guidé et avancé publiés sur ce site.

---

# ÉTAPE C`,
    )
  }

  const title = titleOf(document, path.basename(item.filename, ".md"))
  document = document.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "")
  document = document.replace(/^#\s+.+(?:\r?\n|$)/m, "")
  document = document.replace(
    /!\[\[([^\]|]+\.(?:svg|png|jpe?g|webp))(?:\|[^\]]+)?\]\]/gi,
    (_match, image) => {
      const publicName = path.basename(image).toLowerCase()
      return `![${path.parse(image).name}](https://kayasam.github.io/powershell/ressources/images/${publicName})`
    },
  )
  document = document.replace(
    /\[\[([^\]|]+)(\\?\|([^\]]+))?\]\]/g,
    (_match, target, _aliasPart, alias) => {
      if (/\.(?:svg|png|jpe?g|webp)$/i.test(target)) {
        const publicName = path.basename(target).toLowerCase()
        return `[${alias || path.parse(target).name}](https://kayasam.github.io/powershell/ressources/images/${publicName})`
      }
      const destination = resolveTarget(item.filename, target)
      if (!destination) {
        unresolved.push(`${path.basename(item.filename)} -> ${target}`)
        return alias || target
      }
      const publicTarget = destination.replace(/\.md$/, "")
      return `[[tp-final-active-directory/${publicTarget}\\|${alias || titleOfDestination(destination)}]]`
    },
  )
  const aliases =
    item.destination === "demarrer-ici.md"
      ? "\naliases:\n  - /tp-final-active-directory/prerequis"
      : ""
  const output = `---\ntitle: "${escapeTitle(title)}"${aliases}\n---\n\n${document.trim()}\n`
  const destination = path.join(outputRoot, item.destination)
  await mkdir(path.dirname(destination), { recursive: true })
  await writeFile(destination, output, "utf8")
}

function titleOfDestination(destination) {
  if (destination === "index.md") return "Accueil du TP final"
  const item = selected.find((candidate) => candidate.destination === destination)
  return item ? path.basename(item.filename, ".md") : destination
}

if (unresolved.length) {
  throw new Error(`Liens non résolus dans le TP final :\n${unresolved.join("\n")}`)
}

const svgFiles = []
async function collectSvg(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name)
    if (entry.isDirectory()) await collectSvg(filename)
    else if (entry.name.toLowerCase().endsWith(".svg")) svgFiles.push(filename)
  }
}
await collectSvg(proceduresRoot)
await collectSvg(path.join(sourceRoot, "Ressources", "images"))
const uniqueSvgFiles = [...new Map(svgFiles.map((filename) => [path.basename(filename).toLowerCase(), filename])).values()]
for (const filename of uniqueSvgFiles) {
  await copyFile(filename, path.join(publicImagesRoot, path.basename(filename).toLowerCase()))
}

for (const name of ["orga-fournil.csv", "utilisateurs-fournil.csv", "Set-NetworkLocation.ps1"]) {
  await copyFile(
    path.join(sourceRoot, "scripts", name),
    path.join(resourcesRoot, name.toLowerCase()),
  )
}

const landing = `---
title: "TP final Active Directory"
description: "Déployer l’infrastructure Active Directory, DFS et GPO du Fournil."
---

<section class="ps-final-lab-hero">
  <span>Projet de synthèse</span>
  <h2>Le Fournil — TP final Active Directory</h2>
  <p>Partez d’un poste Windows vide, montez deux serveurs, créez le domaine, puis réalisez les travaux Active Directory, DFS et GPO.</p>
  <a href="https://kayasam.github.io/powershell/tp-final-active-directory/demarrer-ici">Démarrer le lab depuis zéro →</a>
</section>

## Préparer le lab

1. [Créer les deux machines virtuelles](https://kayasam.github.io/powershell/tp-final-active-directory/preparation/01-installer-les-vm)
2. [Préparer les deux serveurs](https://kayasam.github.io/powershell/tp-final-active-directory/preparation/02-preparer-les-serveurs)
3. [Installer AD DS et promouvoir DC01](https://kayasam.github.io/powershell/tp-final-active-directory/preparation/03-promouvoir-dc01)
4. [Joindre DC2 et le promouvoir](https://kayasam.github.io/powershell/tp-final-active-directory/preparation/04-joindre-dc2)
5. [Brancher le poste de travail](https://kayasam.github.io/powershell/tp-final-active-directory/preparation/05-poste-de-travail)

## Choisir son parcours

<div class="ps-final-paths">
  <div class="ps-final-path"><strong>1 · Active Directory</strong><a href="https://kayasam.github.io/powershell/tp-final-active-directory/ad/debutant">Parcours guidé</a><a href="https://kayasam.github.io/powershell/tp-final-active-directory/ad/avance">Parcours avancé</a></div>
  <div class="ps-final-path"><strong>2 · DFS et réplication</strong><a href="https://kayasam.github.io/powershell/tp-final-active-directory/dfs/debutant">Parcours guidé</a><a href="https://kayasam.github.io/powershell/tp-final-active-directory/dfs/avance">Parcours avancé</a></div>
  <div class="ps-final-path"><strong>3 · Stratégie de groupe</strong><a href="https://kayasam.github.io/powershell/tp-final-active-directory/gpo/debutant">Parcours guidé</a><a href="https://kayasam.github.io/powershell/tp-final-active-directory/gpo/avance">Parcours avancé</a></div>
</div>

## Ressources fournies

- <a href="https://kayasam.github.io/powershell/tp-final-active-directory/ressources/orga-fournil.csv" download>Télécharger la structure organisationnelle (CSV)</a>
- <a href="https://kayasam.github.io/powershell/tp-final-active-directory/ressources/utilisateurs-fournil.csv" download>Télécharger les utilisateurs du Fournil (CSV)</a>
- <a href="https://kayasam.github.io/powershell/tp-final-active-directory/ressources/set-networklocation.ps1" download>Télécharger le script de connexion fourni</a>

Les corrections détaillées et les scripts de déploiement complets restent dans l’espace formateur.
`
await writeFile(path.join(outputRoot, "index.md"), landing, "utf8")
console.log(
  `${selected.length} pages et ${uniqueSvgFiles.length} schémas synchronisés pour le TP final Active Directory.`,
)
