export const personalInfo = {
  name: "Nitesh Verma",
  role: "Full Stack MERN Developer & DSA Specialist",
  tagline: "Engineering scalable web applications, machine learning solutions, and solving algorithmic challenges.",
  location: "Mathura, Uttar Pradesh, India",
  email: "nitesh.verma_cs23@gla.ac.in",
  phone: "+91 9198778130",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    leetcode: "https://leetcode.com",
  },
  about: `I am a Computer Science undergraduate at GLA University with a deep passion for building robust full-stack applications and solving complex algorithmic problems. With 500+ DSA problems solved on LeetCode, I specialize in the MERN stack (MongoDB, Express, React, Node.js), Java, and integrating AI/Machine Learning into web architectures. 

My flagship projects include CODEXA, a full-featured coding platform inspired by LeetCode with submission workflows, and CVision, an intelligent AI-powered ATS resume analyzer. I constantly look forward to architecting scalable systems, tackling high-impact problems, and learning emerging tech like Generative AI.`,
  availability: "Available for Software Engineering Internships & Full-Time Roles",
};

export const stats = [
  { label: "DSA Problems Solved", value: "500+", subtext: "LeetCode & Platforms", highlight: "from-emerald-600 to-teal-600" },
  { label: "Full-Stack Apps", value: "2+", subtext: "Production MERN Architectures", highlight: "from-green-600 to-emerald-500" },
  { label: "Gen AI & Cloud", value: "Azure", subtext: "OpenAI & JOVAC Certified", highlight: "from-teal-600 to-emerald-700" },
  { label: "Engineering Degree", value: "B.Tech CSE", subtext: "GLA University (2023–27)", highlight: "from-emerald-600 to-green-600" },
];

