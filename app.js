const STORAGE_KEY = "yadro-project-ai-session";

const ROLE_CONFIGS = {
  office_head: {
    label: "Руководитель офиса проектов",
    shortLabel: "руководитель офиса проектов",
    focus: "3 риска и 2 отчёта",
    topbar: {
      portfolio: "Портфель Q2",
      initiatives: "27 активных инициатив"
    },
    summary: {
      risks: "12 активных",
      reports: "3 на проверке",
      finance: "9,8 млн ₽ эффекта",
      overview: "27 инициатив"
    },
    projectIds: ["alpha", "nova", "gamma"],
    features: {
      risks: true,
      reports: true,
      finance: true,
      overview: true,
      portfolio: true,
      ownProjects: false,
      reportUpload: false,
      reportDecision: true,
      recommendationDecision: true,
      meetings: true,
      returnReport: true
    },
    user: {
      name: "Анна Петрова",
      email: "a.petrova@yadro.local",
      department: "Офис проектов",
      digest: "Каждый день",
      notifications: true,
      jira: true,
      confluence: true,
      drive: true
    },
    permissions: [
      {
        title: "Просмотр портфеля и рисков",
        text: "Агрегированный обзор по портфелю, конфликтам сроков и зонам, где AI видит каскадный эффект."
      },
      {
        title: "Проверка и принятие отчётов",
        text: "Руководитель видит подтверждённые цифры, расхождения и может принять или вернуть отчёт менеджеру."
      },
      {
        title: "Принятие рекомендаций и совещания",
        text: "Из деталей проекта можно принять рекомендацию AI или сразу инициировать совещание по риску."
      }
    ]
  },
  project_manager: {
    label: "Проектный менеджер",
    shortLabel: "проектный менеджер",
    focus: "2 проекта и 1 возвращённый отчёт",
    topbar: {
      portfolio: "Мои проекты",
      initiatives: "5 активных инициатив"
    },
    summary: {
      risks: "5 рисков по вашим проектам",
      reports: "2 отчёта требуют обновления",
      finance: "Нет доступа",
      overview: "5 активных проектов"
    },
    projectIds: ["alpha", "nova"],
    features: {
      risks: true,
      reports: true,
      finance: false,
      overview: true,
      portfolio: true,
      ownProjects: true,
      reportUpload: true,
      reportDecision: false,
      recommendationDecision: false,
      meetings: false,
      returnReport: false
    },
    user: {
      name: "Иван Соколов",
      email: "i.sokolov@yadro.local",
      department: "Проектный офис",
      digest: "Каждую неделю",
      notifications: true,
      jira: true,
      confluence: true,
      drive: true
    },
    permissions: [
      {
        title: "Свои проекты и риски",
        text: "Просмотр только своих инициатив, конфликтов по срокам и причин красной зоны."
      },
      {
        title: "Загрузка и обновление отчётов",
        text: "Можно загружать материалы, видеть недостающие источники и получать отчёты обратно с комментарием."
      },
      {
        title: "Комментарии руководителя",
        text: "Все замечания и возвраты доступны внутри карточки проекта и на экране отчётов."
      }
    ]
  },
  finance_controller: {
    label: "Финансовый контролёр",
    shortLabel: "финансовый контролёр",
    focus: "2 расхождения и 3 источника цифр",
    topbar: {
      portfolio: "Финансовый контур",
      initiatives: "9 кейсов на сверке"
    },
    summary: {
      risks: "4 риска с денежным эффектом",
      reports: "4 цифры требуют подтверждения",
      finance: "7,9 млн ₽ под контролем",
      overview: "9 проектов на сверке"
    },
    projectIds: ["alpha", "gamma"],
    features: {
      risks: true,
      reports: true,
      finance: true,
      overview: true,
      portfolio: true,
      ownProjects: false,
      reportUpload: false,
      reportDecision: false,
      recommendationDecision: false,
      meetings: false,
      returnReport: false
    },
    user: {
      name: "Мария Кузнецова",
      email: "m.kuznetsova@yadro.local",
      department: "Финансовый контроль",
      digest: "Только по критическим рискам",
      notifications: true,
      jira: true,
      confluence: true,
      drive: true
    },
    permissions: [
      {
        title: "Финансовые потери",
        text: "Расчёт потерь при сдвиге срока и быстрый переход к подтверждающим источникам."
      },
      {
        title: "Проверка источников цифр",
        text: "Сверка finance snapshot, отчётов, Jira и Confluence без пустых кликов."
      },
      {
        title: "Расхождения между системами",
        text: "Все несостыковки по датам и суммам собираются в одном месте с пояснением AI."
      }
    ]
  },
  top_manager: {
    label: "Топ-менеджер",
    shortLabel: "топ-менеджер",
    focus: "Ключевые риски и summary по портфелю",
    topbar: {
      portfolio: "Обзор портфеля",
      initiatives: "27 инициатив в контуре"
    },
    summary: {
      risks: "6 ключевых рисков",
      reports: "Summary по 3 отчётам",
      finance: "11,2 млн ₽ возможного эффекта",
      overview: "27 инициатив"
    },
    projectIds: ["alpha", "nova", "gamma"],
    features: {
      risks: true,
      reports: true,
      finance: true,
      overview: true,
      portfolio: true,
      ownProjects: false,
      reportUpload: false,
      reportDecision: false,
      recommendationDecision: false,
      meetings: false,
      returnReport: false
    },
    user: {
      name: "Дмитрий Орлов",
      email: "d.orlov@yadro.local",
      department: "Стратегическое развитие",
      digest: "Каждую неделю",
      notifications: true,
      jira: false,
      confluence: true,
      drive: true
    },
    permissions: [
      {
        title: "Агрегированный обзор портфеля",
        text: "Summary по инициативам, где виден риск, дедлайн и масштаб влияния на бизнес."
      },
      {
        title: "Ключевые риски",
        text: "Только самые критичные конфликты и зависимости без операционного шума."
      },
      {
        title: "Финансовый эффект",
        text: "Сводный денежный эффект по задержкам, корректировкам плана и рекомендациям AI."
      }
    ]
  }
};

