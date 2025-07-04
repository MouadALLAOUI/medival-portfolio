const skills = [
  {
    id: 1,
    icon: "⌬",
    name: "Frontend Sorcery",
    description: "Weaving spells with HTML, CSS, and JavaScript to create enchanting user experiences.",
    level: 5, // 1 to 5 scale
    overview: {
      thumbnail: "../media/Skills/1/thumb.png",
      intro: "Frontend sorcery is the art of crafting captivating user interfaces and experiences using HTML, CSS, and JavaScript. It involves creating responsive designs, interactive elements, and seamless navigation to engage users.",
      desc: "Frontend sorcery is the art of crafting captivating user interfaces and experiences using HTML, CSS, and JavaScript. It involves creating responsive designs, interactive elements, and seamless navigation to engage users. This skill is essential for building visually appealing and user-friendly web applications.",
      features: [
        "Responsive Web Design",
        "Cross-Browser Compatibility",
        "Performance Optimization",
        "Accessibility Best Practices",
        "Version Control with Git"
      ],
      imgs: [
        {
          src: "../media/cafe_medieval_day.png",
          alt: "A screenshot of a responsive web design",
          isBlured: true,
        },
        {
          src: "../media/city_medieval_day.png",
          alt: "A screenshot of a JavaScript interactive element",
          isBlured: false,
        }
      ],
      startdate: "2015-01-01",
      storyBehindIt: "My journey into frontend sorcery began with a fascination for how websites are built. I started with simple HTML pages and gradually learned CSS for styling and JavaScript for interactivity. Over the years, I've honed my skills through countless projects, always striving to create better user experiences.",
    },
  },
  {
    id: 2,
    icon: "⚙️",
    name: "Backend Alchemy",
    description: "Transforming data and logic into powerful potions with Node.js, Python, and SQL.",
    level: 4, // 1 to 5 scale
    overview: {
      thumbnail: "../media/skills/2/thumb.png",
      intro: "Backend alchemy is the art of transforming data and logic into powerful applications using Node.js, Python, and SQL. It involves creating robust server-side solutions, managing databases, and ensuring seamless communication between the client and server.",
      desc: "Backend alchemy is the art of transforming data and logic into powerful applications using Node.js, Python, and SQL. It involves creating robust server-side solutions, managing databases, and ensuring seamless communication between the client and server. This skill is essential for building scalable and efficient web applications.",
      features: [
        "RESTful API Development",
        "Database Management (SQL, NoSQL)",
        "Authentication and Authorization",
        "Server-Side Logic Implementation",
        "Performance Tuning and Optimization"
      ],
      imgs: [
        {
          src: "../media/cafe_medieval_day.png",
          alt: "A screenshot of a responsive web design",
          isBlured: true,
        },
        {
          src: "../media/city_medieval_day.png",
          alt: "A screenshot of a JavaScript interactive element",
          isBlured: false,
        }
      ],
      startdate: "2015-01-01",
      storyBehindIt: "My journey into frontend sorcery began with a fascination for how websites are built. I started with simple HTML pages and gradually learned CSS for styling and JavaScript for interactivity. Over the years, I've honed my skills through countless projects, always striving to create better user experiences.",
    },
  },
  {
    id: 3,
    icon: "🛡️",
    name: "Security Wards",
    description: "Crafting protective enchantments against digital threats and vulnerabilities.",
    level: 1,
    overview: {
      thumbnail: "../media/Skills/3/thumb.jpg",
      intro: "Security Wards is about shielding systems from dark forces in cyberspace. With this skill, I deploy firewalls, encryption, and secure protocols to protect users and data.",
      desc: "Security Wards focuses on building and enforcing defense mechanisms against common and advanced digital threats. This includes experience with firewalls, SSL/TLS, PGP, OWASP practices, and authentication strategies.",
      features: [
        "Encryption Techniques (PGP, SSL)",
        "Authentication/Authorization",
        "OWASP Top 10 Defense",
        "Firewall and VPN Configurations",
        "Threat Detection & Response"
      ],
      imgs: [],
      startdate: "2020-05-01",
      storyBehindIt: "I started diving into cybersecurity after encountering vulnerabilities in a client project. That experience ignited a deeper interest in securing systems by design."
    }
  },
  {
    id: 4,
    icon: "🔮",
    name: "AI Conjuring",
    description: "Summoning intelligent entities with machine learning and neural networks.",
    level: 4,
    overview: {
      thumbnail: "../media/Skills/4/thumb.jpg",
      intro: "AI Conjuring is the art of bringing intelligence to applications through algorithms and data.",
      desc: "This skill includes practical implementation of ML/DL models, data preprocessing, anomaly detection, classification, and experimentation using tools like Scikit-learn, TensorFlow, or custom logic.",
      features: [
        "Machine Learning Fundamentals",
        "Neural Network Modeling",
        "Anomaly Detection",
        "Data Preprocessing & Feature Engineering",
        "Model Evaluation & Tuning"
      ],
      imgs: [],
      startdate: "2023-03-01",
      storyBehindIt: "Inspired by the potential of intelligent systems, I started building chatbots and AI models, integrating them into web apps for automation and smart interactions."
    }
  },
  {
    id: 5,
    icon: "📱",
    name: "Mobile Enchantments",
    description: "Creating responsive and engaging mobile applications with React Native and Flutter.",
    level: 3,
    overview: {
      thumbnail: "../media/Skills/5/thumb.jpg",
      intro: "Mobile Enchantments involve casting cross-platform spells to build interactive mobile apps.",
      desc: "Using frameworks like React Native and Flutter, I craft beautiful UIs and smooth user experiences for both Android and iOS platforms.",
      features: [
        "Cross-Platform Development",
        "Responsive Layouts",
        "Navigation & State Management",
        "Native Module Integration",
        "Mobile Performance Optimization"
      ],
      imgs: [],
      startdate: "2022-08-01",
      storyBehindIt: "Wanting to bring my apps to phones, I explored React Native and Flutter, discovering powerful tools for building fast, beautiful mobile UIs."
    }
  },
  {
    id: 6,
    icon: "🌐",
    name: "Web Explorer",
    description: "Exploring the enchanted realms of internet",
    level: 4,
    overview: {
      thumbnail: "../media/skills/6/thumb.jpg",
      intro: "Web Explorer is all about understanding how the internet works, from HTTP spells to domain rituals.",
      desc: "This skill involves knowledge of browser behavior, APIs, protocols like HTTP/HTTPS, DNS, and tools for network inspection, performance tuning, and request tracing.",
      features: [
        "HTTP/HTTPS Protocol Mastery",
        "DNS & Domain Management",
        "Web Performance Monitoring",
        "DevTools Network Inspection",
        "API Consumption & Debugging"
      ],
      imgs: [],
      startdate: "2016-04-01",
      storyBehindIt: "I started as a curious explorer, inspecting pages and decoding headers. This led me deeper into how the web truly works."
    }
  },
  {
    id: 7,
    icon: "📊",
    name: "Data Divination",
    description: "Harnessing the power of data analytics and visualization to uncover hidden insights.",
    level: 2,
    overview: {
      thumbnail: "../media/skills/7/thumb.jpg",
      intro: "Data Divination involves analyzing and visualizing datasets to reveal patterns and hidden truths.",
      desc: "Using tools like Python, Excel, and visualization libraries, I build dashboards, interpret trends, and generate insights to drive smart decisions.",
      features: [
        "Data Cleaning & Preprocessing",
        "Data Visualization (Charts, Graphs)",
        "Exploratory Data Analysis",
        "Basic Statistics & Correlation",
        "Jupyter, Matplotlib, Pandas"
      ],
      imgs: [],
      startdate: "2021-09-01",
      storyBehindIt: "I first encountered data work while analyzing app usage logs. The insights I gained pushed me to explore more."
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
    description: "Guiding aspiring wizards and witches in their coding journeys, sharing knowledge and wisdom.",
    level: 2,
    overview: {
      thumbnail: "../media/mentorship.png",
      intro: "Mentorship is the magical act of teaching and empowering others to code confidently.",
      desc: "This includes pair programming, code reviews, and guidance on projects and learning paths. I share insights through community engagement or direct mentorship.",
      features: [
        "Code Reviews & Feedback",
        "Learning Path Design",
        "Team Pair Programming",
        "Debugging Assistance",
        "Soft Skill Development"
      ],
      imgs: [],
      startdate: "2022-01-01",
      storyBehindIt: "Helping a friend debug a project opened my eyes to the joy of mentorship. Since then, I’ve taken pride in being a supportive guide."
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