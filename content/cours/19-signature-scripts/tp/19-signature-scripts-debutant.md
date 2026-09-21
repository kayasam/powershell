---
title: "TP débutant : politique et signature des scripts"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Le Sceau du Gouvernement Mondial — mode débutant

**Mission :** distinguer « autorisé à s'exécuter » et « signé ». Utilisez un script d'essai dans `$env:TEMP` ; ne changez pas la politique permanente du poste.

## Énoncé

1. Relevez la politique effective et les politiques par portée.
2. Créez `ordre-test.ps1` avec une ligne `Get-Date`. Vérifiez son statut de signature.
3. Expliquez ce que vaut `NotSigned` et pourquoi la politique d'exécution n'est pas une protection de sécurité.
4. Si un fichier téléchargé est bloqué par sa marque d'origine, diagnostiquez la marque avant de choisir `Unblock-File` ; ne débloquez que votre fichier d'essai.
5. Décrivez dans quel ordre on doit préparer un script, le signer et le tester après une modification.

## Indices progressifs

- `Get-ExecutionPolicy` et `Get-ExecutionPolicy -List` répondent à deux questions différentes.
- `Get-AuthenticodeSignature -FilePath $fichier` montre le statut ; `Get-Item -Stream * -Path $fichier` peut montrer `Zone.Identifier` sous Windows.
- Une signature ne tient plus si le contenu change : la signature est l'**ultima étape**.
- La création d'un certificat et la modification des magasins de confiance sont réservées à l'exercice guidé, sur un compte de laboratoire.

**Livrable :** tableau des portées, statut du script d'essai et explication écrite du cycle de signature.
