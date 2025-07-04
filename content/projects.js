const projects = [
  {
    id: 1,
    title: "Gantt Graph Process Algorithm App (MonoCore)",
    desc: "A Python application for visualizing process scheduling algorithms using Gantt charts. This educational tool helps demonstrate various CPU scheduling mechanisms through interactive visualization.",
    tags: ["Python"],
    link: {
      icon: "🔓",
      link: "https://github.com/MouadALLAOUI/Gantt-Graph-Process-Algorithm-App"
    },
    overview: {
      thumbnail: "../media/projects/1/thumb.png",
      intro: "An arcane desktop tool for visualizing CPU scheduling algorithms with animated Gantt charts. Designed to teach and demonstrate process scheduling techniques like FIFO, RR, and SRTF through magical visualizations.",
      desc: "# 📜 The Gantt Grimoire — A MonoCore Tale\n\n*An arcane desktop tome for conjuring Gantt charts and mastering the art of process scheduling across cooperative and preemptive realms.*\n\n## 🧙‍♂️ Table of Contents\n- Prologue\n- Tome Structure\n- Invocation Ritual\n- Arcane Powers\n- How to Channel Its Magic\n- Contributions From Fellow Mages\n- Scroll of Binding\n- The Tome’s Evolution\n- Oracle Contact\n- Acknowledgments from the Arcane Circle\n\n## 📖 Prologue\nIn the heart of the MonoCore Tower, a digital grimoire was forged — *The Gantt Grimoire*. Born from the ancient scrolls of CPU incantation, it visualizes the mystic flow of process scheduling using enchanted Gantt diagrams.\n\n> Crafted by the code sorcerer **Mouad**, this relic allows initiates and masters alike to witness the hidden dance of processes, time quanta, and context switches.\n\n## 🧱 Tome Structure\n```bash\nProcessusGanttGraphs/\n    ├── __main__.py\n    ├── __init__.py\n    ├── *readme.md*\n    ├── classes/\n    │   ├── graph.py\n    │   ├── processus.py\n    │   ├── gui.py\n    │   └── __init__.py\n    ├── data/\n    │   │── set_data.py\n    │   │── get_data.py\n    │   │── testdata.py\n    │   └── __init__.py\n    ├── assets/\n    │   └── Figure_1.png\n    └── ordannacement/\n        ├── __init__.py\n        ├── cooperatif/\n        │   ├── __init__.py\n        │   ├── fifo.py\n        │   ├── srtf.py\n        │   └── round_robin.py\n        └──  premtif/\n            ├── __init__.py\n            ├── fifo.py\n            ├── srtf.py\n            └── round_robin.py\n```\n\n## 📘 Invocation Ritual\nTo unlock the tome’s powers, you must:\n\n### 📌 Requirements:\n- Python 3.x or later\n- The `matplotlib` incantation:\n```bash\npip install matplotlib\n```\n\n### 🔮 To awaken the grimoire:\n```bash\npython __main__.py\n```\nOr simply:\n```bash\npython .\n```\n\n## ✨ Arcane Powers\nHarness the magic of time manipulation: \n\n📜 ** Algorithmic Scrolls:**\n- 🔸 First In, First Out * (FIFO) *\n- 🔸 Round Robin * (RR) *\n- 🔸 Shortest Remaining Time First * (SRTF) *\n- 🔸 Cooperative Incantations\n- 🔸 Preemptive Interventions\n\n📦 ** Mystical Data Sources:**\n- 💬 Console spellcasting(manual entry) \n- 📂 CSV rune importing\n- 🧪 Random test data conjuration\n\n📊 ** Live Visualization Rituals:**\n- Gantt charts rendered in real time with `matplotlib`\n - Intuitive GUI portals for mage - level ease\n\n## 🕹️ How to Channel Its Magic\n1.Begin the spell: \n```bash\npython __main__.py\n```\n2.Choose your scrying method: \n - `console` — Speak the values aloud\n - `ready` — Read from a sacred CSV scroll\n - `test` — Allow the system to conjure ghost processes\n3.Speak your variables: \n - Arrival incantations\n - CPU burst lengths\n - Priority glyphs(if applicable) \n4.Select the scheduling incantation you wish to summon.\n5.Behold the visualization — a living diagram etched by time and computation.\n\n## 🧑‍🔧 Contributions From Fellow Mages\nTo leave your mark upon this tome: \n\n1.Fork the repository via the magic mirror(GitHub) \n2.Forge your branch: \n```bash\ngit checkout -b AmazingFeature\n```\n3.Etch your changes: \n```bash\ngit commit -m 'Add some AmazingFeature'\n```\n4.Send your spell upstream: \n```bash\ngit push origin AmazingFeature\n```\n5.Open a summoning gate(Pull Request) \n\n## 📜 Scroll of Binding\nLicensed under the MIT Enchantment.See[LICENSE](https://github.com/MouadALLAOUI/Gantt-Graph-Process-Algorithm-App/blob/master/LICENSE) for the unbreakable seal.\n\n## 📅 The Tome’s Evolution\nTrack the grimoire’s growth in the *** [CHANGELOG.md](https://github.com/MouadALLAOUI/Gantt-Graph-Process-Algorithm-App/blob/master/CHANGELOG.md) ***.\n\n## 📬 Oracle Contact\nIf you have questions, visions, or arcane errors to report, reach out to the creator: \n - 🧙‍♂️ ** Mouad ** –[moadallaoui1@gmail.com](mailto: moadallaoui1@gmail.com) \n\n## 🔮 Acknowledgments from the Arcane Circle\nThe creation of this magical artifact was guided by: \n - The eternal flames of[Python](https://www.python.org/)\n- The scrolls of [W3Schools](https://www.w3schools.com/python/)\n- The digital familiars:\n  - [OpenAI](https://openai.com)\n  - [Blackbox AI](https://www.blackbox.ai)\n  - [Anthropic Claude](https://www.anthropic.com)\n",
      imgs: [
        { src: "../media/projects/1/gui.png", alt: "", isBlur: false },
        { src: "../media/projects/1/Figure_1.png", alt: "", isBlur: false },
      ],
      features: [
        "First In, First Out (FIFO)",
        "Round Robin (RR)",
        "Shortest Remaining Time First (SRTF)",
        "Cooperative Incantations",
        "Preemptive Interventions",
        "Console spellcasting (manual entry)",
        "CSV rune importing",
        "Random test data conjuration",
        "Live Visualization Rituals",
      ],
      startdate: "26 Dec 2024",
      enddate: "29 Dec 2024",
      status: "complete", // or "complete" | "in progress" | "abondonned" | unkonwn
      link: [
        { icon: "🔓", label: "Live Demo", href: "#", isDisabled: true },
        { icon: "📦", label: "GitHub", href: "https://github.com/MouadALLAOUI/Gantt-Graph-Process-Algorithm-App", isDisabled: false }
      ],
    }
  },
  {
    id: 2,
    title: "Book Bot",
    desc: "<strong>Book Bot</strong> - a Python program that analyzes novels and prints a statistical report of the word and character usage found within.",
    tags: ["Python"],
    link: {
      icon: "🔓",
      link: "https://github.com/MouadALLAOUI/bootdev_bookbot"
    },
    overview: {
      thumbnail: "",
      intro: "Book Bot - a Python program that analyzes novels and prints a statistical report of the word and character usage found within.",
      desc: "# Book Bot\n\n - a Python program that analyzes novels and prints a statistical report of the word and character usage found within.",
      imgs: [],
      features: ["analyzes novels and prints a statistical report"],
      startdate: "08 Jan 2025",
      enddate: "08 Jan 2025",
      status: "Complete", // or "complete" | "in progress" | "abondonned" | unknown
      link: [
        { icon: "📦", label: "GitHub", href: "https://github.com/MouadALLAOUI/bootdev_bookbot", isDisabled: false }
      ],
    }
  },
  {
    id: 3,
    title: "Amz-automobile-front",
    desc: "this project is a task managament for automobile mecaniques and its reparation. I made the front using react js and electron but still can run on browser.",
    tags: ["JavaScript", "React", "Electron"],
    link: {
      icon: "🔓",
      link: "https://github.com/MouadALLAOUI/Amz-automobile-front"
    },
    overview: {
      thumbnail: "",
      intro: "this project is a task managament for automobile mecaniques and its reparation. I made the front using react js and electron but still can run on browser.",
      desc: "# Amz-automobile-front\n\nthis project is a task managament for automobile mecaniques and its reparation. I made the front using react js and electron but still can run on browser.",
      imgs: [],
      features: [
        "Electron for desktop application",
        "React for frontend development",
        "Task management features",
        "Automobile repair tracking",
        "multiple vehicle makes and models support",
        "User-friendly interface"
      ],
      startdate: "06 jun 2024",
      enddate: "ongoing",
      status: "in progress", // or "complete" | "in progress" | "abondonned" | unknown
      link: [
        { icon: "📦", label: "GitHub", href: "https://github.com/MouadALLAOUI/Amz-automobile-front", isDisabled: false }
      ],
    }
  },
  {
    id: 4,
    title: "Amz-automobile-back",
    desc: "This is the backend for the Amz-automobile project, built with Laravel 11.",
    tags: ["PHP", "Laravel"],
    link: {
      icon: "🔓",
      link: "https://github.com/MouadALLAOUI/vercelnextjs"
    },
    overview: {
      thumbnail: "",
      intro: "this is the backend for the Amz-automobile project. It is built with Laravel 11.",
      desc: "# Amz-automobile-back\n\nthis backend is built with Laravel 11. It provides APIs for the Amz-automobile project, which is a task management system for automobile mechanics and repairs.",
      imgs: [],
      features: [
        "Database migration and seeding",
        "Vehicle data import command",
        "API endpoints for vehicle management",
        "User authentication and authorization",
        "Task management features",
        "Vehicle repair tracking",
        "Multiple vehicle makes and models support"
      ],
      startdate: "06 jun 2024",
      enddate: "ongoing",
      status: "in progress", // or "complete" | "in progress" | "abondonned" | unknown
      link: [
        { icon: "📦", label: "GitHub", href: "https://github.com/MouadALLAOUI/Amz-automobile-back", isDisabled: false }
      ],
    }
  },
  {
    id: 5,
    title: "tachiyomi-ar-ext",
    desc: "This repository provides Arabic extensions that have been removed from Tachiyomi.",
    tags: ["Apk", "Extensions", "Mobile"],
    link: {
      icon: "🔓",
      link: "https://github.com/MouadALLAOUI/tachiyomi-ar-ext"
    },
    overview: {
      thumbnail: "",
      intro: "Tachiyomi Arabic Extensions",
      desc: "This repository provides Arabic extensions that have been removed from Tachiyomi.",
      imgs: [],
      features: [
        "Update Tachiyomi to the latest version.",
        "Add the extension repository URL: https://raw.githubusercontent.com/MouadALLAOUI/tachiyomi-ar-ext/main/index.min.json",
        "Refresh extension management screen and download removed extensions.",
        "Approve installed extensions by tapping on the 'Trust' button."
      ],
      startdate: "20 Mar 2024",
      enddate: "17 Jul 2024",
      status: "abandoned", // or "complete" | "in progress" | "abandoned" | unknown
      link: [
        { icon: "📦", label: "GitHub", href: "https://github.com/MouadALLAOUI/tachiyomi-ar-ext", isDisabled: false }
      ],
    }
  },
  {
    id: 6,
    title: "Pharma-efm-back",
    desc: "this my SFP (study final project) backend of my diploma project. It is a Laravel backend for a pharmacy stock management application. It leverages Laravel's features for routing, dependency injection, database ORM, schema migrations, job processing, and event broadcasting.",
    tags: ["PHP", "Laravel"],
    link: {
      icon: "🔓",
      link: "https://github.com/MouadALLAOUI/Pharma-efm-back"
    },
    overview: {
      thumbnail: "",
      intro: "this my SFP (study final project) backend of my diploma project. It is a Laravel backend for a pharmacy stock management application. It leverages Laravel's features for routing, dependency injection, database ORM, schema migrations, job processing, and event broadcasting.",
      desc: "# Pharma-efm-back\n\na project made by group of students for our SFP (study final project) in the university. It is a Laravel backend for a pharmacy stock management application. It leverages Laravel's features for routing, dependency injection, database ORM, schema migrations, job processing, and event broadcasting.\n\n## team members\n- Mouad ALLAOUI\n- Aboudamir Farouk\n\n## Features\n- Simple, fast routing engine.\n- Powerful dependency injection container.\n- Multiple back-ends for session and cache storage.\n- Expressive, intuitive database ORM.\n- Database agnostic schema migrations.\n- Robust background job processing.\n- Real-time event broadcasting.",
      imgs: [],
      features: [
        "Simple, fast routing engine.",
        "Powerful dependency injection container.",
        "Multiple back-ends for session and cache storage.",
        "Expressive, intuitive database ORM.",
        "Database agnostic schema migrations.",
        "Robust background job processing.",
        "Real-time event broadcasting."
      ],
      startdate: "01 Feb 2024",
      enddate: "20 May 2024",
      status: "complete", // or "complete" | "in progress" | "abandoned" | unknown
      link: [
        { icon: "📦", label: "GitHub", href: "https://github.com/MouadALLAOUI/Pharma-efm-back", isDisabled: false }
      ],
    }
  },
  {
    id: 7,
    title: "Pharma-efm-front",
    desc: "this my SFP (study final project) frontend of my diploma project. It is a React frontend for a pharmacy stock management application.",
    tags: ["JavaScript", "React"],
    link: {
      icon: "🔓",
      link: "https://github.com/MouadALLAOUI/Pharma-efm-front"
    },
    overview: {
      thumbnail: "",
      intro: "this my SFP (study final project) frontend of my diploma project. It is a React frontend for a pharmacy stock management application.",
      desc: "# Pharma-efm-front\n\na project made by group of students for our SFP (study final project) in the university. It is a React frontend for a pharmacy stock management application.\n\n## team members\n- Mouad ALLAOUI\n- Aboudamir Farouk\n\n## Features\n- Simple, fast routing engine.\n- Powerful dependency injection container.\n- Multiple back-ends for session and cache storage.\n- Expressive, intuitive database ORM.\n- Database agnostic schema migrations.\n- Robust background job processing.\n- Real-time event broadcasting.",
      imgs: [],
      features: [
        "Simple, fast routing engine.",
        "Powerful dependency injection container.",
        "Multiple back-ends for session and cache storage.",
        "Expressive, intuitive database ORM.",
        "Database agnostic schema migrations.",
        "Robust background job processing.",
        "Real-time event broadcasting."
      ],
      startdate: "01 Feb 2024",
      enddate: "20 May 2024",
      status: "complete", // or "complete" | "in progress" | "abandoned" | unknown
      link: [
        { icon: "📦", label: "GitHub", href: "https://github.com/MouadALLAOUI/Pharma-efm-front", isDisabled: false }
      ],
    }
  },
  {
    id: 8,
    title: "Arkani-app",
    desc: "I made this app to help other muslim to fully follow the right path. It is a React Native project.",
    tags: ["JavaScript", "React Native", "Mobile App"],
    link: {
      icon: "🔓",
      link: "https://github.com/MouadALLAOUI/Arkani-app"
    },
    overview: {
      thumbnail: "",
      intro: "i start mading this app after i encouter a problem of finding an app that gather all the islamic information in one place. So i made this app to help other muslim to fully follow the right path. It is a React Native project bootstrapped using `@react-native-community/cli`.",
      desc: "# Arkani-app\n\na project made by me for my personal use. It is a React Native project that aims to gather all the islamic information in one place.\n\n## Features\n- Simple, fast routing engine.\n- Powerful dependency injection container.\n- Multiple back-ends for session and cache storage.\n- Expressive, intuitive database ORM.\n- Database agnostic schema migrations.\n- Robust background job processing.\n- Real-time event broadcasting.",
      imgs: [],
      features: [
        "Quran reading and memorization",
        "Prayer times and notifications",
        "Islamic calendar and events",
        "Dua and Azkar collection",
      ],
      startdate: "09 Apr 2024",
      enddate: "ongoing",
      status: "stopped", // or "complete" | "in progress" | "abandoned" | unknown | "stopped"
      link: [
        { icon: "📦", label: "GitHub", href: "https://github.com/MouadALLAOUI/Arkani-app", isDisabled: false }
      ],
    }
  },
  {
    id: 9,
    title: "LaraCRUD",
    desc: "A very beginner-friendly Laravel CRUD project that using controller, model, and view to create a simple CRUD application. mergerd with vite js",
    tags: ["PHP", "Laravel", "CRUD", "CSS", "vite js", "frontend", "backend"],
    link: {
      icon: "🔓",
      link: "https://github.com/MouadALLAOUI/LaraCRUD"
    },
    overview: {
      thumbnail: "../media/projects/9/thumb.png",
      intro: "Laravel CRUD Project for very beginners that starting to learn laravel and want to make a simple CRUD application.",
      desc: "# LaraCRUD\n\nA very beginner-friendly Laravel CRUD project that using controller, model, and view to create a simple CRUD application. It is designed for beginners who want to learn Laravel and make a simple CRUD application.\n\n## Features\n- Simple, fast routing engine.\n- Powerful dependency injection container.\n- Multiple back-ends for session and cache storage.\n- Expressive, intuitive database ORM.\n- Database agnostic schema migrations.\n- Robust background job processing.\n- Real-time event broadcasting.",
      imgs: [
        { src: "../media/projects/9/1.png", alt: "", isBlur: false },
        { src: "../media/projects/9/2.png", alt: "", isBlur: false },
        { src: "../media/projects/9/3.png", alt: "", isBlur: false },
        { src: "../media/projects/9/4.png", alt: "", isBlur: false },
        { src: "../media/projects/9/5.png", alt: "", isBlur: false },
        { src: "../media/projects/9/6.png", alt: "", isBlur: false },
      ],
      features: [
        "CRUD operations",
        "Database migration",
        "Frontend and backend integration",
        "User-friendly interface",
        "Responsive design",
        "learning resource for beginners",
      ],
      startdate: "19 Mar 2023",
      enddate: "20 Mar 2023",
      status: "abandoned", // or "complete" | "in progress" | "abandoned" | unknown
      link: [
        { icon: "📦", label: "GitHub", href: "https://github.com/MouadALLAOUI/LaraCRUD", isDisabled: false }
      ],
    }
  },
  {
    id: 10,
    title: "ecommerce",
    desc: "a simple project about an e-shop website using react js to simulate an e-commerce platform. It is a basic project that includes product listing, cart management, and checkout functionalities.",
    tags: ["JavaScript", "React js", "Web"],
    link: {
      icon: "🔓",
      link: "https://github.com/MouadALLAOUI/ecommerce"
    },
    overview: {
      thumbnail: "../media/main_menu.png",
      intro: "a learning project about an e-shop website using react js to simulate an e-commerce platform. It is a basic project that includes product listing, cart management, and checkout functionalities.",
      desc: "# ecommerce\n\na simple project about an e-shop website using react js to simulate an e-commerce platform. It is a basic project that includes product listing, cart management, and checkout functionalities.\n\n## Features\n- Product listing and details\n- Cart management\n- Checkout process\n- Responsive design\n- User-friendly interface",
      imgs: [],
      features: [
        "Product listing and details",
        "Cart management",
        "Checkout process",
        "Responsive design",
        "User-friendly interface",
        "Learning resource for beginners",
        "React js for frontend development",
        "Basic e-commerce functionalities"
      ],
      startdate: "15 Nov 2022",
      enddate: "15 Nov 2022",
      status: "abandoned", // or "complete" | "in progress" | "abandoned" | unknown
      link: [
        { icon: "📦", label: "GitHub", href: "https://github.com/MouadALLAOUI/ecommerce", isDisabled: false }
      ],
    }
  },
  {
    id: 11,
    title: "ChatWeb",
    desc: "an attempt to create a thread-based social media platform similar to Facebook, built with PHP and MySQL. It allows users to create accounts, post messages, and interact with others.",
    tags: ["PHP", "Web", "Social Media"],
    link: {
      icon: "🔓",
      link: "https://github.com/MouadALLAOUI/ChatWeb"
    },
    overview: {
      thumbnail: "",
      intro: "an attempt to create a thread-based social media platform similar to Facebook, built with PHP and MySQL. It allows users to create accounts, post messages, and interact with others.",
      desc: "# ChatWeb\n\nan attempt to create a thread-based social media platform similar to Facebook, built with PHP and MySQL. It allows users to create accounts, post messages, and interact with others.",
      imgs: [],
      features: [
        "Post creation and management",
        "Threaded comments",
        "Responsive design",
        "User-friendly interface",
        "Learning resource for beginners",
      ],
      startdate: "02 Jul 2022",
      enddate: "04 Jul 2022",
      status: "stopped", // or "complete" | "in progress" | "abandoned" | unknown
      link: [
        { icon: "📦", label: "GitHub", href: "https://github.com/MouadALLAOUI/ChatWeb", isDisabled: false }
      ],
    }
  },
  {
    id: 12,
    title: "burp-payloads",
    desc: "A collection of Burp Suite payloads, forked from antichown/burp-payloads.",
    tags: ["Security", "Burp Suite", "Payloads"],
    link: {
      icon: "🔓",
      link: "https://github.com/MouadALLAOUI/burp-payloads"
    },
    overview: {
      thumbnail: "",
      intro: "A collection of Burp Suite payloads, useful for security testing and penetration testing.",
      desc: "# burp-payloads\n\nA collection of Burp Suite payloads, forked from antichown/burp-payloads. This repository contains various payloads that can be used with Burp Suite for security testing and penetration testing.\n\n## Features\n- Collection of Burp Suite payloads\n- Useful for security testing and penetration testing\n- Forked from antichown/burp-payloads",
      imgs: [],
      features: [
        "Collection of Burp Suite payloads",
        "Useful for security testing and penetration testing",
        "Forked from antichown/burp-payloads",
        "Payloads for various types of attacks",
        "Easy to use with Burp Suite",
        "Regularly updated with new payloads"
      ],
      startdate: "",
      enddate: "",
      status: "unknown",
      link: [
        { icon: "📦", label: "GitHub", href: "https://github.com/MouadALLAOUI/burp-payloads", isDisabled: false }
      ],
    }
  }
];

export default projects;

