;(() => {
  const KEY = "powershell-grand-line-v1"
  let progress = Number(localStorage.getItem(KEY) || 0)
  let mission = Math.min(progress + 1, 5)
  const panels = [...document.querySelectorAll(".mission-panel")]
  const ranks = [...document.querySelectorAll(".rank-step")]
  const show = (number) => {
    mission = Math.max(1, Math.min(number, 5))
    panels.forEach((panel) =>
      panel.classList.toggle("active", Number(panel.dataset.mission) === mission),
    )
    ranks.forEach((rank, index) =>
      rank.classList.toggle("unlocked", index < Math.max(progress, mission)),
    )
    document
      .querySelector(`[data-mission="${mission}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  const feedback = (number, message, good) => {
    const node = document.querySelector(`[data-mission="${number}"] .game-feedback`)
    if (!node) return
    node.textContent = message
    node.className = `game-feedback ${good ? "good" : "bad"}`
  }
  const complete = (number) => {
    progress = Math.max(progress, number)
    localStorage.setItem(KEY, String(progress))
    ranks.forEach((rank, index) => rank.classList.toggle("unlocked", index < progress))
    document.querySelector(`[data-next="${number}"]`)?.removeAttribute("hidden")
    if (number === 5) document.querySelector("[data-game-complete]")?.removeAttribute("hidden")
  }

  document.querySelector("[data-build-badge]")?.addEventListener("click", () => {
    const name = document.querySelector("#agent-name").value.trim()
    const unit = document.querySelector("#agent-unit").value
    const skills = [...document.querySelectorAll("[name='skill']:checked")].map(
      (input) => input.value,
    )
    if (name.length < 2 || !unit || skills.length < 2)
      return feedback(
        1,
        "Un dossier valide demande un nom, une unité et au moins deux compétences.",
        false,
      )
    document.querySelector("#badge-output").textContent =
      `$nom = '${name}'\n$unite = '${unit}'\n$competences = @('${skills.join("', '")}')\n\nCARTE MARINE VALIDÉE — ${name.toUpperCase()}`
    feedback(1, "Mission réussie : tu as transformé des données en variables et tableau.", true)
    complete(1)
  })

  document.querySelector("#alert-slider")?.addEventListener("input", (event) => {
    document.querySelector("#alert-value").textContent = `${event.target.value}%`
  })
  document.querySelectorAll("[data-alert-choice]").forEach((button) =>
    button.addEventListener("click", () => {
      document
        .querySelectorAll("[data-alert-choice]")
        .forEach((item) => item.classList.toggle("selected", item === button))
    }),
  )
  document.querySelector("[data-check-alert]")?.addEventListener("click", () => {
    const choice = document.querySelector("[data-alert-choice].selected")?.dataset.alertChoice
    const load = Number(document.querySelector("#alert-slider").value)
    const good = choice === "if" && load >= 80
    feedback(
      2,
      good
        ? "Alerte correctement déclenchée : la condition teste le seuil critique."
        : "Observe le seuil : quelle structure exécute une action seulement si CPU ≥ 80 ?",
      good,
    )
    if (good) complete(2)
  })

  const order = []
  const tokens = [...document.querySelectorAll(".pipeline-token")]
  const slot = document.querySelector("#pipeline-slot")
  tokens.forEach((token) =>
    token.addEventListener("click", () => {
      const id = Number(token.dataset.order)
      const found = order.indexOf(id)
      if (found >= 0) order.splice(found, 1)
      else order.push(id)
      tokens.forEach((item) =>
        item.classList.toggle("selected", order.includes(Number(item.dataset.order))),
      )
      slot.textContent = order.length
        ? order
            .map((n) => tokens.find((item) => Number(item.dataset.order) === n).textContent.trim())
            .join(" | ")
        : "Clique les blocs dans l’ordre du pipeline…"
    }),
  )
  document.querySelector("[data-reset-pipeline]")?.addEventListener("click", () => {
    order.splice(0)
    tokens.forEach((t) => t.classList.remove("selected"))
    slot.textContent = "Clique les blocs dans l’ordre du pipeline…"
  })
  document.querySelector("[data-check-pipeline]")?.addEventListener("click", () => {
    const good = order.join(",") === "1,2,3,4"
    feedback(
      3,
      good
        ? "Pipeline opérationnel : source → tri → sélection → export."
        : "Le pipeline commence par produire des objets, puis les transforme avant l’export.",
      good,
    )
    if (good) complete(3)
  })

  document.querySelectorAll("[data-module-choice]").forEach((button) =>
    button.addEventListener("click", () => {
      document
        .querySelectorAll("[data-module-choice]")
        .forEach((item) => item.classList.toggle("selected", item === button))
    }),
  )
  document.querySelector("[data-check-module]")?.addEventListener("click", () => {
    const good =
      document.querySelector("[data-module-choice].selected")?.dataset.moduleChoice === "psm1"
    feedback(
      4,
      good
        ? "Exact : les fonctions vivent dans le .psm1, puis sont exportées et importées."
        : "Cherche le fichier qui contient réellement le code réutilisable du module.",
      good,
    )
    if (good) complete(4)
  })

  document.querySelectorAll("[data-ad-choice]").forEach((button) =>
    button.addEventListener("click", () => {
      document
        .querySelectorAll("[data-ad-choice]")
        .forEach((item) => item.classList.toggle("selected", item === button))
    }),
  )
  document.querySelector("[data-check-ad]")?.addEventListener("click", () => {
    const good =
      document.querySelector("[data-ad-choice].selected")?.dataset.adChoice === "simulation"
    feedback(
      5,
      good
        ? "Décision sûre : simuler, contrôler le rapport, puis seulement appliquer."
        : "Une automatisation AD se teste d’abord sans modifier l’annuaire.",
      good,
    )
    if (good) complete(5)
  })

  document
    .querySelectorAll("[data-next]")
    .forEach((button) =>
      button.addEventListener("click", () => show(Number(button.dataset.next) + 1)),
    )
  document
    .querySelectorAll("[data-prev]")
    .forEach((button) =>
      button.addEventListener("click", () => show(Number(button.dataset.prev) - 1)),
    )
  document.querySelector("[data-reset-game]")?.addEventListener("click", () => {
    progress = 0
    localStorage.removeItem(KEY)
    show(1)
    location.reload()
  })
  document.querySelectorAll("[data-next]").forEach((button) => {
    button.hidden = Number(button.dataset.next) > progress
  })
  if (progress >= 5) document.querySelector("[data-game-complete]")?.removeAttribute("hidden")
  show(mission)
})()
