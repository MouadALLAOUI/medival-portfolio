const chatContainers = document.querySelectorAll('.chat-container');
const chatHeaders = document.querySelectorAll('.chat-header');
const chatInputContainers = document.querySelectorAll('.chat-input');
const askButton = document.getElementById('askButton');
const userInput = document.getElementById('user-input');
const responseContainer = document.getElementById('chat-messages');
const suggestions = document.getElementById('suggestions');
const contextIndicatorContainers = document.querySelectorAll('.context-indicator');

// ========= Define Default Profile Context =========
const personalProfile = `
  Mouad is a developer who works on severaprojects including app developmentcybersecurity, content optimization, and AI.
  He builds high-quality apps, learns netechnologies, and values practical, honesfeedback.
  He has worked on a Ren'Py game, PGP apps, site called JennNative, and travel-relateSEO content for Excu Marrakech.
  Mouad also studies cybersecurity (OSI, TCUDP, DNS, SSL/TLS, STRIDE, IoT) ancryptography (asymmetric encryption, PGPetc).
`;
const personalProfile2 = `
  🛡️ Chapter I: Origins of Mouad the Coder
    I hail from Kelaat M’Gouna, a small town nestled in the rural heart of Morocco. Life there is simple but demanding — a place where curiosity isn’t handed to you, you have to chase it down. My fascination with technology began not with coding tutorials or computer labs, but through trial, error, and mischief.

    As a child, I developed a habit of “ruining PCs” — and then fixing them. I was surrounded by older siblings who didn’t quite trust my experimental nature, so they often locked their laptops with passwords. That didn’t stop me. If I wanted time with the family computer, I had to earn it — by running errands, completing chores, and even negotiating moments of access. But even more than that, I started asking myself:
    “How can I get in without the password? Can I make a new session? Can I trick the system?”

    Without realizing it, I had begun my journey as a problem solver, one who saw every limitation as an opportunity to learn. That stubborn curiosity has never left me — it's what first connected me to the world of computers and still drives me today.
`;
const personalProfile3 = `
  📜 Chapter II: The Path of Learning
    My journey through education has been anything but linear, but it’s that exact path that shaped me into the developer I am today. I began in a public primary school, Ait Baamran, where for six formative years I laid the foundation of my learning. In my second and fifth years, I had the unique experience of being taught by my father — a man both strict and deeply committed to his students’ understanding. He pushed me to think, to question, and to truly learn — not just memorize.

    From there, I entered Collège/Lycée Al Wouroud, where my interest in technology reawakened. In middle school (classes 1/7, 2/8, 3/4), I quickly rose to the top of my IT classes. In my first year, I was introduced to basic computer components, how to manage files, and even how to draw in Paint. The second year brought desktop apps like Word, Excel, and PowerPoint — and I mastered them. By the third year, I had discovered basic algorithms and programming with XLogo (a turtle-based visual language), alongside introductions to HTML and CSS. That’s when I truly realized: this wasn’t a passing interest. It was a calling.

    I continued my academic journey at the lycée level — Tronc Commun Expérimental and the science-focused years of 1ère Bac and 2ème Bac (option: Physique-Chimie). Tronc Commun was the last time informatics was offered as a core subject, where I learned programming through Pascal, using French syntax on a stark blue screen. Though the school dropped informatics afterward, I didn’t. I kept learning on my own, diving into Scratch and other programming environments. But that independent learning came at a cost: I lost focus on other subjects and ended up repeating my final year. I made the decision to pause coding, refocus, and earn my Baccalauréat — which I did.

    My next step was the Faculty of Sciences Ibn Zohr in Ouarzazate, where I enrolled in the SMI (Math & Computer Science) program. Unfortunately, the curriculum was almost entirely theoretical — math-heavy with very little actual informatics, which led to another year lost.

    I recalibrated and took a sharper route: the OFPPT (Digital Development track). It was a turning point. In the first year, I studied HTML, CSS, JavaScript, PHP, and algorithms using Python. The second year expanded into React.js, Laravel, Git, MySQL, MongoDB, web hosting, and basic DevOps concepts. I gained exposure to Docker, Postman, and the logic behind frontend-backend integration.

    Finally, I enrolled in a Bachelor’s program in SIR (Systèmes Informatiques et Réseaux). This program delivered what I had been chasing for years — practical, technical depth. I studied the OSI model, Linux systems, ports, protocols, Bash scripting, and how computers truly process instructions across layers. I also explored web sockets in Python and C, multithreading, cryptography, cloud computing, and machine learning. This final chapter of formal education gave me both the technical breadth and discipline to operate across systems, networks, and applications.
`;
const personalProfile4 = `
  ⚔️ Chapter III: The Arsenal of the Coder
    In my journey as a developer, I’ve come to believe that tools are extensions of the mind, and that the most powerful skill is adaptability. I am a fast learner, capable of picking up new languages or technologies quickly thanks to a solid foundation in algorithmic thinking.

    My core strengths lie in web development, where I specialize in:
    * Frontend:
      - Languages: HTML, CSS, JavaScript
      - Frameworks: React.js, Vue.js, Next.js
      - Styling tools: Tailwind CSS, Sass (as needed)
    * Backend:
      - Languages: PHP, JavaScript (Node.js), Python
      - Frameworks: Laravel, Express.js, CodeIgniter
      - Databases: MySQL, MongoDB
      - Experience with Firebase (basic level)
    * Tools and Dev Environment:
      - Daily drivers: VS Code, Node.js, Composer, Postman, Git (GitHub/Git Bash)
      - Local server stacks: WAMP, XAMPP
      - OS & Scripting: Windows (PowerShell/Command Prompt), Linux (Bash)
    * Mobile App Development:
      - Frameworks: React Native
      - Capable of cross-platform development and basic deployment cycles
    * Other Skills & Tools:
      - CMS: WordPress (design, themes, plugins, basic optimization)
      - Virtualization: VirtualBox, VMware
      - 3D & Visual Design: Beginner in Blender, comfortable with CapCut and Photoshop for media editing
    I identify primarily as a Full-Stack Developer — comfortable building, deploying, and debugging across the entire application lifecycle. My projects often involve creating real-world systems from scratch, whether web apps, mobile tools, or even game prototypes.
    As a hobbyist game developer, I’ve built prototypes using Ren'Py (for visual novel experiences) and created simple games in Unity, like a box-catching mini-game. I enjoy game logic, UI interaction, and the creative freedom it brings.
    My curiosity extends into cybersecurity, where I’ve started exploring tools such as Wireshark, Nmap, and Cisco Packet Tracer — solid foundations for network analysis and ethical hacking simulations.
    Ultimately, the most powerful tool in my arsenal isn’t a language or a framework — it’s the mindset:
    “If it needs to be learned, I will learn it.”
`

