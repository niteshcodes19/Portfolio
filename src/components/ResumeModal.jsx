import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, ExternalLink, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `NITESH VERMA
+91 9198778130 | nitesh.verma_cs23@gla.ac.in | Mathura, Uttar Pradesh, India
LinkedIn | GitHub | LeetCode (500+ Solved) | Portfolio

EDUCATION
GLA University                                                  Mathura, UP | 2023 – 2027 (Expected)
Bachelor of Technology in Computer Science & Engineering                           CGPA: 7.03 / 10.0
Senior Secondary (12th) — Powayan Inter College | UP Board                               2021 | 74.6%
Secondary (10th) — P.D. Bhartiya Inter College | UP Board                                2019 | 84.6%

TECHNICAL SKILLS
Languages: Java (Core, OOP, Collections), Python, JavaScript (ES6+), C, SQL
Frontend Development: React.js, Tailwind CSS, Monaco Editor, HTML5, CSS3, Vite
Backend & APIs: Node.js, Express.js, FastAPI, RESTful APIs, JWT Authentication, Multer
AI & Machine Learning: Scikit-learn, Sentence-Transformers, NLTK, RapidFuzz, Azure OpenAI, Prompt Engineering
Databases & DevOps: MongoDB, Docker, Git, GitHub, Postman, Linux / Bash
Core Fundamentals: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), DBMS, OS Basics

PROJECTS
CODEXA — Online Code Judge & Competitive Programming Platform [GitHub] [Live Demo]
React.js, Node.js, Express.js, MongoDB, Docker, OpenJDK 17, Monaco Editor, JWT
• Built a remote code execution engine that compiles and runs user-submitted Java inside Docker containers (OpenJDK 17) launched from Node.js child processes, enforcing timeout and memory limits on every submission.
• Automated driver-code assembly (Java import reordering, stdin/stdout normalization) and verdict checking: Accepted, Wrong Answer, TLE, Compilation Error.
• Integrated Monaco Editor (VS Code engine) for syntax highlighting and live execution, with a categorized problem library, difficulty filters and tag search.
• Built REST APIs with JWT authentication and role-based access, plus MongoDB schemas for submission tracking, telemetry and user analytics dashboards.

CVision — AI-Powered Resume Screener & Career Intelligence Platform [GitHub] [Live Demo]
React 19, Node.js, Express.js, Python FastAPI, Scikit-learn, Sentence-Transformers, MongoDB
• Built a resume screener with an Express.js backend and a separate Python FastAPI ML service, connected via IPC with dynamic port discovery.
• Implemented semantic resume-to-job-description matching with Sentence-Transformers (all-MiniLM-L6-v2) and cosine similarity to compute ATS match scores, with a Scikit-learn TF-IDF fallback.
• Built a skill-extraction pipeline mapping 60+ technology aliases with RapidFuzz and regex to flag missing skills and compare applicants against job descriptions.
• Added personalized resume feedback using Ollama (Phi-3), and secured the backend with Helmet headers, rate limiting and bcrypt/JWT-protected routes.

TRAINING & EXPERIENCE
GenAI with Azure — Summer Trainee (JOVAC) GLA University | June 2025 – July 2025
• Built generative AI prototypes on Microsoft Azure using Azure OpenAI Service (GPT models), prompt engineering workflows and system integration.
• Applied Retrieval-Augmented Generation (RAG) with text embeddings and vector search to ground responses in external knowledge bases and reduce hallucinations.

ACHIEVEMENTS & PROBLEM SOLVING
• 500+ DSA Problems Solved: Solved 500+ problems across LeetCode and GeeksforGeeks.
• HackerRank Certified: Earned the HackerRank Java (Basic) certification covering OOP, exception handling, collections and multithreading fundamentals.
• Full-Stack Deployments: Containerized with Docker and deployed 2 full-stack applications (CODEXA, CVision) live on Render.`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-white border border-emerald-200 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col">
        
        {/* Header bar */}
        <div className="p-4 sm:p-5 border-b border-emerald-100 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs">
              CV
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">Nitesh Verma — Official Resume</h3>
              <p className="text-[11px] text-emerald-700 font-mono font-medium">B.Tech CSE &bull; GLA University &bull; 2023–2027</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors cursor-pointer"
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable printable Resume sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white font-sans text-slate-800 text-xs sm:text-sm space-y-6 select-text">
          
          {/* Resume Header */}
          <div className="text-center pb-6 border-b border-slate-200">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 font-mono mt-2 font-medium">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-600" /> {personalInfo.phone}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-emerald-600" /> {personalInfo.email}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-600" /> {personalInfo.location}
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 text-xs font-mono text-emerald-700 mt-2 font-bold">
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <span>&bull;</span>
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              <span>&bull;</span>
              <a href="#leetcode" onClick={onClose} className="hover:underline">LeetCode (500+ Solved)</a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono border-b border-emerald-100 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span>GLA University</span>
                  <span className="font-mono text-xs text-slate-500">Mathura, UP | 2023 – 2027 (Expected)</span>
                </div>
                <div className="flex justify-between text-xs text-slate-700 mt-0.5">
                  <span>Bachelor of Technology in Computer Science & Engineering</span>
                  <span className="font-mono font-semibold text-emerald-800">CGPA: 7.03 / 10.0</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-xs">
                  <span className="font-bold text-slate-800">Senior Secondary (12th) — Powayan Inter College | UP Board</span>
                  <span className="font-mono text-slate-500">2021 | 74.6%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-xs">
                  <span className="font-bold text-slate-800">Secondary (10th) — P.D. Bhartiya Inter College | UP Board</span>
                  <span className="font-mono text-slate-500">2019 | 84.6%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono border-b border-emerald-100 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
              <div><strong className="text-slate-900 font-bold">Languages:</strong> Java (Core, OOP, Collections), Python, JavaScript (ES6+), C, SQL</div>
              <div><strong className="text-slate-900 font-bold">Frontend Development:</strong> React.js, Tailwind CSS, Monaco Editor, HTML5, CSS3, Vite</div>
              <div><strong className="text-slate-900 font-bold">Backend & APIs:</strong> Node.js, Express.js, FastAPI, RESTful APIs, JWT Authentication, Multer</div>
              <div><strong className="text-slate-900 font-bold">AI & Machine Learning:</strong> Scikit-learn, Sentence-Transformers, NLTK, RapidFuzz, Azure OpenAI, Prompt Engineering</div>
              <div><strong className="text-slate-900 font-bold">Databases & DevOps:</strong> MongoDB, Docker, Git, GitHub, Postman, Linux / Bash</div>
              <div><strong className="text-slate-900 font-bold">Core Fundamentals:</strong> Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), DBMS, OS Basics</div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono border-b border-emerald-100 pb-1 mb-3">
              Projects
            </h2>
            
            {/* CODEXA */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-slate-900 text-sm">CODEXA — Online Code Judge & Competitive Programming Platform</span>
                <span className="text-xs text-emerald-700 font-mono font-bold">[GitHub] [Live Demo]</span>
              </div>
              <div className="text-[11px] font-mono text-slate-500 font-medium mb-1">
                React.js, Node.js, Express.js, MongoDB, Docker, OpenJDK 17, Monaco Editor, JWT
              </div>
              <ul className="list-disc list-inside space-y-1 mt-1 text-slate-700 text-xs leading-relaxed">
                <li>Built a remote code execution engine that compiles and runs user-submitted Java inside Docker containers (OpenJDK 17) launched from Node.js child processes, enforcing timeout and memory limits on every submission.</li>
                <li>Automated driver-code assembly (Java import reordering, stdin/stdout normalization) and verdict checking: Accepted, Wrong Answer, TLE, Compilation Error.</li>
                <li>Integrated Monaco Editor (VS Code engine) for syntax highlighting and live execution, with a categorized problem library, difficulty filters and tag search.</li>
                <li>Built REST APIs with JWT authentication and role-based access, plus MongoDB schemas for submission tracking, telemetry and user analytics dashboards.</li>
              </ul>
            </div>

            {/* CVision */}
            <div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-slate-900 text-sm">CVision — AI-Powered Resume Screener & Career Intelligence Platform</span>
                <span className="text-xs text-emerald-700 font-mono font-bold">[GitHub] [Live Demo]</span>
              </div>
              <div className="text-[11px] font-mono text-slate-500 font-medium mb-1">
                React 19, Node.js, Express.js, Python FastAPI, Scikit-learn, Sentence-Transformers, MongoDB
              </div>
              <ul className="list-disc list-inside space-y-1 mt-1 text-slate-700 text-xs leading-relaxed">
                <li>Built a resume screener with an Express.js backend and a separate Python FastAPI ML service, connected via IPC with dynamic port discovery.</li>
                <li>Implemented semantic resume-to-job-description matching with Sentence-Transformers (all-MiniLM-L6-v2) and cosine similarity to compute ATS match scores, with a Scikit-learn TF-IDF fallback.</li>
                <li>Built a skill-extraction pipeline mapping 60+ technology aliases with RapidFuzz and regex to flag missing skills and compare applicants against job descriptions.</li>
                <li>Added personalized resume feedback using Ollama (Phi-3), and secured the backend with Helmet headers, rate limiting and bcrypt/JWT-protected routes.</li>
              </ul>
            </div>
          </div>

          {/* Training & Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono border-b border-emerald-100 pb-1 mb-2">
              Training & Experience
            </h2>
            <div>
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>GenAI with Azure — Summer Trainee (JOVAC)</span>
                <span className="font-mono text-xs text-slate-500">GLA University | June 2025 – July 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-1 mt-1 text-slate-700 text-xs">
                <li>Built generative AI prototypes on Microsoft Azure using Azure OpenAI Service (GPT models), prompt engineering workflows and system integration.</li>
                <li>Applied Retrieval-Augmented Generation (RAG) with text embeddings and vector search to ground responses in external knowledge bases and reduce hallucinations.</li>
              </ul>
            </div>
          </div>

          {/* Achievements & Problem Solving */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono border-b border-emerald-100 pb-1 mb-2">
              Achievements & Problem Solving
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
              <li><strong className="text-slate-900">500+ DSA Problems Solved:</strong> Solved 500+ problems across LeetCode and GeeksforGeeks.</li>
              <li><strong className="text-slate-900">HackerRank Certified:</strong> Earned the HackerRank Java (Basic) certification covering OOP, exception handling, collections and multithreading fundamentals.</li>
              <li><strong className="text-slate-900">Full-Stack Deployments:</strong> Containerized with Docker and deployed 2 full-stack applications (CODEXA, CVision) live on Render.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