const PROJECTS = {
  alpha: {
    key: "alpha",
    title: "Alpha ERP",
    subtitle: "Интеграция CRM и биллинга",
    kicker: "Сверка сроков",
    statusLabel: "68% риск",
    statusTone: "danger",
    riskPercent: 68,
    deadline: "28 июня",
    loss: "7,4 млн ₽",
    reportId: "alpha-report",
    filters: ["risk", "sync", "report"],
    note: "AI предлагает перенести старт интеграционного тестирования на 2 дня и унифицировать даты.",
    summary:
      "AI обнаружил расхождение дат в четырёх источниках. Jira указывает 20 мая, Confluence — 25 мая, протокол встречи — 22 мая, письмо клиенту — 24 мая. Унификация на 22 мая снижает финансовый риск.",
    conflictCount: "4 источника",
    modelTrust: "0.84",
    discrepancies: [
      "Jira показывает 20 мая как дату интеграции, Confluence указывает 25 мая.",
      "В протоколе встречи от 22 мая зафиксирована третья дата старта тестирования."
    ],
    conflicts: [
      "Jira и Confluence показывают разные сроки старта интеграции.",
      "API-команда не подтвердила контракт и окно тестирования."
    ],
    sources: [
      "Jira: дата интеграции 20 мая",
      "Confluence: дата интеграции 25 мая",
      "Протокол стендапа: 22 мая",
      "Письмо клиенту: 24 мая"
    ],
    actions: [
      "Унифицировать дату релиза во всех системах.",
      "Перенести старт интеграционного тестирования на 2 дня.",
      "Запросить письменное подтверждение у API-команды."
    ],
    aiRecommendation: {
      title: "Перенести старт интеграционного тестирования на 2 дня",
      text: "Это снимает каскадную перегрузку команды QA и оставляет релиз в клиентском окне.",
      status: "pending"
    },
    report: {
      title: "Еженедельный отчёт Alpha ERP",
      status: "На проверке",
      confirmed: [
        "Финансовые потери подтверждены finance snapshot от 12.05.",
        "Окно клиентского демо подтверждено письмом от аккаунт-команды."
      ],
      missing: [
        "Нужен единый источник даты интеграции.",
        "Не хватает ссылки на подтверждённый API-контракт."
      ],
      leaderAction: "Руководителю нужно принять отчёт или вернуть его менеджеру с комментарием."
    }
  },
  nova: {
    key: "nova",
    title: "Nova Stack",
    subtitle: "Миграция платформы внутреннего портала",
    kicker: "Прогноз риска",
    statusLabel: "54% риск",
    statusTone: "warn",
    riskPercent: 54,
    deadline: "11 июля",
    loss: "2,4 млн ₽",
    reportId: "nova-report",
    filters: ["risk", "retro"],
    note: "Частично ручной контур, но AI уже нашёл критические внешние зависимости и риски перегрузки.",
    summary:
      "6 сотрудников выходят за порог 40 ч/нед на следующей неделе. API-контракт со смежной командой не подтверждён. Модель рекомендует перераспределить 2 задачи на менее загруженных участников.",
    conflictCount: "2 зависимости",
    modelTrust: "0.81",
    discrepancies: [
      "Прогноз загрузки QA не подтверждён свежим capacity review.",
      "Дата передачи API-контракта пока устная и не зафиксирована в системе."
    ],
    conflicts: [
      "6 сотрудников выходят за порог 40 часов на следующей неделе.",
      "Смежная команда не подтвердила окно интеграции."
    ],
    sources: [
      "Brief проекта",
      "Операционные логи команды",
      "История похожих релизов",
      "Частично заполненные задачи Jira"
    ],
    actions: [
      "Подтвердить API-контракт у смежной команды до пятницы.",
      "Перераспределить задачу нагрузочного тестирования.",
      "Добавить буфер +3 дня к финальной интеграции."
    ],
    aiRecommendation: {
      title: "Перераспределить 2 задачи и закрепить владельца зависимости",
      text: "AI видит, что это уменьшит перегрузку и повысит предсказуемость окна интеграции.",
      status: "pending"
    },
    report: {
      title: "Статус-отчёт Nova Stack",
      status: "Требует обновления",
      confirmed: [
        "История похожих релизов подтверждает типовой риск перегрузки.",
        "Окно релиза согласовано с внутренним заказчиком."
      ],
      missing: [
        "Нет прикреплённого weekly capacity review.",
        "Нужна фиксация внешней зависимости в Confluence."
      ],
      leaderAction: "Менеджеру нужно обновить отчёт и прикрепить источники по загрузке."
    }
  },
  gamma: {
    key: "gamma",
    title: "Gamma Cloud",
    subtitle: "Презентация на комитет во вторник",
    kicker: "Проверка отчёта",
    statusLabel: "Готов к проверке",
    statusTone: "safe",
    riskPercent: 31,
    deadline: "03 июля",
    loss: "1,1 млн ₽",
    reportId: "gamma-report",
    filters: ["report"],
    note: "Руководитель может кликнуть по любой цифре и сразу увидеть подтверждающий источник.",
    summary:
      "AI сопоставил 26 цифр из 18 слайдов с данными Jira и финансовым snapshot. Найдено 2 расхождения: дата релиза в PPTX не совпадает с Jira, а прогноз загрузки не подкреплён источником.",
    conflictCount: "2 расхождения",
    modelTrust: "0.92",
    discrepancies: [
      "Дата релиза в PPTX не совпадает с Jira на 5 дней.",
      "В слайде по загрузке нет ссылки на weekly capacity review."
    ],
    conflicts: [
      "В презентации осталось 2 непроверенные цифры.",
      "По одному из финансовых слайдов не хватает ссылки на первоисточник."
    ],
    sources: [
      "PPTX презентации",
      "Jira board проекта",
      "Finance snapshot от 12.05",
      "Папка комитета на корпоративном диске"
    ],
    actions: [
      "Обновить дату релиза на слайдах 4 и 11.",
      "Добавить ссылку на weekly capacity review.",
      "Перезапустить AI-проверку перед комитетом."
    ],
    aiRecommendation: {
      title: "Обновить 2 слайда и прикрепить ссылки на источники",
      text: "После правки сервис сможет автоматически снять статус критичного расхождения.",
      status: "pending"
    },
    report: {
      title: "Презентация Gamma Cloud",
      status: "На AI-проверке",
      confirmed: [
        "Сумма потерь подтверждена финансовым контуром.",
        "Статус внешней интеграции подтверждён письмом команды."
      ],
      missing: [
        "Нужна корректная дата релиза на 2 слайдах.",
        "Нужна ссылка на прогноз загрузки команды."
      ],
      leaderAction: "Руководителю нужно подтвердить финальную версию презентации перед комитетом."
    }
  }
};

const RISK_ITEMS = [
  {
    title: "Расхождение сроков между Jira и Confluence",
    project: "Alpha ERP",
    level: "Высокий",
    source: "Jira, Confluence, протокол встречи",
    explanation: "Для одной вехи зафиксированы три разные даты, из-за чего критический путь расходится с презентацией.",
    action: "Унифицировать дату в Jira и Confluence и обновить презентацию."
  },
  {
    title: "Перегрузка команды тестирования",
    project: "Nova Stack",
    level: "Средний",
    source: "Capacity review, операционные логи",
    explanation: "Следующая неделя перегружает QA и backend, поэтому окно интеграции теряет запас по срокам.",
    action: "Перераспределить 2 задачи и вынести часть тестов раньше."
  },
  {
    title: "Не подтверждён API-контракт",
    project: "Nova Stack",
    level: "Высокий",
    source: "Brief проекта, Jira, письмо смежной команды",
    explanation: "Без статуса по контракту модель удерживает проект в красной зоне даже при нормальной загрузке.",
    action: "Запросить формальное подтверждение и закрепить владельца зависимости."
  },
  {
    title: "Недостаточно данных для проверки отчёта",
    project: "Gamma Cloud",
    level: "Средний",
    source: "PPTX, finance snapshot, weekly capacity review",
    explanation: "Одна из ключевых цифр в презентации не подкреплена прямой ссылкой на источник.",
    action: "Прикрепить источник из weekly capacity review и перепроверить слайд."
  }
];

