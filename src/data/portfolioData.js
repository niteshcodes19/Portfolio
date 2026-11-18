export const personalInfo = {
  name: "Nitesh Verma",
  role: "Full Stack Developer • AI/ML & DevOps Engineer",
  tagline: "Engineering containerized code execution engines, semantic NLP pipelines, and solving complex algorithmic challenges.",
  location: "Mathura, Uttar Pradesh, India",
  email: "nitesh.verma_cs23@gla.ac.in",
  phone: "+91 9198778130",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    leetcode: "https://leetcode.com",
  },
  about: `I am a Computer Science undergraduate at GLA University skilled in Java (Core, OOP, Collections), full-stack development, and building AI-powered containerized systems. 

My flagship projects include CODEXA, a competitive code judge that executes user-submitted Java inside isolated Docker containers with strict resource limits and Monaco Editor, and CVision, an intelligent resume screener coupling Express.js with a Python FastAPI microservice using Sentence-Transformers (all-MiniLM-L6-v2), RapidFuzz (60+ tech aliases), and Ollama (Phi-3) feedback.

With 500+ algorithmic problems solved across LeetCode and GeeksforGeeks, hands-on enterprise RAG and Azure OpenAI training (JOVAC), and Docker deployments on Render, I love architecting robust, production-ready distributed applications.`,
  availability: "Available for Software Engineering Internships & Full-Time Roles",
};

export const stats = [
  { label: "DSA Problems Solved", value: "500+", subtext: "LeetCode & GeeksforGeeks", highlight: "from-emerald-600 to-teal-600" },
  { label: "Live Deployments", value: "2 Apps", subtext: "Docker Containers on Render", highlight: "from-green-600 to-emerald-500" },
  { label: "AI & Cloud", value: "RAG + Azure", subtext: "OpenAI GPT & Vector Search", highlight: "from-teal-600 to-emerald-700" },
  { label: "Engineering Degree", value: "B.Tech CSE", subtext: "GLA University (2023–27)", highlight: "from-emerald-600 to-green-600" },
];

export const leetcodeStats = {
  totalSolved: 500,
  platforms: "LeetCode & GeeksforGeeks",
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
    "500+ Problems Solved across LeetCode & GeeksforGeeks",
    "HackerRank Java (Basic) Certified — OOP, Exception Handling, Collections, Multithreading",
    "Mastery in Time & Space Complexity Optimization",
  ]
};

