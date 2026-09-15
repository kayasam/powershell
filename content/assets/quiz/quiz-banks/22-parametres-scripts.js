window.powerShellQuizBank = {
  id: "22-parametres-scripts",
  title: "Quiz — 22. Paramètres de scripts",
  chapter: "22. Paramètres de scripts",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../22-parametres-scripts/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « param » ?",
      choices: [
        "Bloc qui déclare les paramètres d'un script ou d'une fonction",
        "Attribut qui apporte notamment les paramètres communs et des comportements de cmdlet",
        "Validation qui limite une valeur à une liste autorisée",
        "Valeur utilisée si l'appelant omet un paramètre facultatif",
      ],
      answer: 0,
      explanation:
        "« param » : Bloc qui déclare les paramètres d'un script ou d'une fonction. Les autres choix renvoient à « [CmdletBinding()] », « ValidateSet », « Valeur par défaut » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Bloc qui déclare les paramètres d'un script ou d'une fonction » ?",
      choices: ["[CmdletBinding()]", "param", "ValidateSet", "Valeur par défaut"],
      answer: 1,
      explanation:
        "« param » : Bloc qui déclare les paramètres d'un script ou d'une fonction. Les autres choix renvoient à « [CmdletBinding()] », « ValidateSet », « Valeur par défaut » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « [CmdletBinding()] » ?",
      choices: [
        "Option qui rend un paramètre obligatoire",
        "Validation qui impose une plage de valeurs",
        "Attribut qui apporte notamment les paramètres communs et des comportements de cmdlet",
        "Déclaration qui aide PowerShell à vérifier ou convertir une valeur reçue",
      ],
      answer: 2,
      explanation:
        "« [CmdletBinding()] » : Attribut qui apporte notamment les paramètres communs et des comportements de cmdlet. Les autres choix renvoient à « Mandatory », « ValidateRange », « Type de paramètre » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Attribut qui apporte notamment les paramètres communs et des comportements de cmdlet » ?",
      choices: ["Mandatory", "ValidateRange", "Type de paramètre", "[CmdletBinding()]"],
      answer: 3,
      explanation:
        "« [CmdletBinding()] » : Attribut qui apporte notamment les paramètres communs et des comportements de cmdlet. Les autres choix renvoient à « Mandatory », « ValidateRange », « Type de paramètre » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Mandatory » ?",
      choices: [
        "Option qui rend un paramètre obligatoire",
        "Validation qui limite une valeur à une liste autorisée",
        "Type adapté à une option activée par sa présence",
        "Paramètre commun qui simule certaines actions avant de les exécuter",
      ],
      answer: 0,
      explanation:
        "« Mandatory » : Option qui rend un paramètre obligatoire. Les autres choix renvoient à « ValidateSet », « [switch] », « -WhatIf » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Option qui rend un paramètre obligatoire » ?",
      choices: ["ValidateSet", "Mandatory", "[switch]", "-WhatIf"],
      answer: 1,
      explanation:
        "« Mandatory » : Option qui rend un paramètre obligatoire. Les autres choix renvoient à « ValidateSet », « [switch] », « -WhatIf » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « ValidateSet » ?",
      choices: [
        "Validation qui impose une plage de valeurs",
        "Valeur utilisée si l'appelant omet un paramètre facultatif",
        "Validation qui limite une valeur à une liste autorisée",
        "Paramètre commun qui peut demander confirmation avant une action",
      ],
      answer: 2,
      explanation:
        "« ValidateSet » : Validation qui limite une valeur à une liste autorisée. Les autres choix renvoient à « ValidateRange », « Valeur par défaut », « -Confirm » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Un paramètre ne doit accepter que Marine, CipherPol ou Pirate. Quelle validation déclares-tu ?",
      choices: ["ValidateRange", "Valeur par défaut", "-Confirm", "ValidateSet"],
      answer: 3,
      explanation:
        "« ValidateSet » : Validation qui limite une valeur à une liste autorisée. Les autres choix renvoient à « ValidateRange », « Valeur par défaut », « -Confirm » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « ValidateRange » ?",
      choices: [
        "Validation qui impose une plage de valeurs",
        "Type adapté à une option activée par sa présence",
        "Déclaration qui aide PowerShell à vérifier ou convertir une valeur reçue",
        "Bloc qui déclare les paramètres d'un script ou d'une fonction",
      ],
      answer: 0,
      explanation:
        "« ValidateRange » : Validation qui impose une plage de valeurs. Les autres choix renvoient à « [switch] », « Type de paramètre », « param » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Validation qui impose une plage de valeurs » ?",
      choices: ["[switch]", "ValidateRange", "Type de paramètre", "param"],
      answer: 1,
      explanation:
        "« ValidateRange » : Validation qui impose une plage de valeurs. Les autres choix renvoient à « [switch] », « Type de paramètre », « param » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « [switch] » ?",
      choices: [
        "Valeur utilisée si l'appelant omet un paramètre facultatif",
        "Paramètre commun qui simule certaines actions avant de les exécuter",
        "Type adapté à une option activée par sa présence",
        "Attribut qui apporte notamment les paramètres communs et des comportements de cmdlet",
      ],
      answer: 2,
      explanation:
        "« [switch] » : Type adapté à une option activée par sa présence. Les autres choix renvoient à « Valeur par défaut », « -WhatIf », « [CmdletBinding()] » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Type adapté à une option activée par sa présence » ?",
      choices: ["Valeur par défaut", "-WhatIf", "[CmdletBinding()]", "[switch]"],
      answer: 3,
      explanation:
        "« [switch] » : Type adapté à une option activée par sa présence. Les autres choix renvoient à « Valeur par défaut », « -WhatIf », « [CmdletBinding()] » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Valeur par défaut » ?",
      choices: [
        "Valeur utilisée si l'appelant omet un paramètre facultatif",
        "Déclaration qui aide PowerShell à vérifier ou convertir une valeur reçue",
        "Paramètre commun qui peut demander confirmation avant une action",
        "Option qui rend un paramètre obligatoire",
      ],
      answer: 0,
      explanation:
        "« Valeur par défaut » : Valeur utilisée si l'appelant omet un paramètre facultatif. Les autres choix renvoient à « Type de paramètre », « -Confirm », « Mandatory » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Valeur utilisée si l'appelant omet un paramètre facultatif » ?",
      choices: ["Type de paramètre", "Valeur par défaut", "-Confirm", "Mandatory"],
      answer: 1,
      explanation:
        "« Valeur par défaut » : Valeur utilisée si l'appelant omet un paramètre facultatif. Les autres choix renvoient à « Type de paramètre », « -Confirm », « Mandatory » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Type de paramètre » ?",
      choices: [
        "Paramètre commun qui simule certaines actions avant de les exécuter",
        "Bloc qui déclare les paramètres d'un script ou d'une fonction",
        "Déclaration qui aide PowerShell à vérifier ou convertir une valeur reçue",
        "Validation qui limite une valeur à une liste autorisée",
      ],
      answer: 2,
      explanation:
        "« Type de paramètre » : Déclaration qui aide PowerShell à vérifier ou convertir une valeur reçue. Les autres choix renvoient à « -WhatIf », « param », « ValidateSet » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Déclaration qui aide PowerShell à vérifier ou convertir une valeur reçue » ?",
      choices: ["-WhatIf", "param", "ValidateSet", "Type de paramètre"],
      answer: 3,
      explanation:
        "« Type de paramètre » : Déclaration qui aide PowerShell à vérifier ou convertir une valeur reçue. Les autres choix renvoient à « -WhatIf », « param », « ValidateSet » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « -WhatIf » ?",
      choices: [
        "Paramètre commun qui simule certaines actions avant de les exécuter",
        "Paramètre commun qui peut demander confirmation avant une action",
        "Attribut qui apporte notamment les paramètres communs et des comportements de cmdlet",
        "Validation qui impose une plage de valeurs",
      ],
      answer: 0,
      explanation:
        "« -WhatIf » : Paramètre commun qui simule certaines actions avant de les exécuter. Les autres choix renvoient à « -Confirm », « [CmdletBinding()] », « ValidateRange » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Un script va modifier des comptes et tu veux visualiser ses actions sans les exécuter. Quel mécanisme actives-tu ?",
      choices: ["-Confirm", "-WhatIf", "[CmdletBinding()]", "ValidateRange"],
      answer: 1,
      explanation:
        "« -WhatIf » : Paramètre commun qui simule certaines actions avant de les exécuter. Les autres choix renvoient à « -Confirm », « [CmdletBinding()] », « ValidateRange » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « -Confirm » ?",
      choices: [
        "Bloc qui déclare les paramètres d'un script ou d'une fonction",
        "Option qui rend un paramètre obligatoire",
        "Paramètre commun qui peut demander confirmation avant une action",
        "Type adapté à une option activée par sa présence",
      ],
      answer: 2,
      explanation:
        "« -Confirm » : Paramètre commun qui peut demander confirmation avant une action. Les autres choix renvoient à « param », « Mandatory », « [switch] » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Paramètre commun qui peut demander confirmation avant une action » ?",
      choices: ["param", "Mandatory", "[switch]", "-Confirm"],
      answer: 3,
      explanation:
        "« -Confirm » : Paramètre commun qui peut demander confirmation avant une action. Les autres choix renvoient à « param », « Mandatory », « [switch] » ; comparez leur rôle avant de continuer.",
    },
  ],
}