// ========= VARIABLES =========
let contextParagraphs = [];
let sentenceChunks = [
  { text: personalProfile.trim(), paragraphIndex: 0, isProfile: true },
  { text: personalProfile2.trim(), paragraphIndex: 1, isProfile: true },
  { text: personalProfile3.trim(), paragraphIndex: 2, isProfile: true },
  { text: personalProfile4.trim(), paragraphIndex: 3, isProfile: true }
];
let entities = {};
let conversationHistory = [];
let synonyms = {
  "app": ["application", "software", "program", "tool", "utility"],
  "cybersecurity": ["security", "infosec", "information security", "network security", "data protection"],
  "ai": ["artificial intelligence", "machine learning", "ml", "deep learning"],
  "dev": ["developer", "programmer", "coder", "engineer"],
  "project": ["work", "initiative", "undertaking", "endeavor", "task", "assignment"],
  "mouad": ["he", "him", "his"],
  "renpy": ["visual novel engine", "game engine"],
  "pgp": ["pretty good privacy", "encryption", "cryptography"],
  "jennnative": ["website", "platform"],
  "seo": ["search engine optimization", "ranking", "visibility"],
  "marrakech": ["city", "location", "place"],
  "osi": ["open systems interconnection"],
  "tcp": ["transmission control protocol"],
  "udp": ["user datagram protocol"],
  "dns": ["domain name system"],
  "ssl": ["secure sockets layer"],
  "tls": ["transport layer security"],
  "stride": ["threat modeling"],
  "iot": ["internet of things"],
  "javascript": ["js", "ecmascript"],
  "python": ["py"],
  "react": ["reactjs", "frontend library"],
  "developer": ["programmer", "coder", "software engineer"],
  "content": ["text", "information", "data"],
  "optimization": ["improvement", "enhancement", "refinement"],
  "feedback": ["input", "comments", "suggestions"],
  "travel": ["journey", "trip", "voyage"],
  "excursion": ["excu", "tour"],
  "encryption": ["cryptography", "scrambling", "encoding"],
  "apps": ["applications", "programs", "software"],
  "games": ["interactive entertainment", "digital games"],
  "skills": ["abilities", "expertise", "competencies"],
  "technologies": ["tech", "tools", "frameworks"],
  "languages": ["programming languages", "code languages"],
  "portfolio": ["work samples", "showcase", "collection"],
  "contact": ["reach out", "get in touch", "communicate"],
  "email": ["electronic mail"],
  "phone": ["telephone", "call"],
  "greeting": ["hello", "hi", "hey"],
  "gratitude": ["thanks", "thank you"],
  "status": ["how are you", "what's up"]
};

