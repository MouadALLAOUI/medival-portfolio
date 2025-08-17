const chatContainers = document.getElementById('chat-container');
const chatHeaders = document.getElementById('chat-header');
const chatInputContainers = document.getElementById('chat-input');
const askButton = document.getElementById('askButton');
const userInput = document.getElementById('user-input');
const responseContainer = document.getElementById('chat-messages');
const suggestions = document.getElementById('suggestions');
const contextIndicatorContainers = document.getElementById('context-indicator');
const contextStatus = document.getElementById('contextStatus');
const paraCount = document.getElementById('paraCount');
const sentenceCount = document.getElementById('sentenceCount');
const entityCount = document.getElementById('entityCount');

// ========= Define Default Profile Context =========
const chatbotProfile = [
  // General overview
  "Mouad is a developer who works on several projects including app development, cybersecurity, content optimization, and AI.",
  "He builds high-quality apps, learns new technologies, and values practical, honest feedback.",
  "He has worked on a Ren'Py game, PGP apps, a site called JennNative, and travel-related SEO content for Excu Marrakech.",
  "Mouad also studies cybersecurity (OSI, TCP, UDP, DNS, SSL/TLS, STRIDE, IoT) and cryptography (asymmetric encryption, PGP, etc.).",
  "He approaches projects with a focus on clean code, efficient design, and long-term maintainability.",
  "Mouad enjoys finding creative solutions to technical challenges and optimizing systems for performance.",
  "cybersecurity is the way you handle things to protect your data",

  // Chapter I — Origins
  "🛡️ Chapter I: Origins of Mouad the Coder",
  "I hail from Kelaat M’Gouna, a small town in rural Morocco. Life there is simple but demanding — a place where curiosity must be chased.",
  "My fascination with technology began through trial, error, and mischief, not in computer labs.",
  "As a child, I developed a habit of ‘ruining PCs’ — and then fixing them.",
  "Older siblings locked their laptops, but I found ways in: running errands, doing chores, negotiating access, or attempting to bypass passwords.",
  "Without realizing it, I became a problem solver — turning every limitation into a learning opportunity.",
  "Those early experiments taught me resourcefulness and persistence, traits I still rely on as a developer.",
  "Breaking things was never the goal — understanding them was.",

  // Chapter II — The Path of Learning
  "📜 Chapter II: The Path of Learning",
  "My education has been non-linear but shaped my developer mindset.",
  "I began at Ait Baamran primary school, sometimes taught by my father, who pushed me to think critically.",
  "In Collège/Lycée Al Wouroud, my interest in tech grew — mastering Word, Excel, PowerPoint, and learning algorithms, HTML, and CSS.",
  "At lycée level, I learned Pascal programming, then continued independently with Scratch and more, even if it meant repeating a year to earn my Baccalauréat.",
  "At Ibn Zohr University, I studied SMI (Math & Computer Science) but found it overly theoretical.",
  "OFPPT’s Digital Development track gave me HTML, CSS, JavaScript, PHP, React.js, Laravel, Git, MySQL, MongoDB, hosting, and basic DevOps.",
  "Finally, my Bachelor’s in SIR (Systèmes Informatiques et Réseaux) gave me OSI model knowledge, Linux, Bash, sockets, multithreading, cryptography, cloud, and machine learning.",
  "Learning for me has always been hands-on — I remember concepts best when I apply them immediately.",
  "Even when formal courses didn’t meet my expectations, I built my own curriculum through online resources and side projects.",

  // Chapter III — The Arsenal of the Coder
  "⚔️ Chapter III: The Arsenal of the Coder",
  "I believe adaptability is my strongest skill — I learn new tech quickly thanks to a solid foundation in algorithms.",
  "Frontend: HTML, CSS, JavaScript, React.js, Vue.js, Next.js, Tailwind CSS, Sass.",
  "Backend: PHP, Node.js, Python, Laravel, Express.js, CodeIgniter, MySQL, MongoDB, Firebase (basic).",
  "Tools: VS Code, Node.js, Composer, Postman, Git, WAMP, XAMPP, Windows (PowerShell), Linux (Bash).",
  "Mobile: React Native for cross-platform development.",
  "Other: WordPress, VirtualBox, VMware, Blender (beginner), CapCut, Photoshop.",
  "I’m a Full-Stack Developer, building and debugging across the whole lifecycle.",
  "Hobby projects: Ren’Py visual novels, Unity mini-games.",
  "Cybersecurity interest: Wireshark, Nmap, Cisco Packet Tracer.",
  "Mindset: 'If it needs to be learned, I will learn it.'",
  "I enjoy turning vague ideas into functional, real-world applications.",
  "To me, every programming language is just another way to express logic.",
  "I aim to write code that not only works but can be easily understood and improved by others."
];

// ========= VARIABLES =========
let contextParagraphs = [];

let sentenceChunks = chatbotProfile.map((sentence, index) => ({
  text: sentence.trim(),
  paragraphIndex: index,
  isProfile: true
}));

let entities = { people: [], projects: [], technologies: [], dates: [], locations: [], organizations: [] };
let conversationHistory = [];
const synonyms = {
  app: ["application", "software", "program", "tool", "utility"],
  cybersecurity: ["security", "infosec", "information security", "network security", "data protection"],
  ai: ["artificial intelligence", "machine learning", "ml", "deep learning"],
  dev: ["developer", "programmer", "coder", "engineer"],
  project: ["work", "initiative", "undertaking", "endeavor", "task", "assignment"],
  mouad: ["he", "him", "his"],
  renpy: ["visual novel engine", "game engine"],
  pgp: ["pretty good privacy", "encryption", "cryptography"],
  jennnative: ["website", "platform"],
  seo: ["search engine optimization", "ranking", "visibility"],
  marrakech: ["city", "location", "place"],
  osi: ["open systems interconnection"],
  tcp: ["transmission control protocol"],
  udp: ["user datagram protocol"],
  dns: ["domain name system"],
  ssl: ["secure sockets layer"],
  tls: ["transport layer security"],
  stride: ["threat modeling"],
  iot: ["internet of things"],
  javascript: ["js", "ecmascript"],
  python: ["py"],
  react: ["reactjs", "frontend library"],
  developer: ["programmer", "coder", "software engineer"],
  content: ["text", "information", "data"],
  optimization: ["improvement", "enhancement", "refinement"],
  feedback: ["input", "comments", "suggestions"],
  travel: ["journey", "trip", "voyage"],
  excursion: ["excu", "tour"],
  encryption: ["cryptography", "scrambling", "encoding"],
  apps: ["applications", "programs", "software"],
  games: ["interactive entertainment", "digital games"],
  skills: ["abilities", "expertise", "competencies"],
  technologies: ["tech", "tools", "frameworks"],
  languages: ["programming languages", "code languages"],
  portfolio: ["work samples", "showcase", "collection"],
  contact: ["reach out", "get in touch", "communicate"],
  email: ["electronic mail"],
  phone: ["telephone", "call"],
  greeting: ["hello", "hi", "hey"],
  gratitude: ["thanks", "thank you"],
  status: ["how are you", "what's up"],
}

