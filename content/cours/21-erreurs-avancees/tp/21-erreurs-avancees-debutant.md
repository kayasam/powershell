---
title: "TP débutant : erreurs et codes de sortie"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Le Rapport d'Incident de Chopper — mode débutant

## Énoncé

1. Comparez `Write-Error 'blessure'` et `throw 'fracture'` dans deux petits scripts : lequel arrête le traitement ?
2. Dans un `try/catch`, tentez `Get-Item` sur un chemin absent. Répétez avec `-ErrorAction Stop` : quand `catch` s'exécute-t-il ?
3. Écrivez `Test-Dossier -Dossier <chemin>` : renvoyez un objet `{ Dossier; Existe; Erreur }` même si le dossier n'existe pas.
4. Écrivez un script appelant qui termine avec `exit 0` si le dossier existe, `exit 2` sinon ; lisez `$LASTEXITCODE` après l'appel.

## Indices progressifs

- `Test-Path -LiteralPath $Dossier` teste l'existence sans lever d'erreur.
- Pour intercepter une erreur non terminante : `Get-Item -LiteralPath $Dossier -ErrorAction Stop`.
- `catch { $_.Exception.Message }` récupère le message.
- Lancez le script dans une **nouvelle** console avec `pwsh -File ...` si vous ne voulez pas que `exit` ferme votre session active.

**Livrable :** deux essais d'erreur, fonction et relevé des codes 0 et 2.