const responses = [
  "Mouad has mastered the arcane arts of frontend development, specializing in creating enchanting user experiences.",
  "Through years of study, Mouad has become proficient in JavaScript, Python, and the mystical arts of React.",
  "Mouad's journey includes crafting secure applications with powerful encryption spells and security wards.",
  "The wizard Mouad has completed several tech quests, including the Grimoire of Components and the Dragon's Lair API.",
  "Mouad believes in ethical coding practices and creating accessible experiences for all users.",
  "To contact Mouad, you can send a raven via the contact section or connect through his guild associations."
];

const randomResponse = responses[Math.floor(Math.random() * responses.length)];



// ========= Functions =========
function displayMessage(sender, text, type = "normal") {
  const messageDiv = document.createElement("div");

  // Get current time
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  messageDiv.className = `message ${sender.toLowerCase()}-message ${type !== "normal" ? type + '-message' : ''}`;

  // Format text with paragraphs
  const formattedText = text.replace(/\n/g, '<br>');

  // <strong>${sender}</strong>
  messageDiv.innerHTML = `
        <div>${formattedText}</div>
        <div class="timestamp">${timeString}</div>
      `;

  responseContainer.appendChild(messageDiv);
  responseContainer.scrollTop = responseContainer.scrollHeight;
}

// Core NLP Functions
function normalize(text) {
  return text.toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function enhancedNormalize(text) {
  return text.toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\b(?:a|an|the|is|am|are|was|were|be|being|been|do|does|did|have|has|had)\b/gi, '')
    .replace(/\b(?:will|shall|would|should|can|could|may|might|must)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

// Entity recognition
function extractEntities(text) {
  const people = [...text.matchAll(/([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)/g)].map(m => m[0]);

  const projects = [...text.matchAll(/\b([A-Z][a-z]+(?:[A-Z][a-z]+)+)\b/g)].map(m => m[0]);
  const technologies = [...text.matchAll(/\b(?:AI|PGP|OSI|TCP|UDP|DNS|SSL|TLS|IoT|Ren'Py|JavaScript)\b/gi)].map(m => m[0]);

  // Use three simpler regexes for different date formats
  const monthDayYearRegex = /\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{1,2},\s+\d{4}\b/gi;
  const slashDateRegex = /\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/g;
  const dashDateRegex = /\b\d{4}-\d{2}-\d{2}\b/g;

  const dates = [
    ...[...text.matchAll(monthDayYearRegex)].map(m => m[0]),
    ...[...text.matchAll(slashDateRegex)].map(m => m[0]),
    ...[...text.matchAll(dashDateRegex)].map(m => m[0])
  ];
  const locations = [...text.matchAll(/\b(?:Marrakech|Morocco|USA|Europe)\b/gi)].map(m => m[0]);
  const organizations = [...text.matchAll(/\b(?:Excu Marrakech|JennNative)\b/gi)].map(m => m[0]);

  return {
    people: [...new Set(people)],
    projects: [...new Set(projects)],
    technologies: [...new Set(technologies)],
    dates: [...new Set(dates)],
    locations: [...new Set(locations)],
    organizations: [...new Set(organizations)],
  };
}

// Question classification
function classifyQuestion(question) {
  const normalizedQuestion = question.toLowerCase();
  // Information seeking intents
  if (/^(who is|what is|define|explain|tell me about)\b/i.test(normalizedQuestion)) return "definition";
  if (/^(list|name some|what are|enumerate)\b/i.test(normalizedQuestion)) return "list";
  if (/^(how|process|method|steps)\b/i.test(normalizedQuestion)) return "process";
  if (/^(when|date|year)\b/i.test(normalizedQuestion)) return "date_query";
  if (/^(where|location|place)\b/i.test(normalizedQuestion)) return "location_query";
  if (/^(contact|reach out|email|phone)\b/i.test(normalizedQuestion)) return "contact_info";
  // Project/skill related intents
  if (/\b(projects|work|portfolio|apps|games)\b/i.test(normalizedQuestion)) return "project_query";
  if (/\b(skills|technologies|languages|proficient in)\b/i.test(normalizedQuestion)) return "skill_query";
  if (/\b(cybersecurity|infosec|security)\b/i.test(normalizedQuestion)) return "cybersecurity_query";
  if (/\b(ai|artificial intelligence|machine learning)\b/i.test(normalizedQuestion)) return "ai_query";
  // General conversational intents
  if (/^(hi|hello|hey|greetings)\b/i.test(normalizedQuestion)) return "greeting";
  if (/^(thank you|thanks|appreciate)\b/i.test(normalizedQuestion)) return "gratitude";
  if (/^(how are you|what's up)\b/i.test(normalizedQuestion)) return "status_query";
  return "general";
}

// Spell correction
function correctSpelling(word) {
  const dictionary = [
    "mouad", "developer", "projects", "app", "cybersecurity", "content",
    "optimization", "ai", "feedback", "renpy", "pgp", "jennnative",
    "seo", "excu", "marrakech", "osi", "tcp", "udp", "dns", "ssl",
    "tls", "stride", "iot", "cryptography", "encryption"
  ];

  if (dictionary.includes(word.toLowerCase())) return word;

  let minDistance = Infinity;
  let correction = word;

  for (const dictWord of dictionary) {
    const dist = levenshtein(word.toLowerCase(), dictWord);
    if (dist < minDistance && dist < 3) {
      minDistance = dist;
      correction = dictWord;
    }
  }

  return correction.charAt(0).toUpperCase() + correction.slice(1);
}

// Sentence segmentation
function splitSentences(text) {
  // Handle common abbreviations to avoid false splits
  const abbreviations = ['dr', 'mr', 'mrs', 'ms', 'prof', 'jr', 'sr', 'st', 'etc', 'e.g', 'i.e', 'vs', 'approx', 'no', 'vol', 'fig', 'inc', 'ltd', 'co'];
  const regex = new RegExp(`\\b(${abbreviations.join('|')})\\.\\s+(?=[A-Z])`, 'gi');
  const modifiedText = text.replace(regex, '$1@@@');

  // Split sentences
  const sentences = modifiedText.match(/[^.!?]+[.!?]+(\s|$)/g) || [modifiedText];

  // Restore abbreviations
  return sentences.map(s => s.replace(/@@@/g, '. ').trim());
}

function resolvePronouns(sentence, entities, conversationHistory) {
  let resolvedSentence = sentence;
  const pronouns = { "he": "person", "she": "person", "it": "thing", "they": "person_or_thing", "him": "person", "her": "person", "its": "thing", "them": "person_or_thing" };

  for (const pronoun in pronouns) {
    if (sentence.toLowerCase().includes(pronoun)) {
      // Look for the most recent entity of the matching type in conversation history or current entities
      let candidateEntity = null;

      // Check conversation history first
      for (let i = conversationHistory.length - 1; i >= 0; i--) {
        const turn = conversationHistory[i];
        const turnEntities = extractEntities(turn.content);
        for (const type in turnEntities) {
          if (pronouns[pronoun].includes(type) || pronouns[pronoun] === "person_or_thing") {
            if (turnEntities[type].length > 0) {
              candidateEntity = turnEntities[type][turnEntities[type].length - 1]; // Get the last mentioned entity
              break;
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
              candidateEntity = entities[type][entities[type].length - 1];
              break;
            }
          }
        }
      }

      if (candidateEntity) {
        resolvedSentence = resolvedSentence.replace(new RegExp(`\\b${pronoun}\\b`, 'gi'), candidateEntity);
      }
    }
  }
  return resolvedSentence;
}

// Context management
function setContext(paragraphsText) {
  contextParagraphs = [personalProfile.trim()];

  // Split paragraphs by one or more blank lines
  const customParagraphs = paragraphsText
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  contextParagraphs.push(...customParagraphs);

  // Reset and rebuild sentence chunks
  sentenceChunks = [];
  entities = { people: [], projects: [], technologies: [], dates: [], locations: [], organizations: [] };

  for (let i = 0; i < contextParagraphs.length; i++) {
    const para = contextParagraphs[i];
    const sentences = splitSentences(para);

    sentences.forEach(s => {
      sentenceChunks.push({
        text: s.trim(),
        paragraphIndex: i,
        isProfile: i === 0
      });

      // Extract entities
      const paraEntities = extractEntities(s);
      entities.people = [...new Set([...entities.people, ...paraEntities.people])];
      entities.projects = [...new Set([...entities.projects, ...paraEntities.projects])];
      entities.technologies = [...new Set([...entities.technologies, ...paraEntities.technologies])];
      entities.dates = [...new Set([...entities.dates, ...paraEntities.dates])];
      entities.locations = [...new Set([...entities.locations, ...paraEntities.locations])];
      entities.organizations = [...new Set([...entities.organizations, ...paraEntities.organizations])];
    });
  }

  // Update context indicators
  document.getElementById('contextStatus').textContent =
    customParagraphs.length > 0 ? 'Custom + Profile' : 'Default Profile';

  document.getElementById('paraCount').textContent = contextParagraphs.length;
  document.getElementById('sentenceCount').textContent = sentenceChunks.length;
  document.getElementById('entityCount').textContent = Object.values(entities).flat().length;

  return `Context updated with ${customParagraphs.length} custom paragraph(s) and 1 personal profile.`;
}

function clearContext() {
  const result = setContext("");
  displayMessage("Bot", "Context cleared. Now using default profile only.", "success");
  return result;
}

// Export/Import context
function exportContext() {
  const contextData = {
    paragraphs: contextParagraphs,
    entities: entities,
    timestamp: new Date().toISOString()
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(contextData, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "chatbot_context.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);

  displayMessage("Bot", "Context exported successfully!", "success");
}

function importContext(files) {
  if (files.length === 0) return;

  const file = files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    try {
      const contextData = JSON.parse(e.target.result);
      const customParagraphs = contextData.paragraphs.slice(1).join("\n\n");
      setContext(customParagraphs);
      displayMessage("Bot", "Context imported successfully!", "success");
    } catch (error) {
      console.error("Error importing context:", error);
      displayMessage("Bot", "Error importing context: Invalid file format", "error");
    }
  };

  reader.readAsText(file);
}

// Advanced question answering
function handleBooleanQuery(question, reasoningLog) {
  reasoningLog.push(`Processing boolean query`);
  const terms = question.split(/\b(?:and|or)\b/i).map(term => term.trim());
  const operator = question.match(/\b(and|or)\b/i)?.[0]?.toLowerCase() || "and";

  const matchingChunks = sentenceChunks.filter(chunk => {
    const chunkText = enhancedNormalize(chunk.text);
    if (operator === "and") {
      return terms.every(term => chunkText.includes(enhancedNormalize(term)));
    } else {
      return terms.some(term => chunkText.includes(enhancedNormalize(term)));
    }
  });

  if (matchingChunks.length > 0) {
    return {
      text: `Found ${matchingChunks.length} matching sentences for your query:`,
      details: matchingChunks.map((chunk, i) => `${i + 1}. ${chunk.text}`).join('<br>'),
      type: "list"
    };
  }
  return null;
}

function handleDefinitionQuestion(words, reasoningLog) {
  const subject = words.length > 1 ? words[words.length - 1] : '';
  reasoningLog.push(`Detected definition question about <span class="keyword">${subject}</span>`);

  const candidateSentences = sentenceChunks.filter(chunk => {
    const firstWords = chunk.text.toLowerCase().split(' ').slice(0, 3).join(' ');
    return firstWords.includes(subject);
  });

  if (candidateSentences.length > 0) {
    return {
      text: `Definition: ${candidateSentences[0].text}`,
      type: "definition"
    };
  }
  return null;
}

function handleListQuestion(words, reasoningLog) {
  reasoningLog.push(`Processing list question`);
  const topic = words.slice(1).join(' ');

  const matchingChunks = sentenceChunks.filter(chunk => {
    return enhancedNormalize(chunk.text).includes(enhancedNormalize(topic));
  });

  if (matchingChunks.length > 0) {
    return {
      text: `Here are ${matchingChunks.length} items related to ${topic}:`,
      details: matchingChunks.map((chunk, i) => `${i + 1}. ${chunk.text}`).join('<br>'),
      type: "list"
    };
  }
  return null;
}

function calculateSemanticScore(chunk, enhancedQ, words) {
  const enhancedS = enhancedNormalize(chunk.text);

  // Calculate base similarity
  const levDist = levenshtein(enhancedQ, enhancedS);
  const maxLen = Math.max(enhancedQ.length, enhancedS.length);
  const levSim = maxLen > 0 ? 1 - (levDist / maxLen) : 0;

  // Position bonus
  const positionBonus = chunk.paragraphIndex === 0 ? 0.15 : (chunk.paragraphIndex < 3 ? 0.1 : 0);

  // Question word coverage
  let coverageScore = 0;
  for (const word of words) {
    if (enhancedS.includes(word)) coverageScore += 1 / words.length;
  }

  // Sentence length factor
  const lengthFactor = 1 - Math.min(1, Math.abs(0.5 - (chunk.text.length / 200)));

  // Combine scores
  return (levSim * 0.5) + (coverageScore * 0.3) + positionBonus + (lengthFactor * 0.1);
}

function handleSemanticSearch(enhancedQ, words, reasoningLog, questionType) {
  reasoningLog.push(`Using semantic search`);
  let bestMatch = null;
  let bestScore = 0;

  for (let chunk of sentenceChunks) {
    const totalScore = calculateSemanticScore(chunk, enhancedQ, words);

    if (totalScore > bestScore) {
      bestScore = totalScore;
      bestMatch = chunk;
    }
  }

  if (!bestMatch || bestScore < 0.35) {
    reasoningLog.push("No relevant answer found");
    return {
      text: "I couldn't find a relevant answer. Please try rephrasing or adding more context.",
      type: "warning"
    };
  }

  // Check for specific intent responses
  if (questionType === "greeting") {
    return { text: "Greetings, seeker! How may I assist you today?", type: "greeting" };
  }
  if (questionType === "gratitude") {
    return { text: "You are most welcome, seeker!", type: "gratitude" };
  }
  if (questionType === "status_query") {
    return { text: "I am but a humble Oracle, serving at your command. All is well in the digital realm.", type: "status" };
  }
  if (questionType === "contact_info") {
    return { text: "To contact Mouad, you can send a raven via the contact section or connect through his guild associations.", type: "contact" };
  }

  return {
    text: bestMatch.text,
    score: bestScore,
    reasoning: reasoningLog,
    type: "explanation"
  };
}

function generateAnswer(question) {
  let currentContextEntities = { ...entities };
  const questionType = classifyQuestion(question);
  const resolvedQuestion = resolvePronouns(question, currentContextEntities, conversationHistory);
  const correctedQuestion = resolvedQuestion.split(' ').map(correctSpelling).join(' ');
  const normQ = normalize(correctedQuestion);
  const enhancedQ = enhancedNormalize(correctedQuestion);
  const words = enhancedQ.split(' ');
  let reasoningLog = [];

  // Incorporate conversation history for contextual understanding
  for (const turn of conversationHistory) {
    if (turn.role === "user" || turn.role === "assistant") {
      const turnEntities = extractEntities(turn.content);
      for (const type in turnEntities) {
        currentContextEntities[type] = [...new Set([...(currentContextEntities[type] || []), ...turnEntities[type]])];
      }
    }
  }

  reasoningLog.push(`Question type: <span class="keyword">${questionType}</span>`);
  reasoningLog.push(`Corrected question: <span class="keyword">${correctedQuestion}</span>`);

  // Handle boolean queries
  if (/\b(?:and|or)\b/i.test(question)) {
    reasoningLog.push(`Processing boolean query`);
    const terms = question.split(/\b(?:and|or)\b/i).map(term => term.trim());
    const operator = question.match(/\b(and|or)\b/i)?.[0]?.toLowerCase() || "and";

    const matchingChunks = sentenceChunks.filter(chunk => {
      const chunkText = enhancedNormalize(chunk.text);
      if (operator === "and") {
        return terms.every(term => chunkText.includes(enhancedNormalize(term)));
      } else {
        return terms.some(term => chunkText.includes(enhancedNormalize(term)));
      }
    });

    if (matchingChunks.length > 0) {
      return {
        text: `Found ${matchingChunks.length} matching sentences for your query:`,
        details: matchingChunks.map((chunk, i) => `${i + 1}. ${chunk.text}`).join('<br>'),
        type: "list"
      };
    }
  }

  // Definition questions
  if (questionType === "definition") {
    const subject = words.length > 1 ? words[words.length - 1] : '';
    reasoningLog.push(`Detected definition question about <span class="keyword">${subject}</span>`);

    const candidateSentences = sentenceChunks.filter(chunk => {
      console.log(chunk)
      const firstWords = chunk.text.toLowerCase().split(' ').slice(0, 3).join(' ');
      return firstWords.includes(subject);
    });

    if (candidateSentences.length > 0) {
      return {
        text: `Definition: ${candidateSentences[0].text}`,
        type: "definition"
      };
    }
  }

  // List questions
  if (questionType === "list") {
    reasoningLog.push(`Processing list question`);
    const topic = words.slice(1).join(' ');

    const matchingChunks = sentenceChunks.filter(chunk => {
      return enhancedNormalize(chunk.text).includes(enhancedNormalize(topic));
    });

    if (matchingChunks.length > 0) {
      return {
        text: `Here are ${matchingChunks.length} items related to ${topic}:`,
        details: "<ol>" + matchingChunks.map((chunk, i) => `<li>${chunk.text}</li>`).join('') + "</ol>",
        type: "list"
      };
    }
  }

  return handleSemanticSearch(enhancedQ, words, reasoningLog, questionType);
}

function handleInput() {
  let input = userInput.value.trim();

  if (!input) {
    displayMessage("Bot", randomResponse);
    displayMessage("Bot", "Please enter a question or context information.", "warning");
    return;
  }
  conversationHistory.push({ role: "user", content: input });
  if (conversationHistory.length > 6) conversationHistory = conversationHistory.slice(-6);
  displayMessage("user", input);
  userInput.value = "";

  if (input.toLowerCase().startsWith("context:")) {
    const contextText = input.slice(8).trim();
    const response = setContext(contextText);
    displayMessage("Bot", response, "success");
    conversationHistory.push({ role: "assistant", content: response });
  } else {
    if (sentenceChunks.length === 0) {
      displayMessage("Bot", "Please set context first using: context: [your paragraph(s)]", "warning");
      conversationHistory.push({ role: "assistant", content: "Please set context first" });
    } else {
      // Show processing indicator
      displayMessage("Bot", "Processing your question...", "system");

      // Process with delay for better UX
      setTimeout(() => {
        const result = generateAnswer(input);

        // Build response
        let responseHTML = "";
        if (result.type === "list") {
          responseHTML = `<div class="answer-highlight">${result.text}</div>`;
          responseHTML += `<div class="list-items">${result.details}</div>`;
        } else if (result.type === "definition") {
          responseHTML = `<div class="answer-highlight">${result.text}</div>`;
        } else if (result.score) {
          responseHTML = `<div class="answer-highlight">${result.text}</div>`;
          responseHTML += `<div class="source">Confidence: <span class="confidence">${Math.round(result.score * 100)}%</span></div>`;
        } else {
          responseHTML = result.text;
        }

        // Add reasoning if available
        if (result.reasoning) {
          responseHTML += `<div class="reasoning"><strong>Reasoning:</strong><br>${result.reasoning.join('<br>')}</div>`;
        }

        // Add entity tags if recognized
        const recognizedEntities = [];
        for (const type in entities) {
          for (const entity of entities[type]) {
            if (input.toLowerCase().includes(entity.toLowerCase())) {
              recognizedEntities.push(`<span class="entity-tag">${entity}</span>`);
            }
          }
        }

        if (recognizedEntities.length > 0) {
          responseHTML += `<div class="source">Recognized entities: ${recognizedEntities.join(' ')}</div>`;
        }

        // Create and display message
        const responseContainer = document.getElementById("chat-messages");
        const messageDiv = document.createElement("div");
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        messageDiv.className = `message bot-message ${result.type}-message`;
        messageDiv.innerHTML = `
              <div>
                ${responseHTML}
                <div class="timestamp">${timeString}</div>
              </div>
            `;

        // Replace processing message
        const lastMessage = document.querySelector('#chat-messages .bot-message:last-child');
        responseContainer.replaceChild(messageDiv, lastMessage);

        // Add to conversation history
        conversationHistory.push({ role: "assistant", content: result.text });

        responseContainer.scrollTop = responseContainer.scrollHeight;
      }, 800);
    }
  }
}

// -------------------------------------------

function init() {

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
}

window.onload = init;