export const projects = [
  {
    id: "codexa",
    title: "CODEXA",
    tagline: "Online Code Judge & Competitive Programming Platform",
    badge: "Docker Sandbox • OpenJDK 17",
    color: "from-emerald-600 to-teal-700",
    description: "A full-scale remote code execution and competitive programming platform that compiles and executes user-submitted Java inside isolated Docker containers (OpenJDK 17) launched from Node.js child processes, enforcing strict timeout and memory limits on every submission.",
    features: [
      "Built a remote code execution engine that compiles and runs user-submitted Java inside Docker containers (OpenJDK 17) launched from Node.js child processes, enforcing timeout and memory limits on every submission.",
      "Automated driver-code assembly (Java import reordering, stdin/stdout normalization) and verdict checking: Accepted, Wrong Answer, TLE, Compilation Error.",
      "Integrated Monaco Editor (VS Code engine) for syntax highlighting and live execution, with a categorized problem library, difficulty filters and tag search.",
      "Built REST APIs with JWT authentication and role-based access, plus MongoDB schemas for submission tracking, telemetry and user analytics dashboards."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Docker", "OpenJDK 17", "Monaco Editor", "JWT"],
    liveDemoUrl: "#codexa-demo",
    githubUrl: "https://github.com",
    interactiveType: "coding",
    demoData: {
      problemTitle: "Two Sum (Target Array Indices)",
      difficulty: "Easy",
      category: "Array • Hash Table",
      description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
      runnerInfo: "Docker Container: sandbox-openjdk17-worker-4 | Isolated Memory: 64MB | CPU: 1.0 core",
      codeSnippet: `import java.util.*;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[0];
    }
}`,
      testCases: [
        { input: "nums = [2,7,11,15], target = 9", output: "[0, 1]", verdict: "Accepted", time: "38ms", mem: "24.2 MB" },
        { input: "nums = [3,2,4], target = 6", output: "[1, 2]", verdict: "Accepted", time: "35ms", mem: "24.1 MB" },
        { input: "nums = [3,3], target = 6", output: "[0, 1]", verdict: "Accepted", time: "32ms", mem: "24.0 MB" }
      ]
    }
  },
  {
    id: "cvision",
    title: "CVision",
    tagline: "AI-Powered Resume Screener & Career Intelligence Platform",
    badge: "NLP Microservice • Sentence-Transformers",
    color: "from-teal-600 to-emerald-700",
    description: "An enterprise-grade AI resume screener with an Express.js backend and a separate Python FastAPI ML service connected via IPC with dynamic port discovery. Delivers semantic matching with Sentence-Transformers (all-MiniLM-L6-v2), a 60+ tech alias pipeline via RapidFuzz, and personalized feedback via Ollama (Phi-3).",
    features: [
      "Built a resume screener with an Express.js backend and a separate Python FastAPI ML service, connected via IPC with dynamic port discovery.",
      "Implemented semantic resume-to-job-description matching with Sentence-Transformers (all-MiniLM-L6-v2) and cosine similarity to compute ATS match scores, with a Scikit-learn TF-IDF fallback.",
      "Built a skill-extraction pipeline mapping 60+ technology aliases with RapidFuzz and regex to flag missing skills and compare applicants against job descriptions.",
      "Added personalized resume feedback using Ollama (Phi-3), and secured the backend with Helmet headers, rate limiting and bcrypt/JWT-protected routes."
    ],
    tech: ["React 19", "Node.js", "Express.js", "Python FastAPI", "Scikit-learn", "Sentence-Transformers", "MongoDB", "RapidFuzz", "Ollama (Phi-3)"],
    liveDemoUrl: "#cvision-demo",
    githubUrl: "https://github.com",
    interactiveType: "resume-analyzer",
    demoData: {
      matchScore: 92,
      categoryScores: [
        { label: "Semantic Cosine Match (all-MiniLM-L6-v2)", score: 94, status: "High Semantic Overlap" },
        { label: "Scikit-learn TF-IDF Fallback", score: 89, status: "Verified Token Overlap" },
        { label: "RapidFuzz Tech Alias Density", score: 93, status: "60+ Aliases Parsed" },
        { label: "Backend & Helmet Security Check", score: 98, status: "Rate Limited & Bcrypt Verified" }
      ],
      detectedSkills: ["Java (OOP/Collections)", "React.js", "Node.js", "FastAPI", "MongoDB", "Docker", "Sentence-Transformers", "RapidFuzz"],
      missingKeywords: ["Kubernetes", "Kafka", "Redis"],
      ollamaFeedback: "Candidate exhibits high backend depth with Docker sandboxing, microservices IPC, and semantic vector similarity. Highly recommended for Software Engineer (Backend / AI Systems) roles."
    }
  }
];

export const skillsData = {
  categories: [
    {
      title: "Languages",
      icon: "Code",
      skills: [
        { name: "Java", level: 94, highlight: "Core, OOP, Collections, Multithreading" },
        { name: "Python", level: 88, highlight: "FastAPI, NLP, Scikit-learn, ML" },
        { name: "JavaScript (ES6+)", level: 90, highlight: "Async, Node.js, Modern Full-Stack" },
        { name: "C", level: 78, highlight: "Low-level Systems Programming" },
        { name: "SQL", level: 82, highlight: "Relational Queries, Normalization, Joins" }
      ]
    },
    {
      title: "Frontend Development",
      icon: "Layout",
      skills: [
        { name: "React.js / React 19", level: 92, highlight: "Modern Component Architecture & State" },
        { name: "Monaco Editor", level: 88, highlight: "VS Code Core Engine Integration" },
        { name: "Tailwind CSS", level: 94, highlight: "Responsive & Modern Design Systems" },
        { name: "HTML5 & CSS3", level: 95, highlight: "Semantic Structure & Web Standards" },
        { name: "Vite", level: 92, highlight: "Ultra-fast Next-Gen Build Tooling" }
      ]
    },
    {
      title: "Backend & APIs",
      icon: "Server",
      skills: [
        { name: "Node.js & Express.js", level: 90, highlight: "Child Processes, IPC, Secure APIs" },
        { name: "Python FastAPI", level: 86, highlight: "High-Performance ML Microservices" },
        { name: "RESTful APIs", level: 94, highlight: "Clean Architecture & Endpoint Design" },
        { name: "JWT Authentication", level: 92, highlight: "RBAC & Bcrypt Protection" },
        { name: "Multer", level: 88, highlight: "Multipart File Processing Pipelines" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "BrainCircuit",
      skills: [
        { name: "Sentence-Transformers", level: 90, highlight: "all-MiniLM-L6-v2 Vector Embeddings" },
        { name: "Scikit-learn", level: 86, highlight: "TF-IDF Fallbacks & Predictive Models" },
        { name: "RapidFuzz", level: 92, highlight: "60+ Technology Alias Match Pipeline" },
        { name: "Azure OpenAI & Prompt Eng.", level: 88, highlight: "GPT Models, JOVAC Summer Training" },
        { name: "RAG & Vector Search", level: 85, highlight: "Grounding Responses & Hallucination Defense" },
        { name: "NLTK & Ollama (Phi-3)", level: 82, highlight: "Text Normalization & Local LLM Feedback" }
      ]
    },
    {
      title: "Databases & DevOps",
      icon: "Database",
      skills: [
        { name: "MongoDB", level: 90, highlight: "Document Schemas & Telemetry Tracking" },
        { name: "Docker", level: 88, highlight: "Isolated OpenJDK 17 Sandboxes & Deployments" },
        { name: "Linux / Bash", level: 86, highlight: "Shell Automation & Process Management" },
        { name: "Git & GitHub", level: 92, highlight: "Branching, PRs, Version Control" },
        { name: "Postman", level: 90, highlight: "API Validation, Contracts & Mocking" },
        { name: "Render", level: 88, highlight: "Live Containerized Production Hosting" }
      ]
    },
    {
      title: "Core Fundamentals",
      icon: "Wrench",
      skills: [
        { name: "Data Structures & Algorithms", level: 94, highlight: "500+ Solved on LeetCode & GFG" },
        { name: "Object-Oriented Programming (OOP)", level: 94, highlight: "Encapsulation, Inheritance, Polymorphism" },
        { name: "Database Management (DBMS)", level: 88, highlight: "ACID, Indexing, Transactions" },
        { name: "Operating Systems Basics", level: 86, highlight: "Processes, Memory Limits, Concurrency" }
      ]
    }
  ]
};

export const education = [
  {
    institution: "GLA University, Mathura",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    duration: "2023 – 2027 (Expected)",
    status: "Currently Pursuing",
    highlights: [
      "Core Coursework: Data Structures & Algorithms (DSA), OOP, DBMS, Operating Systems Basics, Computer Networks",
      "Completed intensive Summer Training in Generative AI on Azure (JOVAC)",
      "Active competitive programmer with 500+ problems solved across LeetCode and GeeksforGeeks"
    ]
  },
  {
    institution: "Powayan Inter College | UP Board",
    degree: "Senior Secondary (12th Grade)",
    duration: "2021",
    score: "Percentage: 74.6%",
    highlights: ["Majored in Physics, Chemistry, and Mathematics (PCM)"]
  },
  {
    institution: "P.D. Bhartiya Inter College | UP Board",
    degree: "Secondary (10th Grade)",
    duration: "2019",
    score: "Percentage: 84.6%",
    highlights: ["Excellence in Science and Mathematics"]
  }
];

export const experienceAndTraining = [
  {
    role: "GenAI with Azure — Summer Trainee (JOVAC)",
    organization: "GLA University",
    duration: "June 2025 – July 2025",
    type: "Professional Cloud & AI Training",
    badge: "Azure OpenAI & RAG",
    points: [
      "Built generative AI prototypes on Microsoft Azure using Azure OpenAI Service (GPT models), prompt engineering workflows and system integration.",
      "Applied Retrieval-Augmented Generation (RAG) with text embeddings and vector search to ground responses in external knowledge bases and reduce hallucinations."
    ]
  }
];

export const certifications = [
  {
    title: "500+ DSA Problems Solved",
    issuer: "LeetCode & GeeksforGeeks",
    date: "Continuous Milestone",
    badge: "Algorithmic Excellence",
    icon: "Flame",
    description: "Solved 500+ problems across LeetCode and GeeksforGeeks with mastery over Dynamic Programming, Trees, Graphs, and binary search optimization."
  },
  {
    title: "Java (Basic) Certification",
    issuer: "HackerRank",
    date: "Verified Credential",
    badge: "Language & OOP Mastery",
    icon: "Award",
    description: "Earned the HackerRank Java (Basic) certification covering OOP, exception handling, collections, and multithreading fundamentals."
  },
  {
    title: "Full-Stack Deployments on Render",
    issuer: "Docker Containerization",
    date: "Production Live",
    badge: "DevOps & Cloud",
    icon: "Layers",
    description: "Containerized with Docker and deployed 2 full-stack applications (CODEXA, CVision) live on Render with isolated execution and production security."
  }
];

export const terminalCommands = {
  help: "Available commands:\n  • about        - Summary of Nitesh Verma\n  • skills       - Categorized technical competencies\n  • projects     - CODEXA & CVision architectures\n  • leetcode     - DSA stats across LeetCode & GFG\n  • devops       - Docker & Render cloud infrastructure\n  • contact      - Email, phone, location & profiles\n  • hire         - Why Nitesh is a great engineering hire\n  • clear        - Clear the terminal console",
  about: "Nitesh Verma | Computer Science Undergrad @ GLA University (2023–2027)\nFull Stack Developer • AI/ML & DevOps Engineer • 500+ DSA Solved (LeetCode & GFG)\nLocation: Mathura, Uttar Pradesh, India",
  skills: "LANGUAGES: Java (Core, OOP, Collections), Python, JavaScript (ES6+), C, SQL\nFRONTEND:  React.js, Tailwind CSS, Monaco Editor, HTML5, CSS3, Vite\nBACKEND:   Node.js, Express.js, FastAPI, RESTful APIs, JWT, Multer\nAI/ML:     Sentence-Transformers (all-MiniLM-L6-v2), Scikit-learn, RapidFuzz, Azure OpenAI, RAG, Ollama (Phi-3)\nDEVOPS:    Docker (OpenJDK 17 sandbox), Render, Linux/Bash, Git/GitHub, Postman\nCORE:      DSA (500+), OOP, DBMS, OS Basics",
  projects: "1. CODEXA: Online Code Judge & Competitive Programming Platform\n   - Docker containerized Java (OpenJDK 17) sandbox via Node.js child processes with timeout/memory limits\n   - Driver-code assembly & verdict checking (Accepted, WA, TLE, CE)\n   - Monaco Editor integration, JWT RBAC, and MongoDB telemetry\n\n2. CVision: AI-Powered Resume Screener & Career Intelligence Platform\n   - Dual-service: Express.js backend + Python FastAPI ML service via IPC\n   - Semantic matching with Sentence-Transformers (all-MiniLM-L6-v2) & TF-IDF fallback\n   - 60+ tech alias pipeline with RapidFuzz + Ollama (Phi-3) feedback + Helmet/Bcrypt",
  leetcode: "Algorithmic Problem Solving:\n  Total Solved: 500+ across LeetCode & GeeksforGeeks\n  Easy: 215+ | Medium: 245+ | Hard: 40+\n  Acceptance Rate: ~69.2%\n  Core Topics: Dynamic Programming, Trees & BST, Graphs, Arrays, Binary Search\n  Certification: HackerRank Java (Basic) Certified (OOP, Collections, Multithreading)",
  devops: "DevOps & Deployment Architecture:\n  - Isolated Docker execution environments for untrusted code execution\n  - Containerized production deployments of CODEXA and CVision live on Render\n  - Linux / Bash scripting for automation and IPC socket discovery",
  contact: "Email: nitesh.verma_cs23@gla.ac.in\nPhone: +91 9198778130\nCity: Mathura, Uttar Pradesh, India\nGitHub: github.com | LinkedIn: linkedin.com | LeetCode: leetcode.com",
  hire: "Why hire Nitesh?\n  ✓ Full-stack & DevOps: Builds production Dockerized apps with isolated sandboxes (CODEXA).\n  ✓ AI & Systems: Implements microservices (FastAPI + Express), semantic NLP (Sentence-Transformers), and RAG.\n  ✓ Strong Problem Solver: 500+ algorithmic problems solved on LeetCode & GFG.\n  ✓ Verified Code Quality: HackerRank Java Certified, clean architecture, and rapid adaptability."
};
