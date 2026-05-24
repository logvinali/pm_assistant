/* ═══════════════════════════════════════════════════════════
   PM Assistant · app.js
   Вся интерактивность прототипа без бэкенда
   ═══════════════════════════════════════════════════════════ */

/* ─── Данные (замещают бэкенд) ───────────────────────────── */

const PROJECTS = {
  alpha: {
    name: "Alpha ERP",
    subtitle: "Интеграция CRM и биллинга",
    risk: "68%",
    riskLevel: "danger",
    deadline: "28 июня 2026",
    losses: "7,4 млн ₽",
    conflicts: 4,
    kicker: "Критический проект",
    summary:
      "AI обнаружил расхождение дат в четырёх источниках. Jira указывает 20 мая, Confluence — 25 мая, протокол встречи — 22 мая, письмо клиенту — 24 мая. Унификация на 22 мая снижает финансовый риск.",
    actions: [
      "Унифицировать дату релиза на 22 мая во всех системах",
      "Перенести старт интеграционного тестирования на 2 дня",
      "Запросить письменное подтверждение у API-команды",
    ],
    sources: ["Jira #4521 · обновлено 14.05", "Confluence: страница «План Q2»", "Протокол встречи 12.05", "Письмо клиенту от 11.05"],
  },
  nova: {
    name: "Nova Stack",
    subtitle: "Миграция платформы внутреннего портала",
    risk: "54%",
    riskLevel: "warn",
    deadline: "11 июля 2026",
    losses: "3,1 млн ₽",
    conflicts: 2,
    kicker: "Риск перегрузки",
    summary:
      "6 сотрудников выходят за порог 40 ч/нед на следующей неделе. API-контракт со смежной командой не подтверждён. Модель рекомендует перераспределить 2 задачи на менее загруженных участников.",
    actions: [
      "Подтвердить API-контракт у смежной команды до пятницы",
      "Перераспределить задачу «Нагрузочное тестирование» с backend на QA",
      "Добавить буфер +3 дня к финальной интеграции",
    ],
    sources: ["Brief проекта · загружен 08.05", "Операционные логи Jira (89 задач)", "История похожего релиза «Sigma»"],
  },
  gamma: {
    name: "Gamma Cloud",
    subtitle: "Презентация на комитет во вторник",
    risk: "Готов",
    riskLevel: "safe",
    deadline: "Вторник, 27 мая",
    losses: "—",
    conflicts: 2,
    kicker: "Проверка отчёта",
    summary:
      "AI сопоставил 26 цифр из 18 слайдов с данными Jira и финансовым snapshot. Найдено 2 расхождения: дата релиза в PPTX (15 мая) не совпадает с Jira (20 мая). Сумма потерь верифицирована.",
    actions: [
      "Обновить дату на слайдах 4 и 11 — с 15 мая на 20 мая",
      "Добавить сноску к прогнозу загрузки команды",
      "Презентация готова к показу после правок",
    ],
    sources: ["PPTX: слайд 4, слайд 11", "Jira #4521 · статус обновлён 14.05", "Finance snapshot 12.05 · Budget review"],
  },
};

const AI_ANSWERS = {
  losses: {
    title: "Откуда цифра по убыткам?",
    text: "7,4 млн ₽ — сумма трёх составляющих: штраф по SLA (4,2 млн), задержка запуска биллинга на 2 недели (2,1 млн) и дополнительная загрузка команды поддержки (1,1 млн). Источники: Finance snapshot 12.05, контракт клиента и данные HR о стоимости часа.",
  },
  delay: {
    title: "Почему релиз ушёл вправо?",
    text: "Главная причина — не подтверждённая дата интеграции с API-командой смежного отдела. Вторая причина — расхождение дат в Jira и Confluence, из-за которого команда работала с разными ориентирами. Такая же комбинация была в проекте «Sigma» в марте.",
  },
  critical: {
    title: "Какая задача тянет критический путь?",
    text: "Задача «Интеграционное тестирование» (Jira #4521, ответственный: Иванов И.). Она зависит от API-контракта, который ещё не подписан. Сдвиг этой задачи на 2 дня переносит ещё 3 зависимые точки, но сохраняет клиентское окно релиза.",
  },
  unconfirmed: {
    title: "Какие сроки ещё не подтверждены?",
    text: "Не подтверждено 3 даты: (1) API-интеграция с командой Nova — ответственный не назначен; (2) Финальное QA по Alpha ERP — дата в Jira расходится с Confluence; (3) Клиентское демо Gamma Cloud — дата не закреплена в протоколе.",
  },
};

