window.powerShellQuizBank = {
  id: "12-wmi-et-cim",
  title: "Quiz — 12. WMI et CIM",
  chapter: "12. WMI et CIM",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../12-wmi-et-cim/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « WMI » ?",
      choices: [
        "Technologie Windows historique d'interrogation des informations de gestion",
        "Modèle utilisé pour décrire les ressources administrables",
        "Classe contenant des informations sur le système d'exploitation",
        "Paramètre qui choisit la classe CIM à interroger",
      ],
      answer: 0,
      explanation:
        "« WMI » : Technologie Windows historique d'interrogation des informations de gestion. Les autres choix renvoient à « CIM », « Win32_OperatingSystem », « -ClassName » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Technologie Windows historique d'interrogation des informations de gestion » ?",
      choices: ["CIM", "WMI", "Win32_OperatingSystem", "-ClassName"],
      answer: 1,
      explanation:
        "« WMI » : Technologie Windows historique d'interrogation des informations de gestion. Les autres choix renvoient à « CIM », « Win32_OperatingSystem », « -ClassName » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « CIM » ?",
      choices: [
        "Cmdlet qui interroge une classe CIM et renvoie des objets",
        "Classe contenant des informations sur le firmware BIOS",
        "Modèle utilisé pour décrire les ressources administrables",
        "Paramètre qui filtre côté fournisseur avant de transmettre les résultats",
      ],
      answer: 2,
      explanation:
        "« CIM » : Modèle utilisé pour décrire les ressources administrables. Les autres choix renvoient à « Get-CimInstance », « Win32_BIOS », « -Filter » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Modèle utilisé pour décrire les ressources administrables » ?",
      choices: ["Get-CimInstance", "Win32_BIOS", "-Filter", "CIM"],
      answer: 3,
      explanation:
        "« CIM » : Modèle utilisé pour décrire les ressources administrables. Les autres choix renvoient à « Get-CimInstance », « Win32_BIOS », « -Filter » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-CimInstance » ?",
      choices: [
        "Cmdlet qui interroge une classe CIM et renvoie des objets",
        "Classe contenant des informations sur le système d'exploitation",
        "Classe contenant des informations sur l'ordinateur",
        "Cmdlet qui aide à explorer les classes CIM disponibles",
      ],
      answer: 0,
      explanation:
        "« Get-CimInstance » : Cmdlet qui interroge une classe CIM et renvoie des objets. Les autres choix renvoient à « Win32_OperatingSystem », « Win32_ComputerSystem », « Get-CimClass » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Un inventaire doit récupérer des informations système depuis une classe CIM. Quelle cmdlet lance la requête ?",
      choices: ["Win32_OperatingSystem", "Get-CimInstance", "Win32_ComputerSystem", "Get-CimClass"],
      answer: 1,
      explanation:
        "« Get-CimInstance » : Cmdlet qui interroge une classe CIM et renvoie des objets. Les autres choix renvoient à « Win32_OperatingSystem », « Win32_ComputerSystem », « Get-CimClass » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Win32_OperatingSystem » ?",
      choices: [
        "Classe contenant des informations sur le firmware BIOS",
        "Paramètre qui choisit la classe CIM à interroger",
        "Classe contenant des informations sur le système d'exploitation",
        "Cmdlet qui inspecte les propriétés d'un objet CIM reçu",
      ],
      answer: 2,
      explanation:
        "« Win32_OperatingSystem » : Classe contenant des informations sur le système d'exploitation. Les autres choix renvoient à « Win32_BIOS », « -ClassName », « Get-Member » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Tu dois relever la version du système d’exploitation dans CIM. Quelle classe interroges-tu ?",
      choices: ["Win32_BIOS", "-ClassName", "Get-Member", "Win32_OperatingSystem"],
      answer: 3,
      explanation:
        "« Win32_OperatingSystem » : Classe contenant des informations sur le système d'exploitation. Les autres choix renvoient à « Win32_BIOS », « -ClassName », « Get-Member » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Win32_BIOS » ?",
      choices: [
        "Classe contenant des informations sur le firmware BIOS",
        "Classe contenant des informations sur l'ordinateur",
        "Paramètre qui filtre côté fournisseur avant de transmettre les résultats",
        "Technologie Windows historique d'interrogation des informations de gestion",
      ],
      answer: 0,
      explanation:
        "« Win32_BIOS » : Classe contenant des informations sur le firmware BIOS. Les autres choix renvoient à « Win32_ComputerSystem », « -Filter », « WMI » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Classe contenant des informations sur le firmware BIOS » ?",
      choices: ["Win32_ComputerSystem", "Win32_BIOS", "-Filter", "WMI"],
      answer: 1,
      explanation:
        "« Win32_BIOS » : Classe contenant des informations sur le firmware BIOS. Les autres choix renvoient à « Win32_ComputerSystem », « -Filter », « WMI » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Win32_ComputerSystem » ?",
      choices: [
        "Paramètre qui choisit la classe CIM à interroger",
        "Cmdlet qui aide à explorer les classes CIM disponibles",
        "Classe contenant des informations sur l'ordinateur",
        "Modèle utilisé pour décrire les ressources administrables",
      ],
      answer: 2,
      explanation:
        "« Win32_ComputerSystem » : Classe contenant des informations sur l'ordinateur. Les autres choix renvoient à « -ClassName », « Get-CimClass », « CIM » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Classe contenant des informations sur l'ordinateur » ?",
      choices: ["-ClassName", "Get-CimClass", "CIM", "Win32_ComputerSystem"],
      answer: 3,
      explanation:
        "« Win32_ComputerSystem » : Classe contenant des informations sur l'ordinateur. Les autres choix renvoient à « -ClassName », « Get-CimClass », « CIM » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « -ClassName » ?",
      choices: [
        "Paramètre qui choisit la classe CIM à interroger",
        "Paramètre qui filtre côté fournisseur avant de transmettre les résultats",
        "Cmdlet qui inspecte les propriétés d'un objet CIM reçu",
        "Cmdlet qui interroge une classe CIM et renvoie des objets",
      ],
      answer: 0,
      explanation:
        "« -ClassName » : Paramètre qui choisit la classe CIM à interroger. Les autres choix renvoient à « -Filter », « Get-Member », « Get-CimInstance » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Paramètre qui choisit la classe CIM à interroger » ?",
      choices: ["-Filter", "-ClassName", "Get-Member", "Get-CimInstance"],
      answer: 1,
      explanation:
        "« -ClassName » : Paramètre qui choisit la classe CIM à interroger. Les autres choix renvoient à « -Filter », « Get-Member », « Get-CimInstance » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « -Filter » ?",
      choices: [
        "Cmdlet qui aide à explorer les classes CIM disponibles",
        "Technologie Windows historique d'interrogation des informations de gestion",
        "Paramètre qui filtre côté fournisseur avant de transmettre les résultats",
        "Classe contenant des informations sur le système d'exploitation",
      ],
      answer: 2,
      explanation:
        "« -Filter » : Paramètre qui filtre côté fournisseur avant de transmettre les résultats. Les autres choix renvoient à « Get-CimClass », « WMI », « Win32_OperatingSystem » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Paramètre qui filtre côté fournisseur avant de transmettre les résultats » ?",
      choices: ["Get-CimClass", "WMI", "Win32_OperatingSystem", "-Filter"],
      answer: 3,
      explanation:
        "« -Filter » : Paramètre qui filtre côté fournisseur avant de transmettre les résultats. Les autres choix renvoient à « Get-CimClass », « WMI », « Win32_OperatingSystem » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-CimClass » ?",
      choices: [
        "Cmdlet qui aide à explorer les classes CIM disponibles",
        "Cmdlet qui inspecte les propriétés d'un objet CIM reçu",
        "Modèle utilisé pour décrire les ressources administrables",
        "Classe contenant des informations sur le firmware BIOS",
      ],
      answer: 0,
      explanation:
        "« Get-CimClass » : Cmdlet qui aide à explorer les classes CIM disponibles. Les autres choix renvoient à « Get-Member », « CIM », « Win32_BIOS » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Cmdlet qui aide à explorer les classes CIM disponibles » ?",
      choices: ["Get-Member", "Get-CimClass", "CIM", "Win32_BIOS"],
      answer: 1,
      explanation:
        "« Get-CimClass » : Cmdlet qui aide à explorer les classes CIM disponibles. Les autres choix renvoient à « Get-Member », « CIM », « Win32_BIOS » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-Member » ?",
      choices: [
        "Technologie Windows historique d'interrogation des informations de gestion",
        "Cmdlet qui interroge une classe CIM et renvoie des objets",
        "Cmdlet qui inspecte les propriétés d'un objet CIM reçu",
        "Classe contenant des informations sur l'ordinateur",
      ],
      answer: 2,
      explanation:
        "« Get-Member » : Cmdlet qui inspecte les propriétés d'un objet CIM reçu. Les autres choix renvoient à « WMI », « Get-CimInstance », « Win32_ComputerSystem » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Cmdlet qui inspecte les propriétés d'un objet CIM reçu » ?",
      choices: ["WMI", "Get-CimInstance", "Win32_ComputerSystem", "Get-Member"],
      answer: 3,
      explanation:
        "« Get-Member » : Cmdlet qui inspecte les propriétés d'un objet CIM reçu. Les autres choix renvoient à « WMI », « Get-CimInstance », « Win32_ComputerSystem » ; comparez leur rôle avant de continuer.",
    },
  ],
}
