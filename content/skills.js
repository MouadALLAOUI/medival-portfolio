const skills = [
  {
    id: 1,
    icon: "⌬",
    name: "Frontend Sorcery",
    description: "<strong>Frontend</strong> is one of my strongest spells. I wield it to craft <code>user interfaces (UI)</code> and enchant <code>user experiences (UX)</code>, using many languages and tools across the realm of webcraft.",
    level: 5, // 1 to 5 scale
    overview: {
      thumbnail: "../media/Skills/1/thumb.png",
      intro: "<strong>Frontend Sorcery</strong> is the noble art of turning raw elements—<code>HTML</code>, <code>CSS</code>, and <code>JavaScript</code>—into living, breathing pages. With this magic, I forge <code>responsive designs</code>, <code>interactive runes</code>, and smooth pathways for every traveler who visits.",
      desc: "Frontend is the power to shape designs into real, working code—like turning scrolls into living portals. I use different languages and sometimes ancient frameworks to summon full user experiences.\nAs this magic is rooted in webcraft, mastering the scrolls of `HTML` and `CSS` and knowing the basics of `JavaScript` is essential. From these, other tools arise—like the mighty `React` (both for web `JS` and mobile `Native`), and spells such as `Vue`, `Next`, and `Electron`.\nThis path focuses on the **`User Experience (UX)`**. A skilled frontend mage must know how to build responsive layouts and summon charming `User Interfaces (UI)` that work well across any device or kingdom.\n\n#### 🧰 Tools of the Trade\n\n- VS Code (`my spellbook`)\n- Browsers: Chrome, Firefox, Edge (`testing portals`)\n- Figma (`design forge`)\n- Canva (`visual scroll maker`)\n\n#### 📚 Languages & Frameworks\n\n> ✦ Core Runes \n\n- HTML\n- CSS\n- JavaScript\n\n> ✦ Arcane Support \n\n- React js\n- React native\n- Vue js\n- Laravel `.blade.php`\n- Next js\n- Electron\n- Scss\n- Bootstrap\n- Tailwind CSS",
      features: [
        "Responsive Layouts",
        "Cross-Browser Shielding",
        "Speed & Performance Buffs",
        "Accessibility Enchantments",
        "Git for Spell Versioning"
      ],
      imgs: [
        {
          src: "../media/Skills/1/figma-arkani.png",
          alt: "figma arkani app",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/1/figma-stockmanagement.png",
          alt: "figma gestion de stock",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/1/figma pharma.png",
          alt: "figma pharma",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/1/canva GDD.png",
          alt: "canva GDD",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/1/vs style.png",
          alt: "vs style",
          isBlured: false,
          isMobile: false,
        }
      ],
      startdate: "2020-01-01",
      storyBehindIt: "My path into frontend sorcery began when I first wondered how scrolls (webpages) came to life. I began with simple `HTML`, then studied `CSS` to bring form and `JavaScript` to add movement. Over time, through many quests and trials, I learned to craft real experiences that users enjoy.\n\nEach project sharpened my skills, and now, I continue this journey—seeking to master deeper magic and forge even stronger interfaces.",
    },
  },
  {
    id: 2,
    icon: "⚙️",
    name: "Backend Alchemy",
    description: "<strong>Backend</strong> is the unseen force behind a website. While the frontend enchants users with visuals and interaction, the backend works in the shadows—handling servers, storing data, and forging powerful APIs.",
    level: 4, // 1 to 5 scale
    overview: {
      thumbnail: "../media/skills/2/thumb.png",
      intro: "<strong>Backend alchemy</strong> is the sacred art of turning logic and data into real-world applications. Using tools like Node.js, Python, and SQL, backend alchemists build server-side magic, manage spellbooks (databases), and keep the realm running smoothly.",
      desc: "Backend is the power to craft logic, store information, and shape how data flows through an application. It lets you build functions and APIs that store, update, or fetch data from enchanted vaults—known as databases.\nThese vaults can be **relational** (like `SQL`, `Oracle`, `SQLite`) or **non-relational** (like `MongoDB`, `Firebase`, or `PostgreSQL`).\nBackend mages often carry tools like `XAMPP` or `WAMP` to summon local servers, `Postman` to test API scrolls, and `Atlas` to gaze into the MongoDB cloud.\nThe common tongues of backend magic include `PHP`, `JavaScript`, and `Python`. Each has its own schools—`Laravel`, `CodeIgniter`, and `Django`—while `Express.js` and `Next.js` serve both backend and frontend domains.\n\n#### 🧰 Backend Tools of the Trade \n- Postman (for scroll testing)\n- WAMP / XAMPP (local server summoning)\n- MongoDB Atlas (cloud vault access)\n- PHPMyAdmin\n- MySQL Workbench — GUI for managing MySQL databases.\n- MongoDB Compass — GUI for working with MongoDB (NoSQL).\n\n#### 📚 Backend Languages & Frameworks\n\n> ✦ Backend Core Runes\n\n- PHP\n- JavaScript\n- SQL\n- Python\n- 🧰 CLI TOOLS\n  - npm\n  - composer\n\n> ✦ Backend Arcane Support\n\n- Laravel\n- CodeIgniter\n- Express.js\n- Next.js\n- Django\n- MySQL\n- SQLite\n- MongoDB\n- Firebase\n- Axios",
      features: [
        "RESTful API Development",
        "Database Management (SQL, NoSQL)",
        "Authentication and Authorization",
        "Server-Side Logic Implementation",
        "Performance Tuning and Optimization"
      ],
      imgs: [
        {
          src: "../media/Skills/2/postman.png",
          alt: "postman",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/2/postman methode.png",
          alt: "postman methode",
          isBlured: false,
          isMobile: true,
        },
        {
          src: "../media/Skills/2/wamp launch.png",
          alt: "wamp launch",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/2/wamp menu.png",
          alt: "wamp menu",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/2/phpmyadmin shema.png",
          alt: "phpmyadmin shema",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/2/phpmyadmin structure.png",
          alt: "phpmyadmin structure",
          isBlured: false,
          isMobile: false,
        }
      ],
      startdate: "2021-01-01",
      storyBehindIt: "After many adventures in frontend lands, I realized something was missing—my websites had form, but no soul. I needed more than just beauty; I needed function.\nThat’s when I discovered backend alchemy. My first steps were simple: storing data in `JSON` using JavaScript. It wasn't elegant, but it worked for small quests.\nAs my projects grew in size and complexity, I sought deeper magic. I began to learn how to summon servers, craft powerful APIs, and master databases. Now, I walk both paths—frontend and backend—capable of building full systems from the ground up.",
    },
  },
  {
    id: 3,
    icon: "🛡️",
    name: "Security Wards",
    description: "<strong>Security</strong> is the art of shielding systems from the dark forces of cyberspace. With this skill, I deploy firewalls, encryption, and secure protocols to protect users, data, and digital strongholds.",
    level: 1,
    overview: {
      thumbnail: "../media/Skills/3/thumb.jpg",
      intro: "<strong>Security</strong> is the art of shielding systems from the dark forces of cyberspace. With this skill, I deploy firewalls, encryption, and secure protocols to protect users, data, and digital strongholds.<br /><br /> <strong>Security Wards</strong> focuses on forging and maintaining defenses against both common and advanced threats. From encryption and firewalls to OWASP defenses and secure authentication, these techniques help keep the realm safe from intruders.",
      desc: "Security is about crafting strong barriers—both visible and hidden—against digital attacks. It involves defending systems with tools like firewalls, encrypted tunnels (SSL/TLS, PGP), and access control spells.\n\nIn my journey, I’ve trained with different tools. Some help me test my own defenses through controlled attacks (`Burp Suite`, `Nmap`, `Wireshark`, `Zenmap`). Others guide me through challenges and learning quests—like `TryHackMe` and `PortSwigger`.\n\nWhile these arts can be practiced on any platform, I find their magic shines brightest on Linux systems—at least for me.\n\n\n#### 🧰 Security Tools of the Trade\n\n- burp Suite\n- Nmap / Zenmap\n- kleopatra (certificat encrypt)\n- Wireshark\n- [cryptool](https://www.cryptool.org/)\n- TryHackMe / PortSwigger (training camps)\n\n\n#### 📚 Security Languages & Frameworks\n\n> **✦ Security Core Runes**\n\n- Python\n- RSA\n- Shell Scripting\n\n\n> **✦ Security Arcane Support**\n\n- Python\n- bash scripting\n- Linux Networking Commands (`iptables`, `netstat`,\n`tcpdump`)",
      features: [
        "Encryption Techniques (PGP, SSL/TLS)",
        "Authentication & Authorization Shields",
        "Firewall and VPN Configurations",
        "Threat Detection and Incident Response"
      ],
      imgs: [
        {
          src: "../media/Skills/3/burp.png",
          alt: "burp",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/3/burp2.png",
          alt: "burp2",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/3/kleopatra.png",
          alt: "kleopatra",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/3/wireshark.png",
          alt: "wireshark",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/3/zenmap.png",
          alt: "zenmap",
          isBlured: false,
          isMobile: false,
        },
      ],
      startdate: "01-11-2024",
      storyBehindIt: "This skill didn’t appear clearly at first. In my early days of frontend and backend development, I followed some protective practices without knowing their true nature.\n\nOver time, I began to notice a pattern—secure code, cautious logic, clean structure. Then came a turning point: studying `Systeme informatique et réseaux` `computer systems and networks`, where I met allies who shared a deep interest in cybersecurity.\n\nTogether, we explored new lands of knowledge—penetration testing, network defense, and encryption. Thanks to those companions, I began to truly understand and develop this craft."
    }
  },
  {
    id: 4,
    icon: "🔮",
    name: "AI Conjuring",
    description: "<strong>AI Conjuring</strong> With words as my spells, I awaken machines to assist, advise, and create.",
    level: 4,
    overview: {
      thumbnail: "../media/Skills/4/thumb.jpg",
      intro: "<strong>AI Conjuring</strong>is the craft of communicating with intelligent entities through carefully forged prompts and guided interaction.<br />With words as my spells, I awaken machines to assist, advise, and create.",
      desc: "I used my knowledge of artificial intelligence to **build the chatbot featured at the top of my portfolio**, blending both technical understanding and prompt mastery.\n\nThis skill focuses on **interacting with AI-powered entities**, crafting prompts, and guiding intelligent systems to respond with clarity and purpose. But it doesn’t stop there—my background also includes **hands-on experience with machine learning**, data processing, anomaly detection, and building custom models using tools like Scikit-learn and TensorFlow.\n\nIn a world where AI is expanding its domain, **AI Conjuring** allows me to both **command existing intelligence through precise interaction**, and **forge new capabilities through code and data**.\n\nWith this dual ability, I can adapt to any challenge—either by summoning insight through prompts or crafting solutions with algorithms.\n\n### ✨ AI Known Spells\n\n- Prompt Engineering\n- Refining AI Outputs\n- Context Management\n- Instruction-based Prompting\n- Creative Prompt Design\n- Prompt Chaining & Iteration\n\n### 🧰 Ai Tools\n\n- Open ai : ChatGPT\n- Google : Gemini\n- Microsoft : Copilot\n- DeepSeek\n- AliBaba : Qwen\n- Claude\n\n> These are the familiars I call upon for different tasks.\n\n### 📚 AI Languages & Frameworks\n\n> **✦ AI Core Runes**\n\n- English (Clear, Structured Prompts)\n- Markdown (For Presentation & Clarity)\n\n> **✦ AI Arcane Support**\n\n- Web Browsers\n- Prompt Templates\n- Notebook Environments",
      features: [
        "Prompt Engineering",
        "Refining AI Outputs",
        "Context Management",
        "Instruction-based Prompting",
        "Creative Prompt Design",
        "Prompt Chaining & Iteration"
      ],
      imgs: [
        {
          src: "../media/Skills/4/chatgpt.png",
          alt: "chatgpt",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/4/deepseek.png",
          alt: "deepseek",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/4/manus.png",
          alt: "manus",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/4/qwen.png",
          alt: "qwen",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/4/venice ai.png",
          alt: "venice",
          isBlured: false,
          isMobile: false,
        },
      ],
      startdate: "2023-01-01",
      storyBehindIt: "I didn’t go looking for this skill—**AI came to me** as part of the world’s transformation.\n\nAs machines began thinking, creating, and deciding, I realized I had two choices: ignore it and fall behind, or learn to **wield it with purpose**. But I also saw the danger—people relying on it blindly, losing the will to grow on their own.\n\nSo I made a decision:\n\n***Adapt, but never depend.***\n\nI trained hard, learned deeply, and built my own discipline. Now, I use AI as a tool—not a crutch.\n\nWhen a task isn’t urgent, I push myself to do it as if **AI didn’t exist**. That’s how I sharpen my own mind, while still commanding the full power of AI when needed."
    }
  },
  {
    id: 5,
    icon: "📱",
    name: "Mobile Enchantments",
    description: "<strong>Mobile Enchantments</strong> involve casting cross-platform spells to build interactive mobile apps.",
    level: 3,
    overview: {
      thumbnail: "../media/Skills/5/thumb.jpg",
      intro: "<strong>Mobile Enchantments</strong> involve casting cross-platform spells to build interactive mobile apps.<br />Creating responsive and engaging mobile applications with React Native and Flutter.",
      desc: "**Mobile Enchantments** is the art of shaping spells that fit the magical tomes carried by every traveler and noble in the realm. With the right incantations, I turn ideas into touchable enchantments—apps that respond to every scroll, tap, and whisper.\n\nTo forge these mobile spells, I use a mix of old and new magic. Sometimes I draw upon general-purpose spells from the frontlines like `HTML`, `CSS`, and `JavaScript`, combined with the sacred teachings of `Responsive Design`. Other times, I wield more focused tools of the trade—like the hybrid scrolls of `React Native` and `Expo`.\n\nThough I’ve also touched the deeper magics of `Swift`,  `Kotlin` and `Flutter`, those paths still demand patience and practice. Yet with each trial, my spellbook grows stronger.\n\n### 🧰 Mobile Tools\n\n- Android Studio\n- Expo\n- ADB (Android Debug Bridge)\n- BlueStacks\n- VS Code\n- Physical Devices (for real-world testing)\n\n### 📚 Mobile Languages & Frameworks\n\n> **✦ Mobile Core Runes**\n\n- React Native\n- Kotlin\n- JavaScript\n\n> **✦ Mobile Arcane Support**\n\n- HTML & CSS (for hybrid layouts)\n- Virtual Devices (emulators)\n- Figma (UI/UX crafting)\n- Firebase (backend spells)\n- REST APIs (communication magic)",
      features: [
        "Cross-Platform Development",
        "Responsive Layouts",
        "Navigation & State Management",
        "Native Module Integration",
        "Mobile Performance Optimization"
      ],
      imgs: [
        {
          src: "../media/Skills/5/Dssissa.png",
          alt: "dssissa",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/5/Dssissa1.png",
          alt: "dssissa1",
          isBlured: false,
          isMobile: true,
        },
        {
          src: "../media/Skills/5/Dssissa2.png",
          alt: "dssissa2",
          isBlured: false,
          isMobile: true,
        },
        {
          src: "../media/Skills/5/Arkani.png",
          alt: "Arkani",
          isBlured: false,
          isMobile: true,
        },
        {
          src: "../media/Skills/5/Arkani1.png",
          alt: "Arkani1",
          isBlured: false,
          isMobile: true,
        },
        {
          src: "../media/Skills/5/Arkani3.png",
          alt: "Arkani2",
          isBlured: false,
          isMobile: true,
        },
      ],
      startdate: "2022-01-01",
      storyBehindIt: "Long ago, in the days when glowing rectangles first entered the hands of the common folk, I held one and felt something stir within me. Not just awe—but purpose. I didn’t merely see a device; I saw a spellbook waiting to be written, a window into infinite worlds. From that moment on, I knew: I would one day craft enchantments that lived within these magical tomes.\n\nIn my early days as a student of the full-stack order, I studied the ancient scrolls of web sorcery, learning the basics of structure, logic, and style. But while others were content mastering the scrolls of `HTML`, `CSS`, and `JavaScript`, my gaze often wandered to the realm of mobile magic—a realm where every touch was a rune, every swipe a command.\n\nI began by summoning simple interfaces using hybrid charms, mixing web spells with responsive enchantments. Soon, I uncovered the sacred scrolls of `React Native`, which allowed me to craft powerful cross-platform incantations. With the aid of `Expo`, I summoned my first fully working familiars—apps that answered to my every instruction.\n\nEven now, though I have journeyed through many lands of code and built artifacts for all kinds of devices, the path of Mobile Enchantments remains one of my favorite quests. With each app, I breathe life into my ideas—transforming them into spells others can hold in their hands.\n\nThis path is far from over. Many runes remain untranslated. But the fire that sparked from that first encounter still burns, guiding my hand as I craft ever more powerful enchantments for the devices of this world."
    }
  },
  {
    id: 6,
    icon: "🌐",
    name: "Web Explorer",
    description: "<strong>Web Explorer</strong> — Navigating the enchanted realms of the Internet.",
    level: 4,
    overview: {
      thumbnail: "../media/skills/6/thumb.jpg",
      intro: "<strong>Web Explorer</strong> — Navigating the enchanted realms of the Internet.<br/>Web Explorer is the art of understanding how the web truly works — from HTTP incantations to domain name rituals, browser behavior, and the hidden currents of online realms.",
      desc: "To become a true Web Explorer is to learn how the invisible threads of the Internet are woven. This skill grants me the ability to read browser scrolls, trace mysterious links, and understand the behavior of modern web portals. I study the sacred protocols — `HTTP` and `HTTPS` — and the gatekeepers of the web, such as `DNS` and domain lords.\n\nFrom wielding inspection tools like `DevTools` to analyzing the flow of requests and responses, I can uncover how a page breathes, how resources are summoned, and where latency hides in the shadows. I navigate APIs like ancient maps, fetch data from distant servers, and learn how different clients and spells interact.\n\nWith this knowledge, I can optimize performance, reduce loading rituals, and better understand how a single click leads to an entire world of magic behind the screen.\n\n### 🧰 Web Explorer Tools\n\n- Search Engines (Google, DuckDuckGo...)\n- Web Browsers (Chrome, Firefox, Brave...)\n- DevTools\n- Inspect Element\n- Online API tools (Postman, ReqBin)\n\n### 📚 Web Explorer Languages & Frameworks\n\n> **✦ Web Explorer Core Runes**\n\n- English\n- French\n- Arabic\n\n> **✦ Web Explorer Arcane Support**\n\n- HTML & CSS & JavaScript\n- Browser DevTools\n- API Interfaces",
      features: [
        "Web Performance Monitoring",
        "DevTools Network Inspection",
        "API Consumption & Debugging",
        "DNS and Domain Knowledge",
        "HTTP Headers Decoding",
        "Surfing through the internet wisely"
      ],
      imgs: [
        {
          src: "../media/Skills/6/searchEngine.png",
          alt: "search Engine",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/6/Browsers.png",
          alt: "web Browsers",
          isBlured: false,
          isMobile: false,
        },
      ],
      startdate: "2016-04-01",
      storyBehindIt: "My journey as a Web Explorer began in the early days of my youth, armed with nothing more than curiosity and a shared family computer. I still remember the very first phrase I entered into the sacred scrolls of Google: *’’العاب اكشن’’* It was a simple request, but it opened a portal to an entirely new world — one of endless discovery and digital wonder.\n\nBack then, I did not know how the results appeared, how clicking a link summoned pages from distant lands, or how the banners and games knew where I had been. But I returned, day after day, driven by that same fire of curiosity. I searched. I clicked. I explored.\n\nOver time, that innocent wonder grew into a desire to **understand**. I began to peek behind the veil using browser tools, inspecting network spells and learning how each part of a website was conjured. I learned that behind every link was a ritual — behind every page, a structure.\n\nWhat started as a child’s game slowly became a quest for mastery. From reading response headers to analyzing performance bottlenecks, I grew into the role of a true Web Explorer — no longer just a visitor of the web, but a mapper of its hidden paths."
    }
  },
  {
    id: 7,
    icon: "📊",
    name: "Data Divination",
    description: "<strong>Data Divination or Data Analysis</strong> — The ancient craft of reading the hidden patterns in the numbers. Harnessing the power of data analytics and visualization to uncover hidden insights.",
    level: 2,
    overview: {
      thumbnail: "../media/skills/7/thumb.jpg",
      intro: "Data Divination is the art of gathering raw numbers, cleansing them of noise, and shaping them into charts and symbols that reveal truths unseen by the naked eye.",
      desc: "Much like a seer reading runes by the fire, I study datasets to discover the patterns, trends, and whispers they carry. Using the enchanted tools of this age — from the `Python` language to the mystical scrolls of `Excel` — I turn piles of raw numbers into clear stories.\n\nWith the right incantations, I clean and prepare messy data, forge visualizations in the form of charts and graphs, and uncover hidden links between values. Whether it's a simple comparison or the early signs of a coming trend, my goal is to bring clarity to the fog of uncertainty.\n\nThrough `Matplotlib`, `Pandas`, and other analytical runes, I turn silent data into actionable insight — guiding decisions like a trusted oracle.\n\n### 🧰 Data Divination Tools\n\n- Excel\n- Python\n- Jupyter Notebook\n- Matplotlib\n- Pandas\n\n\n### 📚 Data Divination Languages & Frameworks\n\n> **✦ Data Divination Core Runes**\n\n- python\n\n> **✦ Data Divination Arcane Support**\n\n- Matplotlib\n- Pandas\n- Charts\n- Graphs",
      features: [
        "Data Cleansing & Preparation",
        "Data Visualization (Charts, Graphs)",
        "Exploratory Data Analysis",
        "Basic Statistics & Correlation Finding",
        "Dashboard Crafting",
        "Storytelling with Data"
      ],
      imgs: [
        {
          src: "../media/Skills/7/Dashboard.png",
          alt: "Dashboard",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/7/Rapport.png",
          alt: "Rapport",
          isBlured: false,
          isMobile: false,
        },
      ],
      startdate: "2021-09-01",
      storyBehindIt: "My journey into the art of Data Divination began not in a grand hall of scholars, but at a quiet desk while working on the back end of a project. I was tasked with a strange challenge — to turn streams of raw, tangled numbers into something others could see and understand, or to transform a clear visualization back into precise code.\n\nAt first, it was like staring at an unreadable map, lines and figures scattered without meaning. But soon, I learned the runes of analysis and the symbols of visualization. The more I worked, the more I realized that every dataset tells a story — some are whispers, some are shouts, but all can be heard if you know the language.\n\nFrom that day forward, I have used my skills as a data seer to illuminate the unseen, guiding projects and decisions with the light of knowledge drawn from the shadows of raw information."
    }
  },
  {
    id: 8,
    icon: "📜",
    name: "Code Enchantments",
    description: "Crafting elegant and efficient code spells to solve complex problems.",
    level: 3,
    overview: {
      thumbnail: "../media/skills/8/thumb.jpg",
      intro: "Code Enchantments is about writing clean, maintainable code using best practices and patterns.",
      desc: "I apply design principles like DRY, KISS, and SOLID to write modular and reusable code. Whether it’s scripting tools or building full apps, good code is always my foundation.",
      features: [
        "Code Refactoring",
        "Design Patterns",
        "Clean Architecture",
        "Documentation & Comments",
        "Linting & Formatting"
      ],
      imgs: [],
      startdate: "2017-11-01",
      storyBehindIt: "I used to write messy code until I realized maintainability matters. Now I strive to write elegant solutions from the start."
    }
  },
  // -------------------------------------
  {
    id: 9,
    icon: "🧙‍♂️",
    name: "Mentorship",
    description: "<strong>Mentorship</strong> — Guiding aspiring wizards and witches on their journeys of learning and mastery, sharing knowledge, wisdom, and encouragement.",
    level: 4,
    overview: {
      thumbnail: "../media/Skills/9/thumb.png",
      intro: "<strong>Mentorship</strong> is the magical act of teaching and empowering others to grow with confidence—unlocking their true potential through patience, empathy, and guidance.</br><strong>Mentorship</strong> It is the art of sharing knowledge, providing feedback, and nurturing growth in others while continuing to learn yourself.",
      desc: "Mentorship is the art of guiding others toward mastery—helping them find clarity, purpose, and balance on their learning path. It is not about showing off what you know, but about **passing on what experience has taught you** and helping others avoid the pitfalls you once faced.\n\nThis craft extends far beyond technical skill. It demands empathy, communication, and patience. It’s about **listening more than speaking**, allowing others to make mistakes safely, and gently steering them toward better solutions—without breaking their confidence or spirit.\n\nThrough mentoring, I’ve learned to adapt to **different personalities, ages, genders, and cultures**. Every person learns differently, and it’s my role to understand that rhythm—sometimes by guiding softly, sometimes by pushing a little harder, but always with kindness and respect.\n\nMentorship also taught me humility. To mentor others, I must remain a **lifelong learner**—curious, open-minded, and unafraid to admit mistakes. The moment you believe you know everything, you stop growing. But when you embrace the mindset of a learner, every conversation becomes a new opportunity for discovery.\n\nMy mentorship journey reaches beyond coding. In the gaming realm, I once took over leadership of a guild and mentored many players—helping them refine their strategies, work as a team, and ultimately reach the top ranks together. That experience taught me how leadership and mentorship intertwine: both require trust, consistency, and a deep belief in others’ potential.\n\nAnd in the real world, I now serve as a **teacher in a private school**, guiding students on their own paths of learning and creativity. Whether it’s through teaching, coding, or gaming, I find meaning in helping others evolve—not just in skill, but in mindset and self-belief.\n\nMentorship, to me, is not a role—it’s a calling. It is the quiet joy of seeing someone you’ve guided take flight on their own.\n\n### ✨ Mentorship Known Spells\n\n- Pair Programming & Collaboration\n- Knowledge Sharing & Debugging Guidance\n- Learning Path Design\n- Code Reviews & Constructive Feedback\n- Communication & Soft Skill Development\n- Adaptable Teaching & Leadership Styles\n\n### 🧰 Mentorship Tools\n\n- **AnyDesk / TeamViewer** — Remote live assistance\n- **Zoom / Google Meet** — Virtual mentorship sessions\n- **Slack / Discord** — Communication & ongoing community support\n- **GitHub** — Sharing, reviewing, and collaborating on code\n- **Face-to-Face Mentoring** — Personal interaction and hands-on teaching\n\n### 📚 Mentorship\n\n> **✦ Mentorship Core Runes**\n\n- Fundamentals of Programming\n- Clear Documentation & Constructive Feedback\n- Communication, Empathy, and Leadership",
      features: [
        "Pair Programming & Collaboration",
        "Knowledge Sharing & Debugging Guidance",
        "Learning Path Design",
        "Code Reviews & Constructive Feedback",
        "Communication & Soft Skill Development",
        "Adaptable Teaching & Leadership Styles",
      ],
      imgs: [
        {
          src: "../media/Skills/9/anydesk.png",
          alt: "anydesk",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/9/cs teacher.png",
          alt: "cs teacher",
          isBlured: false,
          isMobile: false,
        },
        {
          src: "../media/Skills/9/teacher.png",
          alt: "teacher",
          isBlured: false,
          isMobile: false,
        },
      ],
      startdate: "2022-01-01",
      storyBehindIt: "From the very beginning, mentorship has been woven into my life. My father—himself a teacher and my first mentor—taught me how to read, write, and think critically. He shaped my curiosity, humility, and discipline. Even when he was strict, he was always fair and just, teaching me that mistakes are not failures but lessons that help us grow.\n\nFollowing in his footsteps came naturally. I started helping friends with homework, explaining concepts, and realizing that teaching others deepened my own understanding. Over time, I discovered that mentorship was not just something I enjoyed—it was something I *needed*.\n\nSince then, I’ve carried that same passion into everything I do—from coding to gaming, from teamwork to teaching. Each mentee, student, or player I’ve guided has reminded me that mentorship is a cycle: we give, we learn, and we grow together.\n\nMentorship is my way of giving back to the world—one learner, one conversation, and one breakthrough at a time."
    }
  },
  {
    id: 10,
    icon: "🧩",
    name: "Problem Solving",
    description: "Solving complex challenges with creative and efficient solutions, like a true coding wizard.",
    level: 4,
    overview: {
      thumbnail: "../media/problem_solving.png",
      intro: "Problem Solving is the essence of development—turning chaos into structure through logic and design.",
      desc: "From algorithms to architecture, this skill is about analytical thinking, debugging, and implementing optimal solutions.",
      features: [
        "Algorithm Design",
        "Data Structures",
        "Bug Diagnosis",
        "Optimizing Code",
        "Architectural Thinking"
      ],
      imgs: [],
      startdate: "2016-01-01",
      storyBehindIt: "Puzzles, logic games, and real bugs led me to become a dedicated problem-solver—one challenge at a time."
    }
  },
  {
    id: 11,
    icon: "💻",
    name: "Windows Dungeon",
    description: "Exploring and mastering the mystical realms of the Windows operating system. powershell and cmd incantations are my tools of choice.",
    level: 5,
    overview: {
      thumbnail: "../media/windows_dungeon.png",
      intro: "Windows Dungeon is my deep dive into system configuration, scripting, and automation on Windows OS.",
      desc: "This includes mastering cmd commands, PowerShell scripting, registry tweaks, task automation, and process monitoring.",
      features: [
        "PowerShell Scripting",
        "Batch Scripting",
        "Windows Registry Tweaks",
        "Task Scheduler Automation",
        "System Monitoring & Logs"
      ],
      imgs: [],
      startdate: "2014-10-01",
      storyBehindIt: "I began scripting on Windows as a teen, using batch files to automate game setups. That led to deeper system mastery."
    }
  },
  {
    id: 12,
    icon: "🐧",
    name: "Linux Slayer",
    description: "Exploring and mastering the mystical realms of the Linux operating system. Bash and terminal incantations are my tools of choice.",
    level: 3,
    overview: {
      thumbnail: "../media/linux_slayer.png",
      intro: "Linux Slayer is about leveraging the terminal to rule the open-source realm.",
      desc: "I navigate the Linux filesystem, write shell scripts, configure services, and use tools like grep, awk, and cron.",
      features: [
        "Shell Scripting (Bash)",
        "Package Management (apt, yum)",
        "Cron Jobs & Services",
        "Log Monitoring",
        "User/Permission Management"
      ],
      imgs: [],
      startdate: "2019-02-01",
      storyBehindIt: "My Linux journey started from frustration with Windows limits. I embraced the CLI and haven’t looked back."
    }
  },
  {
    id: 13,
    icon: "🐳",
    name: "Docker",
    description: "Containerizing applications and managing microservices with Docker.",
    level: 2,
    overview: {
      thumbnail: "../media/docker_magic.png",
      intro: "Docker is my tool for crafting portable, isolated environments for apps.",
      desc: "I use Docker to define and manage containers, build Dockerfiles, compose services, and simulate environments for development and deployment.",
      features: [
        "Dockerfile Creation",
        "Image & Container Management",
        "Docker Compose",
        "Volume & Network Setup",
        "Containerized Dev Environments"
      ],
      imgs: [],
      startdate: "2023-04-01",
      storyBehindIt: "Needing consistency across dev setups, I learned Docker to package apps once and run them anywhere."
    }
  },
  {
    id: 14,
    icon: "🖥️",
    name: "Virtualization",
    description: "Creating and managing virtual environments for development and testing.",
    level: 2,
    overview: {
      thumbnail: "../media/virtualization.png",
      intro: "Virtualization is about spinning up controlled digital realms for isolated testing and deployment.",
      desc: "This includes managing VMs, configuring virtual networks, and simulating infrastructure for dev or test purposes using tools like VirtualBox or VMware.",
      features: [
        "Virtual Machine Management",
        "ISO & OS Installation",
        "Snapshot & Rollback",
        "Virtual Networking",
        "Multi-OS Testing"
      ],
      imgs: [],
      startdate: "2022-06-01",
      storyBehindIt: "I needed to test projects on different OS setups, so I explored virtualization and learned to master isolated environments."
    }
  }

];

export default skills;