const RECONCILE_STEPS = [
  "Читаю данные из Jira...",
  "Читаю данные из Confluence...",
  "Сравниваю даты по 27 проектам...",
  "Обнаружено 9 расхождений — формирую отчёт...",
];

const RECONCILE_RESULT = {
  title: "Сверка завершена",
  text: "AI нашёл 9 расхождений между Jira и Confluence. Критические: Alpha ERP (4 источника, разброс 5 дней) и Nova Stack (2 источника, разброс 3 дня). Рекомендую начать с Alpha ERP — там наибольший финансовый риск.",
};

const VERIFY_STEPS = [
  "Читаю загруженный файл...",
  "Извлекаю цифры и даты...",
  "Сверяю с данными систем...",
  "Генерирую отчёт о расхождениях...",
];

/* ─── Навигация между экранами ───────────────────────────── */

function initNavigation() {
  const screens = document.querySelectorAll(".product-view");
  const navItems = document.querySelectorAll(".nav-item");

  function showScreen(target) {
    if (!target) return;

    screens.forEach((s) => s.classList.remove("is-active"));
    navItems.forEach((n) => n.classList.remove("nav-item-active"));

    const screen = document.getElementById("screen-" + target);
    if (screen) screen.classList.add("is-active");

    const navItem = document.querySelector(`.nav-item[data-screen-target="${target}"]`);
    if (navItem) navItem.classList.add("nav-item-active");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Все кнопки с data-screen-target
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-screen-target]");
    if (btn) {
      const target = btn.dataset.screenTarget;
      showScreen(target);
    }
  });
}

/* ─── Тултипы (наведение) ────────────────────────────────── */

function initTooltips() {
  const card = document.getElementById("tooltip-card");
  const titleEl = document.getElementById("tooltip-title");
  const textEl = document.getElementById("tooltip-text");
  let hideTimer = null;

  function show(el) {
    const title = el.dataset.tooltipTitle;
    const text = el.dataset.tooltipText;
    if (!title && !text) return;

    clearTimeout(hideTimer);
    titleEl.textContent = title || "";
    textEl.textContent = text || "";

    const rect = el.getBoundingClientRect();
    card.style.top = rect.bottom + window.scrollY + 8 + "px";
    card.style.left = Math.min(rect.left + window.scrollX, window.innerWidth - 280) + "px";
    card.classList.remove("is-hidden");
  }

  function hide() {
    hideTimer = setTimeout(() => card.classList.add("is-hidden"), 200);
  }

  document.querySelectorAll(".has-tooltip").forEach((el) => {
    el.addEventListener("mouseenter", () => show(el));
    el.addEventListener("mouseleave", hide);
    el.addEventListener("focus", () => show(el));
    el.addEventListener("blur", hide);
  });

  card.addEventListener("mouseenter", () => clearTimeout(hideTimer));
  card.addEventListener("mouseleave", hide);
}

/* ─── Модальное окно ─────────────────────────────────────── */

const modal = {
  backdrop: null,
  title: null,
  kicker: null,
  text: null,
  metrics: null,
  list: null,

  init() {
    this.backdrop = document.getElementById("modal-backdrop");
    this.title = document.getElementById("modal-title");
    this.kicker = document.getElementById("modal-kicker");
    this.text = document.getElementById("modal-text");
    this.metrics = document.getElementById("modal-metrics");
    this.list = document.getElementById("modal-list");

    document.getElementById("modal-close").addEventListener("click", () => this.hide());
    this.backdrop.addEventListener("click", (e) => {
      if (e.target === this.backdrop) this.hide();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.hide();
    });
  },

  show({ kicker, title, text, metrics = [], list = [] }) {
    this.kicker.textContent = kicker || "";
    this.title.textContent = title || "";
    this.text.textContent = text || "";

    this.metrics.innerHTML = metrics
      .map((m) => `<div class="metric-pill"><span>${m}</span></div>`)
      .join("");

    this.list.innerHTML = list
      .map((item) => `<p class="modal-list-item">— ${item}</p>`)
      .join("");

    this.backdrop.classList.remove("is-hidden");
    document.getElementById("modal-close").focus();
  },

  hide() {
    this.backdrop.classList.add("is-hidden");
  },
};

/* ─── Toast-уведомления ──────────────────────────────────── */

