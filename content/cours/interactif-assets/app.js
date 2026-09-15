;(() => {
  const KEY = "powershell-course-v2"
  const load = () => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || { completed: [] }
    } catch {
      return { completed: [] }
    }
  }
  const save = (state) => localStorage.setItem(KEY, JSON.stringify(state))
  const state = load()
  state.completed = Array.isArray(state.completed) ? state.completed : []

  const bestQuiz = (chapter) => {
    try {
      return Number(localStorage.getItem(`powershell-quiz-${chapter}`) || 0)
    } catch {
      return 0
    }
  }
  const missionProgress = () => {
    try {
      return Math.min(5, Math.max(0, Number(localStorage.getItem("powershell-grand-line-v1") || 0)))
    } catch {
      return 0
    }
  }

  const updateIndex = () => {
    const cards = [...document.querySelectorAll(".chapter-card[data-chapter]")]
    if (!cards.length) return
    cards.forEach((card) => {
      const done = state.completed.includes(card.dataset.chapter)
      card.classList.toggle("done", done)
      const status = card.querySelector(".card-status")
      if (status) status.textContent = done ? "✓ Chapitre terminé" : "Commencer le chapitre →"
      const score = bestQuiz(card.dataset.chapter)
      let badge = card.querySelector(".quiz-best")
      if (!badge) {
        badge = document.createElement("span")
        badge.className = "quiz-best"
        card.append(badge)
      }
      badge.textContent = score
        ? `Quiz : ${score}/20${score >= 16 ? " ✓" : ""}`
        : "Quiz à découvrir"
    })
    const total = cards.length
    const completed = cards.filter((card) => card.classList.contains("done")).length
    const fill = document.querySelector("[data-progress-fill]")
    const label = document.querySelector("[data-progress-label]")
    if (fill) fill.style.width = `${Math.round((completed / total) * 100)}%`
    if (label) label.textContent = `${completed} / ${total} chapitres terminés`
    const panel = document.querySelector(".progress-panel")
    if (panel) {
      let dashboard = panel.querySelector(".learning-dashboard")
      if (!dashboard) {
        dashboard = document.createElement("div")
        dashboard.className = "learning-dashboard"
        panel.append(dashboard)
      }
      const passed = cards.filter((card) => bestQuiz(card.dataset.chapter) >= 16).length
      const missions = missionProgress()
      const next = cards.find((card) => !state.completed.includes(card.dataset.chapter))
      dashboard.replaceChildren()
      for (const [name, value] of [
        ["Chapitres", `${completed}/${total}`],
        ["Quiz réussis", `${passed}/${total}`],
        ["Missions", `${missions}/5`],
      ]) {
        const item = document.createElement("span")
        const small = document.createElement("small")
        const strong = document.createElement("strong")
        small.textContent = name
        strong.textContent = value
        item.append(small, strong)
        dashboard.append(item)
      }
      const link = document.createElement("a")
      link.href = next?.href || "tp-fil-rouge/jeu-fil-rouge.html"
      link.textContent = next
        ? `Continuer : chapitre ${next.dataset.chapter.slice(0, 2)} →`
        : "Tous les chapitres terminés · jouer →"
      dashboard.append(link)
    }
  }

  const indexSearch = document.querySelector("[data-index-search]")
  if (indexSearch) {
    indexSearch.addEventListener("input", () => {
      const query = indexSearch.value.toLocaleLowerCase("fr").trim()
      document.querySelectorAll(".chapter-card").forEach((card) => {
        card.hidden = !card.dataset.search.toLocaleLowerCase("fr").includes(query)
      })
      document.querySelectorAll(".module").forEach((module) => {
        module.hidden = !module.querySelector(".chapter-card:not([hidden])")
      })
    })
  }
  updateIndex()

  const chapterId = document.body.dataset.chapter
  if (chapterId) {
    const button = document.querySelector("[data-complete]")
    const paintCompletion = () => {
      const done = state.completed.includes(chapterId)
      if (button) {
        button.classList.toggle("done", done)
        button.textContent = done ? "✓ Chapitre terminé" : "Marquer comme terminé"
        button.setAttribute("aria-pressed", String(done))
      }
      document.querySelectorAll(".course-nav-link[data-chapter]").forEach((link) => {
        const ok = link.querySelector(".ok")
        if (ok) ok.textContent = state.completed.includes(link.dataset.chapter) ? "✓" : ""
      })
    }
    button?.addEventListener("click", () => {
      const position = state.completed.indexOf(chapterId)
      if (position >= 0) state.completed.splice(position, 1)
      else state.completed.push(chapterId)
      save(state)
      paintCompletion()
    })
    paintCompletion()
  }

  document.querySelectorAll(".lesson pre").forEach((pre) => {
    const copy = document.createElement("button")
    copy.type = "button"
    copy.className = "copy-button"
    copy.textContent = "Copier"
    copy.addEventListener("click", async () => {
      const value = pre.querySelector("code")?.innerText || pre.innerText
      try {
        if (navigator.clipboard && window.isSecureContext)
          await navigator.clipboard.writeText(value)
        else {
          const field = document.createElement("textarea")
          field.value = value
          field.style.position = "fixed"
          field.style.opacity = "0"
          document.body.appendChild(field)
          field.select()
          document.execCommand("copy")
          field.remove()
        }
        copy.textContent = "Copié !"
        copy.classList.add("copied")
        setTimeout(() => {
          copy.textContent = "Copier"
          copy.classList.remove("copied")
        }, 1500)
      } catch {
        copy.textContent = "Sélectionne le code"
      }
    })
    pre.appendChild(copy)
  })

  document.querySelectorAll(".quiz-card").forEach((quiz) => {
    let selected = null
    const options = [...quiz.querySelectorAll(".quiz-option")]
    const feedback = quiz.querySelector(".quiz-feedback")
    options.forEach((option) =>
      option.addEventListener("click", () => {
        selected = Number(option.dataset.index)
        options.forEach((item) => item.classList.toggle("selected", item === option))
        feedback.textContent = "Choix enregistré. Valide quand tu es prêt."
        feedback.className = "quiz-feedback"
      }),
    )
    quiz.querySelector(".quiz-check")?.addEventListener("click", () => {
      if (selected === null) {
        feedback.textContent = "Choisis d’abord une réponse."
        return
      }
      const correct = Number(quiz.dataset.answer)
      options.forEach((item, index) => {
        item.classList.remove("wrong", "correct")
        if (index === correct) item.classList.add("correct")
        else if (index === selected) item.classList.add("wrong")
      })
      const success = selected === correct
      feedback.textContent = success
        ? `Bien vu ! ${quiz.dataset.explanation}`
        : `Pas encore. ${quiz.dataset.explanation}`
      feedback.className = `quiz-feedback ${success ? "good" : "bad"}`
    })
  })

  const navSearch = document.querySelector("[data-nav-search]")
  navSearch?.addEventListener("input", () => {
    const query = navSearch.value.toLocaleLowerCase("fr").trim()
    document.querySelectorAll(".course-nav-link").forEach((link) => {
      link.hidden = !link.textContent.toLocaleLowerCase("fr").includes(query)
    })
  })
  document.querySelector("[data-menu]")?.addEventListener("click", () => {
    document.body.classList.toggle("menu-open")
  })
})()
