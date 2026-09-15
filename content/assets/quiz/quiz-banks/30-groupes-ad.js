window.powerShellQuizBank = {
  id: "30-groupes-ad",
  title: "Quiz — 30. Groupes Active Directory",
  chapter: "30. Groupes Active Directory",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../30-groupes-ad/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-ADGroup » ?",
      choices: [
        "Commande qui lit des groupes Active Directory",
        "Commande qui crée un groupe Active Directory",
        "Commande qui retire un membre d'un groupe",
        "Groupe utilisable pour attribuer des permissions",
      ],
      answer: 0,
      explanation:
        "« Get-ADGroup » : Commande qui lit des groupes Active Directory. Les autres choix renvoient à « New-ADGroup », « Remove-ADGroupMember », « Groupe de sécurité » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui lit des groupes Active Directory » ?",
      choices: ["New-ADGroup", "Get-ADGroup", "Remove-ADGroupMember", "Groupe de sécurité"],
      answer: 1,
      explanation:
        "« Get-ADGroup » : Commande qui lit des groupes Active Directory. Les autres choix renvoient à « New-ADGroup », « Remove-ADGroupMember », « Groupe de sécurité » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « New-ADGroup » ?",
      choices: [
        "Commande qui ajoute un objet comme membre d'un groupe",
        "Commande qui liste les membres d'un groupe",
        "Commande qui crée un groupe Active Directory",
        "Groupe destiné aux listes de diffusion plutôt qu'aux permissions",
      ],
      answer: 2,
      explanation:
        "« New-ADGroup » : Commande qui crée un groupe Active Directory. Les autres choix renvoient à « Add-ADGroupMember », « Get-ADGroupMember », « Groupe de distribution » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui crée un groupe Active Directory » ?",
      choices: ["Add-ADGroupMember", "Get-ADGroupMember", "Groupe de distribution", "New-ADGroup"],
      answer: 3,
      explanation:
        "« New-ADGroup » : Commande qui crée un groupe Active Directory. Les autres choix renvoient à « Add-ADGroupMember », « Get-ADGroupMember », « Groupe de distribution » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Add-ADGroupMember » ?",
      choices: [
        "Commande qui ajoute un objet comme membre d'un groupe",
        "Commande qui retire un membre d'un groupe",
        "Commande qui liste les groupes auxquels appartient un principal",
        "Réglage qui détermine où un groupe peut être utilisé et quels membres il accepte",
      ],
      answer: 0,
      explanation:
        "« Add-ADGroupMember » : Commande qui ajoute un objet comme membre d'un groupe. Les autres choix renvoient à « Remove-ADGroupMember », « Get-ADPrincipalGroupMembership », « Portée de groupe » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Un agent reçoit une nouvelle responsabilité et doit rejoindre un groupe existant. Quelle cmdlet utilises-tu ?",
      choices: [
        "Remove-ADGroupMember",
        "Add-ADGroupMember",
        "Get-ADPrincipalGroupMembership",
        "Portée de groupe",
      ],
      answer: 1,
      explanation:
        "« Add-ADGroupMember » : Commande qui ajoute un objet comme membre d'un groupe. Les autres choix renvoient à « Remove-ADGroupMember », « Get-ADPrincipalGroupMembership », « Portée de groupe » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Remove-ADGroupMember » ?",
      choices: [
        "Commande qui liste les membres d'un groupe",
        "Groupe utilisable pour attribuer des permissions",
        "Commande qui retire un membre d'un groupe",
        "Action à vérifier soigneusement car elle peut retirer des droits liés au groupe",
      ],
      answer: 2,
      explanation:
        "« Remove-ADGroupMember » : Commande qui retire un membre d'un groupe. Les autres choix renvoient à « Get-ADGroupMember », « Groupe de sécurité », « Suppression de groupe » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui retire un membre d'un groupe » ?",
      choices: [
        "Get-ADGroupMember",
        "Groupe de sécurité",
        "Suppression de groupe",
        "Remove-ADGroupMember",
      ],
      answer: 3,
      explanation:
        "« Remove-ADGroupMember » : Commande qui retire un membre d'un groupe. Les autres choix renvoient à « Get-ADGroupMember », « Groupe de sécurité », « Suppression de groupe » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-ADGroupMember » ?",
      choices: [
        "Commande qui liste les membres d'un groupe",
        "Commande qui liste les groupes auxquels appartient un principal",
        "Groupe destiné aux listes de diffusion plutôt qu'aux permissions",
        "Commande qui lit des groupes Active Directory",
      ],
      answer: 0,
      explanation:
        "« Get-ADGroupMember » : Commande qui liste les membres d'un groupe. Les autres choix renvoient à « Get-ADPrincipalGroupMembership », « Groupe de distribution », « Get-ADGroup » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Avant de modifier les droits, tu veux vérifier qui appartient déjà au groupe. Que lances-tu ?",
      choices: [
        "Get-ADPrincipalGroupMembership",
        "Get-ADGroupMember",
        "Groupe de distribution",
        "Get-ADGroup",
      ],
      answer: 1,
      explanation:
        "« Get-ADGroupMember » : Commande qui liste les membres d'un groupe. Les autres choix renvoient à « Get-ADPrincipalGroupMembership », « Groupe de distribution », « Get-ADGroup » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-ADPrincipalGroupMembership » ?",
      choices: [
        "Groupe utilisable pour attribuer des permissions",
        "Réglage qui détermine où un groupe peut être utilisé et quels membres il accepte",
        "Commande qui liste les groupes auxquels appartient un principal",
        "Commande qui crée un groupe Active Directory",
      ],
      answer: 2,
      explanation:
        "« Get-ADPrincipalGroupMembership » : Commande qui liste les groupes auxquels appartient un principal. Les autres choix renvoient à « Groupe de sécurité », « Portée de groupe », « New-ADGroup » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui liste les groupes auxquels appartient un principal » ?",
      choices: [
        "Groupe de sécurité",
        "Portée de groupe",
        "New-ADGroup",
        "Get-ADPrincipalGroupMembership",
      ],
      answer: 3,
      explanation:
        "« Get-ADPrincipalGroupMembership » : Commande qui liste les groupes auxquels appartient un principal. Les autres choix renvoient à « Groupe de sécurité », « Portée de groupe », « New-ADGroup » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Groupe de sécurité » ?",
      choices: [
        "Groupe utilisable pour attribuer des permissions",
        "Groupe destiné aux listes de diffusion plutôt qu'aux permissions",
        "Action à vérifier soigneusement car elle peut retirer des droits liés au groupe",
        "Commande qui ajoute un objet comme membre d'un groupe",
      ],
      answer: 0,
      explanation:
        "« Groupe de sécurité » : Groupe utilisable pour attribuer des permissions. Les autres choix renvoient à « Groupe de distribution », « Suppression de groupe », « Add-ADGroupMember » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Groupe utilisable pour attribuer des permissions » ?",
      choices: [
        "Groupe de distribution",
        "Groupe de sécurité",
        "Suppression de groupe",
        "Add-ADGroupMember",
      ],
      answer: 1,
      explanation:
        "« Groupe de sécurité » : Groupe utilisable pour attribuer des permissions. Les autres choix renvoient à « Groupe de distribution », « Suppression de groupe », « Add-ADGroupMember » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Groupe de distribution » ?",
      choices: [
        "Réglage qui détermine où un groupe peut être utilisé et quels membres il accepte",
        "Commande qui lit des groupes Active Directory",
        "Groupe destiné aux listes de diffusion plutôt qu'aux permissions",
        "Commande qui retire un membre d'un groupe",
      ],
      answer: 2,
      explanation:
        "« Groupe de distribution » : Groupe destiné aux listes de diffusion plutôt qu'aux permissions. Les autres choix renvoient à « Portée de groupe », « Get-ADGroup », « Remove-ADGroupMember » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Groupe destiné aux listes de diffusion plutôt qu'aux permissions » ?",
      choices: [
        "Portée de groupe",
        "Get-ADGroup",
        "Remove-ADGroupMember",
        "Groupe de distribution",
      ],
      answer: 3,
      explanation:
        "« Groupe de distribution » : Groupe destiné aux listes de diffusion plutôt qu'aux permissions. Les autres choix renvoient à « Portée de groupe », « Get-ADGroup », « Remove-ADGroupMember » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Portée de groupe » ?",
      choices: [
        "Réglage qui détermine où un groupe peut être utilisé et quels membres il accepte",
        "Action à vérifier soigneusement car elle peut retirer des droits liés au groupe",
        "Commande qui crée un groupe Active Directory",
        "Commande qui liste les membres d'un groupe",
      ],
      answer: 0,
      explanation:
        "« Portée de groupe » : Réglage qui détermine où un groupe peut être utilisé et quels membres il accepte. Les autres choix renvoient à « Suppression de groupe », « New-ADGroup », « Get-ADGroupMember » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Réglage qui détermine où un groupe peut être utilisé et quels membres il accepte » ?",
      choices: ["Suppression de groupe", "Portée de groupe", "New-ADGroup", "Get-ADGroupMember"],
      answer: 1,
      explanation:
        "« Portée de groupe » : Réglage qui détermine où un groupe peut être utilisé et quels membres il accepte. Les autres choix renvoient à « Suppression de groupe », « New-ADGroup », « Get-ADGroupMember » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Suppression de groupe » ?",
      choices: [
        "Commande qui lit des groupes Active Directory",
        "Commande qui ajoute un objet comme membre d'un groupe",
        "Action à vérifier soigneusement car elle peut retirer des droits liés au groupe",
        "Commande qui liste les groupes auxquels appartient un principal",
      ],
      answer: 2,
      explanation:
        "« Suppression de groupe » : Action à vérifier soigneusement car elle peut retirer des droits liés au groupe. Les autres choix renvoient à « Get-ADGroup », « Add-ADGroupMember », « Get-ADPrincipalGroupMembership » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Action à vérifier soigneusement car elle peut retirer des droits liés au groupe » ?",
      choices: [
        "Get-ADGroup",
        "Add-ADGroupMember",
        "Get-ADPrincipalGroupMembership",
        "Suppression de groupe",
      ],
      answer: 3,
      explanation:
        "« Suppression de groupe » : Action à vérifier soigneusement car elle peut retirer des droits liés au groupe. Les autres choix renvoient à « Get-ADGroup », « Add-ADGroupMember », « Get-ADPrincipalGroupMembership » ; comparez leur rôle avant de continuer.",
    },
  ],
}