function showToast(message, duration = 3000) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("is-hidden");
  setTimeout(() => toast.classList.add("is-hidden"), duration);
}

/* ─── Анимация загрузки (имитация ИИ) ───────────────────── */

function runLoader(steps, onDone) {
  const toast = document.getElementById("toast");
  let i = 0;

  function next() {
    if (i < steps.length) {
      toast.textContent = steps[i];
      toast.classList.remove("is-hidden");
      i++;
      setTimeout(next, 900);
    } else {
      toast.classList.add("is-hidden");
      setTimeout(onDone, 200);
    }
  }

  next();
}

/* ─── Действия кнопок ────────────────────────────────────── */

function initActions() {

  // Детали проекта
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='details']");
    if (!btn) return;
    const key = btn.dataset.project;
    const p = PROJECTS[key];
    if (!p) return;

    modal.show({
      kicker: p.kicker,
      title: p.name + " · " + p.subtitle,
      text: p.summary,
      metrics: ["Риск: " + p.risk, "Дедлайн: " + p.deadline, "Потери: " + p.losses, "Конфликтов: " + p.conflicts],
      list: p.actions,
    });
  });

  // Сверить данные
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='reconcile']");
    if (!btn) return;
    runLoader(RECONCILE_STEPS, () => {
      modal.show({
        kicker: "Результат сверки",
        title: RECONCILE_RESULT.title,
        text: RECONCILE_RESULT.text,
        metrics: ["Проверено: 27 проектов", "Расхождений: 9", "Критических: 2"],
        list: [
          "Alpha ERP — унифицировать дату на 22 мая",
          "Nova Stack — согласовать API-контракт",
          "Остальные 7 расхождений — допустимые, мониторинг",
        ],
      });
    });
  });

  // Добавить в отчёт
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='report']");
    if (!btn) return;
    const key = btn.dataset.project;
    const p = PROJECTS[key];
    showToast("✓ " + (p ? p.name : "Проект") + " добавлен в отчёт");
  });

  // Найти источник
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='source']");
    if (!btn) return;
    const key = btn.dataset.project;
    const p = PROJECTS[key];
    if (!p) return;
    modal.show({
      kicker: "Источники данных",
      title: p.name + " · верификация цифр",
      text: "AI сопоставил цифры из презентации с корпоративными системами. Все найденные источники приведены ниже.",
      metrics: ["Цифр проверено: 26", "Подтверждено: 24", "Расхождений: 2"],
      list: p.sources,
    });
  });

  // Запустить AI-проверку
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='verify']");
    if (!btn) return;
    runLoader(VERIFY_STEPS, () => {
      const key = btn.dataset.project;
      const p = PROJECTS[key];
      modal.show({
        kicker: "AI-проверка завершена",
        title: "Отчёт верифицирован",
        text: p
          ? p.summary
          : "Проверка завершена. Найдено 2 расхождения, 24 цифры подтверждены.",
        metrics: ["Слайдов: 18", "Цифр: 26", "Подтверждено: 24", "Расхождений: 2"],
        list: p ? p.actions : [],
      });
    });
  });

  // Корректировка вручную
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='manual']");
    if (!btn) return;
    showToast("Режим ручной корректировки открыт");
  });

  // Сводная проверка
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='verify-all']");
    if (!btn) return;
    runLoader(
      ["Читаю все загруженные документы...", "Сравниваю с Jira и Confluence...", "Генерирую сводный отчёт..."],
      () => {
        modal.show({
          kicker: "Сводная проверка",
          title: "Все презентации проверены",
          text: "AI проверил 3 активных отчёта. Критических расхождений: 2. Всего цифр сопоставлено: 74. Рекомендую начать с Gamma Cloud.",
          metrics: ["Отчётов: 3", "Цифр: 74", "Расхождений: 2"],
          list: ["Gamma Cloud — обновить дату релиза на слайдах 4 и 11", "Alpha ERP — уточнить сумму потерь"],
        });
      }
    );
  });

  // Клик на карточку категории (category-strip)
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".category-card").forEach((c) => c.classList.remove("category-card-active"));
      card.classList.add("category-card-active");
    });
  });

  // Клик по status-item с data-action
  document.addEventListener("click", (e) => {
    const item = e.target.closest(".status-item[data-action]");
    if (!item) return;
    const action = item.dataset.action;
    const key = item.dataset.project;
    if (action === "details" && key) {
      const p = PROJECTS[key];
      if (p) {
        modal.show({
          kicker: p.kicker,
          title: p.name,
          text: p.summary,
          metrics: ["Риск: " + p.risk, "Дедлайн: " + p.deadline],
          list: p.actions,
        });
      }
    }
  });
}

