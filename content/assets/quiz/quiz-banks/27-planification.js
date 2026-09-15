window.powerShellQuizBank = {
  id: "27-planification",
  title: "Quiz — 27. Planification des tâches",
  chapter: "27. Planification des tâches",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../27-planification/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Tâche planifiée » ?",
      choices: [
        "Exécution automatique d'un programme selon un déclencheur",
        "Commande qui décrit le programme lancé par une tâche",
        "Commande qui enregistre une nouvelle tâche planifiée",
        "Commande qui retire une tâche après vérification de sa cible",
      ],
      answer: 0,
      explanation:
        "« Tâche planifiée » : Exécution automatique d'un programme selon un déclencheur. Les autres choix renvoient à « New-ScheduledTaskAction », « Register-ScheduledTask », « Unregister-ScheduledTask » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Exécution automatique d'un programme selon un déclencheur » ?",
      choices: [
        "New-ScheduledTaskAction",
        "Tâche planifiée",
        "Register-ScheduledTask",
        "Unregister-ScheduledTask",
      ],
      answer: 1,
      explanation:
        "« Tâche planifiée » : Exécution automatique d'un programme selon un déclencheur. Les autres choix renvoient à « New-ScheduledTaskAction », « Register-ScheduledTask », « Unregister-ScheduledTask » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « New-ScheduledTaskAction » ?",
      choices: [
        "Commande qui définit quand la tâche se déclenche",
        "Commande qui liste ou inspecte des tâches planifiées",
        "Commande qui décrit le programme lancé par une tâche",
        "Événement ou horaire qui décide du moment de lancement",
      ],
      answer: 2,
      explanation:
        "« New-ScheduledTaskAction » : Commande qui décrit le programme lancé par une tâche. Les autres choix renvoient à « New-ScheduledTaskTrigger », « Get-ScheduledTask », « Déclencheur » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui décrit le programme lancé par une tâche » ?",
      choices: [
        "New-ScheduledTaskTrigger",
        "Get-ScheduledTask",
        "Déclencheur",
        "New-ScheduledTaskAction",
      ],
      answer: 3,
      explanation:
        "« New-ScheduledTaskAction » : Commande qui décrit le programme lancé par une tâche. Les autres choix renvoient à « New-ScheduledTaskTrigger », « Get-ScheduledTask », « Déclencheur » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « New-ScheduledTaskTrigger » ?",
      choices: [
        "Commande qui définit quand la tâche se déclenche",
        "Commande qui enregistre une nouvelle tâche planifiée",
        "Commande qui lance une tâche existante à la demande",
        "Identité dont les droits déterminent ce que la tâche peut faire",
      ],
      answer: 0,
      explanation:
        "« New-ScheduledTaskTrigger » : Commande qui définit quand la tâche se déclenche. Les autres choix renvoient à « Register-ScheduledTask », « Start-ScheduledTask », « Compte d'exécution » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Un rapport doit s’exécuter chaque matin à heure fixe. Quel élément de tâche définis-tu ?",
      choices: [
        "Register-ScheduledTask",
        "New-ScheduledTaskTrigger",
        "Start-ScheduledTask",
        "Compte d'exécution",
      ],
      answer: 1,
      explanation:
        "« New-ScheduledTaskTrigger » : Commande qui définit quand la tâche se déclenche. Les autres choix renvoient à « Register-ScheduledTask », « Start-ScheduledTask », « Compte d'exécution » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Register-ScheduledTask » ?",
      choices: [
        "Commande qui liste ou inspecte des tâches planifiées",
        "Commande qui retire une tâche après vérification de sa cible",
        "Commande qui enregistre une nouvelle tâche planifiée",
        "Trace utile pour comprendre le succès ou l'échec d'une tâche sans console visible",
      ],
      answer: 2,
      explanation:
        "« Register-ScheduledTask » : Commande qui enregistre une nouvelle tâche planifiée. Les autres choix renvoient à « Get-ScheduledTask », « Unregister-ScheduledTask », « Journal de résultat » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui enregistre une nouvelle tâche planifiée » ?",
      choices: [
        "Get-ScheduledTask",
        "Unregister-ScheduledTask",
        "Journal de résultat",
        "Register-ScheduledTask",
      ],
      answer: 3,
      explanation:
        "« Register-ScheduledTask » : Commande qui enregistre une nouvelle tâche planifiée. Les autres choix renvoient à « Get-ScheduledTask », « Unregister-ScheduledTask », « Journal de résultat » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-ScheduledTask » ?",
      choices: [
        "Commande qui liste ou inspecte des tâches planifiées",
        "Commande qui lance une tâche existante à la demande",
        "Événement ou horaire qui décide du moment de lancement",
        "Exécution automatique d'un programme selon un déclencheur",
      ],
      answer: 0,
      explanation:
        "« Get-ScheduledTask » : Commande qui liste ou inspecte des tâches planifiées. Les autres choix renvoient à « Start-ScheduledTask », « Déclencheur », « Tâche planifiée » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Après création, tu veux vérifier qu’une tâche est bien enregistrée. Quelle commande utilises-tu ?",
      choices: ["Start-ScheduledTask", "Get-ScheduledTask", "Déclencheur", "Tâche planifiée"],
      answer: 1,
      explanation:
        "« Get-ScheduledTask » : Commande qui liste ou inspecte des tâches planifiées. Les autres choix renvoient à « Start-ScheduledTask », « Déclencheur », « Tâche planifiée » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Start-ScheduledTask » ?",
      choices: [
        "Commande qui retire une tâche après vérification de sa cible",
        "Identité dont les droits déterminent ce que la tâche peut faire",
        "Commande qui lance une tâche existante à la demande",
        "Commande qui décrit le programme lancé par une tâche",
      ],
      answer: 2,
      explanation:
        "« Start-ScheduledTask » : Commande qui lance une tâche existante à la demande. Les autres choix renvoient à « Unregister-ScheduledTask », « Compte d'exécution », « New-ScheduledTaskAction » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui lance une tâche existante à la demande » ?",
      choices: [
        "Unregister-ScheduledTask",
        "Compte d'exécution",
        "New-ScheduledTaskAction",
        "Start-ScheduledTask",
      ],
      answer: 3,
      explanation:
        "« Start-ScheduledTask » : Commande qui lance une tâche existante à la demande. Les autres choix renvoient à « Unregister-ScheduledTask », « Compte d'exécution », « New-ScheduledTaskAction » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Unregister-ScheduledTask » ?",
      choices: [
        "Commande qui retire une tâche après vérification de sa cible",
        "Événement ou horaire qui décide du moment de lancement",
        "Trace utile pour comprendre le succès ou l'échec d'une tâche sans console visible",
        "Commande qui définit quand la tâche se déclenche",
      ],
      answer: 0,
      explanation:
        "« Unregister-ScheduledTask » : Commande qui retire une tâche après vérification de sa cible. Les autres choix renvoient à « Déclencheur », « Journal de résultat », « New-ScheduledTaskTrigger » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui retire une tâche après vérification de sa cible » ?",
      choices: [
        "Déclencheur",
        "Unregister-ScheduledTask",
        "Journal de résultat",
        "New-ScheduledTaskTrigger",
      ],
      answer: 1,
      explanation:
        "« Unregister-ScheduledTask » : Commande qui retire une tâche après vérification de sa cible. Les autres choix renvoient à « Déclencheur », « Journal de résultat », « New-ScheduledTaskTrigger » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Déclencheur » ?",
      choices: [
        "Identité dont les droits déterminent ce que la tâche peut faire",
        "Exécution automatique d'un programme selon un déclencheur",
        "Événement ou horaire qui décide du moment de lancement",
        "Commande qui enregistre une nouvelle tâche planifiée",
      ],
      answer: 2,
      explanation:
        "« Déclencheur » : Événement ou horaire qui décide du moment de lancement. Les autres choix renvoient à « Compte d'exécution », « Tâche planifiée », « Register-ScheduledTask » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Événement ou horaire qui décide du moment de lancement » ?",
      choices: ["Compte d'exécution", "Tâche planifiée", "Register-ScheduledTask", "Déclencheur"],
      answer: 3,
      explanation:
        "« Déclencheur » : Événement ou horaire qui décide du moment de lancement. Les autres choix renvoient à « Compte d'exécution », « Tâche planifiée », « Register-ScheduledTask » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Compte d'exécution » ?",
      choices: [
        "Identité dont les droits déterminent ce que la tâche peut faire",
        "Trace utile pour comprendre le succès ou l'échec d'une tâche sans console visible",
        "Commande qui décrit le programme lancé par une tâche",
        "Commande qui liste ou inspecte des tâches planifiées",
      ],
      answer: 0,
      explanation:
        "« Compte d'exécution » : Identité dont les droits déterminent ce que la tâche peut faire. Les autres choix renvoient à « Journal de résultat », « New-ScheduledTaskAction », « Get-ScheduledTask » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Identité dont les droits déterminent ce que la tâche peut faire » ?",
      choices: [
        "Journal de résultat",
        "Compte d'exécution",
        "New-ScheduledTaskAction",
        "Get-ScheduledTask",
      ],
      answer: 1,
      explanation:
        "« Compte d'exécution » : Identité dont les droits déterminent ce que la tâche peut faire. Les autres choix renvoient à « Journal de résultat », « New-ScheduledTaskAction », « Get-ScheduledTask » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Journal de résultat » ?",
      choices: [
        "Exécution automatique d'un programme selon un déclencheur",
        "Commande qui définit quand la tâche se déclenche",
        "Trace utile pour comprendre le succès ou l'échec d'une tâche sans console visible",
        "Commande qui lance une tâche existante à la demande",
      ],
      answer: 2,
      explanation:
        "« Journal de résultat » : Trace utile pour comprendre le succès ou l'échec d'une tâche sans console visible. Les autres choix renvoient à « Tâche planifiée », « New-ScheduledTaskTrigger », « Start-ScheduledTask » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Trace utile pour comprendre le succès ou l'échec d'une tâche sans console visible » ?",
      choices: [
        "Tâche planifiée",
        "New-ScheduledTaskTrigger",
        "Start-ScheduledTask",
        "Journal de résultat",
      ],
      answer: 3,
      explanation:
        "« Journal de résultat » : Trace utile pour comprendre le succès ou l'échec d'une tâche sans console visible. Les autres choix renvoient à « Tâche planifiée », « New-ScheduledTaskTrigger », « Start-ScheduledTask » ; comparez leur rôle avant de continuer.",
    },
  ],
}
