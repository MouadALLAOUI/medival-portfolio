```js

const skills = [
  {
    icon: "⌬",
    name: "Frontend Sorcery",
    description: "Weaving spells with HTML, CSS, and JavaScript to create enchanting user experiences.",
    level: 5 // 1 to 5 scale
  },
  {
    icon: "⚙️",
    name: "Backend Alchemy",
    description: "Transforming data and logic into powerful potions with Node.js, Python, and SQL.",
    level: 4 // 1 to 5 scale
  },
  {
    icon: "🛡️",
    name: "Security Wards",
    description: "Crafting protective enchantments against digital threats and vulnerabilities.",
    level: 3 // 1 to 5 scale
  },
  {
    icon: "🔮",
    name: "AI Conjuring",
    description: "Summoning intelligent entities with machine learning and neural networks.",
    level: 4 // 1 to 5 scale
  },
  {
    icon: "📱",
    name: "Mobile Enchantments",
    description: "Creating responsive and engaging mobile applications with React Native and Flutter.",
    level: 3 // 1 to 5 scale
  },
  {
    icon: "🌐",
    name: "Web Explorer",
    description: "Exploring the enchanted realms of internet",
    level: 4 // 1 to 5 scale
  },
  {
    icon: "📊",
    name: "Data Divination",
    description: "Harnessing the power of data analytics and visualization to uncover hidden insights.",
    level: 2 // 1 to 5 scale
  },
  {
    icon: "📜",
    name: "Code Enchantments",
    description: "Crafting elegant and efficient code spells to solve complex problems.",
    level: 3 // 1 to 5 scale
  },
  {
    icon: "🧙‍♂️",
    name: "Mentorship",
    description: "Guiding aspiring wizards and witches in their coding journeys, sharing knowledge and wisdom.",
    level: 2 // 1 to 5 scale
  },
  {
    icon: "🧩",
    name: "Problem Solving",
    description: "Solving complex challenges with creative and efficient solutions, like a true coding wizard.",
    level: 4 // 1 to 5 scale
  },
  {
    icon: "💻",
    name: "Windows Dungeon",
    description: "exploring and mastering the mystical realms of the Windows operating system. powershell and cmd incantations are my tools of choice.",
    level: 5 // 1 to 5 scale
  },
  {
    icon: "🐧",
    name: "Linux Slayer",
    description: "Exploring and mastering the mystical realms of the Linux operating system. Bash and terminal incantations are my tools of choice.",
    level: 3 // 1 to 5 scale
  },
  {
    icon: "🐳",
    name: "Docker",
    description: "Containerizing applications and managing microservices with Docker.",
    level: 2 // 1 to 5 scale
  },
  {
    icon: "🖥️",
    name: "Virtualization",
    description: "Creating and managing virtual environments for development and testing.",
    level: 2 // 1 to 5 scale
  },

];


const projects = [
  {
    id: 1,
    title: "Gantt Graph Process Algorithm App (MonoCore)",
    desc: "A Python application for visualizing process scheduling algorithms using Gantt charts. This educational tool helps demonstrate various CPU scheduling mechanisms through interactive visualization.",
    tags: ["Python", "Local"],
    link: {
      icon: "🔓",
      link: "https://github.com/MouadALLAOUI/Gantt-Graph-Process-Algorithm-App"
    },
    overview: {
      thumbnail: "../media/city_medieval_day.png",
      intro: "An arcane desktop tool for visualizing CPU scheduling algorithms with animated Gantt charts. Designed to teach and demonstrate process scheduling techniques like FIFO, RR, and SRTF through magical visualizations.",
      desc: "# 📜 The Gantt Grimoire — A MonoCore Tale\n\n*An arcane desktop tome for conjuring Gantt charts and mastering the art of process scheduling across cooperative and preemptive realms.*\n\n## 🧙‍♂️ Table of Contents\n- Prologue\n- Tome Structure\n- Invocation Ritual\n- Arcane Powers\n- How to Channel Its Magic\n- Contributions From Fellow Mages\n- Scroll of Binding\n- The Tome’s Evolution\n- Oracle Contact\n- Acknowledgments from the Arcane Circle\n\n## 📖 Prologue\nIn the heart of the MonoCore Tower, a digital grimoire was forged — *The Gantt Grimoire*. Born from the ancient scrolls of CPU incantation, it visualizes the mystic flow of process scheduling using enchanted Gantt diagrams.\n\n> Crafted by the code sorcerer **Mouad**, this relic allows initiates and masters alike to witness the hidden dance of processes, time quanta, and context switches.\n\n## 🧱 Tome Structure\n```bash\nProcessusGanttGraphs/\n    ├── __main__.py\n    ├── __init__.py\n    ├── *readme.md*\n    ├── classes/\n    │   ├── graph.py\n    │   ├── processus.py\n    │   ├── gui.py\n    │   └── __init__.py\n    ├── data/\n    │   │── set_data.py\n    │   │── get_data.py\n    │   │── testdata.py\n    │   └── __init__.py\n    ├── assets/\n    │   └── Figure_1.png\n    └── ordannacement/\n        ├── __init__.py\n        ├── cooperatif/\n        │   ├── __init__.py\n        │   ├── fifo.py\n        │   ├── srtf.py\n        │   └── round_robin.py\n        └──  premtif/\n            ├── __init__.py\n            ├── fifo.py\n            ├── srtf.py\n            └── round_robin.py\n```\n\n## 📘 Invocation Ritual\nTo unlock the tome’s powers, you must:\n\n### 📌 Requirements:\n- Python 3.x or later\n- The `matplotlib` incantation:\n```bash\npip install matplotlib\n```\n\n### 🔮 To awaken the grimoire:\n```bash\npython __main__.py\n```\nOr simply:\n```bash\npython .\n```\n\n## ✨ Arcane Powers\nHarness the magic of time manipulation: \n\n📜 ** Algorithmic Scrolls:**\n- 🔸 First In, First Out * (FIFO) *\n- 🔸 Round Robin * (RR) *\n- 🔸 Shortest Remaining Time First * (SRTF) *\n- 🔸 Cooperative Incantations\n- 🔸 Preemptive Interventions\n\n📦 ** Mystical Data Sources:**\n- 💬 Console spellcasting(manual entry) \n- 📂 CSV rune importing\n- 🧪 Random test data conjuration\n\n📊 ** Live Visualization Rituals:**\n- Gantt charts rendered in real time with `matplotlib`\n - Intuitive GUI portals for mage - level ease\n\n## 🕹️ How to Channel Its Magic\n1.Begin the spell: \n```bash\npython __main__.py\n```\n2.Choose your scrying method: \n - `console` — Speak the values aloud\n - `ready` — Read from a sacred CSV scroll\n - `test` — Allow the system to conjure ghost processes\n3.Speak your variables: \n - Arrival incantations\n - CPU burst lengths\n - Priority glyphs(if applicable) \n4.Select the scheduling incantation you wish to summon.\n5.Behold the visualization — a living diagram etched by time and computation.\n\n## 🧑‍🔧 Contributions From Fellow Mages\nTo leave your mark upon this tome: \n\n1.Fork the repository via the magic mirror(GitHub) \n2.Forge your branch: \n```bash\ngit checkout -b AmazingFeature\n```\n3.Etch your changes: \n```bash\ngit commit -m 'Add some AmazingFeature'\n```\n4.Send your spell upstream: \n```bash\ngit push origin AmazingFeature\n```\n5.Open a summoning gate(Pull Request) \n\n## 📜 Scroll of Binding\nLicensed under the MIT Enchantment.See[LICENSE](https://github.com/MouadALLAOUI/Gantt-Graph-Process-Algorithm-App/blob/master/LICENSE) for the unbreakable seal.\n\n## 📅 The Tome’s Evolution\nTrack the grimoire’s growth in the *** [CHANGELOG.md](https://github.com/MouadALLAOUI/Gantt-Graph-Process-Algorithm-App/blob/master/CHANGELOG.md) ***.\n\n## 📬 Oracle Contact\nIf you have questions, visions, or arcane errors to report, reach out to the creator: \n - 🧙‍♂️ ** Mouad ** –[moadallaoui1@gmail.com](mailto: moadallaoui1@gmail.com) \n\n## 🔮 Acknowledgments from the Arcane Circle\nThe creation of this magical artifact was guided by: \n - The eternal flames of[Python](https://www.python.org/)\n- The scrolls of [W3Schools](https://www.w3schools.com/python/)\n- The digital familiars:\n  - [OpenAI](https://openai.com)\n  - [Blackbox AI](https://www.blackbox.ai)\n  - [Anthropic Claude](https://www.anthropic.com)\n",
      imgs: [
        { src: "../media/projects/1/gui.png", isBlur: false },
        { src: "../media/projects/1/Figure_1.png", isBlur: false },
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
];

```