const REPORT_ITEMS = [
  {
    id: "alpha-report",
    title: "Еженедельный отчёт Alpha ERP",
    project: "Alpha ERP",
    status: "На проверке",
    confirmed: "Финансовые потери и окно демо подтверждены.",
    missing: "Не хватает единой даты интеграции и ссылки на API-контракт.",
    leaderAction: "Принять отчёт или вернуть менеджеру."
  },
  {
    id: "nova-report",
    title: "Статус-отчёт Nova Stack",
    project: "Nova Stack",
    status: "Требует обновления",
    confirmed: "Подтверждён внутренний дедлайн релиза.",
    missing: "Нет capacity review и статуса внешней зависимости.",
    leaderAction: "Запросить обновление отчёта."
  },
  {
    id: "gamma-report",
    title: "Презентация Gamma Cloud",
    project: "Gamma Cloud",
    status: "На AI-проверке",
    confirmed: "Потери и статус внешней интеграции подтверждены.",
    missing: "Нужны ссылки на 2 цифры и корректная дата релиза.",
    leaderAction: "Подтвердить итоговую версию перед комитетом."
  }
];

const REPORT_INSIGHTS = {
  "release-date": {
    title: "Дата релиза в отчёте расходится с Jira",
    project: "Gamma Cloud",
    status: "Критично",
    checked: [
      "PPTX содержит дату 15 мая.",
      "Jira board содержит дату 20 мая.",
      "Протокол встречи содержит дату 18 мая."
    ],
    unconfirmed: ["Не зафиксирована единая эталонная дата релиза."],
    discrepancy: "Слайд презентации расходится с рабочей датой в Jira на 5 дней.",
    source: "PPTX, Jira, протокол встречи",
    recommendation: "Обновить 2 слайда и закрепить одну эталонную дату."
  },
  "financial-loss": {
    title: "Сумма потерь подтверждена финансовым контуром",
    project: "Alpha ERP",
    status: "Проверено",
    checked: [
      "Finance snapshot от 12.05 подтверждает сумму 7,4 млн ₽.",
      "Budget review повторяет ту же оценку потерь."
    ],
    unconfirmed: [],
    discrepancy: "Расхождения в сумме не найдено.",
    source: "Finance snapshot, budget review, карточка Alpha ERP",
    recommendation: "Использовать эту цифру в финальной версии отчёта."
  },
  "capacity-gap": {
    title: "Прогноз загрузки команды не подкреплён ссылкой",
    project: "Nova Stack",
    status: "Уточнить",
    checked: ["AI нашёл прогноз загрузки в презентации и карточке проекта."],
    unconfirmed: ["В отчёте нет ссылки на weekly capacity review."],
    discrepancy: "Презентация говорит о перегрузке, но первоисточник не приложен.",
    source: "PPTX, карточка Nova Stack",
    recommendation: "Добавить ссылку на weekly capacity review и перезапустить проверку."
  }
};

const AI_ANSWERS = {
  losses: {
    title: "Откуда цифра по убыткам?",
    text: "7,4 млн ₽ — сумма штрафа по SLA, задержки запуска биллинга и дополнительной загрузки поддержки. Источники: finance snapshot 12.05, budget review и карточка Alpha ERP."
  },
  delay: {
    title: "Почему релиз ушёл вправо?",
    text: "Главная причина — неподтверждённая дата интеграции с API-командой смежного отдела. Вторая причина — расхождение дат в Jira и Confluence, из-за которого команда работала с разными ориентирами."
  },
  critical: {
    title: "Какая задача тянет критический путь?",
    text: "Задача “Интеграционное тестирование” зависит от API-контракта, который ещё не подписан. Сдвиг этой точки переносит ещё 3 зависимые вехи, но сохраняет клиентское окно релиза."
  },
  unconfirmed: {
    title: "Какие сроки ещё не подтверждены?",
    text: "Не подтверждены дата внешней интеграции, окно интеграционного тестирования и одна дата релиза в презентации Gamma Cloud. Это самые чувствительные точки для защиты проекта."
  }
};

const RECONCILE_STEPS = [
  "Читаю данные из Jira...",
  "Читаю данные из Confluence...",
  "Сравниваю даты по проектам...",
  "Обнаружено несколько расхождений — формирую отчёт..."
];

const RECONCILE_RESULT = {
  title: "Сверка завершена",
  text: "AI нашёл 9 расхождений между Jira и Confluence. Критические: Alpha ERP и Nova Stack. Рекомендую начать с Alpha ERP — там максимальный финансовый риск.",
  metrics: [
    ["Проверено", "27 проектов"],
    ["Расхождений", "9"],
    ["Критических", "2"]
  ],
  list: [
    "Alpha ERP — унифицировать дату релиза и окно тестирования.",
    "Nova Stack — согласовать API-контракт и внешнюю зависимость.",
    "Остальные конфликты оставить на мониторинге."
  ]
};

const VERIFY_STEPS = [
  "Читаю загруженный файл...",
  "Извлекаю цифры и даты...",
  "Сверяю с Jira, Confluence и финансовым контуром...",
  "Генерирую отчёт о расхождениях..."
];

const MANAGERS = ["Иван Соколов", "Мария Кузнецова", "Дмитрий Орлов"];

const state = {
  selectedRole: null,
  filter: "all",
  query: "",
  activeScreen: "home",
  lastQuestion: "ещё не задан",
  modalContext: null,
  recommendationStatus: {},
  reportStatus: {}
};

const elements = {
  entryScreen: document.getElementById("entry-screen"),
  workspaceApp: document.getElementById("workspace-app"),
  rolePicker: document.getElementById("role-picker"),
  corpLogin: document.getElementById("corp-login"),
  topbarName: document.getElementById("topbar-name"),
  topbarRole: document.getElementById("topbar-role"),
  profileRoleTitle: document.getElementById("profile-role-title"),
  profileFocusText: document.getElementById("profile-focus-text"),
  profileLastQuestion: document.getElementById("profile-last-question"),
  permissionList: document.getElementById("permission-list"),
  portfolioButton: document.getElementById("portfolio-button"),
  initiativesButton: document.getElementById("initiatives-button"),
  profileAvatar: document.querySelector(".profile-avatar"),
  profileHeading: document.querySelector("#screen-profile h2"),
  projectGrid: document.getElementById("project-grid"),
  projectCards: [...document.querySelectorAll(".project-card")],
  compactCards: [...document.querySelectorAll(".compact-project-card")],
  filterButtons: [...document.querySelectorAll(".filter-chip, .category-card")],
  screenButtons: [...document.querySelectorAll("[data-screen-target]")],
  screens: [...document.querySelectorAll(".product-view")],
  searchInput: document.getElementById("global-search"),
  emptyState: document.getElementById("empty-state"),
  answerTitle: document.getElementById("answer-title"),
  answerText: document.getElementById("answer-text"),
  answerCard: document.getElementById("answer-card"),
  uploadZone: document.getElementById("upload-zone"),
  uploadTitle: document.getElementById("upload-title"),
  uploadText: document.getElementById("upload-text"),
  fileInput: document.getElementById("file-input"),
  modalBackdrop: document.getElementById("modal-backdrop"),
  modalClose: document.getElementById("modal-close"),
  modalContent: document.getElementById("modal-content"),
  settingsBackdrop: document.getElementById("settings-backdrop"),
  settingsClose: document.getElementById("settings-close"),
  settingsForm: document.getElementById("settings-form"),
  settingsName: document.getElementById("settings-name"),
  settingsRole: document.getElementById("settings-role"),
  settingsEmail: document.getElementById("settings-email"),
  settingsDepartment: document.getElementById("settings-department"),
  settingsDigest: document.getElementById("settings-digest"),
  settingsNotifications: document.getElementById("settings-notifications"),
  settingsJira: document.getElementById("settings-jira"),
  settingsConfluence: document.getElementById("settings-confluence"),
  settingsDrive: document.getElementById("settings-drive"),
  changeRoleButton: document.getElementById("change-role-button"),
  logoutButton: document.getElementById("logout-button"),
  toast: document.getElementById("toast"),
  tooltipCard: document.getElementById("tooltip-card"),
  tooltipTitle: document.getElementById("tooltip-title"),
  tooltipText: document.getElementById("tooltip-text"),
  summaryRisks: document.getElementById("summary-risks-count"),
  summaryReports: document.getElementById("summary-reports-count"),
  summaryFinance: document.getElementById("summary-finance-count"),
  summaryOverview: document.getElementById("summary-overview-count")
};