const responses = [
  "Mouad has mastered the arcane arts of frontend development, specializing in creating enchanting user experiences.",
  "Through years of study, Mouad has become proficient in JavaScript, Python, and the mystical arts of React.",
  "Mouad's journey includes crafting secure applications with powerful encryption spells and security wards.",
  "The wizard Mouad has completed several tech quests, including the Grimoire of Components and the Dragon's Lair API.",
  "Mouad believes in ethical coding practices and creating accessible experiences for all users.",
  "To contact Mouad, you can send a raven via the contact section or connect through his guild associations.",
]

// ========= Functions =========
function displayMessage(sender, text, type = "normal") {
  const messageDiv = document.createElement("div")

  // Get current time
  const now = new Date()
  const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

  messageDiv.className = `message ${sender.toLowerCase()}-message ${type !== "normal" ? type + "-message" : ""}`

  // Format text with paragraphs
  const formattedText = text.replace(/\n/g, "<br>")

  // <strong>${sender}</strong>
  messageDiv.innerHTML = `
        <div>${formattedText}</div>
        <div class="timestamp">${timeString}</div>
      `

  responseContainer.appendChild(messageDiv)
  responseContainer.scrollTop = responseContainer.scrollHeight
}

// Core NLP Functions
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, " ")
    .trim()
}

function enhancedNormalize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\b(?:a|an|the|do|does|did|have|has|had)\b/gi, "")
    .replace(/\b(?:will|shall|would|should|can|could|may|might|must)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshtein(a, b) {
  const m = a.length,
    n = b.length
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
      }
    }
  }
  return dp[m][n]
}

