param(
  [string]$Message,
  [switch]$PrepareOnly
)

$ErrorActionPreference = "Stop"

if ($PSVersionTable.PSVersion.Major -lt 7) {
  throw 'Ce script doit etre lance avec PowerShell 7 (pwsh.exe) pour conserver UTF-8.'
}

$sourceRoot = "C:\Users\kayaw\Nextcloud\Obsidian\CoffreSam\Formations\Powershell"
$projectRoot = "D:\Projet-git\powershell"
$staticRoot = Join-Path $projectRoot "site-content"
$stageRoot = Join-Path $projectRoot ".publication-stage"
$destinationRoot = Join-Path $projectRoot "content"

function Assert-Directory {
  param([string]$Path, [string]$Description)
  if (-not (Test-Path -LiteralPath $Path -PathType Container)) {
    throw "$Description introuvable : $Path"
  }
}

function Assert-InProject {
  param([string]$Path)
  $full = [IO.Path]::GetFullPath($Path)
  $root = [IO.Path]::GetFullPath($projectRoot)
  if (-not $full.StartsWith($root + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) {
    throw "Chemin hors projet : $full"
  }
}

function Remove-SafeDirectory {
  param([string]$Path)
  if (-not (Test-Path -LiteralPath $Path -PathType Container)) { return }
  Assert-InProject $Path
  Remove-Item -LiteralPath ([IO.Path]::GetFullPath($Path)) -Recurse -Force
}

function Mirror-Directory {
  param(
    [string]$Source,
    [string]$Destination,
    [string[]]$ExcludedDirectories = @(),
    [string[]]$ExcludedFiles = @()
  )

  Assert-InProject $Destination
  New-Item -ItemType Directory -Path $Destination -Force | Out-Null
  $arguments = @($Source, $Destination, "/MIR", "/R:2", "/W:1", "/NFL", "/NDL", "/NJH", "/NJS", "/NP")
  if ($ExcludedDirectories.Count -gt 0) {
    $arguments += "/XD"
    $arguments += $ExcludedDirectories
  }
  if ($ExcludedFiles.Count -gt 0) {
    $arguments += "/XF"
    $arguments += $ExcludedFiles
  }
  & robocopy @arguments | Out-Null
  if ($LASTEXITCODE -ge 8) { throw "La copie a échoué avec le code Robocopy $LASTEXITCODE." }
}

Write-Host ""
Write-Host "Publication de la formation PowerShell" -ForegroundColor Cyan
Write-Host "=======================================" -ForegroundColor Cyan

Assert-Directory $sourceRoot "Le dossier de la formation"
Assert-Directory $staticRoot "Le contenu statique du site"
Assert-Directory (Join-Path $projectRoot ".git") "Le dépôt Git"

Remove-SafeDirectory $stageRoot
New-Item -ItemType Directory -Path $stageRoot -Force | Out-Null
Mirror-Directory $staticRoot $stageRoot

$sourceCourses = Join-Path $sourceRoot "cours"
if (Test-Path -LiteralPath $sourceCourses -PathType Container) {
  Write-Host "1/4 - Préparation des cours publics..."
  Mirror-Directory $sourceCourses (Join-Path $stageRoot "cours") @("private", "sessions", "_archives", "solutions") @("*correction*.md", "*corrige*.md", "*.excalidraw", "*.excalidraw.md")

  $interactiveIndex = Join-Path $stageRoot 'cours/index.html'
  if (Test-Path -LiteralPath $interactiveIndex -PathType Leaf) {
    $indexDocument = [IO.File]::ReadAllText($interactiveIndex).Replace('Formation locale', 'Formation PowerShell')
    [IO.File]::WriteAllText($interactiveIndex, $indexDocument, [Text.UTF8Encoding]::new($false))
  }

  # Le fichier "dossier/dossier.md" est déjà la page d'accueil Quartz du chapitre.
  # On ajoute seulement les deux entrées explicites visibles dans l'explorateur.
  Get-ChildItem -LiteralPath (Join-Path $stageRoot "cours") -Directory | Where-Object {
    $_.Name -match '^\d{2}-'
  } | ForEach-Object {
    $slug = $_.Name
    $chapterSource = Join-Path $_.FullName "$slug.md"
    if (Test-Path -LiteralPath $chapterSource -PathType Leaf) {
      $chapterDocument = [IO.File]::ReadAllText($chapterSource)
      $chapterPath = @"

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/$slug/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/$slug/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/$slug/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/$slug/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

"@
      $frontmatter = [regex]::Match($chapterDocument, '\A---\r?\n[\s\S]*?\r?\n---\r?\n')
      if (-not $frontmatter.Success) { throw "Frontmatter du chapitre absent : $slug" }
      $chapterDocument = $chapterDocument.Insert($frontmatter.Length, $chapterPath)
      $courseDocument = [regex]::new('(?m)^title:\s*.*$').Replace($chapterDocument, 'title: "Cours"', 1)
      $chapterLanding = [regex]::new('(?m)^# .*(?:\r?\n|$)').Replace($chapterDocument, '', 1)
      [IO.File]::WriteAllText($chapterSource, $chapterLanding, [Text.UTF8Encoding]::new($false))
      [IO.File]::WriteAllText((Join-Path $_.FullName "cours.md"), $courseDocument, [Text.UTF8Encoding]::new($false))

      $interactiveUrl = "https://kayasam.github.io/powershell/cours/$slug/$slug-interactif.html"
      $interactiveDocument = @"
---
title: "Cours interactif"
---

<div class="ps-interactive-launch">
  <strong>Version interactive du chapitre</strong>
  <span>Schéma mental, défi rapide, progression et commandes à copier.</span>
  <a href="$interactiveUrl">Ouvrir en plein écran →</a>
</div>

<iframe class="ps-course-frame" src="$interactiveUrl" title="Cours PowerShell interactif" loading="eager"></iframe>
"@
      [IO.File]::WriteAllText((Join-Path $_.FullName "cours-interactif.md"), $interactiveDocument, [Text.UTF8Encoding]::new($false))
    }
  }

  # Les quiz sont reconstruits depuis une banque durable hors de content.
  & node (Join-Path $projectRoot 'scripts/generate-quizzes.mjs') $stageRoot
  if ($LASTEXITCODE -ne 0) { throw "Quiz manquants ou déséquilibrés : la publication est bloquée." }

  & node (Join-Path $projectRoot 'scripts/generate-homepage.mjs') $stageRoot
  if ($LASTEXITCODE -ne 0) { throw "Impossible de synchroniser la page d'accueil." }
}

$sourceImages = Join-Path $sourceRoot "Ressources\images"
if (Test-Path -LiteralPath $sourceImages -PathType Container) {
  Write-Host "2/4 - Copie des illustrations..."
  Mirror-Directory $sourceImages (Join-Path $stageRoot "Ressources\images")
}

$sourceMemo = Join-Path $sourceRoot "Ressources\Memo-Commandes.md"
if (Test-Path -LiteralPath $sourceMemo -PathType Leaf) {
  Copy-Item -LiteralPath $sourceMemo -Destination (Join-Path $stageRoot "memo-commandes.md") -Force
}

Get-ChildItem -LiteralPath $stageRoot -Recurse -File -Filter "*.md" | ForEach-Object {
  $document = [IO.File]::ReadAllText($_.FullName)
  if ($document -match '(?m)^publier:\s*false\s*$') {
    [IO.File]::Delete($_.FullName)
  }
}

# Les index élèves ne doivent jamais proposer un lien vers une correction absente.
Get-ChildItem -LiteralPath $stageRoot -Recurse -File -Filter "index.md" | Where-Object {
  $_.DirectoryName -match '(?i)[\\/]tp$'
} | ForEach-Object {
  $document = [IO.File]::ReadAllText($_.FullName)
  $document = [regex]::Replace($document, '(?im)^.*(?:correction|corrig[eé]).*(?:\r?\n|$)', '')
  [IO.File]::WriteAllText($_.FullName, $document, [Text.UTF8Encoding]::new($false))
}

# Les énoncés publics gardent les indices de réflexion, pas les blocs de solution.
Get-ChildItem -LiteralPath $stageRoot -Recurse -File -Filter "*.md" | Where-Object {
  $_.DirectoryName -match '(?i)[\\/]tp(?:[\\/]|$)'
} | ForEach-Object {
  $document = [IO.File]::ReadAllText($_.FullName)
  $document = [regex]::Replace($document, '(?is)<details>\s*<summary>[^<]*solution[^<]*</summary>.*?</details>\s*', '')
  [IO.File]::WriteAllText($_.FullName, $document, [Text.UTF8Encoding]::new($false))
}

# Le fil rouge public conserve les indices, mais retire les solutions détaillées.
$publicThread = Join-Path $stageRoot "cours\tp-fil-rouge"
if (Test-Path -LiteralPath $publicThread -PathType Container) {
  Get-ChildItem -LiteralPath $publicThread -File -Filter "*.md" | ForEach-Object {
    $document = [IO.File]::ReadAllText($_.FullName)
    $document = [regex]::Replace($document, '(?ims)^## Corrections formateur\s*$.*\z', '')
    $document = [regex]::Replace($document, '(?is)<details>\s*<summary>[^<]*solution[^<]*</summary>.*?</details>\s*', '')
    $document = [regex]::Replace($document, '(?ims)^## La solution complète\s*$.*\z', '')
    $document = [regex]::Replace($document, '(?im)^.*solution complète.*(?:\r?\n|$)', '')
    [IO.File]::WriteAllText($_.FullName, $document, [Text.UTF8Encoding]::new($false))
  }
}

$forbidden = Get-ChildItem -LiteralPath $stageRoot -Recurse -File | Where-Object {
  $_.Name -match '(?i)correction|corrig[eé]' -or $_.FullName -match '(?i)[\\/](sessions|private|_archives|solutions)[\\/]'
}
if ($forbidden) {
  throw "Un élément privé a été détecté dans le contenu à publier : $($forbidden[0].FullName)"
}

& node (Join-Path $projectRoot 'scripts/validate-publication.mjs') $stageRoot
if ($LASTEXITCODE -ne 0) { throw 'Controle de publication echoue : accents, solutions ou liens invalides.' }

Write-Host "3/4 - Synchronisation du contenu Quartz..."
Mirror-Directory $stageRoot $destinationRoot
Remove-SafeDirectory $stageRoot

# La forme de l'arborescence suit toujours les chapitres réels du coffre.
& node (Join-Path $projectRoot 'scripts/generate-explorer-chapters.mjs')
if ($LASTEXITCODE -ne 0) { throw "Impossible de synchroniser le thème de l'explorateur." }

$relativeHtmlLinks = Get-ChildItem -LiteralPath $destinationRoot -Recurse -File -Filter "*.md" | Where-Object {
  [IO.File]::ReadAllText($_.FullName) -match 'href="(?:\./|\.\./)[^"]+\.html(?:[?#][^"]*)?"'
}
if ($relativeHtmlLinks) {
  throw "Lien HTML relatif interdit dans Quartz : $($relativeHtmlLinks[0].FullName). Utilisez l'URL absolue terminée par .html."
}

Push-Location $projectRoot
try {
  & npx prettier content site-content quartz.config.yaml quartz/styles/custom.scss --write
  if ($LASTEXITCODE -ne 0) { throw "Échec du formatage." }

  & node quartz/bootstrap-cli.mjs build
  if ($LASTEXITCODE -ne 0) { throw "Échec du build Quartz." }

  if ($PrepareOnly) {
    Write-Host "4/4 - Préparation et build terminés sans publication." -ForegroundColor Green
    exit 0
  }

  if (-not (& git status --porcelain)) {
    Write-Host "Aucune modification à publier." -ForegroundColor Yellow
    exit 0
  }

  if ([string]::IsNullOrWhiteSpace($Message)) {
    $Message = Read-Host "Message de publication"
  }
  if ([string]::IsNullOrWhiteSpace($Message)) {
    $Message = "Mise à jour de la formation PowerShell - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
  }

  if ((Read-Host "Publier maintenant sur GitHub ? [o/N]") -notmatch '^(o|oui|y|yes)$') {
    Write-Host "Publication annulée. Les fichiers synchronisés restent disponibles localement." -ForegroundColor Yellow
    exit 0
  }

  Write-Host "4/4 - Commit et envoi vers GitHub..."
  & git add -A
  if ($LASTEXITCODE -ne 0) { throw "Impossible de préparer les modifications Git." }
  & git commit -m $Message
  if ($LASTEXITCODE -ne 0) { throw "La création du commit a échoué." }
  & git push -u origin main
  if ($LASTEXITCODE -ne 0) { throw "L'envoi vers GitHub a échoué." }

  Write-Host "Publication envoyée avec succès." -ForegroundColor Green
  Write-Host "https://kayasam.github.io/powershell/"
}
finally {
  Pop-Location
  Remove-SafeDirectory $stageRoot
}
