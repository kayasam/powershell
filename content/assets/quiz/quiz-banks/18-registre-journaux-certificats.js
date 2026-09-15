window.powerShellQuizBank = {
  id: "18-registre-journaux-certificats",
  title: "Quiz — 18. Registre, journaux et certificats",
  chapter: "18. Registre, journaux et certificats",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../18-registre-journaux-certificats/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « PSDrive » ?",
      choices: [
        "Lecteur PowerShell qui expose un fournisseur avec une navigation semblable aux dossiers",
        "Commande qui liste les lecteurs PowerShell disponibles",
        "Lecteur qui donne accès à la ruche registre de l'utilisateur courant",
        "Historique des événements enregistrés par Windows et les applications",
      ],
      answer: 0,
      explanation:
        "« PSDrive » : Lecteur PowerShell qui expose un fournisseur avec une navigation semblable aux dossiers. Les autres choix renvoient à « Get-PSDrive », « HKCU: », « Journal d'événements » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Lecteur PowerShell qui expose un fournisseur avec une navigation semblable aux dossiers » ?",
      choices: ["Get-PSDrive", "PSDrive", "HKCU:", "Journal d'événements"],
      answer: 1,
      explanation:
        "« PSDrive » : Lecteur PowerShell qui expose un fournisseur avec une navigation semblable aux dossiers. Les autres choix renvoient à « Get-PSDrive », « HKCU: », « Journal d'événements » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-PSDrive » ?",
      choices: [
        "Lecteur qui donne accès à la ruche registre de la machine",
        "Commande qui lit les propriétés d'une clé du registre",
        "Commande qui liste les lecteurs PowerShell disponibles",
        "Lecteur PowerShell qui permet d'explorer les magasins de certificats",
      ],
      answer: 2,
      explanation:
        "« Get-PSDrive » : Commande qui liste les lecteurs PowerShell disponibles. Les autres choix renvoient à « HKLM: », « Get-ItemProperty », « Cert: » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui liste les lecteurs PowerShell disponibles » ?",
      choices: ["HKLM:", "Get-ItemProperty", "Cert:", "Get-PSDrive"],
      answer: 3,
      explanation:
        "« Get-PSDrive » : Commande qui liste les lecteurs PowerShell disponibles. Les autres choix renvoient à « HKLM: », « Get-ItemProperty », « Cert: » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « HKLM: » ?",
      choices: [
        "Lecteur qui donne accès à la ruche registre de la machine",
        "Lecteur qui donne accès à la ruche registre de l'utilisateur courant",
        "Commande qui lit les événements des journaux Windows",
        "Objet associé notamment à une identité et à une clé publique",
      ],
      answer: 0,
      explanation:
        "« HKLM: » : Lecteur qui donne accès à la ruche registre de la machine. Les autres choix renvoient à « HKCU: », « Get-WinEvent », « Certificat » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Lecteur qui donne accès à la ruche registre de la machine » ?",
      choices: ["HKCU:", "HKLM:", "Get-WinEvent", "Certificat"],
      answer: 1,
      explanation:
        "« HKLM: » : Lecteur qui donne accès à la ruche registre de la machine. Les autres choix renvoient à « HKCU: », « Get-WinEvent », « Certificat » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « HKCU: » ?",
      choices: [
        "Commande qui lit les propriétés d'une clé du registre",
        "Historique des événements enregistrés par Windows et les applications",
        "Lecteur qui donne accès à la ruche registre de l'utilisateur courant",
        "Précaution indispensable avant de toucher au registre ou aux certificats",
      ],
      answer: 2,
      explanation:
        "« HKCU: » : Lecteur qui donne accès à la ruche registre de l'utilisateur courant. Les autres choix renvoient à « Get-ItemProperty », « Journal d'événements », « Lecture avant modification » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Lecteur qui donne accès à la ruche registre de l'utilisateur courant » ?",
      choices: ["Get-ItemProperty", "Journal d'événements", "Lecture avant modification", "HKCU:"],
      answer: 3,
      explanation:
        "« HKCU: » : Lecteur qui donne accès à la ruche registre de l'utilisateur courant. Les autres choix renvoient à « Get-ItemProperty », « Journal d'événements », « Lecture avant modification » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-ItemProperty » ?",
      choices: [
        "Commande qui lit les propriétés d'une clé du registre",
        "Commande qui lit les événements des journaux Windows",
        "Lecteur PowerShell qui permet d'explorer les magasins de certificats",
        "Lecteur PowerShell qui expose un fournisseur avec une navigation semblable aux dossiers",
      ],
      answer: 0,
      explanation:
        "« Get-ItemProperty » : Commande qui lit les propriétés d'une clé du registre. Les autres choix renvoient à « Get-WinEvent », « Cert: », « PSDrive » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui lit les propriétés d'une clé du registre » ?",
      choices: ["Get-WinEvent", "Get-ItemProperty", "Cert:", "PSDrive"],
      answer: 1,
      explanation:
        "« Get-ItemProperty » : Commande qui lit les propriétés d'une clé du registre. Les autres choix renvoient à « Get-WinEvent », « Cert: », « PSDrive » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-WinEvent » ?",
      choices: [
        "Historique des événements enregistrés par Windows et les applications",
        "Objet associé notamment à une identité et à une clé publique",
        "Commande qui lit les événements des journaux Windows",
        "Commande qui liste les lecteurs PowerShell disponibles",
      ],
      answer: 2,
      explanation:
        "« Get-WinEvent » : Commande qui lit les événements des journaux Windows. Les autres choix renvoient à « Journal d'événements », « Certificat », « Get-PSDrive » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Une panne est survenue cette nuit et tu veux inspecter les événements Windows pertinents. Quelle cmdlet utilises-tu ?",
      choices: ["Journal d'événements", "Certificat", "Get-PSDrive", "Get-WinEvent"],
      answer: 3,
      explanation:
        "« Get-WinEvent » : Commande qui lit les événements des journaux Windows. Les autres choix renvoient à « Journal d'événements », « Certificat », « Get-PSDrive » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Journal d'événements » ?",
      choices: [
        "Historique des événements enregistrés par Windows et les applications",
        "Lecteur PowerShell qui permet d'explorer les magasins de certificats",
        "Précaution indispensable avant de toucher au registre ou aux certificats",
        "Lecteur qui donne accès à la ruche registre de la machine",
      ],
      answer: 0,
      explanation:
        "« Journal d'événements » : Historique des événements enregistrés par Windows et les applications. Les autres choix renvoient à « Cert: », « Lecture avant modification », « HKLM: » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Historique des événements enregistrés par Windows et les applications » ?",
      choices: ["Cert:", "Journal d'événements", "Lecture avant modification", "HKLM:"],
      answer: 1,
      explanation:
        "« Journal d'événements » : Historique des événements enregistrés par Windows et les applications. Les autres choix renvoient à « Cert: », « Lecture avant modification », « HKLM: » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Cert: » ?",
      choices: [
        "Objet associé notamment à une identité et à une clé publique",
        "Lecteur PowerShell qui expose un fournisseur avec une navigation semblable aux dossiers",
        "Lecteur PowerShell qui permet d'explorer les magasins de certificats",
        "Lecteur qui donne accès à la ruche registre de l'utilisateur courant",
      ],
      answer: 2,
      explanation:
        "« Cert: » : Lecteur PowerShell qui permet d'explorer les magasins de certificats. Les autres choix renvoient à « Certificat », « PSDrive », « HKCU: » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Tu dois examiner les certificats visibles depuis PowerShell. Vers quel lecteur te diriges-tu ?",
      choices: ["Certificat", "PSDrive", "HKCU:", "Cert:"],
      answer: 3,
      explanation:
        "« Cert: » : Lecteur PowerShell qui permet d'explorer les magasins de certificats. Les autres choix renvoient à « Certificat », « PSDrive », « HKCU: » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Certificat » ?",
      choices: [
        "Objet associé notamment à une identité et à une clé publique",
        "Précaution indispensable avant de toucher au registre ou aux certificats",
        "Commande qui liste les lecteurs PowerShell disponibles",
        "Commande qui lit les propriétés d'une clé du registre",
      ],
      answer: 0,
      explanation:
        "« Certificat » : Objet associé notamment à une identité et à une clé publique. Les autres choix renvoient à « Lecture avant modification », « Get-PSDrive », « Get-ItemProperty » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Objet associé notamment à une identité et à une clé publique » ?",
      choices: ["Lecture avant modification", "Certificat", "Get-PSDrive", "Get-ItemProperty"],
      answer: 1,
      explanation:
        "« Certificat » : Objet associé notamment à une identité et à une clé publique. Les autres choix renvoient à « Lecture avant modification », « Get-PSDrive », « Get-ItemProperty » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Lecture avant modification » ?",
      choices: [
        "Lecteur PowerShell qui expose un fournisseur avec une navigation semblable aux dossiers",
        "Lecteur qui donne accès à la ruche registre de la machine",
        "Précaution indispensable avant de toucher au registre ou aux certificats",
        "Commande qui lit les événements des journaux Windows",
      ],
      answer: 2,
      explanation:
        "« Lecture avant modification » : Précaution indispensable avant de toucher au registre ou aux certificats. Les autres choix renvoient à « PSDrive », « HKLM: », « Get-WinEvent » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Précaution indispensable avant de toucher au registre ou aux certificats » ?",
      choices: ["PSDrive", "HKLM:", "Get-WinEvent", "Lecture avant modification"],
      answer: 3,
      explanation:
        "« Lecture avant modification » : Précaution indispensable avant de toucher au registre ou aux certificats. Les autres choix renvoient à « PSDrive », « HKLM: », « Get-WinEvent » ; comparez leur rôle avant de continuer.",
    },
  ],
}
