window.powerShellQuizBank = {
  id: "28-introduction-ad",
  title: "Quiz — 28. Introduction à Active Directory",
  chapter: "28. Introduction à Active Directory",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../28-introduction-ad/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Active Directory » ?",
      choices: [
        "Annuaire qui organise les identités et ressources d'un domaine Windows",
        "Périmètre d'administration partagé par des utilisateurs et ordinateurs",
        "Unité d'organisation qui regroupe des objets pour déléguer et organiser",
        "Commande qui obtient des informations sur le domaine",
      ],
      answer: 0,
      explanation:
        "« Active Directory » : Annuaire qui organise les identités et ressources d'un domaine Windows. Les autres choix renvoient à « Domaine », « OU », « Get-ADDomain » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Annuaire qui organise les identités et ressources d'un domaine Windows » ?",
      choices: ["Domaine", "Active Directory", "OU", "Get-ADDomain"],
      answer: 1,
      explanation:
        "« Active Directory » : Annuaire qui organise les identités et ressources d'un domaine Windows. Les autres choix renvoient à « Domaine », « OU », « Get-ADDomain » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Domaine » ?",
      choices: [
        "Serveur qui héberge les services d'annuaire et d'authentification du domaine",
        "Nom distinctif qui indique l'emplacement complet d'un objet dans l'annuaire",
        "Périmètre d'administration partagé par des utilisateurs et ordinateurs",
        "Commande qui recherche ou lit des comptes utilisateurs",
      ],
      answer: 2,
      explanation:
        "« Domaine » : Périmètre d'administration partagé par des utilisateurs et ordinateurs. Les autres choix renvoient à « Contrôleur de domaine », « DN », « Get-ADUser » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Périmètre d'administration partagé par des utilisateurs et ordinateurs » ?",
      choices: ["Contrôleur de domaine", "DN", "Get-ADUser", "Domaine"],
      answer: 3,
      explanation:
        "« Domaine » : Périmètre d'administration partagé par des utilisateurs et ordinateurs. Les autres choix renvoient à « Contrôleur de domaine », « DN », « Get-ADUser » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Contrôleur de domaine » ?",
      choices: [
        "Serveur qui héberge les services d'annuaire et d'authentification du domaine",
        "Unité d'organisation qui regroupe des objets pour déléguer et organiser",
        "Module PowerShell qui fournit les cmdlets AD",
        "Commande qui recherche ou lit des groupes",
      ],
      answer: 0,
      explanation:
        "« Contrôleur de domaine » : Serveur qui héberge les services d'annuaire et d'authentification du domaine. Les autres choix renvoient à « OU », « Module ActiveDirectory », « Get-ADGroup » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Serveur qui héberge les services d'annuaire et d'authentification du domaine » ?",
      choices: ["OU", "Contrôleur de domaine", "Module ActiveDirectory", "Get-ADGroup"],
      answer: 1,
      explanation:
        "« Contrôleur de domaine » : Serveur qui héberge les services d'annuaire et d'authentification du domaine. Les autres choix renvoient à « OU », « Module ActiveDirectory », « Get-ADGroup » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « OU » ?",
      choices: [
        "Nom distinctif qui indique l'emplacement complet d'un objet dans l'annuaire",
        "Commande qui obtient des informations sur le domaine",
        "Unité d'organisation qui regroupe des objets pour déléguer et organiser",
        "Domaine joignable, module disponible et permissions adaptées aux opérations demandées",
      ],
      answer: 2,
      explanation:
        "« OU » : Unité d'organisation qui regroupe des objets pour déléguer et organiser. Les autres choix renvoient à « DN », « Get-ADDomain », « Prérequis d'accès » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Tu veux organiser les comptes par service et déléguer leur gestion sans créer un nouveau domaine. Quel conteneur choisis-tu ?",
      choices: ["DN", "Get-ADDomain", "Prérequis d'accès", "OU"],
      answer: 3,
      explanation:
        "« OU » : Unité d'organisation qui regroupe des objets pour déléguer et organiser. Les autres choix renvoient à « DN », « Get-ADDomain », « Prérequis d'accès » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « DN » ?",
      choices: [
        "Nom distinctif qui indique l'emplacement complet d'un objet dans l'annuaire",
        "Module PowerShell qui fournit les cmdlets AD",
        "Commande qui recherche ou lit des comptes utilisateurs",
        "Annuaire qui organise les identités et ressources d'un domaine Windows",
      ],
      answer: 0,
      explanation:
        "« DN » : Nom distinctif qui indique l'emplacement complet d'un objet dans l'annuaire. Les autres choix renvoient à « Module ActiveDirectory », « Get-ADUser », « Active Directory » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Nom distinctif qui indique l'emplacement complet d'un objet dans l'annuaire » ?",
      choices: ["Module ActiveDirectory", "DN", "Get-ADUser", "Active Directory"],
      answer: 1,
      explanation:
        "« DN » : Nom distinctif qui indique l'emplacement complet d'un objet dans l'annuaire. Les autres choix renvoient à « Module ActiveDirectory », « Get-ADUser », « Active Directory » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Module ActiveDirectory » ?",
      choices: [
        "Commande qui obtient des informations sur le domaine",
        "Commande qui recherche ou lit des groupes",
        "Module PowerShell qui fournit les cmdlets AD",
        "Périmètre d'administration partagé par des utilisateurs et ordinateurs",
      ],
      answer: 2,
      explanation:
        "« Module ActiveDirectory » : Module PowerShell qui fournit les cmdlets AD. Les autres choix renvoient à « Get-ADDomain », « Get-ADGroup », « Domaine » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Module PowerShell qui fournit les cmdlets AD » ?",
      choices: ["Get-ADDomain", "Get-ADGroup", "Domaine", "Module ActiveDirectory"],
      answer: 3,
      explanation:
        "« Module ActiveDirectory » : Module PowerShell qui fournit les cmdlets AD. Les autres choix renvoient à « Get-ADDomain », « Get-ADGroup », « Domaine » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-ADDomain » ?",
      choices: [
        "Commande qui obtient des informations sur le domaine",
        "Commande qui recherche ou lit des comptes utilisateurs",
        "Domaine joignable, module disponible et permissions adaptées aux opérations demandées",
        "Serveur qui héberge les services d'annuaire et d'authentification du domaine",
      ],
      answer: 0,
      explanation:
        "« Get-ADDomain » : Commande qui obtient des informations sur le domaine. Les autres choix renvoient à « Get-ADUser », « Prérequis d'accès », « Contrôleur de domaine » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Avant une opération, tu dois identifier le domaine Active Directory auquel ton poste a accès. Que lances-tu ?",
      choices: ["Get-ADUser", "Get-ADDomain", "Prérequis d'accès", "Contrôleur de domaine"],
      answer: 1,
      explanation:
        "« Get-ADDomain » : Commande qui obtient des informations sur le domaine. Les autres choix renvoient à « Get-ADUser », « Prérequis d'accès », « Contrôleur de domaine » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-ADUser » ?",
      choices: [
        "Commande qui recherche ou lit des groupes",
        "Annuaire qui organise les identités et ressources d'un domaine Windows",
        "Commande qui recherche ou lit des comptes utilisateurs",
        "Unité d'organisation qui regroupe des objets pour déléguer et organiser",
      ],
      answer: 2,
      explanation:
        "« Get-ADUser » : Commande qui recherche ou lit des comptes utilisateurs. Les autres choix renvoient à « Get-ADGroup », « Active Directory », « OU » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui recherche ou lit des comptes utilisateurs » ?",
      choices: ["Get-ADGroup", "Active Directory", "OU", "Get-ADUser"],
      answer: 3,
      explanation:
        "« Get-ADUser » : Commande qui recherche ou lit des comptes utilisateurs. Les autres choix renvoient à « Get-ADGroup », « Active Directory », « OU » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-ADGroup » ?",
      choices: [
        "Commande qui recherche ou lit des groupes",
        "Domaine joignable, module disponible et permissions adaptées aux opérations demandées",
        "Périmètre d'administration partagé par des utilisateurs et ordinateurs",
        "Nom distinctif qui indique l'emplacement complet d'un objet dans l'annuaire",
      ],
      answer: 0,
      explanation:
        "« Get-ADGroup » : Commande qui recherche ou lit des groupes. Les autres choix renvoient à « Prérequis d'accès », « Domaine », « DN » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui recherche ou lit des groupes » ?",
      choices: ["Prérequis d'accès", "Get-ADGroup", "Domaine", "DN"],
      answer: 1,
      explanation:
        "« Get-ADGroup » : Commande qui recherche ou lit des groupes. Les autres choix renvoient à « Prérequis d'accès », « Domaine », « DN » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Prérequis d'accès » ?",
      choices: [
        "Annuaire qui organise les identités et ressources d'un domaine Windows",
        "Serveur qui héberge les services d'annuaire et d'authentification du domaine",
        "Domaine joignable, module disponible et permissions adaptées aux opérations demandées",
        "Module PowerShell qui fournit les cmdlets AD",
      ],
      answer: 2,
      explanation:
        "« Prérequis d'accès » : Domaine joignable, module disponible et permissions adaptées aux opérations demandées. Les autres choix renvoient à « Active Directory », « Contrôleur de domaine », « Module ActiveDirectory » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Domaine joignable, module disponible et permissions adaptées aux opérations demandées » ?",
      choices: [
        "Active Directory",
        "Contrôleur de domaine",
        "Module ActiveDirectory",
        "Prérequis d'accès",
      ],
      answer: 3,
      explanation:
        "« Prérequis d'accès » : Domaine joignable, module disponible et permissions adaptées aux opérations demandées. Les autres choix renvoient à « Active Directory », « Contrôleur de domaine », « Module ActiveDirectory » ; comparez leur rôle avant de continuer.",
    },
  ],
}
