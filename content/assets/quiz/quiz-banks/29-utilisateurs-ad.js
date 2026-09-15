window.powerShellQuizBank = {
  id: "29-utilisateurs-ad",
  title: "Quiz — 29. Utilisateurs Active Directory",
  chapter: "29. Utilisateurs Active Directory",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../29-utilisateurs-ad/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-ADUser » ?",
      choices: [
        "Commande qui lit un ou plusieurs comptes utilisateur AD",
        "Commande qui crée un compte utilisateur AD",
        "Commande qui réactive un compte désactivé",
        "Commande qui supprime un compte et exige une cible vérifiée",
      ],
      answer: 0,
      explanation:
        "« Get-ADUser » : Commande qui lit un ou plusieurs comptes utilisateur AD. Les autres choix renvoient à « New-ADUser », « Enable-ADAccount », « Remove-ADUser » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui lit un ou plusieurs comptes utilisateur AD » ?",
      choices: ["New-ADUser", "Get-ADUser", "Enable-ADAccount", "Remove-ADUser"],
      answer: 1,
      explanation:
        "« Get-ADUser » : Commande qui lit un ou plusieurs comptes utilisateur AD. Les autres choix renvoient à « New-ADUser », « Enable-ADAccount », « Remove-ADUser » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « New-ADUser » ?",
      choices: [
        "Commande qui modifie les attributs d'un utilisateur",
        "Commande qui désactive un compte sans le supprimer",
        "Commande qui crée un compte utilisateur AD",
        "Paramètre qui désigne l'objet AD précis à traiter",
      ],
      answer: 2,
      explanation:
        "« New-ADUser » : Commande qui crée un compte utilisateur AD. Les autres choix renvoient à « Set-ADUser », « Disable-ADAccount », « -Identity » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui crée un compte utilisateur AD » ?",
      choices: ["Set-ADUser", "Disable-ADAccount", "-Identity", "New-ADUser"],
      answer: 3,
      explanation:
        "« New-ADUser » : Commande qui crée un compte utilisateur AD. Les autres choix renvoient à « Set-ADUser », « Disable-ADAccount », « -Identity » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Set-ADUser » ?",
      choices: [
        "Commande qui modifie les attributs d'un utilisateur",
        "Commande qui réactive un compte désactivé",
        "Commande qui change ou réinitialise un mot de passe AD",
        "Paramètre qui demande des attributs supplémentaires lors de la lecture",
      ],
      answer: 0,
      explanation:
        "« Set-ADUser » : Commande qui modifie les attributs d'un utilisateur. Les autres choix renvoient à « Enable-ADAccount », « Set-ADAccountPassword », « -Properties » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui modifie les attributs d'un utilisateur » ?",
      choices: ["Enable-ADAccount", "Set-ADUser", "Set-ADAccountPassword", "-Properties"],
      answer: 1,
      explanation:
        "« Set-ADUser » : Commande qui modifie les attributs d'un utilisateur. Les autres choix renvoient à « Enable-ADAccount », « Set-ADAccountPassword », « -Properties » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Enable-ADAccount » ?",
      choices: [
        "Commande qui désactive un compte sans le supprimer",
        "Commande qui supprime un compte et exige une cible vérifiée",
        "Commande qui réactive un compte désactivé",
        "Identifiant de connexion historique d'un compte dans le domaine",
      ],
      answer: 2,
      explanation:
        "« Enable-ADAccount » : Commande qui réactive un compte désactivé. Les autres choix renvoient à « Disable-ADAccount », « Remove-ADUser », « SamAccountName » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui réactive un compte désactivé » ?",
      choices: ["Disable-ADAccount", "Remove-ADUser", "SamAccountName", "Enable-ADAccount"],
      answer: 3,
      explanation:
        "« Enable-ADAccount » : Commande qui réactive un compte désactivé. Les autres choix renvoient à « Disable-ADAccount », « Remove-ADUser », « SamAccountName » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Disable-ADAccount » ?",
      choices: [
        "Commande qui désactive un compte sans le supprimer",
        "Commande qui change ou réinitialise un mot de passe AD",
        "Paramètre qui désigne l'objet AD précis à traiter",
        "Commande qui lit un ou plusieurs comptes utilisateur AD",
      ],
      answer: 0,
      explanation:
        "« Disable-ADAccount » : Commande qui désactive un compte sans le supprimer. Les autres choix renvoient à « Set-ADAccountPassword », « -Identity », « Get-ADUser » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Un agent quitte l’équipe ; son compte doit être bloqué immédiatement sans être supprimé. Quelle cmdlet choisis-tu ?",
      choices: ["Set-ADAccountPassword", "Disable-ADAccount", "-Identity", "Get-ADUser"],
      answer: 1,
      explanation:
        "« Disable-ADAccount » : Commande qui désactive un compte sans le supprimer. Les autres choix renvoient à « Set-ADAccountPassword », « -Identity », « Get-ADUser » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Set-ADAccountPassword » ?",
      choices: [
        "Commande qui supprime un compte et exige une cible vérifiée",
        "Paramètre qui demande des attributs supplémentaires lors de la lecture",
        "Commande qui change ou réinitialise un mot de passe AD",
        "Commande qui crée un compte utilisateur AD",
      ],
      answer: 2,
      explanation:
        "« Set-ADAccountPassword » : Commande qui change ou réinitialise un mot de passe AD. Les autres choix renvoient à « Remove-ADUser », « -Properties », « New-ADUser » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui change ou réinitialise un mot de passe AD » ?",
      choices: ["Remove-ADUser", "-Properties", "New-ADUser", "Set-ADAccountPassword"],
      answer: 3,
      explanation:
        "« Set-ADAccountPassword » : Commande qui change ou réinitialise un mot de passe AD. Les autres choix renvoient à « Remove-ADUser », « -Properties », « New-ADUser » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Remove-ADUser » ?",
      choices: [
        "Commande qui supprime un compte et exige une cible vérifiée",
        "Paramètre qui désigne l'objet AD précis à traiter",
        "Identifiant de connexion historique d'un compte dans le domaine",
        "Commande qui modifie les attributs d'un utilisateur",
      ],
      answer: 0,
      explanation:
        "« Remove-ADUser » : Commande qui supprime un compte et exige une cible vérifiée. Les autres choix renvoient à « -Identity », « SamAccountName », « Set-ADUser » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui supprime un compte et exige une cible vérifiée » ?",
      choices: ["-Identity", "Remove-ADUser", "SamAccountName", "Set-ADUser"],
      answer: 1,
      explanation:
        "« Remove-ADUser » : Commande qui supprime un compte et exige une cible vérifiée. Les autres choix renvoient à « -Identity », « SamAccountName », « Set-ADUser » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « -Identity » ?",
      choices: [
        "Paramètre qui demande des attributs supplémentaires lors de la lecture",
        "Commande qui lit un ou plusieurs comptes utilisateur AD",
        "Paramètre qui désigne l'objet AD précis à traiter",
        "Commande qui réactive un compte désactivé",
      ],
      answer: 2,
      explanation:
        "« -Identity » : Paramètre qui désigne l'objet AD précis à traiter. Les autres choix renvoient à « -Properties », « Get-ADUser », « Enable-ADAccount » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Paramètre qui désigne l'objet AD précis à traiter » ?",
      choices: ["-Properties", "Get-ADUser", "Enable-ADAccount", "-Identity"],
      answer: 3,
      explanation:
        "« -Identity » : Paramètre qui désigne l'objet AD précis à traiter. Les autres choix renvoient à « -Properties », « Get-ADUser », « Enable-ADAccount » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « -Properties » ?",
      choices: [
        "Paramètre qui demande des attributs supplémentaires lors de la lecture",
        "Identifiant de connexion historique d'un compte dans le domaine",
        "Commande qui crée un compte utilisateur AD",
        "Commande qui désactive un compte sans le supprimer",
      ],
      answer: 0,
      explanation:
        "« -Properties » : Paramètre qui demande des attributs supplémentaires lors de la lecture. Les autres choix renvoient à « SamAccountName », « New-ADUser », « Disable-ADAccount » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Get-ADUser ne renvoie pas un attribut dont tu as besoin pour le rapport. Quel paramètre demandes-tu ?",
      choices: ["SamAccountName", "-Properties", "New-ADUser", "Disable-ADAccount"],
      answer: 1,
      explanation:
        "« -Properties » : Paramètre qui demande des attributs supplémentaires lors de la lecture. Les autres choix renvoient à « SamAccountName », « New-ADUser », « Disable-ADAccount » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « SamAccountName » ?",
      choices: [
        "Commande qui lit un ou plusieurs comptes utilisateur AD",
        "Commande qui modifie les attributs d'un utilisateur",
        "Identifiant de connexion historique d'un compte dans le domaine",
        "Commande qui change ou réinitialise un mot de passe AD",
      ],
      answer: 2,
      explanation:
        "« SamAccountName » : Identifiant de connexion historique d'un compte dans le domaine. Les autres choix renvoient à « Get-ADUser », « Set-ADUser », « Set-ADAccountPassword » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Identifiant de connexion historique d'un compte dans le domaine » ?",
      choices: ["Get-ADUser", "Set-ADUser", "Set-ADAccountPassword", "SamAccountName"],
      answer: 3,
      explanation:
        "« SamAccountName » : Identifiant de connexion historique d'un compte dans le domaine. Les autres choix renvoient à « Get-ADUser », « Set-ADUser », « Set-ADAccountPassword » ; comparez leur rôle avant de continuer.",
    },
  ],
}