export const leetcodeStats = {
  totalSolved: 500,
  breakdown: {
    easy: { count: 215, total: 800, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
    medium: { count: 245, total: 1650, color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-200" },
    hard: { count: 40, total: 700, color: "text-emerald-800", bg: "bg-emerald-100", border: "border-emerald-300" },
  },
  acceptanceRate: "69.2%",
  topTopics: [
    { name: "Dynamic Programming", count: 75, icon: "Cpu" },
    { name: "Trees & BST", count: 90, icon: "GitFork" },
    { name: "Graphs & BFS/DFS", count: 65, icon: "Share2" },
    { name: "Arrays & Two Pointers", count: 120, icon: "Code2" },
    { name: "Linked Lists & Stacks", count: 85, icon: "Layers" },
    { name: "Binary Search", count: 65, icon: "Search" },
  ],
  recentMilestones: [
    "500+ LeetCode Milestone Achieved",
    "Java Basic Certified by HackerRank",
    "Mastery in Time & Space Complexity Optimization",
  ]
};

export const projects = [
  {
    id: "codexa",
    title: "CODEXA",
    tagline: "Full-Stack Coding & Algorithmic Practice Platform",
    badge: "Featured Full-Stack",
    color: "from-emerald-600 to-teal-700",
    description: "A full-stack competitive coding platform inspired by LeetCode, allowing software engineers to practice coding challenges, submit test cases, and track learning progress with real-time feedback.",
    features: [
      "JWT-based authentication & Role-Based Access Control (RBAC) for problem authors and students",
      "Secure RESTful APIs for user management, problem catalogs, test execution, and user submissions",
      "Categorization, multi-parameter search, difficulty filtering (Easy/Medium/Hard), and personalized analytics dashboard",
      "Responsive React UI designed for seamless coding workflows with MongoDB query optimization for instant indexing"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Tailwind CSS"],
    liveDemoUrl: "#codexa-demo",
    githubUrl: "https://github.com",
    interactiveType: "coding",
    demoData: {
      problemTitle: "Two Sum (Target Array Indices)",
      difficulty: "Easy",
      category: "Array • Hash Table",
      description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
      codeSnippet: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
      testCases: [
        { input: "nums = [2,7,11,15], target = 9", output: "[0, 1]", status: "Passed (18ms)" },
        { input: "nums = [3,2,4], target = 6", output: "[1, 2]", status: "Passed (15ms)" },
        { input: "nums = [3,3], target = 6", output: "[0, 1]", status: "Passed (12ms)" }
      ]
    }
  },
  {
    id: "cvision",
    title: "CVision",
    tagline: "AI Resume Analyzer & ATS Score Intelligence",
    badge: "AI + Full-Stack MERN",
    color: "from-teal-600 to-emerald-700",
    description: "An intelligent ATS-style resume analysis platform powered by Machine Learning and MERN stack. Parses user resumes against job descriptions, computes semantic match scores, and provides actionable recommendations.",
    features: [
      "Custom Machine Learning model trained to extract key resume attributes: technical skills, work experience, education, and domain relevance",
      "Node.js & Express.js RESTful microservices with Multer for secure PDF/Docx upload and processing",
      "JWT-based authentication with protected user history routes and scan result persistence in MongoDB",
      "Real-time ATS compatibility scoring engine displaying skill gap analysis and formatting suggestions"
    ],
    tech: ["MERN Stack", "Python", "Machine Learning", "Multer", "JWT", "RESTful APIs", "React.js"],
    liveDemoUrl: "#cvision-demo",
    githubUrl: "https://github.com",
    interactiveType: "resume-analyzer",
    demoData: {
      matchScore: 89,
      categoryScores: [
        { label: "Technical Skills Match", score: 92, status: "Excellent" },
        { label: "Experience Relevance", score: 85, status: "High" },
        { label: "ATS Keyword Density", score: 88, status: "Optimal" },
        { label: "Formatting & Structure", score: 95, status: "Clean" }
      ],
      detectedSkills: ["Java", "React.js", "Node.js", "MongoDB", "Express.js", "Data Structures", "REST APIs", "Python"],
      missingKeywords: ["Docker", "Redis", "CI/CD Pipeline"],
      summaryVerdict: "Strong candidate match for Full Stack MERN Developer roles. High algorithmic and backend proficiency detected."
    }
  }
];

export const skillsData = {
  categories: [
    {
      title: "Programming Languages",
      icon: "Code",
      skills: [
        { name: "Java", level: 92, highlight: "Primary DSA & OOP Language" },
        { name: "JavaScript (ES6+)", level: 90, highlight: "Full-Stack Development" },
        { name: "Python", level: 80, highlight: "ML & Data Analysis" },
        { name: "C", level: 78, highlight: "Foundational Programming" },
        { name: "SQL", level: 82, highlight: "Relational Queries & Schemas" }
      ]
    },
    {
      title: "Frontend Engineering",
      icon: "Layout",
      skills: [
        { name: "React.js", level: 90, highlight: "Hooks, Router, State, SPAs" },
        { name: "HTML5 & CSS3", level: 94, highlight: "Semantic UI & Responsive Design" },
        { name: "Tailwind CSS", level: 92, highlight: "Modern Utility-First Styling" },
        { name: "Component Design", level: 88, highlight: "Reusable Modular Architecture" }
      ]
    },
    {
      title: "Backend & Systems",
      icon: "Server",
      skills: [
        { name: "Node.js", level: 88, highlight: "Event-driven runtime & I/O" },
        { name: "Express.js", level: 90, highlight: "REST APIs, Middleware, Routing" },
        { name: "JWT Authentication", level: 92, highlight: "Role-Based Access Control" },
        { name: "Multer", level: 85, highlight: "File Upload Pipelines" }
      ]
    },
    {
      title: "Database & Storage",
      icon: "Database",
      skills: [
        { name: "MongoDB", level: 88, highlight: "NoSQL Modeling & Aggregations" },
        { name: "Mongoose ODM", level: 90, highlight: "Schema Validation & Indexing" },
        { name: "SQL / Relational DBs", level: 80, highlight: "Joins, Transactions, Normalization" }
      ]
    },
    {
      title: "Core CS & Problem Solving",
      icon: "BrainCircuit",
      skills: [
        { name: "Data Structures & Algorithms", level: 94, highlight: "500+ LeetCode Solved" },
        { name: "Object Oriented Programming (OOP)", level: 92, highlight: "Inheritance, Polymorphism, Abstraction" },
        { name: "RESTful API Design", level: 90, highlight: "Clean Architecture & HTTP Standards" }
      ]
    },
    {
      title: "Cloud, AI & Developer Tools",
      icon: "Wrench",
      skills: [
        { name: "Microsoft Azure (Gen AI)", level: 85, highlight: "Azure OpenAI, Prompt Engineering" },
        { name: "Git & GitHub", level: 90, highlight: "Version Control & Branching" },
        { name: "Postman", level: 88, highlight: "API Testing & Mocking" },
        { name: "VS Code", level: 95, highlight: "Primary Development IDE" },
        { name: "Linux & Windows", level: 86, highlight: "CLI & Environment Config" }
      ]
    }
  ]
};

export const education = [
  {
    institution: "GLA University, Mathura",
    degree: "B.Tech in Computer Science & Engineering",
    duration: "2023 – 2027",
    status: "Currently Pursuing (3rd Year)",
    highlights: [
      "Active participant in technical coding challenges and hackathons",
      "Focused coursework: Data Structures, Analysis of Algorithms, DBMS, Operating Systems, Computer Networks",
      "Completed intensive Summer Training in Generative AI on Azure (JOVAC)"
    ]
  },
  {
    institution: "Powayan Inter College",
    degree: "Senior Secondary (12th Grade)",
    duration: "2021",
    score: "Percentage: 74.6%",
    highlights: ["Majored in Physics, Chemistry, and Mathematics (PCM)"]
  },
  {
    institution: "P.D. Bhartiya Inter College",
    degree: "Secondary Education (10th Grade)",
    duration: "2019",
    score: "Percentage: 84.6%",
    highlights: ["Excellence in Science and Mathematics"]
  }
];

export const experienceAndTraining = [
  {
    role: "Gen AI with Azure Intern / Trainee",
    organization: "Summer Training (JOVAC), GLA University",
    duration: "June 2025 – July 2025",
    type: "Professional Training",
    badge: "Generative AI",
    points: [
      "Built and deployed enterprise GenAI solutions on Microsoft Azure cloud infrastructure.",
      "Worked hands-on with Azure OpenAI service, mastering prompt engineering, fine-tuning methodologies, and AI-powered application design.",
      "Engineered full-stack integration connecting Azure AI models with modern RESTful web interfaces."
    ]
  }
];

export const certifications = [
  {
    title: "Java Basic Certification",
    issuer: "HackerRank",
    date: "Verified Credential",
    badge: "Language Mastery",
    icon: "Award",
    description: "Demonstrated strong foundational knowledge of Java programming, OOP principles, data structures, and core syntax."
  },
  {
    title: "500+ LeetCode Problem Solving Badge",
    issuer: "LeetCode Community",
    date: "Continuous Milestone",
    badge: "Algorithmic Excellence",
    icon: "Flame",
    description: "Consistent problem-solving streak across Array, Tree, Graph, Dynamic Programming, and Search algorithms."
  },
  {
    title: "Full-Stack MERN Application Architect",
    issuer: "Independent Production Projects",
    date: "2024 – Present",
    badge: "Full-Stack Development",
    icon: "Layers",
    description: "End-to-end architecture and deployment of CODEXA and CVision incorporating JWT security, MongoDB databases, and ML inference."
  }
];

export const terminalCommands = {
  help: "Available commands:\n  • about        - Summary of Nitesh Verma\n  • skills       - Quick list of technical proficiencies\n  • projects     - Overview of CODEXA & CVision\n  • leetcode     - DSA stats & problem solving metrics\n  • contact      - Email, phone, and links\n  • hire         - Why Nitesh is a great hire\n  • clear        - Clear the terminal console",
  about: "Nitesh Verma | Computer Science Undergrad @ GLA University\nFull-Stack MERN Developer • 500+ LeetCode DSA Solver • AI & GenAI Explorer\nLocation: Mathura, Uttar Pradesh, India",
  skills: "LANGUAGES: Java, C, Python, JavaScript, SQL\nFRONTEND:  React.js, HTML5, CSS3, Tailwind CSS\nBACKEND:   Node.js, Express.js, JWT, REST APIs, Multer\nDATABASE:  MongoDB, Mongoose\nCLOUD/AI:  Azure OpenAI, Prompt Engineering, ML Models\nCORE:      DSA (500+), OOP, System Design",
  projects: "1. CODEXA: LeetCode-inspired fullstack coding & submission platform (React, Node, Mongo, JWT)\n2. CVision: AI Resume Analyzer with ATS score & ML feature extraction (MERN, Python, ML)",
  leetcode: "LeetCode Metrics:\n  Total Solved: 500+\n  Easy: 215 | Medium: 245 | Hard: 40\n  Acceptance Rate: ~69%\n  Top Focus: Dynamic Programming, Trees, Graphs, Arrays",
  contact: "Email: nitesh.verma_cs23@gla.ac.in\nPhone: +91 9198778130\nCity: Mathura, Uttar Pradesh, India",
  hire: "Why hire Nitesh?\n  ✓ Proven ability to build production-grade fullstack apps from scratch.\n  ✓ Strong algorithmic problem-solving foundation (500+ problems solved).\n  ✓ Fast learner with hands-on GenAI Azure cloud training.\n  ✓ Passionate, dedicated, and ready to make an immediate impact."
};
