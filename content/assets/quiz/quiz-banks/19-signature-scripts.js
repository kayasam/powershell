window.powerShellQuizBank = {
  id: "19-signature-scripts",
  title: "Quiz — 19. Sécurité et signature des scripts",
  chapter: "19. Sécurité et signature des scripts",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../19-signature-scripts/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-ExecutionPolicy » ?",
      choices: [
        "Commande qui affiche la politique d'exécution effective",
        "Commande qui change une politique d'exécution dans une portée choisie",
        "Politique qui exige une signature pour tous les scripts",
        "Commande qui appose une signature Authenticode sur un script",
      ],
      answer: 0,
      explanation:
        "« Get-ExecutionPolicy » : Commande qui affiche la politique d'exécution effective. Les autres choix renvoient à « Set-ExecutionPolicy », « AllSigned », « Set-AuthenticodeSignature » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui affiche la politique d'exécution effective » ?",
      choices: [
        "Set-ExecutionPolicy",
        "Get-ExecutionPolicy",
        "AllSigned",
        "Set-AuthenticodeSignature",
      ],
      answer: 1,
      explanation:
        "« Get-ExecutionPolicy » : Commande qui affiche la politique d'exécution effective. Les autres choix renvoient à « Set-ExecutionPolicy », « AllSigned », « Set-AuthenticodeSignature » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Set-ExecutionPolicy » ?",
      choices: [
        "Politique qui demande la signature des scripts portant la marque du web",
        "Marque qui indique qu'un fichier provient d'une zone distante",
        "Commande qui change une politique d'exécution dans une portée choisie",
        "Commande qui inspecte l'état de signature d'un script",
      ],
      answer: 2,
      explanation:
        "« Set-ExecutionPolicy » : Commande qui change une politique d'exécution dans une portée choisie. Les autres choix renvoient à « RemoteSigned », « Mark of the Web », « Get-AuthenticodeSignature » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui change une politique d'exécution dans une portée choisie » ?",
      choices: [
        "RemoteSigned",
        "Mark of the Web",
        "Get-AuthenticodeSignature",
        "Set-ExecutionPolicy",
      ],
      answer: 3,
      explanation:
        "« Set-ExecutionPolicy » : Commande qui change une politique d'exécution dans une portée choisie. Les autres choix renvoient à « RemoteSigned », « Mark of the Web », « Get-AuthenticodeSignature » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « RemoteSigned » ?",
      choices: [
        "Politique qui demande la signature des scripts portant la marque du web",
        "Politique qui exige une signature pour tous les scripts",
        "Commande qui retire la marque du web d'un fichier vérifié",
        "Certificat adapté pour signer un script et identifier son signataire",
      ],
      answer: 0,
      explanation:
        "« RemoteSigned » : Politique qui demande la signature des scripts portant la marque du web. Les autres choix renvoient à « AllSigned », « Unblock-File », « Certificat de signature de code » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Politique qui demande la signature des scripts portant la marque du web » ?",
      choices: ["AllSigned", "RemoteSigned", "Unblock-File", "Certificat de signature de code"],
      answer: 1,
      explanation:
        "« RemoteSigned » : Politique qui demande la signature des scripts portant la marque du web. Les autres choix renvoient à « AllSigned », « Unblock-File », « Certificat de signature de code » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « AllSigned » ?",
      choices: [
        "Marque qui indique qu'un fichier provient d'une zone distante",
        "Commande qui appose une signature Authenticode sur un script",
        "Politique qui exige une signature pour tous les scripts",
        "Condition qui compte en plus de la présence technique d'une signature valide",
      ],
      answer: 2,
      explanation:
        "« AllSigned » : Politique qui exige une signature pour tous les scripts. Les autres choix renvoient à « Mark of the Web », « Set-AuthenticodeSignature », « Confiance dans l'émetteur » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Politique qui exige une signature pour tous les scripts » ?",
      choices: [
        "Mark of the Web",
        "Set-AuthenticodeSignature",
        "Confiance dans l'émetteur",
        "AllSigned",
      ],
      answer: 3,
      explanation:
        "« AllSigned » : Politique qui exige une signature pour tous les scripts. Les autres choix renvoient à « Mark of the Web », « Set-AuthenticodeSignature », « Confiance dans l'émetteur » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Mark of the Web » ?",
      choices: [
        "Marque qui indique qu'un fichier provient d'une zone distante",
        "Commande qui retire la marque du web d'un fichier vérifié",
        "Commande qui inspecte l'état de signature d'un script",
        "Commande qui affiche la politique d'exécution effective",
      ],
      answer: 0,
      explanation:
        "« Mark of the Web » : Marque qui indique qu'un fichier provient d'une zone distante. Les autres choix renvoient à « Unblock-File », « Get-AuthenticodeSignature », « Get-ExecutionPolicy » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Marque qui indique qu'un fichier provient d'une zone distante » ?",
      choices: [
        "Unblock-File",
        "Mark of the Web",
        "Get-AuthenticodeSignature",
        "Get-ExecutionPolicy",
      ],
      answer: 1,
      explanation:
        "« Mark of the Web » : Marque qui indique qu'un fichier provient d'une zone distante. Les autres choix renvoient à « Unblock-File », « Get-AuthenticodeSignature », « Get-ExecutionPolicy » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Unblock-File » ?",
      choices: [
        "Commande qui appose une signature Authenticode sur un script",
        "Certificat adapté pour signer un script et identifier son signataire",
        "Commande qui retire la marque du web d'un fichier vérifié",
        "Commande qui change une politique d'exécution dans une portée choisie",
      ],
      answer: 2,
      explanation:
        "« Unblock-File » : Commande qui retire la marque du web d'un fichier vérifié. Les autres choix renvoient à « Set-AuthenticodeSignature », « Certificat de signature de code », « Set-ExecutionPolicy » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Un fichier téléchargé est bloqué malgré un contrôle de provenance satisfaisant. Quelle commande retire sa marque de téléchargement ?",
      choices: [
        "Set-AuthenticodeSignature",
        "Certificat de signature de code",
        "Set-ExecutionPolicy",
        "Unblock-File",
      ],
      answer: 3,
      explanation:
        "« Unblock-File » : Commande qui retire la marque du web d'un fichier vérifié. Les autres choix renvoient à « Set-AuthenticodeSignature », « Certificat de signature de code », « Set-ExecutionPolicy » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Set-AuthenticodeSignature » ?",
      choices: [
        "Commande qui appose une signature Authenticode sur un script",
        "Commande qui inspecte l'état de signature d'un script",
        "Condition qui compte en plus de la présence technique d'une signature valide",
        "Politique qui demande la signature des scripts portant la marque du web",
      ],
      answer: 0,
      explanation:
        "« Set-AuthenticodeSignature » : Commande qui appose une signature Authenticode sur un script. Les autres choix renvoient à « Get-AuthenticodeSignature », « Confiance dans l'émetteur », « RemoteSigned » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui appose une signature Authenticode sur un script » ?",
      choices: [
        "Get-AuthenticodeSignature",
        "Set-AuthenticodeSignature",
        "Confiance dans l'émetteur",
        "RemoteSigned",
      ],
      answer: 1,
      explanation:
        "« Set-AuthenticodeSignature » : Commande qui appose une signature Authenticode sur un script. Les autres choix renvoient à « Get-AuthenticodeSignature », « Confiance dans l'émetteur », « RemoteSigned » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-AuthenticodeSignature » ?",
      choices: [
        "Certificat adapté pour signer un script et identifier son signataire",
        "Commande qui affiche la politique d'exécution effective",
        "Commande qui inspecte l'état de signature d'un script",
        "Politique qui exige une signature pour tous les scripts",
      ],
      answer: 2,
      explanation:
        "« Get-AuthenticodeSignature » : Commande qui inspecte l'état de signature d'un script. Les autres choix renvoient à « Certificat de signature de code », « Get-ExecutionPolicy », « AllSigned » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Avant d’exécuter un script transmis par un tiers, tu veux examiner l’état de sa signature. Que lances-tu ?",
      choices: [
        "Certificat de signature de code",
        "Get-ExecutionPolicy",
        "AllSigned",
        "Get-AuthenticodeSignature",
      ],
      answer: 3,
      explanation:
        "« Get-AuthenticodeSignature » : Commande qui inspecte l'état de signature d'un script. Les autres choix renvoient à « Certificat de signature de code », « Get-ExecutionPolicy », « AllSigned » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Certificat de signature de code » ?",
      choices: [
        "Certificat adapté pour signer un script et identifier son signataire",
        "Condition qui compte en plus de la présence technique d'une signature valide",
        "Commande qui change une politique d'exécution dans une portée choisie",
        "Marque qui indique qu'un fichier provient d'une zone distante",
      ],
      answer: 0,
      explanation:
        "« Certificat de signature de code » : Certificat adapté pour signer un script et identifier son signataire. Les autres choix renvoient à « Confiance dans l'émetteur », « Set-ExecutionPolicy », « Mark of the Web » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Certificat adapté pour signer un script et identifier son signataire » ?",
      choices: [
        "Confiance dans l'émetteur",
        "Certificat de signature de code",
        "Set-ExecutionPolicy",
        "Mark of the Web",
      ],
      answer: 1,
      explanation:
        "« Certificat de signature de code » : Certificat adapté pour signer un script et identifier son signataire. Les autres choix renvoient à « Confiance dans l'émetteur », « Set-ExecutionPolicy », « Mark of the Web » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Confiance dans l'émetteur » ?",
      choices: [
        "Commande qui affiche la politique d'exécution effective",
        "Politique qui demande la signature des scripts portant la marque du web",
        "Condition qui compte en plus de la présence technique d'une signature valide",
        "Commande qui retire la marque du web d'un fichier vérifié",
      ],
      answer: 2,
      explanation:
        "« Confiance dans l'émetteur » : Condition qui compte en plus de la présence technique d'une signature valide. Les autres choix renvoient à « Get-ExecutionPolicy », « RemoteSigned », « Unblock-File » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Condition qui compte en plus de la présence technique d'une signature valide » ?",
      choices: ["Get-ExecutionPolicy", "RemoteSigned", "Unblock-File", "Confiance dans l'émetteur"],
      answer: 3,
      explanation:
        "« Confiance dans l'émetteur » : Condition qui compte en plus de la présence technique d'une signature valide. Les autres choix renvoient à « Get-ExecutionPolicy », « RemoteSigned », « Unblock-File » ; comparez leur rôle avant de continuer.",
    },
  ],
}
