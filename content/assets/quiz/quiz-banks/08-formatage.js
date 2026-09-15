window.powerShellQuizBank = {
  id: "08-formatage",
  title: "Quiz — 08. Formatage",
  chapter: "08. Formatage",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../08-formatage/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Format-Table » ?",
      choices: [
        "Commande qui présente des propriétés en colonnes pour l'affichage",
        "Commande qui présente les propriétés sur des lignes séparées",
        "Commande qui affiche une grille interactive lorsque l'environnement le permet",
        "Bonne pratique qui évite d'envoyer un rendu d'affichage aux commandes de traitement",
      ],
      answer: 0,
      explanation:
        "« Format-Table » : Commande qui présente des propriétés en colonnes pour l'affichage. Les autres choix renvoient à « Format-List », « Out-GridView », « Formatage en fin de pipeline » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui présente des propriétés en colonnes pour l'affichage » ?",
      choices: ["Format-List", "Format-Table", "Out-GridView", "Formatage en fin de pipeline"],
      answer: 1,
      explanation:
        "« Format-Table » : Commande qui présente des propriétés en colonnes pour l'affichage. Les autres choix renvoient à « Format-List », « Out-GridView », « Formatage en fin de pipeline » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Format-List » ?",
      choices: [
        "Commande qui choisit des propriétés tout en conservant des objets exploitables",
        "Espace disponible qui peut tronquer une valeur dans un tableau",
        "Commande qui présente les propriétés sur des lignes séparées",
        "Champ d'un objet que Select-Object ou Format-Table peut afficher",
      ],
      answer: 2,
      explanation:
        "« Format-List » : Commande qui présente les propriétés sur des lignes séparées. Les autres choix renvoient à « Select-Object », « Largeur de colonne », « Propriété » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui présente les propriétés sur des lignes séparées » ?",
      choices: ["Select-Object", "Largeur de colonne", "Propriété", "Format-List"],
      answer: 3,
      explanation:
        "« Format-List » : Commande qui présente les propriétés sur des lignes séparées. Les autres choix renvoient à « Select-Object », « Largeur de colonne », « Propriété » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Select-Object » ?",
      choices: [
        "Commande qui choisit des propriétés tout en conservant des objets exploitables",
        "Commande qui affiche une grille interactive lorsque l'environnement le permet",
        "Résultat à conserver avant de filtrer, exporter ou poursuivre le pipeline",
        "Commande qui aide à trouver les propriétés disponibles avant l'affichage",
      ],
      answer: 0,
      explanation:
        "« Select-Object » : Commande qui choisit des propriétés tout en conservant des objets exploitables. Les autres choix renvoient à « Out-GridView », « Objet non formaté », « Get-Member » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Tu dois exporter des objets avec seulement trois propriétés, pas simplement changer leur affichage. Quelle cmdlet utilises-tu ?",
      choices: ["Out-GridView", "Select-Object", "Objet non formaté", "Get-Member"],
      answer: 1,
      explanation:
        "« Select-Object » : Commande qui choisit des propriétés tout en conservant des objets exploitables. Les autres choix renvoient à « Out-GridView », « Objet non formaté », « Get-Member » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Out-GridView » ?",
      choices: [
        "Espace disponible qui peut tronquer une valeur dans un tableau",
        "Bonne pratique qui évite d'envoyer un rendu d'affichage aux commandes de traitement",
        "Commande qui affiche une grille interactive lorsque l'environnement le permet",
        "Commande qui présente une propriété sous forme de colonnes compactes",
      ],
      answer: 2,
      explanation:
        "« Out-GridView » : Commande qui affiche une grille interactive lorsque l'environnement le permet. Les autres choix renvoient à « Largeur de colonne », « Formatage en fin de pipeline », « Format-Wide » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui affiche une grille interactive lorsque l'environnement le permet » ?",
      choices: [
        "Largeur de colonne",
        "Formatage en fin de pipeline",
        "Format-Wide",
        "Out-GridView",
      ],
      answer: 3,
      explanation:
        "« Out-GridView » : Commande qui affiche une grille interactive lorsque l'environnement le permet. Les autres choix renvoient à « Largeur de colonne », « Formatage en fin de pipeline », « Format-Wide » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Largeur de colonne » ?",
      choices: [
        "Espace disponible qui peut tronquer une valeur dans un tableau",
        "Résultat à conserver avant de filtrer, exporter ou poursuivre le pipeline",
        "Champ d'un objet que Select-Object ou Format-Table peut afficher",
        "Commande qui présente des propriétés en colonnes pour l'affichage",
      ],
      answer: 0,
      explanation:
        "« Largeur de colonne » : Espace disponible qui peut tronquer une valeur dans un tableau. Les autres choix renvoient à « Objet non formaté », « Propriété », « Format-Table » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Espace disponible qui peut tronquer une valeur dans un tableau » ?",
      choices: ["Objet non formaté", "Largeur de colonne", "Propriété", "Format-Table"],
      answer: 1,
      explanation:
        "« Largeur de colonne » : Espace disponible qui peut tronquer une valeur dans un tableau. Les autres choix renvoient à « Objet non formaté », « Propriété », « Format-Table » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Objet non formaté » ?",
      choices: [
        "Bonne pratique qui évite d'envoyer un rendu d'affichage aux commandes de traitement",
        "Commande qui aide à trouver les propriétés disponibles avant l'affichage",
        "Résultat à conserver avant de filtrer, exporter ou poursuivre le pipeline",
        "Commande qui présente les propriétés sur des lignes séparées",
      ],
      answer: 2,
      explanation:
        "« Objet non formaté » : Résultat à conserver avant de filtrer, exporter ou poursuivre le pipeline. Les autres choix renvoient à « Formatage en fin de pipeline », « Get-Member », « Format-List » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Résultat à conserver avant de filtrer, exporter ou poursuivre le pipeline » ?",
      choices: ["Formatage en fin de pipeline", "Get-Member", "Format-List", "Objet non formaté"],
      answer: 3,
      explanation:
        "« Objet non formaté » : Résultat à conserver avant de filtrer, exporter ou poursuivre le pipeline. Les autres choix renvoient à « Formatage en fin de pipeline », « Get-Member », « Format-List » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Formatage en fin de pipeline » ?",
      choices: [
        "Bonne pratique qui évite d'envoyer un rendu d'affichage aux commandes de traitement",
        "Champ d'un objet que Select-Object ou Format-Table peut afficher",
        "Commande qui présente une propriété sous forme de colonnes compactes",
        "Commande qui choisit des propriétés tout en conservant des objets exploitables",
      ],
      answer: 0,
      explanation:
        "« Formatage en fin de pipeline » : Bonne pratique qui évite d'envoyer un rendu d'affichage aux commandes de traitement. Les autres choix renvoient à « Propriété », « Format-Wide », « Select-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Tu veux encore filtrer des objets après une commande : à quel moment places-tu Format-Table ?",
      choices: ["Propriété", "Formatage en fin de pipeline", "Format-Wide", "Select-Object"],
      answer: 1,
      explanation:
        "« Formatage en fin de pipeline » : Bonne pratique qui évite d'envoyer un rendu d'affichage aux commandes de traitement. Les autres choix renvoient à « Propriété », « Format-Wide », « Select-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Propriété » ?",
      choices: [
        "Commande qui aide à trouver les propriétés disponibles avant l'affichage",
        "Commande qui présente des propriétés en colonnes pour l'affichage",
        "Champ d'un objet que Select-Object ou Format-Table peut afficher",
        "Commande qui affiche une grille interactive lorsque l'environnement le permet",
      ],
      answer: 2,
      explanation:
        "« Propriété » : Champ d'un objet que Select-Object ou Format-Table peut afficher. Les autres choix renvoient à « Get-Member », « Format-Table », « Out-GridView » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Champ d'un objet que Select-Object ou Format-Table peut afficher » ?",
      choices: ["Get-Member", "Format-Table", "Out-GridView", "Propriété"],
      answer: 3,
      explanation:
        "« Propriété » : Champ d'un objet que Select-Object ou Format-Table peut afficher. Les autres choix renvoient à « Get-Member », « Format-Table », « Out-GridView » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-Member » ?",
      choices: [
        "Commande qui aide à trouver les propriétés disponibles avant l'affichage",
        "Commande qui présente une propriété sous forme de colonnes compactes",
        "Commande qui présente les propriétés sur des lignes séparées",
        "Espace disponible qui peut tronquer une valeur dans un tableau",
      ],
      answer: 0,
      explanation:
        "« Get-Member » : Commande qui aide à trouver les propriétés disponibles avant l'affichage. Les autres choix renvoient à « Format-Wide », « Format-List », « Largeur de colonne » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui aide à trouver les propriétés disponibles avant l'affichage » ?",
      choices: ["Format-Wide", "Get-Member", "Format-List", "Largeur de colonne"],
      answer: 1,
      explanation:
        "« Get-Member » : Commande qui aide à trouver les propriétés disponibles avant l'affichage. Les autres choix renvoient à « Format-Wide », « Format-List », « Largeur de colonne » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Format-Wide » ?",
      choices: [
        "Commande qui présente des propriétés en colonnes pour l'affichage",
        "Commande qui choisit des propriétés tout en conservant des objets exploitables",
        "Commande qui présente une propriété sous forme de colonnes compactes",
        "Résultat à conserver avant de filtrer, exporter ou poursuivre le pipeline",
      ],
      answer: 2,
      explanation:
        "« Format-Wide » : Commande qui présente une propriété sous forme de colonnes compactes. Les autres choix renvoient à « Format-Table », « Select-Object », « Objet non formaté » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui présente une propriété sous forme de colonnes compactes » ?",
      choices: ["Format-Table", "Select-Object", "Objet non formaté", "Format-Wide"],
      answer: 3,
      explanation:
        "« Format-Wide » : Commande qui présente une propriété sous forme de colonnes compactes. Les autres choix renvoient à « Format-Table », « Select-Object », « Objet non formaté » ; comparez leur rôle avant de continuer.",
    },
  ],
}
