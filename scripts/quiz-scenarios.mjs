// Deux situations réellement contextualisées par chapitre. La banque de notions
// reste la source des choix et des explications ; ce fichier survit à chaque build.
export const scenarios = {
  '01-installation-et-environnement': [
    ['$PSVersionTable', 'Sur un poste inconnu, tu dois savoir quelle édition et quelle version de PowerShell sont ouvertes. Que consultes-tu ?'],
    ['RemoteSigned', 'Une élève veut exécuter ses scripts locaux sans autoriser sans contrôle ceux téléchargés. Quelle politique choisir ?'],
  ],
  '02-cmdlets': [
    ['Get-Command', 'Tu ne connais pas le nom exact de la commande pour gérer les services. Par quoi commences-tu ta recherche ?'],
    ['Get-Help', 'Tu as trouvé une cmdlet, mais tu veux ses paramètres et des exemples fiables. Quelle commande utilises-tu ?'],
  ],
  '03-objets': [
    ['Get-Member', 'Après Get-Process, tu veux découvrir les propriétés et méthodes des objets renvoyés. Quel outil utilises-tu ?'],
    ['Select-Object', 'Un rapport ne doit afficher que Name et Id parmi toutes les propriétés d’un processus. Quelle cmdlet choisis-tu ?'],
  ],
  '04-completion': [
    ['Complétion des paramètres', 'Tu connais la cmdlet mais hésites sur l’écriture de son paramètre. Quelle aide au clavier est adaptée ?'],
    ['Complétion des chemins', 'Tu dois saisir un long chemin de dossier sans faute de frappe. Quelle aide utilises-tu ?'],
  ],
  '05-alias': [
    ['Get-Alias', 'Un ancien script utilise gci et tu veux vérifier la cmdlet réelle derrière ce raccourci. Que lances-tu ?'],
    ['Script lisible', 'Tu partages un script avec une équipe et hésites entre gci et Get-ChildItem. Quel principe doit guider ton choix ?'],
  ],
  '06-historique': [
    ['Ctrl+R', 'Tu as tapé une longue commande hier dans le même terminal et veux la retrouver par quelques caractères. Quel raccourci choisis-tu ?'],
    ['Information sensible', 'Avant de rappeler une ancienne commande contenant un mot de passe, à quel risque dois-tu penser ?'],
  ],
  '07-variables': [
    ['Hashtable', 'Tu dois mémoriser pour chaque agent son nom et son rôle sous forme de paires clé–valeur. Quelle structure convient ?'],
    ['$env:', 'Un script doit lire un chemin défini dans les variables d’environnement du poste. Quel préfixe emploies-tu ?'],
  ],
  '08-formatage': [
    ['Select-Object', 'Tu dois exporter des objets avec seulement trois propriétés, pas simplement changer leur affichage. Quelle cmdlet utilises-tu ?'],
    ['Formatage en fin de pipeline', 'Tu veux encore filtrer des objets après une commande : à quel moment places-tu Format-Table ?'],
  ],
  '09-pipeline': [
    ['Where-Object', 'La Marine cherche uniquement les services arrêtés parmi tous les services retournés. Quelle étape du pipeline filtre ?'],
    ['Measure-Object', 'Tu as filtré des fichiers et veux compter combien correspondent au critère. Quelle cmdlet ajoutes-tu ?'],
  ],
  '10-conditions': [
    ['Test-Path', 'Avant de lire une archive, le script doit vérifier que son fichier existe. Quelle commande utiliser ?'],
    ['switch', 'Une alerte peut avoir quatre niveaux distincts et chaque niveau déclenche une action différente. Quelle construction est adaptée ?'],
  ],
  '11-boucles': [
    ['foreach', 'Tu connais déjà la liste de cinq agents et dois appliquer la même action à chacun. Quelle boucle choisir ?'],
    ['break', 'Pendant une recherche répétée, tu trouves enfin le bon élément et veux arrêter immédiatement la boucle. Que fais-tu ?'],
  ],
  '12-wmi-et-cim': [
    ['Get-CimInstance', 'Un inventaire doit récupérer des informations système depuis une classe CIM. Quelle cmdlet lance la requête ?'],
    ['Win32_OperatingSystem', 'Tu dois relever la version du système d’exploitation dans CIM. Quelle classe interroges-tu ?'],
  ],
  '13-fonctions': [
    ['param', 'Une fonction doit accepter un nom d’agent fourni par l’utilisateur. Quel bloc déclares-tu au début ?'],
    ['Réutilisation', 'Le même calcul figure dans trois scripts et chaque correction est répétée trois fois. Quel objectif motive sa mise en fonction ?'],
  ],
  '14-classes-dotnet': [
    ['[guid]::NewGuid()', 'Chaque dossier d’archive doit recevoir un identifiant unique. Quel appel .NET convient ?'],
    ['[System.IO.Path]', 'Tu dois combiner des morceaux de chemin proprement plutôt que concaténer des séparateurs à la main. Quelle classe emploies-tu ?'],
  ],
  '15-fichiers-et-dossiers': [
    ['Test-Path', 'Avant de copier un rapport, tu dois vérifier la présence exacte du fichier source. Que lances-tu ?'],
    ['-LiteralPath', 'Un nom de fichier contient des crochets que PowerShell pourrait interpréter comme un motif. Quel paramètre protège ce nom exact ?'],
  ],
  '16-lire-et-ecrire': [
    ['Add-Content', 'Un journal existe déjà et tu dois lui ajouter une nouvelle ligne sans effacer les précédentes. Quelle cmdlet choisir ?'],
    ['-Encoding', 'Un fichier avec accents sera lu sur plusieurs machines : quel paramètre te permet de préciser UTF-8 à l’écriture ?'],
  ],
  '17-export-import': [
    ['Export-Csv', 'Un collègue veut ouvrir la liste des agents dans un tableur. Quelle cmdlet exporte les objets dans ce format ?'],
    ['ConvertFrom-Json', 'Une API renvoie une chaîne JSON et tu dois retrouver des propriétés manipulables dans PowerShell. Que fais-tu ?'],
  ],
  '18-registre-journaux-certificats': [
    ['Get-WinEvent', 'Une panne est survenue cette nuit et tu veux inspecter les événements Windows pertinents. Quelle cmdlet utilises-tu ?'],
    ['Cert:', 'Tu dois examiner les certificats visibles depuis PowerShell. Vers quel lecteur te diriges-tu ?'],
  ],
  '19-signature-scripts': [
    ['Get-AuthenticodeSignature', 'Avant d’exécuter un script transmis par un tiers, tu veux examiner l’état de sa signature. Que lances-tu ?'],
    ['Unblock-File', 'Un fichier téléchargé est bloqué malgré un contrôle de provenance satisfaisant. Quelle commande retire sa marque de téléchargement ?'],
  ],
  '20-gestion-des-erreurs': [
    ['-ErrorAction Stop', 'Une erreur non terminante doit déclencher ton bloc catch pour éviter une suite dangereuse. Quel paramètre ajoutes-tu ?'],
    ['finally', 'Que le traitement réussisse ou échoue, une ressource ouverte doit être fermée. Dans quel bloc places-tu ce nettoyage ?'],
  ],
  '21-erreurs-avancees': [
    ['$LASTEXITCODE', 'Un outil externe vient de finir : tu dois lire son code de sortie avant de décider si le script continue. Quelle variable consultes-tu ?'],
    ['Write-Verbose', 'Tu veux afficher des détails de diagnostic seulement quand l’utilisateur active le mode verbeux. Quelle sortie utilises-tu ?'],
  ],
  '22-parametres-scripts': [
    ['ValidateSet', 'Un paramètre ne doit accepter que Marine, CipherPol ou Pirate. Quelle validation déclares-tu ?'],
    ['-WhatIf', 'Un script va modifier des comptes et tu veux visualiser ses actions sans les exécuter. Quel mécanisme actives-tu ?'],
  ],
  '23-modules': [
    ['Export-ModuleMember', 'Ton module contient des fonctions internes et une seule fonction doit être publique. Quelle commande contrôle cette exposition ?'],
    ['Import-Module', 'Un module existe déjà sur le poste mais ses commandes ne sont pas chargées dans la session. Que fais-tu ?'],
  ],
  '24-rsat-et-gallery': [
    ['RSAT', 'Tu dois gérer Active Directory depuis un poste d’administration Windows sans te connecter directement au serveur. Quel prérequis installes-tu ?'],
    ['Get-Command -Module', 'Un module vient d’être installé et tu veux voir exactement les commandes qu’il propose. Que lances-tu ?'],
  ],
  '25-profils': [
    ['$PROFILE', 'Tu veux savoir quel fichier de démarrage est utilisé par ta session PowerShell actuelle. Quelle variable consultes-tu ?'],
    ['Test-Path $PROFILE', 'Avant de modifier ton profil, tu dois savoir si son fichier existe déjà. Que lances-tu ?'],
  ],
  '26-regex': [
    ['^', 'Tu veux qu’un motif ne corresponde qu’au début d’une ligne d’alerte. Quel ancrage utilises-tu ?'],
    ['Select-String', 'Tu dois rechercher une expression dans des centaines de lignes de journal. Quelle cmdlet choisis-tu ?'],
  ],
  '27-planification': [
    ['New-ScheduledTaskTrigger', 'Un rapport doit s’exécuter chaque matin à heure fixe. Quel élément de tâche définis-tu ?'],
    ['Get-ScheduledTask', 'Après création, tu veux vérifier qu’une tâche est bien enregistrée. Quelle commande utilises-tu ?'],
  ],
  '28-introduction-ad': [
    ['OU', 'Tu veux organiser les comptes par service et déléguer leur gestion sans créer un nouveau domaine. Quel conteneur choisis-tu ?'],
    ['Get-ADDomain', 'Avant une opération, tu dois identifier le domaine Active Directory auquel ton poste a accès. Que lances-tu ?'],
  ],
  '29-utilisateurs-ad': [
    ['Disable-ADAccount', 'Un agent quitte l’équipe ; son compte doit être bloqué immédiatement sans être supprimé. Quelle cmdlet choisis-tu ?'],
    ['-Properties', 'Get-ADUser ne renvoie pas un attribut dont tu as besoin pour le rapport. Quel paramètre demandes-tu ?'],
  ],
  '30-groupes-ad': [
    ['Add-ADGroupMember', 'Un agent reçoit une nouvelle responsabilité et doit rejoindre un groupe existant. Quelle cmdlet utilises-tu ?'],
    ['Get-ADGroupMember', 'Avant de modifier les droits, tu veux vérifier qui appartient déjà au groupe. Que lances-tu ?'],
  ],
  '31-recherche-et-rapports': [
    ['-SearchBase', 'Ton rapport doit se limiter aux comptes d’une OU précise et ignorer le reste du domaine. Quel paramètre ajoutes-tu ?'],
    ['Export-Csv', 'Le résultat trié doit être transmis à un collègue qui travaille dans un tableur. Quelle cmdlet termine le pipeline ?'],
  ],
  '32-interfaces-graphiques': [
    ['Add_Click', 'Quand l’utilisateur appuie sur un bouton, ton interface doit lancer une vérification. Quel branchement d’événement utilises-tu ?'],
    ['ShowDialog()', 'La fenêtre est construite, mais rien ne s’affiche encore à l’écran. Quelle méthode l’ouvre ?'],
  ],
}