function cloneConfig(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalize(text) {
  return text.toLowerCase().trim();
}

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getSession() {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveSession() {
  if (!state.selectedRole) return;
  const role = getCurrentRole();
  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      role: state.selectedRole,
      user: role.user,
      recommendationStatus: state.recommendationStatus,
      reportStatus: state.reportStatus,
      lastQuestion: state.lastQuestion
    })
  );
}

function resetSession() {
  window.localStorage.removeItem(STORAGE_KEY);
}

function getCurrentRole() {
  const roleConfig = ROLE_CONFIGS[state.selectedRole] || ROLE_CONFIGS.office_head;
  return roleConfig;
}

function getProject(projectKey) {
  return PROJECTS[projectKey];
}

function getProjectReportStatus(project) {
  return state.reportStatus[project.reportId] || project.report.status;
}

function getRecommendationStatus(project) {
  return state.recommendationStatus[project.key] || project.aiRecommendation.status;
}

function canUseHoverTooltips() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function isActionAllowed(featureName) {
  const role = getCurrentRole();
  return Boolean(role.features[featureName]);
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.remove("is-hidden");
  requestAnimationFrame(() => elements.toast.classList.add("toast-visible"));
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    elements.toast.classList.remove("toast-visible");
    window.setTimeout(() => elements.toast.classList.add("is-hidden"), 180);
  }, 2400);
}

function runLoader(steps, onDone, stepDelay = 850) {
  let stepIndex = 0;

  function next() {
    if (stepIndex >= steps.length) {
      elements.toast.classList.remove("toast-visible");
      window.setTimeout(() => {
        elements.toast.classList.add("is-hidden");
        if (typeof onDone === "function") onDone();
      }, 180);
      return;
    }

    showToast(steps[stepIndex], stepDelay + 120);
    stepIndex += 1;
    window.setTimeout(next, stepDelay);
  }

  next();
}

function typeText(element, text, speed = 14) {
  window.clearTimeout(typeText.timeoutId);
  element.textContent = "";
  let index = 0;

  function tick() {
    element.textContent += text[index];
    index += 1;
    if (index < text.length) {
      typeText.timeoutId = window.setTimeout(tick, speed);
    }
  }

  if (text) tick();
}

function setSelectedRole(roleKey, options = {}) {
  state.selectedRole = roleKey;
  elements.corpLogin.disabled = !roleKey;

  document.querySelectorAll(".role-card").forEach((button) => {
    button.classList.toggle("role-card-active", button.dataset.role === roleKey);
  });

  if (options.enter) {
    enterWorkspace();
  }
}