/* ─── AI-экран: вопросы и ответы ────────────────────────── */

function initAiScreen() {
  const answerCard = document.getElementById("answer-card");
  const answerTitle = document.getElementById("answer-title");
  const answerText = document.getElementById("answer-text");

  function typeText(el, text, speed = 18) {
    el.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);
  }

  function showAnswer(key) {
    const answer = AI_ANSWERS[key];
    if (!answer) return;

    answerCard.style.opacity = "0.4";
    answerTitle.textContent = "AI думает...";
    answerText.textContent = "";

    setTimeout(() => {
      answerTitle.textContent = answer.title;
      typeText(answerText, answer.text);
      answerCard.style.opacity = "1";

      // Сохраняем последний вопрос в профиль
      const profileQ = document.getElementById("profile-last-question");
      if (profileQ) profileQ.textContent = answer.title;
    }, 800);
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-question]");
    if (!btn) return;
    const key = btn.dataset.question;
    showAnswer(key);

    // Переключиться на AI-экран если нажали из другого места
    const aiScreen = document.getElementById("screen-ai");
    if (aiScreen && !aiScreen.classList.contains("is-active")) {
      document.querySelectorAll(".product-view").forEach((s) => s.classList.remove("is-active"));
      aiScreen.classList.add("is-active");
      document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("nav-item-active"));
      const navAi = document.querySelector('.nav-item[data-screen-target="ai"]');
      if (navAi) navAi.classList.add("nav-item-active");
    }
  });
}

/* ─── Поиск и фильтры ────────────────────────────────────── */

function initSearch() {
  const input = document.getElementById("global-search");
  const chips = document.querySelectorAll(".filter-chip");
  const grid = document.getElementById("project-grid");
  const emptyState = document.getElementById("empty-state");

  function filterCards(query) {
    if (!grid) return;
    const cards = grid.querySelectorAll(".project-card");
    let visible = 0;

    cards.forEach((card) => {
      const text = (card.dataset.tags || "") + " " + card.textContent;
      const match = !query || text.toLowerCase().includes(query.toLowerCase());
      card.style.display = match ? "" : "none";
      if (match) visible++;
    });

    if (emptyState) {
      emptyState.classList.toggle("is-hidden", visible > 0);
    }
  }

  if (input) {
    input.addEventListener("input", (e) => filterCards(e.target.value));

    // Enter → переход на экран проектов
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.value.trim()) {
        document.querySelectorAll(".product-view").forEach((s) => s.classList.remove("is-active"));
        const projectsScreen = document.getElementById("screen-projects");
        if (projectsScreen) projectsScreen.classList.add("is-active");
        filterCards(e.target.value);
      }
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("filter-chip-active"));
      chip.classList.add("filter-chip-active");

      const filter = chip.dataset.filter;
      if (filter === "all") {
        filterCards("");
      } else {
        filterCards(filter);
      }
    });
  });
}

/* ─── Загрузка файла (имитация) ──────────────────────────── */

function initUpload() {
  const zone = document.getElementById("upload-zone");
  const fileInput = document.getElementById("file-input");
  const uploadTitle = document.getElementById("upload-title");
  const uploadText = document.getElementById("upload-text");

  if (!zone || !fileInput) return;

  zone.addEventListener("click", () => fileInput.click());

  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    zone.classList.add("upload-zone-active");
  });

  zone.addEventListener("dragleave", () => zone.classList.remove("upload-zone-active"));

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    zone.classList.remove("upload-zone-active");
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  });

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) handleFile(file);
  });

  function handleFile(file) {
    uploadTitle.textContent = "Анализирую «" + file.name + "»...";
    uploadText.textContent = "AI извлекает цифры и сверяет с данными систем.";

    runLoader(VERIFY_STEPS, () => {
      uploadTitle.textContent = "✓ " + file.name + " проверен";
      uploadText.textContent = "Найдено 2 расхождения. Смотрите результаты справа.";
      showToast("✓ Файл «" + file.name + "» проанализирован");
    });
  }
}

/* ─── Инициализация ──────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initTooltips();
  modal.init();
  initActions();
  initAiScreen();
  initSearch();
  initUpload();
});