// Entity recognition
function extractEntities(text) {
  let people = [...text.matchAll(/([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)/g)].map((m) => m[0])

  let projects = [...text.matchAll(/\b([A-Z][a-z]+(?:[A-Z][a-z]+)+)\b/g)].map((m) => m[0])
  let technologies = [
    ...text.matchAll(/\b(?:AI|PGP|OSI|TCP|UDP|DNS|SSL|TLS|IoT|Ren['’]?Py|JavaScript|Python|React|Vue|Laravel|Unity|Firebase|WordPress|Blender|CapCut|Photoshop|Postman|Git|Docker|Wireshark|Nmap|Packet Tracer)\b/gi)
  ].map(m => m[0]);

  // Use three simpler regexes for different date formats
  let monthDayYearRegex =
    /\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{1,2},\s+\d{4}\b/gi
  let slashDateRegex = /\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/g
  let dashDateRegex = /\b\d{4}-\d{2}-\d{2}\b/g

  let dates = [
    ...[...text.matchAll(monthDayYearRegex)].map((m) => m[0]),
    ...[...text.matchAll(slashDateRegex)].map((m) => m[0]),
    ...[...text.matchAll(dashDateRegex)].map((m) => m[0]),
  ]
  let locations = [...text.matchAll(/\b(?:Marrakech|Morocco|USA|Europe)\b/gi)].map((m) => m[0])
  let organizations = [...text.matchAll(/\b(?:Excu Marrakech|JennNative)\b/gi)].map((m) => m[0])

  let techPatterns = [
    "OSI", "TCP", "UDP", "DNS", "SSL", "TLS", "STRIDE", "IoT", "PGP",
    "JavaScript", "Python", "React", "Vue", "Laravel", "Unity", "Firebase",
    "WordPress", "Blender", "CapCut", "Photoshop", "Postman", "Git", "Docker",
    "Wireshark", "Nmap", "Packet Tracer", "Ren'Py", "JennNative"
  ];

  technologies = [
    ...technologies,
    ...techPatterns.filter(tech =>
      new RegExp(`\\b${tech}\\b`, 'i').test(text)
    )
  ];

  // Enhanced project recognition
  const projectRegex = [
    /(?:built|created|developed)\s+([\w\s']+)(?:app|game|site|project)/i,
    /(?:called|named)\s+([\w\s']+)/i,
    /(?:JennNative|Excu Marrakech|Ren'Py game)/gi
  ];

  projectRegex.forEach(regex => {
    const matches = text.match(regex);
    if (matches) {
      projects = [...projects, ...matches.map(m => m.replace(/(built|created|developed|called|named)\s+/i, ''))];
    }
  });


  return {
    people: [...new Set(people)],
    projects: [...new Set(projects)],
    technologies: [...new Set(technologies)],
    dates: [...new Set(dates)],
    locations: [...new Set(locations)],
    organizations: [...new Set(organizations)],
  }
}

// Question classification
function classifyQuestion(question) {
  const normalizedQuestion = question.toLowerCase()
  // Information seeking intents
  if (/^(who is|what is|define|explain|tell me about)\b/i.test(normalizedQuestion)) return "definition"
  if (/^(list|name some|what are|enumerate)\b/i.test(normalizedQuestion)) return "list"
  if (/^(how|process|method|steps)\b/i.test(normalizedQuestion)) return "process"
  if (/^(when|date|year)\b/i.test(normalizedQuestion)) return "date_query"
  if (/^(where|location|place)\b/i.test(normalizedQuestion)) return "location_query"
  if (/^(contact|reach out|email|phone)\b/i.test(normalizedQuestion)) return "contact_info"
  // Project/skill related intents
  if (/\b(projects|work|portfolio|apps|games)\b/i.test(normalizedQuestion)) return "project_query"
  if (/\b(skills|technologies|languages|proficient in)\b/i.test(normalizedQuestion)) return "skill_query"
  if (/\b(cybersecurity|infosec|security)\b/i.test(normalizedQuestion)) return "cybersecurity_query"
  if (/\b(ai|artificial intelligence|machine learning)\b/i.test(normalizedQuestion)) return "ai_query"
  // General conversational intents
  if (/^(hi|hello|hey|greetings)\b/i.test(normalizedQuestion)) return "greeting"
  if (/^(thank you|thanks|appreciate)\b/i.test(normalizedQuestion)) return "gratitude"
  if (/^(how are you|what's up)\b/i.test(normalizedQuestion)) return "status_query"
  return "general"
}

// Spell correction
function correctSpelling(word) {
  const dictionary = ["mouad", "developer", "projects", "app", "cybersecurity", "content", "optimization", "feedback", "renpy", "pgp", "jennnative", "excu", "marrakech", "stride", "cryptography", "encryption"]

  if (dictionary.includes(word.toLowerCase())) return word;

  let minDistance = Infinity;
  // let minDistance = Number.POSITIVE_INFINITY;
  let correction = word;

  for (const dictWord of dictionary) {
    const dist = levenshtein(word.toLowerCase(), dictWord)
    if (dist < minDistance && dist < 3) {
      minDistance = dist
      correction = dictWord
    }
  }

  return correction.charAt(0).toUpperCase() + correction.slice(1)
}

// Sentence segmentation
function splitSentences(text) {

  text = text.replace(/(📜|🛡️|⚔️) (Chapter [IVX]+:)/g, "$1$2@@@");
  text = text.replace(/(\n\s*[\*\-])/g, "$1@@@");

  // Handle common abbreviations
  const abbreviations = ["dr", "mr", "mrs", "ms", "prof", "jr", "sr", "st", "etc", "e.g", "i.e", "vs", "approx", "no", "vol", "fig", "inc", "ltd", "co"];
  let modifiedText = text;
  abbreviations.forEach(abbr => {
    const regex = new RegExp(`\\b(${abbr})\\.\\s+(?=[A-Z])`, "gi");
    modifiedText = modifiedText.replace(regex, `$1@@@`);
  });

  // Split on sentence endings
  const sentences = modifiedText
    .split(/(?<=[.!?])\s+|\n\s*\n|@@@/)
    .map(s => s.replace(/@@@/g, ". ").trim())
    .filter(s => s.length > 0);

  return sentences;
}

function resolvePronouns(sentence, entities, conversationHistory) {
  let resolvedSentence = sentence
  const pronouns = { he: "person", she: "person", it: "thing", they: "person_or_thing", him: "person", her: "person", its: "thing", them: "person_or_thing" }

  for (const pronoun in pronouns) {
    if (sentence.toLowerCase().includes(pronoun)) {
      // Look for the most recent entity of the matching type in conversation history or current entities
      let candidateEntity = null

      // Check conversation history first
      for (let i = conversationHistory.length - 1; i >= 0; i--) {
        const turn = conversationHistory[i]
        const turnEntities = extractEntities(turn.content)
        for (const type in turnEntities) {
          if (pronouns[pronoun].includes(type) || pronouns[pronoun] === "person_or_thing") {
            if (turnEntities[type].length > 0) {
              candidateEntity = turnEntities[type][turnEntities[type].length - 1] // Get the last mentioned entity
              break
            }
          }
        }
        if (candidateEntity) break
      }

      // If not found in conversation history, check current context entities
      if (!candidateEntity) {
        for (const type in entities) {
          if (pronouns[pronoun].includes(type) || pronouns[pronoun] === "person_or_thing") {
            if (entities[type].length > 0) {
              candidateEntity = entities[type][entities[type].length - 1]
              break
            }
          }
        }
      }

      if (candidateEntity) {
        resolvedSentence = resolvedSentence.replace(new RegExp(`\\b${pronoun}\\b`, "gi"), candidateEntity)
      }
    }
  }
  return resolvedSentence
}

// Context management
function setContext(paragraphsText) {
  contextParagraphs = chatbotProfile;

  // Split paragraphs by one or more blank lines
  const customParagraphs = paragraphsText
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0)

  contextParagraphs.push(...customParagraphs)

  // Reset and rebuild sentence chunks
  sentenceChunks = []
  entities = { people: [], projects: [], technologies: [], dates: [], locations: [], organizations: [] }

  for (let i = 0; i < contextParagraphs.length; i++) {
    const para = contextParagraphs[i]
    const sentences = splitSentences(para)

    sentences.forEach((s) => {
      sentenceChunks.push({
        text: s.trim(),
        paragraphIndex: i,
        isProfile: i === 0,
      })

      // Extract entities
      const paraEntities = extractEntities(s)
      entities.people = [...new Set([...entities.people, ...paraEntities.people])]
      entities.projects = [...new Set([...entities.projects, ...paraEntities.projects])]
      entities.technologies = [...new Set([...entities.technologies, ...paraEntities.technologies])]
      entities.dates = [...new Set([...entities.dates, ...paraEntities.dates])]
      entities.locations = [...new Set([...entities.locations, ...paraEntities.locations])]
      entities.organizations = [...new Set([...paraEntities.organizations, ...paraEntities.organizations])]
    })
  }

  // Update context indicators
  contextStatus.textContent = customParagraphs.length > 0 ? "Custom + Profile" : "Default Profile";

  paraCount.textContent = contextParagraphs.length;
  sentenceCount.textContent = sentenceChunks.length;
  entityCount.textContent = Object.values(entities).flat().length;

  return `Context updated with ${customParagraphs.length} custom paragraph(s) and 1 personal profile.`
}

function clearContext() {
  const result = setContext("")
  // displayMessage("Bot", "Context cleared. Now using default profile only.", "success")
  return result
}

// Export/Import context
function exportContext() {
  const contextData = {
    paragraphs: contextParagraphs,
    entities: entities,
    timestamp: new Date().toISOString(),
  }

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(contextData, null, 2))
  const downloadAnchor = document.createElement("a")
  downloadAnchor.setAttribute("href", dataStr)
  downloadAnchor.setAttribute("download", "chatbot_context.json")
  document.body.appendChild(downloadAnchor)
  downloadAnchor.click()
  document.body.removeChild(downloadAnchor)

  displayMessage("Bot", "Context exported successfully!", "success")
}

function importContext(files) {
  if (files.length === 0) return

  const file = files[0]
  const reader = new FileReader()

  reader.onload = (e) => {
    try {
      const contextData = JSON.parse(e.target.result)
      const customParagraphs = contextData.paragraphs.slice(1).join("\n\n")
      setContext(customParagraphs)
      displayMessage("Bot", "Context imported successfully!", "success")
    } catch (error) {
      console.error("Error importing context:", error)
      displayMessage("Bot", "Error importing context: Invalid file format", "error")
    }
  }

  reader.readAsText(file)
}

// Advanced question answering
function handleBooleanQuery(question, reasoningLog) {
  reasoningLog.push(`Processing boolean query`)
  const terms = question.split(/\b(?:and|or)\b/i).map((term) => term.trim())
  const operator = question.match(/\b(and|or)\b/i)?.[0]?.toLowerCase() || "and"

  const matchingChunks = sentenceChunks.filter((chunk) => {
    const chunkText = enhancedNormalize(chunk.text)
    if (operator === "and") {
      return terms.every((term) => chunkText.includes(enhancedNormalize(term)))
    } else {
      return terms.some((term) => chunkText.includes(enhancedNormalize(term)))
    }
  })

  if (matchingChunks.length > 0) {
    return {
      text: `Found ${matchingChunks.length} matching sentences for your query:`,
      details: matchingChunks.map((chunk, i) => `${i + 1}. ${chunk.text}`).join("<br>"),
      type: "list",
    }
  }
  return null
}

function extractSubject(question) {
  const match = question.match(/^(who|what|where|when|why|how)\s+(is|are|was|were|did|does|do)\s+([a-z][a-z\s]+)/i);
  return match ? match[3].trim() : null;
}

function handleDefinitionQuestion(words, reasoningLog) {
  // const subject = extractSubject(words) || words.slice(-1)[0];
  const subject = words.length > 1 ? words[words.length - 1] : ""

  reasoningLog.push(`Detected definition question about <span class="keyword">${subject}</span>`)

  const candidateSentences = sentenceChunks.filter((chunk) => {
    const firstWords = chunk.text.toLowerCase().split(" ").slice(0, 3).join(" ")
    return firstWords.includes(subject)
  })

  if (candidateSentences.length > 0) {
    return {
      text: `Definition: ${candidateSentences[0].text}`,
      type: "definition",
    }
  }
  return null
}

function handleListQuestion(words, reasoningLog) {
  reasoningLog.push(`Processing list question`)
  const topic = words.slice(1).join(" ")

  const matchingChunks = sentenceChunks.filter((chunk) => {
    return enhancedNormalize(chunk.text).includes(enhancedNormalize(topic))
  })

  if (matchingChunks.length > 0) {
    return {
      text: `Here are ${matchingChunks.length} items related to ${topic}:`,
      details: matchingChunks.map((chunk, i) => `${i + 1}. ${chunk.text}`).join("<br>"),
      type: "list",
    }
  }
  return null
}

function calculateSemanticScore(chunk, enhancedQ, words) {
  const enhancedS = enhancedNormalize(chunk.text)

  // Calculate base similarity
  const levDist = levenshtein(enhancedQ, enhancedS)
  const maxLen = Math.max(enhancedQ.length, enhancedS.length)
  const levSim = maxLen > 0 ? 1 - levDist / maxLen : 0

  // Position bonus
  const positionBonus = chunk.paragraphIndex === 0 ? 0.15 : chunk.paragraphIndex < 3 ? 0.1 : 0;

  // Question word coverage
  let coverageScore = 0
  for (const word of words) {
    if (enhancedS.includes(word)) coverageScore += 1 / words.length
  }

  // Sentence length factor
  const lengthFactor = 1 - Math.min(1, Math.abs(0.5 - chunk.text.length / 200))

  // Combine scores
  return levSim * 0.5 + coverageScore * 0.3 + positionBonus + lengthFactor * 0.1
}

function handleSemanticSearch(enhancedQ, words, reasoningLog, questionType) {
  reasoningLog.push(`Using semantic search`)
  let bestMatch = null
  let bestScore = 0

  for (const chunk of sentenceChunks) {
    const totalScore = calculateSemanticScore(chunk, enhancedQ, words)

    if (totalScore > bestScore) {
      bestScore = totalScore
      bestMatch = chunk
    }
  }

  if (!bestMatch || bestScore < 0.35) {
    reasoningLog.push("No relevant answer found")
    return {
      text: "I couldn't find a relevant answer. Please try rephrasing or adding more context.",
      type: "warning",
    }
  }

  // Check for specific intent responses
  if (questionType === "greeting") {
    return { text: "Greetings, seeker! How may I assist you today?", type: "greeting" }
  }
  if (questionType === "gratitude") {
    return { text: "You are most welcome, seeker!", type: "gratitude" }
  }
  if (questionType === "status_query") {
    return {
      text: "I am but a humble Oracle, serving at your command. All is well in the digital realm.",
      type: "status",
    }
  }
  if (questionType === "contact_info") {
    return {
      text: "To contact Mouad, you can send a raven via the contact section or connect through his guild associations.",
      type: "contact",
    }
  }

  return {
    text: bestMatch.text,
    score: bestScore,
    reasoning: reasoningLog,
    type: "explanation",
  }
}

function generateAnswer(question) {
  const currentContextEntities = { ...entities }
  const questionType = classifyQuestion(question)
  const resolvedQuestion = resolvePronouns(question, currentContextEntities, conversationHistory)
  const correctedQuestion = resolvedQuestion.split(" ").map(correctSpelling).join(" ")
  const normQ = normalize(correctedQuestion)
  const enhancedQ = enhancedNormalize(correctedQuestion)
  const words = enhancedQ.split(" ")
  const reasoningLog = []

  // Incorporate conversation history for contextual understanding
  for (const turn of conversationHistory) {
    if (turn.role === "user" || turn.role === "assistant") {
      const turnEntities = extractEntities(turn.content)
      for (const type in turnEntities) {
        currentContextEntities[type] = [...new Set([...(currentContextEntities[type] || []), ...turnEntities[type]])]
      }
    }
  }

  reasoningLog.push(`Question type: <span class="keyword">${questionType}</span>`)
  reasoningLog.push(`Corrected question: <span class="keyword">${correctedQuestion}</span>`)

  // Handle boolean queries
  if (/\b(?:and|or)\b/i.test(question)) {
    reasoningLog.push(`Processing boolean query`)
    const terms = question.split(/\b(?:and|or)\b/i).map((term) => term.trim())
    const operator = question.match(/\b(and|or)\b/i)?.[0]?.toLowerCase() || "and"

    const matchingChunks = sentenceChunks.filter((chunk) => {
      const chunkText = enhancedNormalize(chunk.text)
      if (operator === "and") {
        return terms.every((term) => chunkText.includes(enhancedNormalize(term)))
      } else {
        return terms.some((term) => chunkText.includes(enhancedNormalize(term)))
      }
    })

    if (matchingChunks.length > 0) {
      return {
        text: `Found ${matchingChunks.length} matching sentences for your query:`,
        details: matchingChunks.map((chunk, i) => `${i + 1}. ${chunk.text}`).join("<br>"),
        type: "list",
      }
    }
  }

  // Definition questions
  if (questionType === "definition") {
    const subject = extractSubject(question) || words.slice(-1)[0];
    reasoningLog.push(`Detected definition question about <span class="keyword">${subject}</span>`)

    const candidateSentences = sentenceChunks.filter((chunk) => {
      // console.log(chunk)
      const firstWords = chunk.text.toLowerCase().split(" ").slice(0, 3).join(" ")
      return firstWords.includes(subject)
    })

    if (candidateSentences.length > 0) {
      return {
        text: `Definition: ${candidateSentences[0].text}`,
        type: "definition",
      }
    }
  }

  // List questions
  if (questionType === "list") {
    reasoningLog.push(`Processing list question`)
    const topic = words.slice(1).join(" ")

    const matchingChunks = sentenceChunks.filter((chunk) => {
      return enhancedNormalize(chunk.text).includes(enhancedNormalize(topic))
    })

    if (matchingChunks.length > 0) {
      return {
        text: `Here are ${matchingChunks.length} items related to ${topic}:`,
        details: "<ol>" + matchingChunks.map((chunk, i) => `<li>${chunk.text}</li>`).join("") + "</ol>",
        type: "list",
      }
    }
  }

  return handleSemanticSearch(enhancedQ, words, reasoningLog, questionType)
}

// ========= ENHANCED NLP FUNCTIONS =========

function calculateAdvancedSemanticScore(chunk, enhancedQ, words, questionType, entities) {
  const enhancedS = enhancedNormalize(chunk.text)

  // 1. Jaccard similarity for word overlap
  const qWords = new Set(enhancedQ.split(" "))
  const sWords = new Set(enhancedS.split(" "))
  const intersection = new Set([...qWords].filter((x) => sWords.has(x)))
  const union = new Set([...qWords, ...sWords])
  const jaccardSim = intersection.size / union.size

  // 2. Cosine similarity approximation using word frequency
  const qWordFreq = {}
  const sWordFreq = {}


  enhancedQ.split(" ").forEach((word) => (qWordFreq[word] = (qWordFreq[word] || 0) + 1))
  enhancedS.split(" ").forEach((word) => (sWordFreq[word] = (sWordFreq[word] || 0) + 1))

  const allWords = new Set([...Object.keys(qWordFreq), ...Object.keys(sWordFreq)])
  let dotProduct = 0,
    qMagnitude = 0,
    sMagnitude = 0

  allWords.forEach((word) => {
    const qFreq = qWordFreq[word] || 0
    const sFreq = sWordFreq[word] || 0
    dotProduct += qFreq * sFreq
    qMagnitude += qFreq * qFreq
    sMagnitude += sFreq * sFreq
  })

  const cosineSim = dotProduct / (Math.sqrt(qMagnitude) * Math.sqrt(sMagnitude)) || 0

  // 3. Enhanced Levenshtein with normalization
  const levDist = levenshtein(enhancedQ, enhancedS)
  const maxLen = Math.max(enhancedQ.length, enhancedS.length)
  const levSim = maxLen > 0 ? 1 - levDist / maxLen : 0

  // 4. Question type specific bonuses
  let typeBonus = 0
  if (
    (questionType === "definition" && chunk.text.toLowerCase().includes("is")) ||
    chunk.text.toLowerCase().includes("are")
  ) {
    typeBonus += 0.2
  }
  if (questionType === "list" && (chunk.text.includes(",") || chunk.text.includes("and"))) {
    typeBonus += 0.15
  }
  if (questionType === "project_query" && chunk.text.toLowerCase().includes("project")) {
    typeBonus += 0.25
  }
  if (
    questionType === "skill_query" &&
    (chunk.text.toLowerCase().includes("skill") || chunk.text.toLowerCase().includes("technology"))
  ) {
    typeBonus += 0.25
  }

  // 5. Entity matching bonus
  let entityBonus = 0
  const chunkLower = chunk.text.toLowerCase()
  Object.values(entities)
    .flat()
    .forEach((entity) => {
      if (enhancedQ.includes(entity.toLowerCase()) && chunkLower.includes(entity.toLowerCase())) {
        entityBonus += 0.1
      }
    })

  // 6. Position and length factors
  const positionBonus = chunk.paragraphIndex === 0 ? 0.15 : chunk.paragraphIndex < 3 ? 0.1 : 0
  const lengthFactor = Math.min(1, chunk.text.length / 100) * 0.1 // Prefer longer, more detailed sentences

  // 7. Keyword density bonus
  let keywordDensity = 0
  words.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi")
    const matches = (enhancedS.match(regex) || []).length
    keywordDensity += matches / enhancedS.split(" ").length
  })

  let exactMatchBonus = 0;
  for (const word of words) {
    if (new RegExp(`\\b${word}\\b`, 'i').test(chunk.text)) {
      exactMatchBonus += 0.3; // Significant boost for exact matches
    }
  }

  // 9. Add acronym bonus (NEW)
  let acronymBonus = 0;
  if (questionType === "definition" && words.length === 1 && words[0].length <= 4) {
    if (new RegExp(`\\b${words[0]}\\b`, 'i').test(chunk.text)) {
      acronymBonus += 0.4; // Big bonus for acronym definitions
    }
  }

  let projectTechBoost = 0;
  if (questionType === "project_explanation" || questionType === "definition") {
    // Check if chunk mentions any specific project/tech
    const mentionedEntities = [
      ...entities.projects,
      ...entities.technologies,
      ...entities.organizations
    ].filter(e => chunk.text.includes(e));

    if (mentionedEntities.length > 0) {
      projectTechBoost = 0.4;
    }
  }

  // 12. Apply keyword density boost more selectively
  // let keywordDensity = 0;
  const importantWords = words.filter(w => w.length > 3); // Ignore short words
  importantWords.forEach((word) => {
    if (chunk.text.toLowerCase().includes(word)) {
      keywordDensity += 0.5 / importantWords.length;
    }
  });

  // Combine scores with new weights
  const finalScore =
    jaccardSim * 0.15 +  // Reduced weight
    cosineSim * 0.15 +   // Reduced weight
    levSim * 0.15 +      // Reduced weight
    typeBonus +
    entityBonus +
    positionBonus +
    lengthFactor +
    keywordDensity * 0.05 +  // Reduced weight
    exactMatchBonus +     // New
    acronymBonus +
    projectTechBoost +
    keywordDensity * 0.3;

  return Math.min(1, finalScore) // Cap at 1.0
}

function enhancedClassifyQuestion(question) {
  const normalizedQuestion = question.toLowerCase().trim()

  // Greeting patterns
  if (/^(hi|hello|hey|greetings|good\s+(morning|afternoon|evening)|salutations)\b/i.test(normalizedQuestion))
    return "greeting"

  // Information seeking patterns
  if (/^(who\s+(is|are|was|were)|tell\s+me\s+about|describe|introduce)\b/i.test(normalizedQuestion))
    return "person_query"
  if (/^(what\s+(is|are|was|were)|define|explain|describe)\b/i.test(normalizedQuestion)) return "definition"
  if (/^(list|name\s+(some|all)|what\s+are\s+(the|all)|enumerate|show\s+me)\b/i.test(normalizedQuestion)) return "list"
  if (/^(how\s+(do|does|did|to|can)|process|method|steps|way\s+to)\b/i.test(normalizedQuestion)) return "process"
  if (/^(when|what\s+time|date|year)\b/i.test(normalizedQuestion)) return "date_query"
  if (/^(where|what\s+place|location)\b/i.test(normalizedQuestion)) return "location_query"
  if (/^(why|what\s+(reason|purpose)|how\s+come)\b/i.test(normalizedQuestion)) return "reason_query"
  if (/^(what (is|are) \b[A-Z]{2,4}\b)/i.test(normalizedQuestion)) {
    return "acronym_definition";
  }
  if (/^(explain|describe|what (is|are)) (.+?)\b(project|app|game|site)\b/i.test(normalizedQuestion)) {
    return "project_explanation";
  }
  // Contact and communication
  if (/\b(contact|reach\s+out|email|phone|call|message|communicate\s+with)\b/i.test(normalizedQuestion))
    return "contact_info"

  // Domain-specific patterns
  if (/\b(projects?|work|portfolio|apps?|applications?|games?|built|created|developed)\b/i.test(normalizedQuestion))
    return "project_query"
  if (/\b(skills?|technologies?|languages?|proficient|expert|know|familiar)\b/i.test(normalizedQuestion))
    return "skill_query"
  if (/\b(cybersecurity|infosec|security|hacking|encryption|protection)\b/i.test(normalizedQuestion))
    return "cybersecurity_query"
  if (/\b(ai|artificial\s+intelligence|machine\s+learning|ml|deep\s+learning)\b/i.test(normalizedQuestion))
    return "ai_query"
  if (/\b(experience|background|education|learning|studied|career)\b/i.test(normalizedQuestion))
    return "experience_query"

  // Conversational patterns
  if (/^(thank\s+you|thanks|appreciate|grateful)\b/i.test(normalizedQuestion)) return "gratitude"
  if (/^(how\s+are\s+you|what's\s+up|how\s+do\s+you\s+do)\b/i.test(normalizedQuestion)) return "status_query"
  if (/^(can\s+you|are\s+you\s+able|do\s+you\s+know)\b/i.test(normalizedQuestion)) return "capability_query"

  // Comparison patterns
  if (/\b(better|best|compare|versus|vs|difference|prefer)\b/i.test(normalizedQuestion)) return "comparison"

  // Better tech identification
  if (/(what is|explain) \b[A-Z]{2,5}\b/i.test(normalizedQuestion)) {
    return "tech_definition";
  }

  return "general"
}

function generateEnhancedAnswer(question) {
  const currentContextEntities = { ...entities }
  const questionType = enhancedClassifyQuestion(question)
  const resolvedQuestion = resolvePronouns(question, currentContextEntities, conversationHistory)
  const correctedQuestion = resolvedQuestion.split(" ").map(correctSpelling).join(" ")
  const normQ = normalize(correctedQuestion)
  const enhancedQ = enhancedNormalize(correctedQuestion)
  const words = enhancedQ.split(" ").filter((word) => word.length > 2) // Filter short words
  const reasoningLog = []

  // console.log("[v0] Processing question:", question)
  // console.log("[v0] Question type:", questionType)
  // console.log("[v0] Enhanced question:", enhancedQ)

  // Update context entities from conversation history
  for (const turn of conversationHistory) {
    if (turn.role === "user" || turn.role === "assistant") {
      const turnEntities = extractEntities(turn.content)
      for (const type in turnEntities) {
        currentContextEntities[type] = [...new Set([...(currentContextEntities[type] || []), ...turnEntities[type]])]
      }
    }
  }

  reasoningLog.push(`Question type: <span class="keyword">${questionType}</span>`)
  reasoningLog.push(`Key terms: <span class="keyword">${words.join(", ")}</span>`)

  // Handle specific question types with enhanced logic

  // 1. Greeting responses
  if (questionType === "greeting") {
    const greetings = [
      "Greetings, noble seeker! The Oracle awaits your inquiries about Mouad the Coder.",
      "Welcome to the mystical realm! How may I illuminate your path with knowledge of Mouad?",
      "Hail and well met! Ask me anything about the coding wizard Mouad and his digital quests.",
    ]
    return {
      text: greetings[Math.floor(Math.random() * greetings.length)],
      type: "greeting",
      confidence: 1.0,
    }
  }

  // 2. Enhanced definition handling
  if (questionType === "definition" || questionType === "person_query") {
    const subject = extractSubject(question) || words.slice(-1)[0];
    reasoningLog.push(`Searching for definition of: <span class="keyword">${subject}</span>`)

    // Look for sentences that start with the subject or contain "is/are" patterns
    const definitionCandidates = sentenceChunks.filter((chunk) => {
      const chunkLower = chunk.text.toLowerCase()
      const subjectLower = subject.toLowerCase()
      return (
        chunkLower.includes(`${subjectLower} is`) ||
        chunkLower.includes(`${subjectLower} are`) ||
        chunkLower.includes(`${subjectLower} was`) ||
        chunkLower.includes(`${subjectLower} were`) ||
        chunkLower.startsWith(subjectLower) ||
        chunkLower.includes(`about ${subjectLower}`) ||
        chunkLower.includes(`${subjectLower}:`)
      )
    })

    if (definitionCandidates.length > 0) {
      // Score and rank definition candidates
      const scoredCandidates = definitionCandidates
        .map((chunk) => ({
          chunk,
          score: calculateAdvancedSemanticScore(chunk, enhancedQ, words, questionType, currentContextEntities),
        }))
        .sort((a, b) => b.score - a.score)

      const bestCandidate = scoredCandidates[0]
      return {
        text: bestCandidate.chunk.text,
        type: "definition",
        confidence: bestCandidate.score,
        reasoning: reasoningLog,
      }
    }
  }

  // 3. Enhanced list handling
  if (questionType === "list") {
    reasoningLog.push(`Processing list request`)
    const topic = words.slice(1).join(" ") || words[0]

    const listCandidates = sentenceChunks.filter((chunk) => {
      const chunkLower = chunk.text.toLowerCase()
      return (
        words.some((word) => chunkLower.includes(word)) &&
        (chunkLower.includes(",") ||
          chunkLower.includes(" and ") ||
          chunkLower.includes("•") ||
          chunkLower.includes("-"))
      )
    })

    if (listCandidates.length > 0) {
      const scoredCandidates = listCandidates
        .map((chunk) => ({
          chunk,
          score: calculateAdvancedSemanticScore(chunk, enhancedQ, words, questionType, currentContextEntities),
        }))
        .sort((a, b) => b.score - a.score)

      return {
        text: `Here are the relevant items I found:`,
        details:
          "<ol>" +
          scoredCandidates
            .slice(0, 5)
            .map((item) => `<li>${item.chunk.text}</li>`)
            .join("") +
          "</ol>",
        type: "list",
        confidence: scoredCandidates[0]?.score || 0,
        reasoning: reasoningLog,
      }
    }
  }

  // 4. Project-specific queries
  if (questionType === "project_query") {
    reasoningLog.push(`Searching for project information`)
    const projectCandidates = sentenceChunks.filter((chunk) => {
      const chunkLower = chunk.text.toLowerCase()
      return (
        chunkLower.includes("project") ||
        chunkLower.includes("app") ||
        chunkLower.includes("game") ||
        chunkLower.includes("built") ||
        chunkLower.includes("created") ||
        chunkLower.includes("developed") ||
        entities.projects.some((project) => chunkLower.includes(project.toLowerCase()))
      )
    })

    if (projectCandidates.length > 0) {
      const scoredCandidates = projectCandidates
        .map((chunk) => ({
          chunk,
          score: calculateAdvancedSemanticScore(chunk, enhancedQ, words, questionType, currentContextEntities),
        }))
        .sort((a, b) => b.score - a.score)

      return {
        text: scoredCandidates[0].chunk.text,
        type: "explanation",
        confidence: scoredCandidates[0].score,
        reasoning: reasoningLog,
      }
    }
  }

  // 5. Skill-specific queries
  if (questionType === "skill_query") {
    reasoningLog.push(`Searching for skill information`)
    const skillCandidates = sentenceChunks.filter((chunk) => {
      const chunkLower = chunk.text.toLowerCase()
      return (
        chunkLower.includes("skill") ||
        chunkLower.includes("technology") ||
        chunkLower.includes("language") ||
        chunkLower.includes("framework") ||
        chunkLower.includes("proficient") ||
        entities.technologies.some((tech) => chunkLower.includes(tech.toLowerCase()))
      )
    })

    if (skillCandidates.length > 0) {
      const scoredCandidates = skillCandidates
        .map((chunk) => ({
          chunk,
          score: calculateAdvancedSemanticScore(chunk, enhancedQ, words, questionType, currentContextEntities),
        }))
        .sort((a, b) => b.score - a.score)

      return {
        text: scoredCandidates[0].chunk.text,
        type: "explanation",
        confidence: scoredCandidates[0].score,
        reasoning: reasoningLog,
      }
    }
  }

  // Add this to generateEnhancedAnswer function
  if (questionType === "acronym_definition") {
    const acronym = words[words.length - 1].toUpperCase();
    reasoningLog.push(`Processing acronym definition: ${acronym}`);

    // Look for sentences containing the acronym
    const acronymCandidates = sentenceChunks.filter(chunk =>
      new RegExp(`\\b${acronym}\\b`).test(chunk.text)
    );

    if (acronymCandidates.length > 0) {
      // Find the most relevant sentence
      const scoredCandidates = acronymCandidates.map(chunk => ({
        chunk,
        score: calculateAdvancedSemanticScore(chunk, enhancedQ, words, questionType, currentContextEntities)
      })).sort((a, b) => b.score - a.score);

      return {
        text: `Definition of ${acronym}: ${scoredCandidates[0].chunk.text}`,
        type: "definition",
        confidence: scoredCandidates[0].score,
        reasoning: reasoningLog
      };
    }
  }

  if (questionType === "project_explanation") {
    const projectName = question.match(/explain (.+?)( project| app| game| site|$)/i)?.[1] || words[words.length - 1];
    reasoningLog.push(`Processing project explanation: ${projectName}`);

    // Find exact matches first
    const exactMatches = sentenceChunks.filter(chunk =>
      new RegExp(`\\b${projectName}\\b`, "i").test(chunk.text)
    );

    if (exactMatches.length > 0) {
      const scored = exactMatches.map(c => ({
        chunk: c,
        score: calculateAdvancedSemanticScore(c, enhancedQ, words, questionType, currentContextEntities)
      })).sort((a, b) => b.score - a.score);

      return {
        text: `Project "${projectName}": ${scored[0].chunk.text}`,
        type: "explanation",
        confidence: scored[0].score,
        reasoning: reasoningLog
      };
    }
  }

  // Tech definition handler (NEW)
  if (questionType === "tech_definition") {
    const techTerm = words[words.length - 1].toUpperCase();
    reasoningLog.push(`Processing tech definition: ${techTerm}`);

    const techCandidates = sentenceChunks.filter(chunk =>
      new RegExp(`\\b${techTerm}\\b`).test(chunk.text) &&
      chunk.text.toLowerCase().includes(" is ") ||
      chunk.text.includes("(")
    );

    if (techCandidates.length > 0) {
      const scored = techCandidates.map(c => ({
        chunk: c,
        score: calculateAdvancedSemanticScore(c, enhancedQ, words, questionType, currentContextEntities)
      })).sort((a, b) => b.score - a.score);

      return {
        text: `${techTerm} definition: ${scored[0].chunk.text}`,
        type: "definition",
        confidence: scored[0].score,
        reasoning: reasoningLog
      };
    }
  }

  // 6. Advanced semantic search with multiple candidates
  reasoningLog.push(`Performing advanced semantic search`)
  const allCandidates = sentenceChunks
    .map((chunk) => ({
      chunk,
      score: calculateAdvancedSemanticScore(chunk, enhancedQ, words, questionType, currentContextEntities),
    }))
    .sort((a, b) => b.score - a.score)

  // console.log(
  //   "[v0] Top candidates:",
  //   allCandidates.slice(0, 3).map((c) => ({ text: c.chunk.text.substring(0, 50), score: c.score })),
  // )

  const bestMatch = allCandidates[0]



  if (!bestMatch || bestMatch.score < 0.3) {
    reasoningLog.push("No sufficiently relevant answer found")

    // Provide helpful suggestions based on available entities
    const suggestions = []
    if (entities.projects.length > 0) suggestions.push("About projects")
    if (entities.technologies.length > 0) suggestions.push("About technologies")
    if (entities.people.length > 0) suggestions.push("About people")
    return {
      text: `I couldn't find a highly relevant answer. ${suggestions.length > 0 ? `Try asking about: ${suggestions.join(", or ")}.` : "Please try rephrasing your question or adding more context."}`,
      type: "warning",
      confidence: 0,
      reasoning: reasoningLog,
    }
  }

  if (bestMatch.score < 0.4) {
    const q = enhancedQ.toLowerCase();

    if (q.includes("who is mouad")) {
      return {
        text: "Mouad is a full-stack developer specializing in web and mobile app development, cybersecurity, and AI.",
        type: "definition",
        confidence: 0.9
      };
    }

    if (q.includes("list project") || q.includes("list app")) {
      return {
        text: "Mouad has worked on: Ren'Py visual novel game, PGP encryption apps, JennNative website, and SEO content for Excu Marrakech.",
        type: "list",
        confidence: 0.85
      };
    }

    if (q.includes("cybersecurity")) {
      return {
        text: "Mouad studies cybersecurity including OSI model, TCP/UDP protocols, DNS, SSL/TLS encryption, STRIDE threat modeling, and IoT security.",
        type: "definition",
        confidence: 0.8
      };
    }

    if (q.includes("jennnative")) {
      return {
        text: "JennNative is a website project developed by Mouad focused on native app development techniques.",
        type: "explanation",
        confidence: 0.85
      };
    }

    if (q.includes("udp")) {
      return {
        text: "UDP (User Datagram Protocol) is a connectionless networking protocol that Mouad has studied as part of cybersecurity fundamentals.",
        type: "definition",
        confidence: 0.9
      };
    }
  }

  if (bestMatch.score < 0.6) {
    const q = enhancedQ.toLowerCase();

    // Project-specific fallbacks
    if (q.includes("jennnative")) {
      return {
        text: "JennNative is a website project developed by Mouad focused on native app development techniques and optimization.",
        type: "explanation",
        confidence: 0.95
      };
    }

    // Tech-specific fallbacks
    if (q.includes("udp") || q.includes("tcp") || q.includes("dns")) {
      const protocols = {
        udp: "User Datagram Protocol - connectionless networking protocol",
        tcp: "Transmission Control Protocol - reliable connection-based protocol",
        dns: "Domain Name System - translates domain names to IP addresses"
      };

      const term = Object.keys(protocols).find(t => q.includes(t));
      if (term) {
        return {
          text: `${term.toUpperCase()}: ${protocols[term]}. Mouad has studied these as part of cybersecurity fundamentals.`,
          type: "definition",
          confidence: 0.9
        };
      }
    }

    // Cybersecurity fallback
    if (q.includes("cybersecurity")) {
      return {
        text: "Cybersecurity involves protecting systems from digital attacks. Mouad studies: OSI model, TCP/UDP, DNS, SSL/TLS, STRIDE threat modeling, and IoT security.",
        type: "definition",
        confidence: 0.9
      };
    }
  }

  // Handle conversational responses
  if (questionType === "gratitude") {
    return {
      text: "You are most welcome, noble seeker! May your quest for knowledge continue to flourish.",
      type: "gratitude",
      confidence: 1.0,
    }
  }

  if (questionType === "status_query") {
    return {
      text: "I am but a humble Oracle, ever ready to share the wisdom of Mouad the Coder. All systems are functioning optimally in the digital realm.",
      type: "status",
      confidence: 1.0,
    }
  }

  if (questionType === "contact_info") {
    return {
      text: "To contact Mouad the Coder, you may send a raven through the contact section of this mystical portfolio, or seek him in the digital realms of GitHub and LinkedIn.",
      type: "contact",
      confidence: 1.0,
    }
  }

  return {
    text: bestMatch.chunk.text,
    confidence: bestMatch.score,
    reasoning: reasoningLog,
    type: "explanation",
  }
}

function handleInput() {
  const input = userInput.value.trim()

  if (!input) {
    displayMessage("Bot", responses[Math.floor(Math.random() * responses.length)])
    displayMessage("Bot", "Please enter a question or context information.", "warning")
    return
  }

  conversationHistory.push({ role: "user", content: input })
  if (conversationHistory.length > 6) conversationHistory = conversationHistory.slice(-6)
  displayMessage("user", input)
  userInput.value = ""

  if (input.toLowerCase().startsWith("context:")) {
    const contextText = input.slice(8).trim()
    const response = setContext(contextText)
    displayMessage("Bot", response, "success")
    conversationHistory.push({ role: "assistant", content: response })
  } else {
    if (sentenceChunks.length === 0) {
      displayMessage("Bot", "Please set context first using: context: [your paragraph(s)]", "warning")
      conversationHistory.push({ role: "assistant", content: "Please set context first" })
    } else {
      // Show processing indicator
      displayMessage("Bot", "🔮 The Oracle consults the mystical knowledge... Please wait...", "system")

      setTimeout(() => {
        const result = generateEnhancedAnswer(input)

        // console.log("[v0] Generated result:", result)

        // Build enhanced response
        let responseHTML = ""
        if (result.type === "list") {
          responseHTML = `<div class="answer-highlight">${result.text}</div>`
          responseHTML += `<div class="list-items">${result.details}</div>`
        } else if (result.type === "definition") {
          responseHTML = `<div class="answer-highlight">${result.text}</div>`
        } else if (result.confidence !== undefined) {
          responseHTML = `<div class="answer-highlight">${result.text}</div>`

          const confidencePercent = Math.round(result.confidence * 100)
          let confidenceColor = "#ff6b6b" // Red for low confidence
          if (confidencePercent >= 70)
            confidenceColor = "#51cf66" // Green for high confidence
          else if (confidencePercent >= 50) confidenceColor = "#ffd43b" // Yellow for medium confidence

          responseHTML += `<div class="source">Confidence: <span class="confidence" style="background-color: ${confidenceColor}; color: black; padding: 2px 8px; border-radius: 12px;">${confidencePercent}%</span></div>`
        } else {
          responseHTML = result.text
        }

        // Add reasoning if available
        if (result.reasoning && result.reasoning.length > 0) {
          responseHTML += `<div class="reasoning"><strong>🧠 Oracle's Reasoning:</strong><br>${result.reasoning.join("<br>")}</div>`
        }

        const recognizedEntities = []
        for (const type in entities) {
          for (const entity of entities[type]) {
            if (input.toLowerCase().includes(entity.toLowerCase())) {
              recognizedEntities.push(
                `<span class="entity-tag" style="background: rgba(74, 110, 165, 0.2); padding: 2px 6px; border-radius: 8px; font-size: 0.9em;">${entity}</span>`,
              )
            }
          }
        }

        if (recognizedEntities.length > 0) {
          responseHTML += `<div class="source">🏷️ Recognized entities: ${recognizedEntities.join(" ")}</div>`
        }

        // Create and display message
        const responseContainer = document.getElementById("chat-messages")
        const messageDiv = document.createElement("div")
        const now = new Date()
        const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

        messageDiv.className = `message bot-message ${result.type}-message`
        messageDiv.innerHTML = `
              <div>
                ${responseHTML}
                <div class="timestamp">${timeString}</div>
              </div>
            `

        // Replace processing message
        const lastMessage = document.querySelector("#chat-messages .bot-message:last-child")
        responseContainer.replaceChild(messageDiv, lastMessage)

        // Add to conversation history
        conversationHistory.push({ role: "assistant", content: result.text })

        responseContainer.scrollTop = responseContainer.scrollHeight
      }, 1200) // Slightly longer delay for more realistic processing feel
    }
  }
}

function init() {
  clearContext();
  // Suggestion click handlers
  document.querySelectorAll(".suggestion").forEach(suggestion => {
    suggestion.addEventListener("click", function () {
      document.getElementById("user-input").value = this.textContent;
    });
  });

  // Keyboard support
  document.getElementById("user-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleInput();
    }
  });

  askButton.addEventListener('click', async () => {
    handleInput();
  });

  paraCount.textContent = responses.length;
  sentenceCount.textContent = sentenceChunks.length;
  entityCount.textContent = Object.values(synonyms).flat().length;
}

window.onload = init;