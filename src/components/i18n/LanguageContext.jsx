import React, { createContext, useContext, useState } from "react";

const BASE_STATUS_COLORS = {
  beta: "bg-amber-500/40 text-amber-200 border-amber-400/60",
  available: "bg-emerald-500/40 text-emerald-100 border-emerald-400/60",
  soon: "bg-violet-500/40 text-violet-100 border-violet-400/60",
};

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      about: "Nosotros",
      contact: "Contacto",
    },
    footer: {
      tagline:
        "Juegos compactos y rejugables. Apps de utilidad sin fricción. Limpios, rápidos, accesibles.",
      nav: "Navegación",
      contact: "Contacto",
      location: "Estudio indie remoto",
      rights: "Todos los derechos reservados.",
    },
    hero: {
      badge: "Juegos y apps que respetan tu tiempo",
      subtitle:
        "Creamos juegos compactos y rejugables, y apps de utilidad sin fricción.",
      accent: "Limpios, rápidos, accesibles.",
      cta1: "Ver Proyectos",
      cta2: "Conocer más",
    },
    stats: {
      launched: "Apps y Juegos lanzados",
      downloads: "Descargas",
      rating: "Rating promedio",
      team: "Equipo creativo",
    },
    featuredProjects: {
      subtitle: "Destacados",
      title: "Proyectos",
      viewAll: "Ver todos",
      viewAllMobile: "Ver todos los proyectos",
    },
    cta: {
      title: "¿Tienes una idea?",
      subtitle:
        "Nos encanta escuchar sugerencias y colaborar. Escríbenos y hablemos.",
      button: "Contáctanos",
    },
    projectsPage: {
      subtitle: "Nuestros proyectos",
      title: "Apps y Juegos",
      titleAccent: "con alma propia",
      description:
        "Herramientas esenciales y experiencias únicas diseñadas con mimo.",
      detail: "Ver detalles",
      close: "Cerrar",
      featuresLabel: "Características",
      platform: "Plataforma",
      appLabel: "App",
      gameLabel: "Juego",
    },
    aboutPage: {
      subtitle: "Sobre nosotros",
      title: "Un estudio",
      titleAccent: "con alma indie",
      description:
        "Somos un equipo pequeño de 2 personas con una misión grande.",
      storyTitle: "Nuestra historia",
      story:
        "REIMII nació de una frustración simple: queríamos apps y juegos que no nos trataran como productos. Sin anuncios que interrumpen, sin mecánicas manipulativas. Empezamos con dos libretas y muchas ideas. Hoy seguimos igual de pequeños, pero con más experiencia y la misma ilusión.",
      valuesTitle: "Nuestros valores",
      values: {
        passion: "Pasión",
        passionDesc:
          "Cada proyecto nace del amor por crear experiencias que importen.",
        speed: "Rapidez",
        speedDesc:
          "Apps y juegos rápidos, sin bloatware ni esperas innecesarias.",
        respect: "Respeto",
        respectDesc:
          "Tu tiempo y datos son sagrados. Sin anuncios invasivos ni tracking.",
        simplicity: "Simplicidad",
        simplicityDesc:
          "Lo complejo hecho simple. Interfaces limpias para todos.",
      },
    },
    contactPage: {
      subtitle: "Contacto",
      title: "Hablemos",
      description:
        "¿Tienes una pregunta, sugerencia o quieres colaborar? Nos encantaría escucharte.",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos tu idea...",
      send: "Enviar mensaje",
      sent: "¡Mensaje enviado!",
      sentDesc: "Te responderemos lo antes posible. ¡Gracias por escribirnos!",
      sendAnother: "Enviar otro mensaje",
      location: "Ubicación",
      locationDesc:
        "Estudio indie remoto — trabajamos desde cualquier rincón del mundo.",
      fastReply: "Respuesta rápida",
      fastReplyDesc:
        "Intentamos responder todos los mensajes en menos de 48 horas.",
      errorMsg: "Por favor completa todos los campos",
      successMsg: "¡Mensaje enviado! Te responderemos pronto.",
    },
    projects: [
      {
        name: "Velora Print",
        category: "Impresión 3D",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Calculadora para presupuestos de impresión 3D: material, tiempo, consumo eléctrico, margen y precio final en segundos.",
        features: [
          "Cálculo de precio",
          "Coste de material",
          "Tiempo de impresión",
          "Margen de beneficio",
        ],
      },
      {
        name: "EcoPulse",
        category: "Economía",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Gestión simple de finanzas personales y compartidas: cuentas conjuntas, gastos fijos, ingresos y notas por movimiento.",
        features: [
          "Cuentas conjuntas",
          "Gastos fijos",
          "Notas por movimiento",
          "Reportes mensuales",
        ],
      },
      {
        name: "Habit Tracker",
        category: "Hábitos",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Rutinas simples, recordatorios suaves y estadísticas claras para mantener el ritmo.",
        features: [
          "Rutinas diarias",
          "Recordatorios suaves",
          "Estadísticas claras",
          "Racha de hábitos",
        ],
      },
      {
        name: "Aura Mood Tracker",
        category: "Bienestar",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Registro de ánimo con insights: patrones, notas rápidas y tendencias semanales.",
        features: [
          "Registro diario",
          "Patrones de ánimo",
          "Notas rápidas",
          "Tendencias semanales",
        ],
      },
      {
        name: "Akaladrom",
        category: "RPG / Mundo abierto",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "game",
        description:
          "RPG multijugador de mundo abierto: explora, sube de nivel y juega con tus amigos en sesiones compartidas.",
        features: [
          "Combate dinámico",
          "Mundo abierto",
          "Multijugador",
          "Progresión de personaje",
        ],
      },
    ],
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    footer: {
      tagline:
        "Compact and replayable games. Frictionless utility apps. Clean, fast, accessible.",
      nav: "Navigation",
      contact: "Contact",
      location: "Remote indie studio",
      rights: "All rights reserved.",
    },
    hero: {
      badge: "Games and apps that respect your time",
      subtitle:
        "We create compact, replayable games and frictionless utility apps.",
      accent: "Clean, fast, accessible.",
      cta1: "See Projects",
      cta2: "Learn more",
    },
    stats: {
      launched: "Apps & Games launched",
      downloads: "Downloads",
      rating: "Average rating",
      team: "Creative team",
    },
    featuredProjects: {
      subtitle: "Featured",
      title: "Projects",
      viewAll: "View all",
      viewAllMobile: "View all projects",
    },
    cta: {
      title: "Got an idea?",
      subtitle: "We love hearing suggestions and collaborating. Write to us.",
      button: "Contact us",
    },
    projectsPage: {
      subtitle: "Our projects",
      title: "Apps & Games",
      titleAccent: "with their own soul",
      description: "Essential tools and unique experiences crafted with care.",
      detail: "View details",
      close: "Close",
      featuresLabel: "Features",
      platform: "Platform",
      appLabel: "App",
      gameLabel: "Game",
    },
    aboutPage: {
      subtitle: "About us",
      title: "A studio",
      titleAccent: "with indie soul",
      description: "We are a small 2-person team with a big mission.",
      storyTitle: "Our story",
      story:
        "REIMII was born from a simple frustration: we wanted apps and games that didn't treat us as products. No interrupting ads, no manipulative mechanics. We started with two laptops and many ideas. Today we're still small, but with more experience and the same excitement.",
      valuesTitle: "Our values",
      values: {
        passion: "Passion",
        passionDesc:
          "Every project is born from the love of creating experiences that matter.",
        speed: "Speed",
        speedDesc: "Fast apps and games, without bloatware.",
        respect: "Respect",
        respectDesc:
          "Your time and data are sacred. No invasive ads or tracking.",
        simplicity: "Simplicity",
        simplicityDesc: "Complex made simple. Clean interfaces for everyone.",
      },
    },
    contactPage: {
      subtitle: "Contact",
      title: "Let's talk",
      description:
        "Have a question, suggestion or want to collaborate? We'd love to hear from you.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Tell us your idea...",
      send: "Send message",
      sent: "Message sent!",
      sentDesc: "We'll get back to you as soon as possible. Thank you!",
      sendAnother: "Send another message",
      location: "Location",
      locationDesc: "Remote indie studio — we work from anywhere in the world.",
      fastReply: "Quick reply",
      fastReplyDesc: "We try to reply to all messages within 48 hours.",
      errorMsg: "Please fill in all fields",
      successMsg: "Message sent! We'll reply soon.",
    },
    projects: [
      {
        name: "Velora Print",
        category: "3D Printing",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Calculator for 3D printing quotes: material, time, electricity usage, margin and final price in seconds.",
        features: [
          "Price calculation",
          "Material cost",
          "Print time",
          "Profit margin",
        ],
      },
      {
        name: "EcoPulse",
        category: "Finance",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Simple management of personal and shared finances: joint accounts, fixed expenses, income and notes per transaction.",
        features: [
          "Joint accounts",
          "Fixed expenses",
          "Transaction notes",
          "Monthly reports",
        ],
      },
      {
        name: "Habit Tracker",
        category: "Habits",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Simple routines, gentle reminders and clear statistics to keep your rhythm.",
        features: [
          "Daily routines",
          "Gentle reminders",
          "Clear stats",
          "Habit streaks",
        ],
      },
      {
        name: "Aura Mood Tracker",
        category: "Wellness",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Mood logging with insights: patterns, quick notes and weekly trends.",
        features: [
          "Daily log",
          "Mood patterns",
          "Quick notes",
          "Weekly trends",
        ],
      },
      {
        name: "Akaladrom",
        category: "RPG / Open World",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "game",
        description:
          "Open world multiplayer RPG: explore, level up and play with your friends in shared sessions.",
        features: [
          "Dynamic combat",
          "Open world",
          "Multiplayer",
          "Character progression",
        ],
      },
    ],
  },
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      about: "À propos",
      contact: "Contact",
    },
    footer: {
      tagline:
        "Jeux compacts et rejouables. Applications utilitaires sans friction. Propres, rapides, accessibles.",
      nav: "Navigation",
      contact: "Contact",
      location: "Studio indie à distance",
      rights: "Tous droits réservés.",
    },
    hero: {
      badge: "Jeux et apps qui respectent votre temps",
      subtitle:
        "Nous créons des jeux compacts et rejouables, et des applications utilitaires sans friction.",
      accent: "Propres, rapides, accessibles.",
      cta1: "Voir les Projets",
      cta2: "En savoir plus",
    },
    stats: {
      launched: "Apps & Jeux lancés",
      downloads: "Téléchargements",
      rating: "Note moyenne",
      team: "Équipe créative",
    },
    featuredProjects: {
      subtitle: "En vedette",
      title: "Projets",
      viewAll: "Voir tout",
      viewAllMobile: "Voir tous les projets",
    },
    cta: {
      title: "Vous avez une idée?",
      subtitle: "Nous adorons entendre des suggestions. Écrivez-nous.",
      button: "Nous contacter",
    },
    projectsPage: {
      subtitle: "Nos projets",
      title: "Apps & Jeux",
      titleAccent: "à l'âme unique",
      description: "Outils essentiels et expériences uniques conçus avec soin.",
      detail: "Voir les détails",
      close: "Fermer",
      featuresLabel: "Fonctionnalités",
      platform: "Plateforme",
      appLabel: "App",
      gameLabel: "Jeu",
    },
    aboutPage: {
      subtitle: "À propos de nous",
      title: "Un studio",
      titleAccent: "à l'âme indie",
      description:
        "Nous sommes une petite équipe de 2 personnes avec une grande mission.",
      storyTitle: "Notre histoire",
      story:
        "REIMII est né d'une frustration simple : nous voulions des apps et des jeux qui ne nous traitaient pas comme des produits. Pas de publicités, pas de mécaniques manipulatrices. Nous avons commencé avec deux ordinateurs et beaucoup d'idées.",
      valuesTitle: "Nos valeurs",
      values: {
        passion: "Passion",
        passionDesc:
          "Chaque projet naît de l'amour de créer des expériences qui comptent.",
        speed: "Rapidité",
        speedDesc: "Apps et jeux qui chargent vite, sans bloatware.",
        respect: "Respect",
        respectDesc:
          "Votre temps et vos données sont sacrés. Pas de pub invasive.",
        simplicity: "Simplicité",
        simplicityDesc:
          "Le complexe rendu simple. Des interfaces épurées pour tous.",
      },
    },
    contactPage: {
      subtitle: "Contact",
      title: "Parlons-en",
      description:
        "Vous avez une question ou souhaitez collaborer? Nous serions ravis de vous entendre.",
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Partagez votre idée...",
      send: "Envoyer le message",
      sent: "Message envoyé!",
      sentDesc: "Nous vous répondrons dès que possible. Merci!",
      sendAnother: "Envoyer un autre message",
      location: "Emplacement",
      locationDesc:
        "Studio indie à distance — nous travaillons de partout dans le monde.",
      fastReply: "Réponse rapide",
      fastReplyDesc:
        "Nous essayons de répondre à tous les messages en moins de 48 heures.",
      errorMsg: "Veuillez remplir tous les champs",
      successMsg: "Message envoyé! Nous vous répondrons bientôt.",
    },
    projects: [
      {
        name: "Velora Print",
        category: "Impression 3D",
        status: "Bêta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Calculatrice pour devis d'impression 3D : matériau, temps, électricité, marge et prix final en quelques secondes.",
        features: [
          "Calcul du prix",
          "Coût du matériau",
          "Temps d'impression",
          "Marge de profit",
        ],
      },
      {
        name: "EcoPulse",
        category: "Finance",
        status: "Bêta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Gestion simple des finances personnelles et partagées : comptes joints, dépenses fixes, revenus et notes.",
        features: [
          "Comptes joints",
          "Dépenses fixes",
          "Notes par mouvement",
          "Rapports mensuels",
        ],
      },
      {
        name: "Habit Tracker",
        category: "Habitudes",
        status: "Bêta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Routines simples, rappels doux et statistiques claires pour maintenir le rythme.",
        features: [
          "Routines quotidiennes",
          "Rappels doux",
          "Statistiques claires",
          "Séries d'habitudes",
        ],
      },
      {
        name: "Aura Mood Tracker",
        category: "Bien-être",
        status: "Bêta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Suivi de l'humeur avec des insights : modèles, notes rapides et tendances hebdomadaires.",
        features: [
          "Journal quotidien",
          "Modèles d'humeur",
          "Notes rapides",
          "Tendances hebdomadaires",
        ],
      },
      {
        name: "Akaladrom",
        category: "RPG / Monde ouvert",
        status: "Bêta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "game",
        description:
          "RPG multijoueur en monde ouvert : explorez, montez en niveau et jouez avec vos amis.",
        features: [
          "Combat dynamique",
          "Monde ouvert",
          "Multijoueur",
          "Progression du personnage",
        ],
      },
    ],
  },
  zh: {
    nav: {
      home: "首页",
      projects: "项目",
      about: "关于我们",
      contact: "联系我们",
    },
    footer: {
      tagline: "紧凑可重玩的游戏。无摩擦的实用应用。简洁、快速、易用。",
      nav: "导航",
      contact: "联系",
      location: "远程独立工作室",
      rights: "版权所有。",
    },
    hero: {
      badge: "尊重您时间的游戏和应用",
      subtitle: "我们创作紧凑可重玩的游戏和无摩擦的实用应用。",
      accent: "简洁、快速、易用。",
      cta1: "查看项目",
      cta2: "了解更多",
    },
    stats: {
      launched: "已发布应用和游戏",
      downloads: "下载量",
      rating: "平均评分",
      team: "创意团队",
    },
    featuredProjects: {
      subtitle: "精选",
      title: "项目",
      viewAll: "查看全部",
      viewAllMobile: "查看所有项目",
    },
    cta: {
      title: "有想法？",
      subtitle: "我们喜欢听取建议和合作。请写信给我们。",
      button: "联系我们",
    },
    projectsPage: {
      subtitle: "我们的项目",
      title: "应用与游戏",
      titleAccent: "精心打造",
      description: "精心制作的基本工具和独特的游戏体验。",
      detail: "查看详情",
      close: "关闭",
      featuresLabel: "功能特点",
      platform: "平台",
      appLabel: "应用",
      gameLabel: "游戏",
    },
    aboutPage: {
      subtitle: "关于我们",
      title: "一个",
      titleAccent: "独立精神的工作室",
      description: "我们是一个2人小团队，怀揣远大使命。",
      storyTitle: "我们的故事",
      story:
        "REIMII源于一个简单的挫败感：我们想要不把我们当产品的应用和游戏。没有打扰广告，没有操纵性机制。我们从两台笔记本电脑和许多想法开始。",
      valuesTitle: "我们的价值观",
      values: {
        passion: "热情",
        passionDesc: "每个项目都源于对创造有意义体验的热爱。",
        speed: "速度",
        speedDesc: "快速的应用和游戏，无臃肿软件。",
        respect: "尊重",
        respectDesc: "您的时间和数据是神圣的。无侵入性广告。",
        simplicity: "简洁",
        simplicityDesc: "将复杂变简单。人人可用的清晰界面。",
      },
    },
    contactPage: {
      subtitle: "联系",
      title: "与我们交流",
      description: "有问题、建议或想合作？我们非常乐意倾听。",
      name: "姓名",
      namePlaceholder: "您的姓名",
      email: "邮箱",
      message: "消息",
      messagePlaceholder: "告诉我们您的想法...",
      send: "发送消息",
      sent: "消息已发送！",
      sentDesc: "我们会尽快回复您。谢谢！",
      sendAnother: "再发一条消息",
      location: "位置",
      locationDesc: "远程独立工作室——我们在世界任何地方工作。",
      fastReply: "快速回复",
      fastReplyDesc: "我们尽量在48小时内回复所有消息。",
      errorMsg: "请填写所有字段",
      successMsg: "消息已发送！我们很快会回复。",
    },
    projects: [
      {
        name: "Velora Print",
        category: "3D打印",
        status: "测试版",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "3D打印报价计算器：材料、时间、电力消耗、利润率和最终价格，几秒完成。",
        features: ["价格计算", "材料成本", "打印时间", "利润率"],
      },
      {
        name: "EcoPulse",
        category: "金融",
        status: "测试版",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "简单管理个人和共享财务：联名账户、固定支出、收入和每笔交易备注。",
        features: ["联名账户", "固定支出", "交易备注", "月度报告"],
      },
      {
        name: "Habit Tracker",
        category: "习惯",
        status: "测试版",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description: "简单的日常习惯、温和的提醒和清晰的统计，保持节奏。",
        features: ["每日习惯", "温和提醒", "清晰统计", "习惯连续记录"],
      },
      {
        name: "Aura Mood Tracker",
        category: "健康",
        status: "测试版",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description: "情绪记录与洞察：模式、快速笔记和每周趋势。",
        features: ["每日记录", "情绪模式", "快速笔记", "每周趋势"],
      },
      {
        name: "Akaladrom",
        category: "RPG / 开放世界",
        status: "测试版",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "game",
        description:
          "开放世界多人RPG：探索、升级并与朋友一起在共享会话中游戏。",
        features: ["动态战斗", "开放世界", "多人游戏", "角色成长"],
      },
    ],
  },
  hi: {
    nav: {
      home: "होम",
      projects: "प्रोजेक्ट्स",
      about: "हमारे बारे में",
      contact: "संपर्क",
    },
    footer: {
      tagline:
        "छोटे और दोबारा खेलने योग्य गेम। बिना झंझट के उपयोगिता ऐप्स। साफ, तेज, सुलभ।",
      nav: "नेविगेशन",
      contact: "संपर्क",
      location: "रिमोट इंडी स्टूडियो",
      rights: "सर्वाधिकार सुरक्षित।",
    },
    hero: {
      badge: "गेम और ऐप्स जो आपके समय का सम्मान करते हैं",
      subtitle:
        "हम छोटे, दोबारा खेलने योग्य गेम और बिना झंझट के उपयोगिता ऐप्स बनाते हैं।",
      accent: "साफ, तेज, सुलभ।",
      cta1: "प्रोजेक्ट्स देखें",
      cta2: "और जानें",
    },
    stats: {
      launched: "लॉन्च किए गए ऐप्स और गेम",
      downloads: "डाउनलोड",
      rating: "औसत रेटिंग",
      team: "क्रिएटिव टीम",
    },
    featuredProjects: {
      subtitle: "विशेष रुप से प्रदर्शित",
      title: "प्रोजेक्ट्स",
      viewAll: "सभी देखें",
      viewAllMobile: "सभी प्रोजेक्ट्स देखें",
    },
    cta: {
      title: "कोई विचार है?",
      subtitle: "हम सुझाव सुनना और सहयोग करना पसंद करते हैं। हमें लिखें।",
      button: "संपर्क करें",
    },
    projectsPage: {
      subtitle: "हमारे प्रोजेक्ट्स",
      title: "ऐप्स और गेम",
      titleAccent: "अपनी आत्मा के साथ",
      description: "सावधानी से बनाए गए आवश्यक टूल और अनूठे गेम अनुभव।",
      detail: "विवरण देखें",
      close: "बंद करें",
      featuresLabel: "विशेषताएं",
      platform: "प्लेटफॉर्म",
      appLabel: "ऐप",
      gameLabel: "गेम",
    },
    aboutPage: {
      subtitle: "हमारे बारे में",
      title: "एक स्टूडियो",
      titleAccent: "इंडी आत्मा के साथ",
      description: "हम एक बड़े मिशन वाली 2 लोगों की छोटी टीम हैं।",
      storyTitle: "हमारी कहानी",
      story:
        "REIMII एक सरल निराशा से पैदा हुआ: हम ऐसे ऐप्स और गेम चाहते थे जो हमें उत्पाद की तरह न समझें। विज्ञापनों के बिना, जोड़-तोड़ की तकनीक के बिना। हमने दो लैपटॉप और बहुत सारे विचारों से शुरुआत की।",
      valuesTitle: "हमारे मूल्य",
      values: {
        passion: "जुनून",
        passionDesc:
          "हर प्रोजेक्ट उन अनुभवों को बनाने के प्यार से जन्म लेता है जो मायने रखते हैं।",
        speed: "गति",
        speedDesc: "ब्लोटवेयर के बिना तेज ऐप्स और गेम।",
        respect: "सम्मान",
        respectDesc: "आपका समय और डेटा पवित्र है। कोई आक्रामक विज्ञापन नहीं।",
        simplicity: "सरलता",
        simplicityDesc: "जटिल को सरल बनाया। सभी के लिए साफ इंटरफेस।",
      },
    },
    contactPage: {
      subtitle: "संपर्क",
      title: "बात करें",
      description:
        "कोई सवाल है या सहयोग करना चाहते हैं? हमें आपसे सुनकर खुशी होगी।",
      name: "नाम",
      namePlaceholder: "आपका नाम",
      email: "ईमेल",
      message: "संदेश",
      messagePlaceholder: "हमें अपना विचार बताएं...",
      send: "संदेश भेजें",
      sent: "संदेश भेज दिया!",
      sentDesc: "हम जल्द से जल्द जवाब देंगे। धन्यवाद!",
      sendAnother: "एक और संदेश भेजें",
      location: "स्थान",
      locationDesc:
        "रिमोट इंडी स्टूडियो — हम दुनिया में कहीं से भी काम करते हैं।",
      fastReply: "त्वरित जवाब",
      fastReplyDesc:
        "हम 48 घंटों के भीतर सभी संदेशों का जवाब देने की कोशिश करते हैं।",
      errorMsg: "कृपया सभी फ़ील्ड भरें",
      successMsg: "संदेश भेज दिया! हम जल्द जवाब देंगे।",
    },
    projects: [
      {
        name: "Velora Print",
        category: "3D प्रिंटिंग",
        status: "बीटा",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "3D प्रिंटिंग कोटेशन कैलकुलेटर: सामग्री, समय, बिजली खर्च, मार्जिन और अंतिम कीमत सेकंडों में।",
        features: ["कीमत गणना", "सामग्री लागत", "प्रिंट समय", "लाभ मार्जिन"],
      },
      {
        name: "EcoPulse",
        category: "वित्त",
        status: "बीटा",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "व्यक्तिगत और साझा वित्त का सरल प्रबंधन: संयुक्त खाते, निश्चित खर्च और लेनदेन नोट्स।",
        features: [
          "संयुक्त खाते",
          "निश्चित खर्च",
          "लेनदेन नोट्स",
          "मासिक रिपोर्ट",
        ],
      },
      {
        name: "Habit Tracker",
        category: "आदतें",
        status: "बीटा",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description: "सरल दिनचर्या, सौम्य अनुस्मारक और स्पष्ट आँकड़े।",
        features: [
          "दैनिक दिनचर्या",
          "सौम्य अनुस्मारक",
          "स्पष्ट आँकड़े",
          "आदत स्ट्रीक",
        ],
      },
      {
        name: "Aura Mood Tracker",
        category: "स्वास्थ्य",
        status: "बीटा",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description: "मनोदशा लॉगिंग: पैटर्न, त्वरित नोट्स और साप्ताहिक रुझान।",
        features: [
          "दैनिक लॉग",
          "मनोदशा पैटर्न",
          "त्वरित नोट्स",
          "साप्ताहिक रुझान",
        ],
      },
      {
        name: "Akaladrom",
        category: "RPG / ओपन वर्ल्ड",
        status: "बीटा",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "game",
        description:
          "ओपन वर्ल्ड मल्टीप्लेयर RPG: अन्वेषण करें, लेवल अप करें और दोस्तों के साथ खेलें।",
        features: [
          "डायनामिक युद्ध",
          "ओपन वर्ल्ड",
          "मल्टीप्लेयर",
          "चरित्र विकास",
        ],
      },
    ],
  },
  ar: {
    nav: {
      home: "الرئيسية",
      projects: "المشاريع",
      about: "من نحن",
      contact: "تواصل",
    },
    footer: {
      tagline:
        "ألعاب مدمجة وقابلة لإعادة اللعب. تطبيقات مفيدة بلا عوائق. نظيفة، سريعة، في متناول الجميع.",
      nav: "التنقل",
      contact: "تواصل",
      location: "استوديو مستقل عن بُعد",
      rights: "جميع الحقوق محفوظة.",
    },
    hero: {
      badge: "ألعاب وتطبيقات تحترم وقتك",
      subtitle:
        "نصنع ألعاباً مدمجة وقابلة لإعادة اللعب وتطبيقات مفيدة بلا عوائق.",
      accent: "نظيفة، سريعة، في متناول الجميع.",
      cta1: "عرض المشاريع",
      cta2: "اعرف أكثر",
    },
    stats: {
      launched: "تطبيقات وألعاب أُطلقت",
      downloads: "تنزيل",
      rating: "متوسط التقييم",
      team: "الفريق الإبداعي",
    },
    featuredProjects: {
      subtitle: "مميز",
      title: "المشاريع",
      viewAll: "عرض الكل",
      viewAllMobile: "عرض جميع المشاريع",
    },
    cta: {
      title: "لديك فكرة؟",
      subtitle: "نحب سماع الاقتراحات والتعاون. اكتب لنا.",
      button: "تواصل معنا",
    },
    projectsPage: {
      subtitle: "مشاريعنا",
      title: "تطبيقات وألعاب",
      titleAccent: "بروحها الخاصة",
      description: "أدوات أساسية وتجارب فريدة مصنوعة بعناية.",
      detail: "عرض التفاصيل",
      close: "إغلاق",
      featuresLabel: "المميزات",
      platform: "المنصة",
      appLabel: "تطبيق",
      gameLabel: "لعبة",
    },
    aboutPage: {
      subtitle: "من نحن",
      title: "استوديو",
      titleAccent: "بروح مستقلة",
      description: "نحن فريق صغير من شخصين بمهمة كبيرة.",
      storyTitle: "قصتنا",
      story:
        "وُلد REIMII من إحباط بسيط: أردنا تطبيقات وألعاباً لا تعاملنا كمنتجات. بلا إعلانات مزعجة، بلا آليات تلاعب. بدأنا بكمبيوترين محمولين وأفكار كثيرة.",
      valuesTitle: "قيمنا",
      values: {
        passion: "شغف",
        passionDesc: "كل مشروع يولد من حب إنشاء تجارب تهم.",
        speed: "سرعة",
        speedDesc: "تطبيقات وألعاب سريعة بدون برامج مضخمة.",
        respect: "احترام",
        respectDesc: "وقتك وبياناتك مقدسة. لا إعلانات متطفلة.",
        simplicity: "بساطة",
        simplicityDesc: "المعقد يصبح بسيطاً. واجهات نظيفة للجميع.",
      },
    },
    contactPage: {
      subtitle: "تواصل",
      title: "لنتحدث",
      description: "لديك سؤال أو اقتراح؟ يسعدنا الاستماع إليك.",
      name: "الاسم",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      messagePlaceholder: "أخبرنا عن فكرتك...",
      send: "إرسال الرسالة",
      sent: "تم إرسال الرسالة!",
      sentDesc: "سنرد عليك في أقرب وقت ممكن. شكراً!",
      sendAnother: "إرسال رسالة أخرى",
      location: "الموقع",
      locationDesc: "استوديو مستقل عن بُعد — نعمل من أي مكان في العالم.",
      fastReply: "رد سريع",
      fastReplyDesc: "نحاول الرد على جميع الرسائل في غضون 48 ساعة.",
      errorMsg: "يرجى ملء جميع الحقول",
      successMsg: "تم إرسال الرسالة! سنرد قريباً.",
    },
    projects: [
      {
        name: "Velora Print",
        category: "الطباعة ثلاثية الأبعاد",
        status: "تجريبي",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "حاسبة لعروض أسعار الطباعة ثلاثية الأبعاد: المادة، الوقت، استهلاك الكهرباء، الهامش والسعر النهائي خلال ثوانٍ.",
        features: ["حساب السعر", "تكلفة المادة", "وقت الطباعة", "هامش الربح"],
      },
      {
        name: "EcoPulse",
        category: "المال",
        status: "تجريبي",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "إدارة بسيطة للمال الشخصي والمشترك: حسابات مشتركة، نفقات ثابتة وملاحظات.",
        features: [
          "حسابات مشتركة",
          "نفقات ثابتة",
          "ملاحظات المعاملات",
          "تقارير شهرية",
        ],
      },
      {
        name: "Habit Tracker",
        category: "عادات",
        status: "تجريبي",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description: "روتين بسيط وتذكيرات لطيفة وإحصاءات واضحة.",
        features: [
          "روتين يومي",
          "تذكيرات لطيفة",
          "إحصاءات واضحة",
          "تتبع العادات",
        ],
      },
      {
        name: "Aura Mood Tracker",
        category: "صحة",
        status: "تجريبي",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "تسجيل المزاج مع رؤى: أنماط وملاحظات سريعة واتجاهات أسبوعية.",
        features: [
          "سجل يومي",
          "أنماط المزاج",
          "ملاحظات سريعة",
          "اتجاهات أسبوعية",
        ],
      },
      {
        name: "Akaladrom",
        category: "RPG / عالم مفتوح",
        status: "تجريبي",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "game",
        description:
          "RPG متعدد اللاعبين بعالم مفتوح: استكشف وارتقِ بمستواك والعب مع أصدقائك.",
        features: [
          "قتال ديناميكي",
          "عالم مفتوح",
          "متعدد اللاعبين",
          "تطور الشخصية",
        ],
      },
    ],
  },
  pt: {
    nav: {
      home: "Início",
      projects: "Projetos",
      about: "Sobre nós",
      contact: "Contato",
    },
    footer: {
      tagline:
        "Jogos compactos e rejogáveis. Apps utilitários sem fricção. Limpos, rápidos, acessíveis.",
      nav: "Navegação",
      contact: "Contato",
      location: "Estúdio indie remoto",
      rights: "Todos os direitos reservados.",
    },
    hero: {
      badge: "Jogos e apps que respeitam seu tempo",
      subtitle:
        "Criamos jogos compactos e rejogáveis e apps utilitários sem fricção.",
      accent: "Limpos, rápidos, acessíveis.",
      cta1: "Ver Projetos",
      cta2: "Saiba mais",
    },
    stats: {
      launched: "Apps e Jogos lançados",
      downloads: "Downloads",
      rating: "Avaliação média",
      team: "Equipe criativa",
    },
    featuredProjects: {
      subtitle: "Destaques",
      title: "Projetos",
      viewAll: "Ver tudo",
      viewAllMobile: "Ver todos os projetos",
    },
    cta: {
      title: "Tem uma ideia?",
      subtitle: "Adoramos ouvir sugestões e colaborar. Escreva para nós.",
      button: "Contate-nos",
    },
    projectsPage: {
      subtitle: "Nossos projetos",
      title: "Apps e Jogos",
      titleAccent: "com alma própria",
      description:
        "Ferramentas essenciais e experiências únicas feitas com cuidado.",
      detail: "Ver detalhes",
      close: "Fechar",
      featuresLabel: "Recursos",
      platform: "Plataforma",
      appLabel: "App",
      gameLabel: "Jogo",
    },
    aboutPage: {
      subtitle: "Sobre nós",
      title: "Um estúdio",
      titleAccent: "com alma indie",
      description:
        "Somos uma pequena equipe de 2 pessoas com uma grande missão.",
      storyTitle: "Nossa história",
      story:
        "REIMII nasceu de uma frustração simples: queríamos apps e jogos que não nos tratassem como produtos. Sem anúncios interrompendo, sem mecânicas manipulativas. Começamos com dois laptops e muitas ideias.",
      valuesTitle: "Nossos valores",
      values: {
        passion: "Paixão",
        passionDesc:
          "Cada projeto nasce do amor por criar experiências que importam.",
        speed: "Velocidade",
        speedDesc: "Apps e jogos rápidos, sem bloatware.",
        respect: "Respeito",
        respectDesc: "Seu tempo e dados são sagrados. Sem anúncios invasivos.",
        simplicity: "Simplicidade",
        simplicityDesc:
          "O complexo tornado simples. Interfaces limpas para todos.",
      },
    },
    contactPage: {
      subtitle: "Contato",
      title: "Vamos conversar",
      description:
        "Tem uma pergunta ou quer colaborar? Adoraríamos ouvir você.",
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "Email",
      message: "Mensagem",
      messagePlaceholder: "Conta-nos sua ideia...",
      send: "Enviar mensagem",
      sent: "Mensagem enviada!",
      sentDesc: "Responderemos o mais rápido possível. Obrigado!",
      sendAnother: "Enviar outra mensagem",
      location: "Localização",
      locationDesc:
        "Estúdio indie remoto — trabalhamos de qualquer lugar do mundo.",
      fastReply: "Resposta rápida",
      fastReplyDesc:
        "Tentamos responder a todas as mensagens em menos de 48 horas.",
      errorMsg: "Por favor preencha todos os campos",
      successMsg: "Mensagem enviada! Responderemos em breve.",
    },
    projects: [
      {
        name: "Velora Print",
        category: "Impressão 3D",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Calculadora para orçamentos de impressão 3D: material, tempo, consumo elétrico, margem e preço final em segundos.",
        features: [
          "Cálculo de preço",
          "Custo do material",
          "Tempo de impressão",
          "Margem de lucro",
        ],
      },
      {
        name: "EcoPulse",
        category: "Finanças",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Gestão simples de finanças pessoais e compartilhadas: contas conjuntas, despesas fixas e notas.",
        features: [
          "Contas conjuntas",
          "Despesas fixas",
          "Notas de transações",
          "Relatórios mensais",
        ],
      },
      {
        name: "Habit Tracker",
        category: "Hábitos",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Rotinas simples, lembretes suaves e estatísticas claras para manter o ritmo.",
        features: [
          "Rotinas diárias",
          "Lembretes suaves",
          "Estatísticas claras",
          "Sequência de hábitos",
        ],
      },
      {
        name: "Aura Mood Tracker",
        category: "Bem-estar",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Registro de humor com insights: padrões, notas rápidas e tendências semanais.",
        features: [
          "Registro diário",
          "Padrões de humor",
          "Notas rápidas",
          "Tendências semanais",
        ],
      },
      {
        name: "Akaladrom",
        category: "RPG / Mundo Aberto",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "game",
        description:
          "RPG multiplayer de mundo aberto: explore, suba de nível e jogue com seus amigos.",
        features: [
          "Combate dinâmico",
          "Mundo aberto",
          "Multiplayer",
          "Progressão de personagem",
        ],
      },
    ],
  },
  ru: {
    nav: {
      home: "Главная",
      projects: "Проекты",
      about: "О нас",
      contact: "Контакт",
    },
    footer: {
      tagline:
        "Компактные и переигрываемые игры. Утилиты без трений. Чистые, быстрые, доступные.",
      nav: "Навигация",
      contact: "Контакт",
      location: "Удалённая инди-студия",
      rights: "Все права защищены.",
    },
    hero: {
      badge: "Игры и приложения, уважающие ваше время",
      subtitle:
        "Мы создаём компактные переигрываемые игры и утилиты без трений.",
      accent: "Чистые, быстрые, доступные.",
      cta1: "Смотреть проекты",
      cta2: "Узнать больше",
    },
    stats: {
      launched: "Запущено приложений и игр",
      downloads: "Загрузок",
      rating: "Средний рейтинг",
      team: "Творческая команда",
    },
    featuredProjects: {
      subtitle: "Рекомендуемые",
      title: "Проекты",
      viewAll: "Смотреть все",
      viewAllMobile: "Все проекты",
    },
    cta: {
      title: "Есть идея?",
      subtitle: "Мы любим слушать предложения и сотрудничать. Напишите нам.",
      button: "Связаться",
    },
    projectsPage: {
      subtitle: "Наши проекты",
      title: "Приложения и игры",
      titleAccent: "с собственной душой",
      description:
        "Необходимые инструменты и уникальные впечатления, созданные с заботой.",
      detail: "Подробнее",
      close: "Закрыть",
      featuresLabel: "Функции",
      platform: "Платформа",
      appLabel: "Приложение",
      gameLabel: "Игра",
    },
    aboutPage: {
      subtitle: "О нас",
      title: "Студия",
      titleAccent: "с инди-душой",
      description: "Мы небольшая команда из 2 человек с большой миссией.",
      storyTitle: "Наша история",
      story:
        "REIMII родился из простого разочарования: мы хотели приложения и игры, которые не относятся к нам как к продуктам. Без назойливой рекламы, без манипулятивных механик. Начинали с двух ноутбуков и множества идей.",
      valuesTitle: "Наши ценности",
      values: {
        passion: "Страсть",
        passionDesc:
          "Каждый проект рождается из любви к созданию значимых впечатлений.",
        speed: "Скорость",
        speedDesc: "Быстрые приложения и игры без раздутого ПО.",
        respect: "Уважение",
        respectDesc:
          "Ваше время и данные священны. Никакой навязчивой рекламы.",
        simplicity: "Простота",
        simplicityDesc:
          "Сложное становится простым. Чистые интерфейсы для всех.",
      },
    },
    contactPage: {
      subtitle: "Контакт",
      title: "Поговорим",
      description:
        "Есть вопрос или хотите сотрудничать? Мы с радостью выслушаем.",
      name: "Имя",
      namePlaceholder: "Ваше имя",
      email: "Email",
      message: "Сообщение",
      messagePlaceholder: "Расскажите вашу идею...",
      send: "Отправить сообщение",
      sent: "Сообщение отправлено!",
      sentDesc: "Мы ответим как можно скорее. Спасибо!",
      sendAnother: "Отправить ещё одно сообщение",
      location: "Местоположение",
      locationDesc: "Удалённая инди-студия — работаем из любой точки мира.",
      fastReply: "Быстрый ответ",
      fastReplyDesc: "Стараемся отвечать на все сообщения в течение 48 часов.",
      errorMsg: "Пожалуйста, заполните все поля",
      successMsg: "Сообщение отправлено! Ответим скоро.",
    },
    projects: [
      {
        name: "Velora Print",
        category: "3D-печать",
        status: "Бета",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Калькулятор смет для 3D-печати: материал, время, электричество, маржа и итоговая цена за секунды.",
        features: [
          "Расчёт цены",
          "Стоимость материала",
          "Время печати",
          "Маржа прибыли",
        ],
      },
      {
        name: "EcoPulse",
        category: "Финансы",
        status: "Бета",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Простое управление личными и общими финансами: совместные счета, фиксированные расходы и заметки.",
        features: [
          "Совместные счета",
          "Фиксированные расходы",
          "Заметки к транзакциям",
          "Месячные отчёты",
        ],
      },
      {
        name: "Habit Tracker",
        category: "Привычки",
        status: "Бета",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Простые распорядки, мягкие напоминания и чёткая статистика для поддержания ритма.",
        features: [
          "Ежедневные привычки",
          "Мягкие напоминания",
          "Чёткая статистика",
          "Серии привычек",
        ],
      },
      {
        name: "Aura Mood Tracker",
        category: "Здоровье",
        status: "Бета",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Ведение дневника настроения: паттерны, быстрые заметки и еженедельные тренды.",
        features: [
          "Ежедневный журнал",
          "Паттерны настроения",
          "Быстрые заметки",
          "Еженедельные тренды",
        ],
      },
      {
        name: "Akaladrom",
        category: "RPG / Открытый мир",
        status: "Бета",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "game",
        description:
          "Многопользовательская RPG в открытом мире: исследуйте, прокачивайтесь и играйте с друзьями.",
        features: [
          "Динамичный бой",
          "Открытый мир",
          "Мультиплеер",
          "Развитие персонажа",
        ],
      },
    ],
  },
  de: {
    nav: {
      home: "Start",
      projects: "Projekte",
      about: "Über uns",
      contact: "Kontakt",
    },
    footer: {
      tagline:
        "Kompakte und wiederholbare Spiele. Reibungslose Utility-Apps. Sauber, schnell, zugänglich.",
      nav: "Navigation",
      contact: "Kontakt",
      location: "Remote Indie-Studio",
      rights: "Alle Rechte vorbehalten.",
    },
    hero: {
      badge: "Spiele und Apps, die deine Zeit respektieren",
      subtitle:
        "Wir erstellen kompakte, wiederholbare Spiele und reibungslose Utility-Apps.",
      accent: "Sauber, schnell, zugänglich.",
      cta1: "Projekte ansehen",
      cta2: "Mehr erfahren",
    },
    stats: {
      launched: "Apps & Spiele veröffentlicht",
      downloads: "Downloads",
      rating: "Durchschnittsbewertung",
      team: "Kreatives Team",
    },
    featuredProjects: {
      subtitle: "Hervorgehoben",
      title: "Projekte",
      viewAll: "Alle ansehen",
      viewAllMobile: "Alle Projekte ansehen",
    },
    cta: {
      title: "Hast du eine Idee?",
      subtitle:
        "Wir hören gerne Vorschläge und arbeiten zusammen. Schreib uns.",
      button: "Kontaktiere uns",
    },
    projectsPage: {
      subtitle: "Unsere Projekte",
      title: "Apps & Spiele",
      titleAccent: "mit eigener Seele",
      description:
        "Wesentliche Werkzeuge und einzigartige Erlebnisse, mit Sorgfalt erstellt.",
      detail: "Details ansehen",
      close: "Schließen",
      featuresLabel: "Funktionen",
      platform: "Plattform",
      appLabel: "App",
      gameLabel: "Spiel",
    },
    aboutPage: {
      subtitle: "Über uns",
      title: "Ein Studio",
      titleAccent: "mit Indie-Seele",
      description:
        "Wir sind ein kleines 2-Personen-Team mit einer großen Mission.",
      storyTitle: "Unsere Geschichte",
      story:
        "REIMII entstand aus einer einfachen Frustration: Wir wollten Apps und Spiele, die uns nicht wie Produkte behandeln. Keine störende Werbung, keine manipulativen Mechaniken. Wir begannen mit zwei Laptops und vielen Ideen.",
      valuesTitle: "Unsere Werte",
      values: {
        passion: "Leidenschaft",
        passionDesc:
          "Jedes Projekt entsteht aus der Liebe, bedeutungsvolle Erlebnisse zu schaffen.",
        speed: "Geschwindigkeit",
        speedDesc: "Schnelle Apps und Spiele ohne Bloatware.",
        respect: "Respekt",
        respectDesc:
          "Deine Zeit und Daten sind heilig. Keine aufdringliche Werbung.",
        simplicity: "Einfachheit",
        simplicityDesc:
          "Das Komplexe wird einfach. Saubere Oberflächen für alle.",
      },
    },
    contactPage: {
      subtitle: "Kontakt",
      title: "Lass uns reden",
      description:
        "Hast du eine Frage oder möchtest zusammenarbeiten? Wir würden uns freuen.",
      name: "Name",
      namePlaceholder: "Dein Name",
      email: "E-Mail",
      message: "Nachricht",
      messagePlaceholder: "Erzähl uns deine Idee...",
      send: "Nachricht senden",
      sent: "Nachricht gesendet!",
      sentDesc: "Wir melden uns so schnell wie möglich. Danke!",
      sendAnother: "Weitere Nachricht senden",
      location: "Standort",
      locationDesc:
        "Remote Indie-Studio — wir arbeiten von überall auf der Welt.",
      fastReply: "Schnelle Antwort",
      fastReplyDesc:
        "Wir versuchen, alle Nachrichten innerhalb von 48 Stunden zu beantworten.",
      errorMsg: "Bitte alle Felder ausfüllen",
      successMsg: "Nachricht gesendet! Wir antworten bald.",
    },
    projects: [
      {
        name: "Velora Print",
        category: "3D-Druck",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Kalkulator für 3D-Druck-Angebote: Material, Zeit, Stromverbrauch, Marge und Endpreis in Sekunden.",
        features: [
          "Preisberechnung",
          "Materialkosten",
          "Druckzeit",
          "Gewinnmarge",
        ],
      },
      {
        name: "EcoPulse",
        category: "Finanzen",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Einfaches Management persönlicher und gemeinsamer Finanzen: gemeinsame Konten, Fixausgaben und Notizen.",
        features: [
          "Gemeinsame Konten",
          "Fixausgaben",
          "Transaktionsnotizen",
          "Monatsberichte",
        ],
      },
      {
        name: "Habit Tracker",
        category: "Gewohnheiten",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Einfache Routinen, sanfte Erinnerungen und klare Statistiken, um den Rhythmus zu halten.",
        features: [
          "Tägliche Routinen",
          "Sanfte Erinnerungen",
          "Klare Statistiken",
          "Gewohnheitssträhnen",
        ],
      },
      {
        name: "Aura Mood Tracker",
        category: "Wohlbefinden",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Stimmungsprotokoll mit Einblicken: Muster, schnelle Notizen und wöchentliche Trends.",
        features: [
          "Tägliches Protokoll",
          "Stimmungsmuster",
          "Schnelle Notizen",
          "Wöchentliche Trends",
        ],
      },
      {
        name: "Akaladrom",
        category: "RPG / Offene Welt",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "game",
        description:
          "Open-World-Multiplayer-RPG: Erkunde, steig auf und spiele mit deinen Freunden.",
        features: [
          "Dynamischer Kampf",
          "Offene Welt",
          "Mehrspieler",
          "Charakterentwicklung",
        ],
      },
    ],
  },
  ca: {
    nav: {
      home: "Inici",
      projects: "Projectes",
      about: "Nosaltres",
      contact: "Contacte",
    },
    footer: {
      tagline:
        "Jocs compactes i rejugables. Apps d'utilitat sense friccions. Nets, ràpids, accessibles.",
      nav: "Navegació",
      contact: "Contacte",
      location: "Estudi indie remot",
      rights: "Tots els drets reservats.",
    },
    hero: {
      badge: "Jocs i apps que respecten el teu temps",
      subtitle:
        "Creem jocs compactes i rejugables i apps d'utilitat sense friccions.",
      accent: "Nets, ràpids, accessibles.",
      cta1: "Veure Projectes",
      cta2: "Saber-ne més",
    },
    stats: {
      launched: "Apps i Jocs llançats",
      downloads: "Descàrregues",
      rating: "Valoració mitjana",
      team: "Equip creatiu",
    },
    featuredProjects: {
      subtitle: "Destacats",
      title: "Projectes",
      viewAll: "Veure'ls tots",
      viewAllMobile: "Tots els projectes",
    },
    cta: {
      title: "Tens una idea?",
      subtitle: "Ens encanta escoltar suggeriments i col·laborar. Escriu-nos.",
      button: "Contacta'ns",
    },
    projectsPage: {
      subtitle: "Els nostres projectes",
      title: "Apps i Jocs",
      titleAccent: "amb ànima pròpia",
      description:
        "Eines essencials i experiències úniques dissenyades amb cura.",
      detail: "Veure detalls",
      close: "Tancar",
      featuresLabel: "Característiques",
      platform: "Plataforma",
      appLabel: "App",
      gameLabel: "Joc",
    },
    aboutPage: {
      subtitle: "Sobre nosaltres",
      title: "Un estudi",
      titleAccent: "amb ànima indie",
      description: "Som un equip petit de 2 persones amb una missió gran.",
      storyTitle: "La nostra història",
      story:
        "REIMII va néixer d'una frustració simple: volíem apps i jocs que no ens tractessin com a productes. Sense anuncis interruptors, sense mecàniques manipuladores. Vam començar amb dos portàtils i moltes idees.",
      valuesTitle: "Els nostres valors",
      values: {
        passion: "Passió",
        passionDesc:
          "Cada projecte neix de l'amor per crear experiències que importin.",
        speed: "Rapidesa",
        speedDesc: "Apps i jocs ràpids, sense bloatware.",
        respect: "Respecte",
        respectDesc:
          "El teu temps i dades són sagrats. Sense anuncis invasius.",
        simplicity: "Simplicitat",
        simplicityDesc:
          "El complex fet simple. Interfícies netes per a tothom.",
      },
    },
    contactPage: {
      subtitle: "Contacte",
      title: "Parlem",
      description:
        "Tens una pregunta o vols col·laborar? Ens encantaria escoltar-te.",
      name: "Nom",
      namePlaceholder: "El teu nom",
      email: "Correu",
      message: "Missatge",
      messagePlaceholder: "Explica'ns la teva idea...",
      send: "Enviar missatge",
      sent: "Missatge enviat!",
      sentDesc: "Et respondrem el més aviat possible. Gràcies!",
      sendAnother: "Enviar un altre missatge",
      location: "Ubicació",
      locationDesc:
        "Estudi indie remot — treballem des de qualsevol racó del món.",
      fastReply: "Resposta ràpida",
      fastReplyDesc:
        "Intentem respondre tots els missatges en menys de 48 hores.",
      errorMsg: "Si us plau, omple tots els camps",
      successMsg: "Missatge enviat! Et respondrem aviat.",
    },
    projects: [
      {
        name: "Velora Print",
        category: "Impressió 3D",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Calculadora per a pressupostos d'impressió 3D: material, temps, consum elèctric, marge i preu final en segons.",
        features: [
          "Càlcul de preu",
          "Cost del material",
          "Temps d'impressió",
          "Marge de benefici",
        ],
      },
      {
        name: "EcoPulse",
        category: "Economia",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Gestió simple de finances personals i compartides: comptes conjunts, despeses fixes i notes.",
        features: [
          "Comptes conjunts",
          "Despeses fixes",
          "Notes per moviment",
          "Informes mensuals",
        ],
      },
      {
        name: "Habit Tracker",
        category: "Hàbits",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Rutines simples, recordatoris suaus i estadístiques clares per mantenir el ritme.",
        features: [
          "Rutines diàries",
          "Recordatoris suaus",
          "Estadístiques clares",
          "Ratxa d'hàbits",
        ],
      },
      {
        name: "Aura Mood Tracker",
        category: "Benestar",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "Registre d'ànim amb insights: patrons, notes ràpides i tendències setmanals.",
        features: [
          "Registre diari",
          "Patrons d'ànim",
          "Notes ràpides",
          "Tendències setmanals",
        ],
      },
      {
        name: "Akaladrom",
        category: "RPG / Món obert",
        status: "Beta",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "game",
        description:
          "RPG multijugador de món obert: explora, puja de nivell i juga amb els teus amics.",
        features: [
          "Combat dinàmic",
          "Món obert",
          "Multijugador",
          "Progressió del personatge",
        ],
      },
    ],
  },
  ja: {
    nav: {
      home: "ホーム",
      projects: "プロジェクト",
      about: "私たちについて",
      contact: "お問い合わせ",
    },
    footer: {
      tagline:
        "コンパクトで何度でも楽しめるゲーム。摩擦のないアプリ。クリーン、高速、アクセシブル。",
      nav: "ナビゲーション",
      contact: "お問い合わせ",
      location: "リモートインディースタジオ",
      rights: "全著作権所有。",
    },
    hero: {
      badge: "あなたの時間を尊重するゲームとアプリ",
      subtitle:
        "コンパクトで何度でも楽しめるゲームと摩擦のないアプリを作っています。",
      accent: "クリーン、高速、アクセシブル。",
      cta1: "プロジェクトを見る",
      cta2: "詳しく見る",
    },
    stats: {
      launched: "リリース済みアプリ・ゲーム",
      downloads: "ダウンロード数",
      rating: "平均評価",
      team: "クリエイティブチーム",
    },
    featuredProjects: {
      subtitle: "注目",
      title: "プロジェクト",
      viewAll: "すべて見る",
      viewAllMobile: "すべてのプロジェクト",
    },
    cta: {
      title: "アイデアがありますか？",
      subtitle: "提案やコラボレーションを歓迎します。ご連絡ください。",
      button: "お問い合わせ",
    },
    projectsPage: {
      subtitle: "私たちのプロジェクト",
      title: "アプリとゲーム",
      titleAccent: "独自の魂を持つ",
      description: "丁寧に作られた必須ツールとユニークなゲーム体験。",
      detail: "詳細を見る",
      close: "閉じる",
      featuresLabel: "機能",
      platform: "プラットフォーム",
      appLabel: "アプリ",
      gameLabel: "ゲーム",
    },
    aboutPage: {
      subtitle: "私たちについて",
      title: "スタジオ",
      titleAccent: "インディーの魂を持つ",
      description:
        "私たちは2人の小さなチームで、大きなミッションを持っています。",
      storyTitle: "私たちのストーリー",
      story:
        "REIMIIはシンプルな欲求不満から生まれました：私たちを製品として扱わないアプリとゲームが欲しかった。邪魔な広告なし、操作的なメカニクスなし。2台のノートパソコンとたくさんのアイデアで始まりました。",
      valuesTitle: "私たちの価値観",
      values: {
        passion: "情熱",
        passionDesc:
          "すべてのプロジェクトは、重要な体験を作ることへの愛から生まれます。",
        speed: "速度",
        speedDesc: "ブロートウェアなしの高速アプリとゲーム。",
        respect: "尊重",
        respectDesc: "あなたの時間とデータは神聖です。侵入的な広告なし。",
        simplicity: "シンプルさ",
        simplicityDesc:
          "複雑なものをシンプルに。誰でも使えるクリーンなインターフェース。",
      },
    },
    contactPage: {
      subtitle: "お問い合わせ",
      title: "話しましょう",
      description:
        "質問や提案、コラボレーションをご希望ですか？ぜひお聞かせください。",
      name: "名前",
      namePlaceholder: "お名前",
      email: "メール",
      message: "メッセージ",
      messagePlaceholder: "アイデアをお聞かせください...",
      send: "メッセージを送る",
      sent: "メッセージが送信されました！",
      sentDesc: "できるだけ早くご返信します。ありがとうございます！",
      sendAnother: "もう一つメッセージを送る",
      location: "場所",
      locationDesc:
        "リモートインディースタジオ — 世界中どこからでも作業しています。",
      fastReply: "迅速な返信",
      fastReplyDesc:
        "すべてのメッセージに48時間以内に返信するよう努めています。",
      errorMsg: "すべてのフィールドを入力してください",
      successMsg: "メッセージが送信されました！すぐに返信します。",
    },
    projects: [
      {
        name: "Velora Print",
        category: "3Dプリント",
        status: "ベータ",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "3Dプリント見積もり計算アプリ：材料、時間、電力消費、利益率、最終価格を数秒で計算。",
        features: ["価格計算", "材料コスト", "印刷時間", "利益率"],
      },
      {
        name: "EcoPulse",
        category: "金融",
        status: "ベータ",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "個人・共有財務のシンプル管理：共同口座、固定費、収入と取引ノート。",
        features: ["共同口座", "固定費", "取引ノート", "月次レポート"],
      },
      {
        name: "Habit Tracker",
        category: "習慣",
        status: "ベータ",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "シンプルなルーティン、優しいリマインダー、明確な統計でリズムを維持。",
        features: [
          "毎日のルーティン",
          "優しいリマインダー",
          "明確な統計",
          "習慣ストリーク",
        ],
      },
      {
        name: "Aura Mood Tracker",
        category: "ウェルネス",
        status: "ベータ",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "気分の記録とインサイト：パターン、クイックノート、週次トレンド。",
        features: [
          "毎日の記録",
          "気分パターン",
          "クイックノート",
          "週次トレンド",
        ],
      },
      {
        name: "Akaladrom",
        category: "RPG / オープンワールド",
        status: "ベータ",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "game",
        description:
          "オープンワールドマルチプレイヤーRPG：探索してレベルアップし、友達と一緒に遊ぼう。",
        features: [
          "ダイナミックな戦闘",
          "オープンワールド",
          "マルチプレイヤー",
          "キャラクター成長",
        ],
      },
    ],
  },
  ko: {
    nav: {
      home: "홈",
      projects: "프로젝트",
      about: "회사 소개",
      contact: "연락처",
    },
    footer: {
      tagline:
        "컴팩트하고 반복 플레이 가능한 게임. 마찰 없는 유틸리티 앱. 깔끔하고, 빠르고, 접근 가능합니다.",
      nav: "탐색",
      contact: "연락처",
      location: "원격 인디 스튜디오",
      rights: "모든 권리 보유.",
    },
    hero: {
      badge: "당신의 시간을 존중하는 게임과 앱",
      subtitle:
        "컴팩트하고 반복 플레이 가능한 게임과 마찰 없는 유틸리티 앱을 만듭니다.",
      accent: "깔끔하고, 빠르고, 접근 가능합니다.",
      cta1: "프로젝트 보기",
      cta2: "더 알아보기",
    },
    stats: {
      launched: "출시된 앱 및 게임",
      downloads: "다운로드",
      rating: "평균 평점",
      team: "크리에이티브 팀",
    },
    featuredProjects: {
      subtitle: "추천",
      title: "프로젝트",
      viewAll: "모두 보기",
      viewAllMobile: "모든 프로젝트 보기",
    },
    cta: {
      title: "아이디어가 있으신가요?",
      subtitle: "제안과 협업을 환영합니다. 연락해 주세요.",
      button: "문의하기",
    },
    projectsPage: {
      subtitle: "우리의 프로젝트",
      title: "앱과 게임",
      titleAccent: "고유한 영혼을 가진",
      description: "정성껏 만든 필수 도구와 독특한 게임 경험.",
      detail: "자세히 보기",
      close: "닫기",
      featuresLabel: "기능",
      platform: "플랫폼",
      appLabel: "앱",
      gameLabel: "게임",
    },
    aboutPage: {
      subtitle: "회사 소개",
      title: "스튜디오",
      titleAccent: "인디 정신을 가진",
      description: "우리는 큰 사명을 가진 2인 소규모 팀입니다.",
      storyTitle: "우리의 이야기",
      story:
        "REIMII는 단순한 좌절에서 탄생했습니다: 우리를 제품으로 대하지 않는 앱과 게임을 원했습니다. 방해하는 광고 없이, 조작적인 메카닉 없이. 두 대의 노트북과 많은 아이디어로 시작했습니다.",
      valuesTitle: "우리의 가치",
      values: {
        passion: "열정",
        passionDesc:
          "모든 프로젝트는 의미 있는 경험을 만들려는 사랑에서 탄생합니다.",
        speed: "속도",
        speedDesc: "블로트웨어 없는 빠른 앱과 게임.",
        respect: "존중",
        respectDesc: "당신의 시간과 데이터는 소중합니다. 침입적인 광고 없음.",
        simplicity: "단순함",
        simplicityDesc: "복잡한 것을 단순하게. 모두를 위한 깔끔한 인터페이스.",
      },
    },
    contactPage: {
      subtitle: "연락처",
      title: "이야기 나눠요",
      description: "질문이나 제안, 협업을 원하시나요? 기꺼이 듣겠습니다.",
      name: "이름",
      namePlaceholder: "당신의 이름",
      email: "이메일",
      message: "메시지",
      messagePlaceholder: "아이디어를 알려주세요...",
      send: "메시지 보내기",
      sent: "메시지가 전송되었습니다!",
      sentDesc: "최대한 빨리 답변 드리겠습니다. 감사합니다!",
      sendAnother: "다른 메시지 보내기",
      location: "위치",
      locationDesc: "원격 인디 스튜디오 — 세계 어디서나 작업합니다.",
      fastReply: "빠른 답변",
      fastReplyDesc: "48시간 내에 모든 메시지에 답변하려고 노력합니다.",
      errorMsg: "모든 필드를 입력해 주세요",
      successMsg: "메시지가 전송되었습니다! 곧 답변 드리겠습니다.",
    },
    projects: [
      {
        name: "Velora Print",
        category: "3D 프린팅",
        status: "베타",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "3D 프린팅 견적 계산기: 재료, 시간, 전기 사용량, 마진, 최종 가격을 몇 초 만에 계산합니다.",
        features: ["가격 계산", "재료 비용", "출력 시간", "이익 마진"],
      },
      {
        name: "EcoPulse",
        category: "금융",
        status: "베타",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description:
          "개인 및 공유 재정 간편 관리: 공동 계좌, 고정 지출, 수입 및 거래 노트.",
        features: ["공동 계좌", "고정 지출", "거래 노트", "월별 보고서"],
      },
      {
        name: "Habit Tracker",
        category: "습관",
        status: "베타",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description: "간단한 루틴, 부드러운 알림, 명확한 통계로 리듬 유지.",
        features: [
          "일일 루틴",
          "부드러운 알림",
          "명확한 통계",
          "습관 연속 기록",
        ],
      },
      {
        name: "Aura Mood Tracker",
        category: "웰니스",
        status: "베타",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "app",
        description: "기분 기록 및 인사이트: 패턴, 빠른 노트, 주간 트렌드.",
        features: ["일일 기록", "기분 패턴", "빠른 노트", "주간 트렌드"],
      },
      {
        name: "Akaladrom",
        category: "RPG / 오픈 월드",
        status: "베타",
        statusColor: BASE_STATUS_COLORS.beta,
        type: "game",
        description:
          "오픈 월드 멀티플레이어 RPG: 탐험하고, 레벨업하고, 친구들과 함께 플레이하세요.",
        features: ["다이나믹 전투", "오픈 월드", "멀티플레이어", "캐릭터 성장"],
      },
    ],
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");
  const t = translations[lang];
  const isRTL = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
