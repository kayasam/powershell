;(() => {
  "use strict"

  const letters = ["A", "B", "C", "D"]
  const root = document.querySelector("[data-quiz]")
  if (!root) return
  const data = window.powerShellQuizBanks?.[root.dataset.quiz]
  if (!data || !Array.isArray(data.questions) || data.questions.length !== 20) {
    root.innerHTML = '<p class="quiz-error">Ce quiz n’est pas disponible. Revenez au chapitre.</p>'
    return
  }

  const distribution = [0, 0, 0, 0]
  for (const question of data.questions) {
    if (
      question.choices?.length !== 4 ||
      !Number.isInteger(question.answer) ||
      question.answer < 0 ||
      question.answer > 3
    ) {
      root.innerHTML = '<p class="quiz-error">La banque de questions est incomplète.</p>'
      return
    }
    distribution[question.answer] += 1
  }
  if (distribution.some((count) => count !== 5)) {
    root.innerHTML = '<p class="quiz-error">La répartition des réponses doit être équilibrée.</p>'
    return
  }

  const byId = (id) => document.getElementById(id)
  const questionPanel = byId("question-panel")
  const resultPanel = byId("result-panel")
  const answers = byId("answers")
  const feedback = byId("feedback")
  const nextButton = byId("next-question")
  let order = []
  let current = 0
  let score = 0
  let answered = false

  document.title = `${data.title} · PowerShell`
  byId("quiz-kicker").textContent = data.chapter
  byId("quiz-title").textContent = data.title
  byId("quiz-intro").textContent = data.intro
  byId("chapter-link").href = data.chapterLink
  byId("result-course-link").href = data.chapterLink

  function shuffled(values) {
    const result = values.slice()
    for (let index = result.length - 1; index > 0; index -= 1) {
      const other = Math.floor(Math.random() * (index + 1))
      ;[result[index], result[other]] = [result[other], result[index]]
    }
    return result
  }

  function showQuestion() {
    answered = false
    nextButton.disabled = true
    feedback.className = "feedback"
    feedback.replaceChildren()
    const question = data.questions[order[current]]
    byId("current-question").textContent = `Question ${current + 1} sur 20`
    byId("progress-bar").style.width = `${((current + 1) / 20) * 100}%`
    byId("question-theme").textContent = question.theme
    byId("question-title").textContent = question.question
    answers.replaceChildren()
    question.choices.forEach((choice, index) => {
      const button = document.createElement("button")
      button.type = "button"
      button.className = "answer"
      const key = document.createElement("span")
      key.className = "answer-key"
      key.textContent = letters[index]
      const label = document.createElement("span")
      label.textContent = choice
      button.append(key, label)
      button.addEventListener("click", () => choose(index))
      answers.append(button)
    })
  }

  function choose(index) {
    if (answered) return
    answered = true
    const question = data.questions[order[current]]
    const success = index === question.answer
    if (success) score += 1
    answers.querySelectorAll(".answer").forEach((button, position) => {
      button.disabled = true
      if (position === question.answer) button.classList.add("correct")
      if (position === index && !success) button.classList.add("wrong")
    })
    const status = document.createElement("strong")
    status.textContent = success ? "Bonne réponse !" : "À revoir"
    const explanation = document.createElement("p")
    explanation.textContent = question.explanation
    feedback.replaceChildren(status, explanation)
    feedback.className = `feedback visible ${success ? "correct" : "wrong"}`
    nextButton.disabled = false
  }

  function finish() {
    questionPanel.classList.add("hidden")
    resultPanel.classList.add("visible")
    const percent = Math.round((score / 20) * 100)
    byId("result-score").textContent = `${score}/20`
    byId("result-percent").textContent = `${percent} %`
    byId("correct-count").textContent = String(score)
    byId("wrong-count").textContent = String(20 - score)
    byId("result-title").textContent = score >= 16 ? "Cap franchi !" : "Encore un tour de révision"
    byId("result-message").textContent =
      score >= 16
        ? "Vous pouvez passer aux exercices pratiques et au fil rouge."
        : "Relisez les explications et cherchez à reformuler les notions avant de retenter."
    try {
      const key = `powershell-quiz-${data.id}`
      const best = Math.max(score, Number(localStorage.getItem(key) || 0))
      localStorage.setItem(key, String(best))
      byId("best-score").textContent = String(best)
    } catch {
      byId("best-score").textContent = String(score)
    }
    resultPanel.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  function start() {
    order = shuffled(data.questions.map((_, index) => index))
    current = 0
    score = 0
    questionPanel.classList.remove("hidden")
    resultPanel.classList.remove("visible")
    showQuestion()
  }

  nextButton.addEventListener("click", () => {
    if (!answered) return
    if (current === 19) finish()
    else {
      current += 1
      showQuestion()
    }
  })
  byId("restart-quiz").addEventListener("click", start)
  start()
})()
