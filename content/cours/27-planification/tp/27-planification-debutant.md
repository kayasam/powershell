---
title: "TP débutant : tâches planifiées"
publier: true
parcours-tssr: true
parcours-pro: false
---

# L'Horloge de Zoro — mode débutant

**Environnement :** Windows de laboratoire. N'enregistrez une tâche que si vous avez les droits et un script d'essai ; sinon préparez l'action et le déclencheur sans appeler `Register-ScheduledTask`.

## Énoncé

1. Créez un script d'essai dans un dossier de laboratoire qui écrit la date dans un journal situé dans ce même dossier.
2. Préparez une action qui lance `pwsh.exe -NoProfile -NonInteractive -File <chemin complet>` et un déclencheur quotidien à 07:00.
3. Expliquez la différence entre créer une action, enregistrer une tâche et la lancer.
4. Si l'environnement le permet, enregistrez `Formation-Zoro-Test`, lancez-la manuellement, puis relevez `LastRunTime` et `LastTaskResult`.
5. Désactivez puis retirez **uniquement** `Formation-Zoro-Test` après le test.

## Indices progressifs

- `New-ScheduledTaskAction -Execute <pwsh.exe> -Argument <arguments>` et `New-ScheduledTaskTrigger -Daily -At '07:00'` préparent la tâche.
- `Register-ScheduledTask` enregistre ; `Start-ScheduledTask` exécute tout de suite, sans attendre 07:00.
- `Get-ScheduledTask -TaskName Formation-Zoro-Test | Get-ScheduledTaskInfo` donne la dernière exécution.
- Préférez le chemin complet de `pwsh.exe` et citez correctement le chemin du script s'il contient des espaces.

**Livrable :** action, déclencheur, relevé d'exécution ou explication du blocage, puis preuve du nettoyage.