function renderPermissionList() {
  const role = getCurrentRole();
  elements.permissionList.innerHTML = role.permissions
    .map(
      (item) => `
        <article class="profile-panel">
          <span class="answer-label">Доступно</span>
          <strong>${item.title}</strong>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderSummaryCards() {
  const role = getCurrentRole();
  elements.summaryRisks.textContent = role.summary.risks;
  elements.summaryReports.textContent = role.summary.reports;
  elements.summaryFinance.textContent = role.summary.finance;
  elements.summaryOverview.textContent = role.summary.overview;
}

function syncRoleDependentButtons() {
  const role = getCurrentRole();
  const availabilityMap = {
    "open-risks": role.features.risks,
    "open-reports": role.features.reports,
    "open-finance": role.features.finance,
    "open-overview": role.features.overview
  };

  Object.entries(availabilityMap).forEach(([action, isEnabled]) => {
    document.querySelectorAll(`[data-action="${action}"]`).forEach((button) => {
      button.classList.toggle("is-disabled", !isEnabled);
      button.toggleAttribute("disabled", !isEnabled);
      button.setAttribute("aria-disabled", String(!isEnabled));
    });
  });

  if (elements.uploadZone) {
    const uploadEnabled = role.features.reportUpload;
    elements.uploadZone.classList.toggle("is-disabled", !uploadEnabled);
    elements.uploadZone.setAttribute("aria-disabled", String(!uploadEnabled));
    elements.uploadZone.tabIndex = uploadEnabled ? 0 : -1;
  }
}

function renderRoleUI() {
  const role = getCurrentRole();
  elements.topbarName.textContent = role.user.name;
  elements.topbarRole.textContent = role.shortLabel;
  elements.profileRoleTitle.textContent = role.label;
  elements.profileFocusText.textContent = role.focus;
  elements.profileHeading.textContent = role.label;
  elements.portfolioButton.textContent = role.topbar.portfolio;
  elements.initiativesButton.textContent = role.topbar.initiatives;
  elements.profileAvatar.textContent = getInitials(role.user.name);
  elements.profileLastQuestion.textContent = state.lastQuestion;
  renderPermissionList();
  renderSummaryCards();
  syncRoleDependentButtons();
}

function showEntryScreen() {
  elements.entryScreen.classList.remove("is-hidden");
  elements.workspaceApp.classList.add("is-hidden");
  closeModal();
  closeSettings();
  hideTooltip();
  document.body.classList.remove("modal-open");
}

function enterWorkspace() {
  if (!state.selectedRole) return;
  renderRoleUI();
  elements.entryScreen.classList.add("is-hidden");
  elements.workspaceApp.classList.remove("is-hidden");
  renderProjects();
  setActiveScreen(state.activeScreen);
  saveSession();
}

function setActiveScreen(screenName) {
  state.activeScreen = screenName;

  elements.screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === screenName);
  });

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("nav-item-active", button.dataset.screenTarget === screenName);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function syncActiveFilters() {
  elements.filterButtons.forEach((button) => {
    button.classList.toggle("filter-chip-active", button.classList.contains("filter-chip") && button.dataset.filter === state.filter);
    button.classList.toggle("category-card-active", button.classList.contains("category-card") && button.dataset.filter === state.filter);
  });
}

function renderProjects() {
  if (!state.selectedRole) return;

  const role = getCurrentRole();
  let visible = 0;

  elements.projectCards.forEach((card) => {
    const project = getProject(card.dataset.project);
    const isRoleProject = role.projectIds.includes(project.key);
    const matchesFilter = state.filter === "all" || project.filters.includes(state.filter);
    const matchesQuery = !state.query || normalize(card.dataset.tags || "").includes(state.query);
    const shouldShow = isRoleProject && matchesFilter && matchesQuery;

    card.classList.toggle("is-hidden", !shouldShow);
    if (shouldShow) visible += 1;
  });

  elements.compactCards.forEach((card) => {
    const project = getProject(card.dataset.project);
    const isRoleProject = role.projectIds.includes(project.key);
    const matchesFilter = state.filter === "all" || project.filters.includes(state.filter);
    card.classList.toggle("is-hidden", !(isRoleProject && matchesFilter));
  });

  elements.emptyState.classList.toggle("is-hidden", visible > 0);
}

function renderMetrics(metrics) {
  return `
    <div class="modal-metrics">
      ${metrics
        .map(
          ([label, value]) => `
            <div class="modal-metric">
              <span>${label}</span>
              <strong>${value}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderTextCards(items) {
  return `
    <div class="modal-list">
      ${items.map((item) => `<article class="modal-bullet">${item}</article>`).join("")}
    </div>
  `;
}

function renderCustomModal(payload) {
  return `
    <span class="answer-label">${payload.kicker || "AI-результат"}</span>
    <h2 id="modal-title">${payload.title || "Детали"}</h2>
    <p>${payload.text || ""}</p>
    ${payload.metrics?.length ? renderMetrics(payload.metrics) : ""}
    ${payload.list?.length ? renderTextCards(payload.list) : ""}
  `;
}

function renderLeaderActions(project) {
  const canAcceptReport = isActionAllowed("reportDecision");
  const canAcceptRecommendation = isActionAllowed("recommendationDecision");
  const canSchedule = isActionAllowed("meetings");
  const canReturn = isActionAllowed("returnReport");
  const reportAccepted = getProjectReportStatus(project) === "Принят";
  const recommendationAccepted = getRecommendationStatus(project) === "accepted";

  return `
    <section class="modal-section">
      <div class="section-heading surface-heading">
        <div>
          <p class="eyebrow">Действия руководителя</p>
          <h2>Что можно сделать дальше</h2>
        </div>
      </div>
      <div class="button-cluster">
        <button class="text-button ${!canAcceptReport || reportAccepted ? "is-disabled" : ""}" type="button" data-action="accept-report" data-project="${project.key}" ${!canAcceptReport || reportAccepted ? "disabled" : ""}>
          ${reportAccepted ? "Отчёт принят" : "Принять отчёт"}
        </button>
        <button class="text-button ${!canAcceptRecommendation || recommendationAccepted ? "is-disabled" : ""}" type="button" data-action="accept-recommendation" data-project="${project.key}" ${!canAcceptRecommendation || recommendationAccepted ? "disabled" : ""}>
          ${recommendationAccepted ? "Рекомендация принята" : "Принять рекомендацию"}
        </button>
        <button class="text-button ${!canSchedule ? "is-disabled" : ""}" type="button" data-action="open-meeting-form" data-project="${project.key}" ${!canSchedule ? "disabled" : ""}>
          Инициировать совещание
        </button>
        <button class="text-button ${!canReturn ? "is-disabled" : ""}" type="button" data-action="open-return-form" data-project="${project.key}" ${!canReturn ? "disabled" : ""}>
          Вернуть отчёт менеджеру
        </button>
      </div>
    </section>
  `;
}

function renderProjectModal(projectKey, focus = "overview") {
  const project = getProject(projectKey);
  if (!project) return "";

  const focusLookup = {
    overview: {
      title: "Сводка по проекту",
      text: project.note
    },
    finance: {
      title: "Финансовые потери",
      text: `Потери ${project.loss} рассчитаны по данным финансового контура и задержке по критическому пути.`
    },
    conflict: {
      title: "Конфликты и расхождения",
      text: "AI показывает не только факт конфликта, но и конкретные источники, где расходятся сроки или статусы."
    },
    risk: {
      title: "Причины риска",
      text: `Текущий риск ${project.riskPercent}% сформирован из внешних зависимостей, конфликтов сроков и нагрузки команды.`
    },
    source: {
      title: "Источники данных",
      text: "Все источники доступны прямо внутри сервиса и используются для пояснения каждой метрики."
    },
    recommendation: {
      title: "AI-рекомендация",
      text: project.aiRecommendation.text
    },
    report: {
      title: "Отчёт и проверка",
      text: project.report.leaderAction
    }
  };

  const focusBlock = focusLookup[focus] || focusLookup.overview;
  const reportStatus = getProjectReportStatus(project);
  const recommendationStatus = getRecommendationStatus(project) === "accepted" ? "Принята" : "Ожидает решения";

  return `
    <span class="answer-label">${project.kicker}</span>
    <h2 id="modal-title">${project.title}</h2>
    <p>${project.subtitle}</p>
    ${renderMetrics([
      ["Статус", project.statusLabel],
      ["Дедлайн", project.deadline],
      ["Риск", `${project.riskPercent}%`],
      ["Финансовые потери", project.loss],
      ["Отчёт", reportStatus],
      ["Рекомендация", recommendationStatus]
    ])}
    <section class="modal-section focus-callout">
      <span class="answer-label">${focusBlock.title}</span>
      <p>${focusBlock.text}</p>
    </section>
    <section class="modal-section">
      <div class="section-heading surface-heading">
        <div>
          <p class="eyebrow">Конфликты и расхождения</p>
          <h2>Что требует внимания</h2>
        </div>
      </div>
      ${renderTextCards([...project.conflicts, ...project.discrepancies])}
    </section>
    <section class="modal-section">
      <div class="section-heading surface-heading">
        <div>
          <p class="eyebrow">Источники данных</p>
          <h2>На чём основан вывод</h2>
        </div>
      </div>
      ${renderTextCards(project.sources)}
    </section>
    <section class="modal-section">
      <div class="section-heading surface-heading">
        <div>
          <p class="eyebrow">AI-рекомендация</p>
          <h2>${project.aiRecommendation.title}</h2>
        </div>
      </div>
      <p>${project.aiRecommendation.text}</p>
      <div class="button-cluster">
        <button class="text-button" type="button" data-action="open-project-focus" data-project="${project.key}" data-focus="report">Добавить в отчёт</button>
        <button class="text-button" type="button" data-action="open-project-focus" data-project="${project.key}" data-focus="source">Найти источники</button>
      </div>
    </section>
    ${renderLeaderActions(project)}
  `;
}

function renderRiskListModal() {
  const roleProjects = new Set(getCurrentRole().projectIds);
  const visibleRisks = RISK_ITEMS.filter((item) => {
    return Object.values(PROJECTS).some((project) => project.title === item.project && roleProjects.has(project.key));
  });

  if (!visibleRisks.length) {
    return `
      <span class="answer-label">Риски</span>
      <h2 id="modal-title">Для этой роли сейчас нет активных рисков</h2>
      <p>Когда по доступным проектам появятся сигналы, сервис покажет их здесь.</p>
    `;
  }

  return `
    <span class="answer-label">Риски</span>
    <h2 id="modal-title">Активные риски по проектам</h2>
    <p>Каждый риск раскрывается с проектом, источником и рекомендуемым действием.</p>
    <div class="detail-list">
      ${visibleRisks
        .map(
          (risk) => `
            <article class="detail-card">
              <strong>${risk.title}</strong>
              <p><b>Проект:</b> ${risk.project}</p>
              <p><b>Уровень:</b> ${risk.level}</p>
              <p><b>Источник:</b> ${risk.source}</p>
              <p>${risk.explanation}</p>
              <p><b>Рекомендуемое действие:</b> ${risk.action}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderReportsListModal() {
  const roleProjects = new Set(getCurrentRole().projectIds);
  const visibleReports = REPORT_ITEMS.filter((report) => {
    return Object.values(PROJECTS).some((project) => project.title === report.project && roleProjects.has(project.key));
  });

  if (!visibleReports.length) {
    return `
      <span class="answer-label">Отчёты</span>
      <h2 id="modal-title">Отчётов для этой роли пока нет</h2>
      <p>Когда появятся материалы на проверке, они будут собраны в этом разделе.</p>
    `;
  }

  return `
    <span class="answer-label">Отчёты</span>
    <h2 id="modal-title">Отчёты и статусы проверки</h2>
    <p>По каждой единице видно, что подтверждено, чего не хватает и какое действие ждёт руководителя.</p>
    <div class="detail-list">
      ${visibleReports
        .map(
          (report) => `
            <article class="detail-card">
              <strong>${report.title}</strong>
              <p><b>Проект:</b> ${report.project}</p>
              <p><b>Статус:</b> ${state.reportStatus[report.id] || report.status}</p>
              <p><b>Подтверждено:</b> ${report.confirmed}</p>
              <p><b>Не хватает:</b> ${report.missing}</p>
              <p><b>Следующее действие:</b> ${report.leaderAction}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderFinanceModal() {
  return `
    <span class="answer-label">Финансовый эффект</span>
    <h2 id="modal-title">Потери и подтверждающие источники</h2>
    <p>Сервис показывает не только сумму потерь, но и откуда она взялась.</p>
    <div class="detail-list">
      <article class="detail-card">
        <strong>Alpha ERP</strong>
        <p><b>Потери:</b> 7,4 млн ₽</p>
        <p><b>Источники:</b> Finance snapshot 12.05, budget review, карточка проекта.</p>
        <p><b>AI-вывод:</b> Сдвиг старта тестирования на 2 дня сокращает риск на 1,8 млн ₽.</p>
      </article>
      <article class="detail-card">
        <strong>Nova Stack</strong>
        <p><b>Потери:</b> 2,4 млн ₽</p>
        <p><b>Источники:</b> Capacity review, расчёт простоя команды, проектный brief.</p>
        <p><b>AI-вывод:</b> Перераспределение задач снижает перегрузку без смены релизного окна.</p>
      </article>
      <article class="detail-card">
        <strong>Gamma Cloud</strong>
        <p><b>Потери:</b> 1,1 млн ₽</p>
        <p><b>Источники:</b> Finance snapshot, комитетная презентация, Jira board.</p>
        <p><b>AI-вывод:</b> Быстрая правка 2 слайдов снимает риск защиты устаревшей презентации.</p>
      </article>
    </div>
  `;
}

function renderOverviewModal() {
  return `
    <span class="answer-label">Портфель</span>
    <h2 id="modal-title">Агрегированный обзор по портфелю</h2>
    <p>Видно, где сервис обнаруживает конфликт сроков, деньги и действия, которые дают быстрый эффект.</p>
    ${renderMetrics([
      ["Инициативы", "27"],
      ["Ключевые риски", "6"],
      ["На проверке", "3 отчёта"],
      ["Потери", "11,2 млн ₽"]
    ])}
    ${renderTextCards([
      "Alpha ERP удерживает самый высокий риск из-за трёх разных дат интеграции.",
      "Nova Stack требует подтверждения API-контракта и фиксации перегрузки QA.",
      "Gamma Cloud почти готов, но нуждается в выравнивании источников для презентации."
    ])}
  `;
}

function renderReportInsightModal(reportKey) {
  const item = REPORT_INSIGHTS[reportKey];
  if (!item) return "";

  return `
    <span class="answer-label">Проверка отчёта</span>
    <h2 id="modal-title">${item.title}</h2>
    <p>${item.project} • ${item.status}</p>
    ${renderMetrics([
      ["Статус", item.status],
      ["Проект", item.project],
      ["Источник", item.source]
    ])}
    <section class="modal-section">
      <div class="section-heading surface-heading">
        <div>
          <p class="eyebrow">Что проверено</p>
          <h2>Подтверждённые данные</h2>
        </div>
      </div>
      ${renderTextCards(item.checked)}
    </section>
    <section class="modal-section">
      <div class="section-heading surface-heading">
        <div>
          <p class="eyebrow">Что не подтверждено</p>
          <h2>Пробелы в данных</h2>
        </div>
      </div>
      ${renderTextCards(item.unconfirmed.length ? item.unconfirmed : ["Все ключевые данные подтверждены."])}
    </section>
    <section class="modal-section">
      <div class="section-heading surface-heading">
        <div>
          <p class="eyebrow">Рекомендация AI</p>
          <h2>Что сделать дальше</h2>
        </div>
      </div>
      ${renderTextCards([item.discrepancy, item.recommendation])}
    </section>
  `;
}

function renderMeetingForm(projectKey) {
  const project = getProject(projectKey);

  return `
    <span class="answer-label">Совещание</span>
    <h2 id="modal-title">Инициировать совещание</h2>
    <p>${project.title} • Быстрая форма для запуска обсуждения риска.</p>
    <form class="inline-form" data-form="meeting" data-project="${project.key}">
      <label class="field">
        <span>Тема</span>
        <input type="text" name="topic" value="Разбор риска по ${project.title}" required />
      </label>
      <label class="field">
        <span>Участники</span>
        <input type="text" name="participants" value="Анна Петрова, ${MANAGERS.join(", ")}" required />
      </label>
      <label class="field">
        <span>Дата и время</span>
        <input type="text" name="datetime" value="29 июня, 10:30" required />
      </label>
      <label class="field">
        <span>Комментарий</span>
        <textarea name="comment" rows="4">Нужно согласовать единую дату релиза и подтверждение внешней зависимости.</textarea>
      </label>
      <div class="modal-actions-bar">
        <button class="secondary-button" type="button" data-action="open-project-focus" data-project="${project.key}" data-focus="recommendation">Назад к проекту</button>
        <button class="primary-button" type="submit">Отправить</button>
      </div>
    </form>
  `;
}

function renderReturnForm(projectKey) {
  const project = getProject(projectKey);

  return `
    <span class="answer-label">Возврат отчёта</span>
    <h2 id="modal-title">Вернуть отчёт менеджеру</h2>
    <p>${project.report.title} • Укажите менеджера и комментарий.</p>
    <form class="inline-form" data-form="return-report" data-project="${project.key}">
      <label class="field">
        <span>Менеджер</span>
        <select name="manager">
          ${MANAGERS.map((name) => `<option>${name}</option>`).join("")}
        </select>
      </label>
      <label class="field">
        <span>Комментарий</span>
        <textarea name="comment" rows="4">Нужно приложить источник даты интеграции и исправить расхождение в отчёте.</textarea>
      </label>
      <div class="modal-actions-bar">
        <button class="secondary-button" type="button" data-action="open-project-focus" data-project="${project.key}" data-focus="report">Назад к отчёту</button>
        <button class="primary-button" type="submit">Вернуть отчёт</button>
      </div>
    </form>
  `;
}

function renderModalContent() {
  if (!state.modalContext) return "";

  switch (state.modalContext.type) {
    case "project":
      return renderProjectModal(state.modalContext.projectKey, state.modalContext.focus);
    case "risks":
      return renderRiskListModal();
    case "reports":
      return renderReportsListModal();
    case "finance":
      return renderFinanceModal();
    case "overview":
      return renderOverviewModal();
    case "report-insight":
      return renderReportInsightModal(state.modalContext.reportKey);
    case "meeting-form":
      return renderMeetingForm(state.modalContext.projectKey);
    case "return-form":
      return renderReturnForm(state.modalContext.projectKey);
    case "custom":
      return renderCustomModal(state.modalContext.payload);
    default:
      return "";
  }
}

function openAppModal(context) {
  state.modalContext = context;
  elements.modalContent.innerHTML = renderModalContent();
  elements.modalBackdrop.classList.remove("is-hidden");
  document.body.classList.add("modal-open");
}

function closeModal() {
  state.modalContext = null;
  elements.modalBackdrop.classList.add("is-hidden");
  document.body.classList.remove("modal-open");
}

function openSettings() {
  const role = getCurrentRole();
  elements.settingsName.value = role.user.name;
  elements.settingsRole.value = role.label;
  elements.settingsEmail.value = role.user.email;
  elements.settingsDepartment.value = role.user.department;
  elements.settingsDigest.value = role.user.digest;
  elements.settingsNotifications.checked = role.user.notifications;
  elements.settingsJira.checked = role.user.jira;
  elements.settingsConfluence.checked = role.user.confluence;
  elements.settingsDrive.checked = role.user.drive;
  elements.settingsBackdrop.classList.remove("is-hidden");
  document.body.classList.add("modal-open");
}

function closeSettings() {
  elements.settingsBackdrop.classList.add("is-hidden");
  if (elements.modalBackdrop.classList.contains("is-hidden")) {
    document.body.classList.remove("modal-open");
  }
}

function saveSettings() {
  const role = ROLE_CONFIGS[state.selectedRole];
  role.user.name = elements.settingsName.value.trim() || role.user.name;
  role.user.email = elements.settingsEmail.value.trim() || role.user.email;
  role.user.department = elements.settingsDepartment.value.trim() || role.user.department;
  role.user.digest = elements.settingsDigest.value;
  role.user.notifications = elements.settingsNotifications.checked;
  role.user.jira = elements.settingsJira.checked;
  role.user.confluence = elements.settingsConfluence.checked;
  role.user.drive = elements.settingsDrive.checked;
  renderRoleUI();
  saveSession();
  closeSettings();
  showToast("Настройки сохранены");
}

function setAnswer(questionKey) {
  const answer = AI_ANSWERS[questionKey];
  if (!answer) return;
  elements.answerCard.style.opacity = "0.5";
  elements.answerTitle.textContent = "AI думает...";
  elements.answerText.textContent = "";
  setActiveScreen("ai");

  window.clearTimeout(setAnswer.timeoutId);
  setAnswer.timeoutId = window.setTimeout(() => {
    elements.answerTitle.textContent = answer.title;
    typeText(elements.answerText, answer.text);
    elements.answerCard.style.opacity = "1";
    state.lastQuestion = answer.title;
    elements.profileLastQuestion.textContent = answer.title;
    saveSession();
  }, 700);
}

function positionTooltip(target) {
  if (elements.tooltipCard.classList.contains("is-hidden")) return;

  const targetRect = target.getBoundingClientRect();
  const tooltipRect = elements.tooltipCard.getBoundingClientRect();
  const viewportPadding = 12;
  const navReserve = 104;
  let left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
  left = Math.max(viewportPadding, Math.min(left, window.innerWidth - tooltipRect.width - viewportPadding));

  let top = targetRect.top - tooltipRect.height - 12;
  if (top < viewportPadding) {
    top = targetRect.bottom + 12;
  }
  top = Math.max(viewportPadding, Math.min(top, window.innerHeight - tooltipRect.height - navReserve));

  elements.tooltipCard.style.left = `${left}px`;
  elements.tooltipCard.style.top = `${top}px`;
}

function showTooltip(target) {
  if (!canUseHoverTooltips()) return;
  elements.tooltipTitle.textContent = target.dataset.tooltipTitle || "Пояснение";
  elements.tooltipText.textContent = target.dataset.tooltipText || "";
  elements.tooltipCard.classList.remove("is-hidden");
  requestAnimationFrame(() => positionTooltip(target));
}

function hideTooltip() {
  elements.tooltipCard.classList.add("is-hidden");
}

function openProjectFocus(projectKey, focus) {
  openAppModal({
    type: "project",
    projectKey,
    focus
  });
}

function openCustomModal(payload) {
  openAppModal({
    type: "custom",
    payload
  });
}

function handleFeatureLock(action) {
  const actionFeatureMap = {
    "open-finance": "finance"
  };

  const feature = actionFeatureMap[action];
  if (feature && !isActionAllowed(feature)) {
    showToast("Этот блок недоступен для выбранной роли.");
    return true;
  }

  return false;
}

function handleAction(action, data = {}) {
  if (handleFeatureLock(action)) return;

  switch (action) {
    case "reconcile":
      setActiveScreen("projects");
      runLoader(RECONCILE_STEPS, () => {
        openCustomModal({
          kicker: "Результат сверки",
          title: RECONCILE_RESULT.title,
          text: RECONCILE_RESULT.text,
          metrics: RECONCILE_RESULT.metrics,
          list: RECONCILE_RESULT.list
        });
      });
      return;
    case "verify":
      runLoader(VERIFY_STEPS, () => {
        const project = getProject(data.project);
        openCustomModal({
          kicker: "AI-проверка завершена",
          title: `${project.title}: отчёт верифицирован`,
          text: project.summary,
          metrics: [
            ["Слайдов", project.key === "gamma" ? "18" : "12"],
            ["Цифр", project.key === "gamma" ? "26" : "14"],
            ["Подтверждено", project.key === "gamma" ? "24" : "11"],
            ["Расхождений", project.key === "gamma" ? "2" : project.conflictCount]
          ],
          list: project.actions
        });
      });
      return;
    case "verify-all":
      runLoader(VERIFY_STEPS, () => {
        openCustomModal({
          kicker: "Сводная проверка",
          title: "Все презентации проверены",
          text: "AI проверил активные отчёты, собрал критические расхождения и подготовил следующий список приоритетов.",
          metrics: [
            ["Отчётов", "3"],
            ["Цифр", "74"],
            ["Расхождений", "2"],
            ["Критично", "Gamma Cloud"]
          ],
          list: [
            "Gamma Cloud — обновить дату релиза на слайдах 4 и 11.",
            "Alpha ERP — уточнить источник единой даты интеграции.",
            "Nova Stack — приложить capacity review и подтвердить зависимость."
          ]
        });
      });
      return;
    case "open-reports":
      openAppModal({ type: "reports" });
      return;
    case "open-risks":
      openAppModal({ type: "risks" });
      return;
    case "open-finance":
      openAppModal({ type: "finance" });
      return;
    case "open-overview":
      openAppModal({ type: "overview" });
      return;
    case "details":
      openProjectFocus(data.project, "overview");
      return;
    case "manual":
      showToast("Режим ручной корректировки открыт");
      openProjectFocus(data.project, "risk");
      return;
    case "report":
      showToast(`✓ ${getProject(data.project).title} добавлен в отчёт`);
      openProjectFocus(data.project, "report");
      return;
    case "source":
      openProjectFocus(data.project, "source");
      return;
    case "detail-finance":
      openProjectFocus(data.project, "finance");
      return;
    case "detail-conflict":
      openProjectFocus(data.project, "conflict");
      return;
    case "detail-risk":
      openProjectFocus(data.project, "risk");
      return;
    case "detail-source":
      openProjectFocus(data.project, "source");
      return;
    case "detail-recommendation":
      openProjectFocus(data.project, "recommendation");
      return;
    case "detail-report":
      openProjectFocus(data.project, "report");
      return;
    case "detail-report-row":
      openAppModal({ type: "report-insight", reportKey: data.report });
      return;
    case "open-project-focus":
      openProjectFocus(data.project, data.focus || "overview");
      return;
    case "open-settings":
      openSettings();
      return;
    case "accept-report": {
      const project = getProject(data.project);
      state.reportStatus[project.reportId] = "Принят";
      saveSession();
      openProjectFocus(project.key, "report");
      showToast("Отчёт принят");
      return;
    }
    case "accept-recommendation":
      state.recommendationStatus[data.project] = "accepted";
      saveSession();
      openProjectFocus(data.project, "recommendation");
      showToast("Рекомендация принята");
      return;
    case "open-meeting-form":
      openAppModal({ type: "meeting-form", projectKey: data.project });
      return;
    case "open-return-form":
      openAppModal({ type: "return-form", projectKey: data.project });
      return;
    default:
      break;
  }
}

function handleFormSubmit(form) {
  const formType = form.dataset.form;
  const projectKey = form.dataset.project;

  if (formType === "meeting") {
    closeModal();
    showToast("Совещание инициировано");
    openProjectFocus(projectKey, "overview");
  }

  if (formType === "return-report") {
    const project = getProject(projectKey);
    state.reportStatus[project.reportId] = "Возвращён менеджеру";
    saveSession();
    closeModal();
    showToast("Отчёт возвращён менеджеру");
    openProjectFocus(projectKey, "report");
  }
}

function bootstrapSession() {
  const session = getSession();

  if (!session?.role || !ROLE_CONFIGS[session.role]) {
    showEntryScreen();
    return;
  }

  state.selectedRole = session.role;
  state.recommendationStatus = session.recommendationStatus || {};
  state.reportStatus = session.reportStatus || {};
  state.lastQuestion = session.lastQuestion || state.lastQuestion;

  if (session.user) {
    ROLE_CONFIGS[session.role].user = {
      ...cloneConfig(ROLE_CONFIGS[session.role].user),
      ...session.user
    };
  }

  setSelectedRole(session.role, { enter: true });
}

document.addEventListener("click", (event) => {
  const roleButton = event.target.closest(".role-card");
  if (roleButton) {
    setSelectedRole(roleButton.dataset.role);
    return;
  }

  if (event.target.id === "corp-login") {
    enterWorkspace();
    return;
  }

  const screenTarget = event.target.closest("[data-screen-target]");
  if (screenTarget) {
    setActiveScreen(screenTarget.dataset.screenTarget);
    return;
  }

  const filterTarget = event.target.closest(".filter-chip, .category-card");
  if (filterTarget) {
    state.filter = filterTarget.dataset.filter;
    syncActiveFilters();
    renderProjects();
    setActiveScreen("projects");
    return;
  }

  const questionTarget = event.target.closest("[data-question]");
  if (questionTarget) {
    setAnswer(questionTarget.dataset.question);
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  if (actionTarget) {
    handleAction(actionTarget.dataset.action, {
      project: actionTarget.dataset.project,
      report: actionTarget.dataset.report,
      focus: actionTarget.dataset.focus
    });
    return;
  }

  const projectCard = event.target.closest(".project-card");
  if (projectCard && !event.target.closest("button")) {
    openProjectFocus(projectCard.dataset.project, "overview");
    return;
  }

  const compactCard = event.target.closest(".compact-project-card");
  if (compactCard && !event.target.closest("button")) {
    openProjectFocus(compactCard.dataset.project, "overview");
    return;
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-form]");
  if (!form) return;
  event.preventDefault();
  handleFormSubmit(form);
});

document.addEventListener("keydown", (event) => {
  const clickable = event.target.closest(".category-card, .status-item, .compact-project-card, .upload-zone");
  if (clickable && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    clickable.click();
  }
});

elements.searchInput.addEventListener("input", (event) => {
  state.query = normalize(event.target.value);
  renderProjects();
  setActiveScreen("projects");
});

elements.uploadZone.addEventListener("click", () => {
  if (!isActionAllowed("reportUpload")) {
    showToast("Для этой роли загрузка отчётов недоступна.");
    return;
  }
  elements.fileInput.click();
});

elements.uploadZone.addEventListener("dragover", (event) => {
  if (!isActionAllowed("reportUpload")) return;
  event.preventDefault();
  elements.uploadZone.classList.add("upload-zone-active");
});

elements.uploadZone.addEventListener("dragleave", () => {
  elements.uploadZone.classList.remove("upload-zone-active");
});

elements.uploadZone.addEventListener("drop", (event) => {
  if (!isActionAllowed("reportUpload")) return;
  event.preventDefault();
  elements.uploadZone.classList.remove("upload-zone-active");
  const [file] = event.dataTransfer.files;
  if (file) {
    processUploadedFile(file);
  }
});

function processUploadedFile(file) {
  elements.uploadTitle.textContent = `Анализирую «${file.name}»...`;
  elements.uploadText.textContent = "AI извлекает цифры, сверяет их с системами и готовит summary для руководителя.";
  runLoader(VERIFY_STEPS, () => {
    elements.uploadTitle.textContent = `✓ ${file.name} проверен`;
    elements.uploadText.textContent = "Найдено 2 расхождения. Подробности доступны в проверке отчётов.";
    showToast(`✓ Файл «${file.name}» проанализирован`);
    setActiveScreen("reports");
    openCustomModal({
      kicker: "Результат загрузки",
      title: `${file.name}: проверка завершена`,
      text: "AI извлёк цифры, даты и ссылки на источники, затем сравнил их с Jira, Confluence и финансовым контуром.",
      metrics: [
        ["Извлечено", "26 цифр"],
        ["Подтверждено", "24"],
        ["Расхождений", "2"]
      ],
      list: [
        "Дата релиза расходится между презентацией и Jira.",
        "Прогноз загрузки команды требует ссылки на weekly capacity review.",
        "Финансовые потери подтверждены finance snapshot."
      ]
    });
  });
}

elements.fileInput.addEventListener("change", () => {
  const [file] = elements.fileInput.files;
  if (!file) return;
  processUploadedFile(file);
});

elements.modalBackdrop.addEventListener("click", (event) => {
  if (event.target === elements.modalBackdrop) {
    closeModal();
  }
});

elements.modalClose.addEventListener("click", closeModal);

elements.settingsBackdrop.addEventListener("click", (event) => {
  if (event.target === elements.settingsBackdrop) {
    closeSettings();
  }
});

elements.settingsClose.addEventListener("click", closeSettings);

elements.settingsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveSettings();
});

elements.changeRoleButton.addEventListener("click", () => {
  closeSettings();
  showEntryScreen();
});

elements.logoutButton.addEventListener("click", () => {
  resetSession();
  state.selectedRole = null;
  elements.corpLogin.disabled = true;
  document.querySelectorAll(".role-card").forEach((button) => button.classList.remove("role-card-active"));
  showEntryScreen();
  showToast("Роль сброшена");
});

document.querySelectorAll(".has-tooltip").forEach((item) => {
  item.addEventListener("mouseenter", () => showTooltip(item));
  item.addEventListener("mouseleave", hideTooltip);
  item.addEventListener("focus", () => showTooltip(item));
  item.addEventListener("blur", hideTooltip);
});

window.addEventListener("scroll", hideTooltip, { passive: true });
window.addEventListener("resize", () => {
  hideTooltip();
  renderProjects();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!elements.settingsBackdrop.classList.contains("is-hidden")) {
      closeSettings();
      return;
    }

    if (!elements.modalBackdrop.classList.contains("is-hidden")) {
      closeModal();
    }
  }
});

syncActiveFilters();
setActiveScreen(state.activeScreen);
bootstrapSession();
