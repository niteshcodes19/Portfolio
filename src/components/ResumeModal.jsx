import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, ExternalLink, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { personalInfo, education, projects, skillsData, experienceAndTraining, certifications } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `NITESH VERMA
${personalInfo.phone} | ${personalInfo.email} | ${personalInfo.location}

PROFESSIONAL SUMMARY
Computer Science undergraduate skilled in Java, DSA, and MERN stack development, with hands-on experience building fullstack and AI-powered applications. Developed CODEXA, a coding platform, and CVision, an AI Resume Analyzer integrating Machine Learning and REST APIs. Strong foundation in backend development, authentication, databases, and problem solving, with 500+ DSA problems solved on LeetCode.

EDUCATION
- GLA University, Mathura: B.Tech Computer Science Engineering (2023 - 2027)
- Powayan Inter College: 12th (2021) | 74.6%
- P.D. Bhartiya Inter College: 10th (2019) | 84.6%

TECHNICAL SKILLS
- Programming Languages: Java, C, Python, SQL, JavaScript
- Frontend: HTML, CSS, React
- Backend: Node.js, Express.js
- Database: MongoDB
- Concepts: OOP, DSA, REST APIs
- Tools: Git, GitHub, VS Code, Postman
- Operating Systems: Windows, Linux

PROJECTS
1. CODEXA | React.js, Node.js, Express.js, MongoDB, JWT, REST APIs
- Developed a full-stack coding platform inspired by LeetCode.
- Implemented JWT-based authentication, RBAC, and secure RESTful APIs.
- Built features: problem categorization, search, difficulty filters, and personalized dashboards.
- Designed responsive React frontend & optimized MongoDB queries.

2. CVision | MERN Stack, RESTful API, JWT, Python, Machine Learning, Multer
- Developed full-stack AI Resume Analyzer using MERN stack to analyze resumes against job descriptions.
- Built RESTful APIs using Node.js & Express.js for resume upload, authentication, and processing.
- Developed and integrated ML model to extract resume attributes and ATS compatibility scores.

TRAINING
- Gen AI with Azure — Summer Training (JOVAC), GLA University (June 2025 - July 2025)

CERTIFICATIONS
- Java Basic Certification — HackerRank
- 500+ DSA Problems Solved on LeetCode`;

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
              <a href="#leetcode" onClick={onClose} className="hover:underline">LeetCode (500+)</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono border-b border-emerald-100 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              Computer Science undergraduate skilled in Java, DSA, and MERN stack development, with hands-on experience building fullstack and AI-powered applications. Developed CODEXA, a coding platform, and CVision, an AI Resume Analyzer integrating Machine Learning and REST APIs. Strong foundation in backend development, authentication, databases, and problem solving, with 500+ DSA problems solved on LeetCode.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono border-b border-emerald-100 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span>GLA University, Mathura — B.Tech, Computer Science Engineering</span>
                  <span className="font-mono text-xs text-slate-500">2023 – 2027</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span>Powayan Inter College — 12th Grade</span>
                  <span className="font-mono text-xs text-slate-500">2021</span>
                </div>
                <div className="text-slate-600 font-mono text-xs">Percentage: 74.6%</div>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span>P.D. Bhartiya Inter College — 10th Grade</span>
                  <span className="font-mono text-xs text-slate-500">2019</span>
                </div>
                <div className="text-slate-600 font-mono text-xs">Percentage: 84.6%</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono border-b border-emerald-100 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div><strong className="text-slate-900">Programming Languages:</strong> Java, C, Python, SQL, JavaScript</div>
              <div><strong className="text-slate-900">Frontend:</strong> HTML, CSS, React, Tailwind CSS</div>
              <div><strong className="text-slate-900">Backend:</strong> Node.js, Express.js, JWT, REST APIs, Multer</div>
              <div><strong className="text-slate-900">Database:</strong> MongoDB, Mongoose</div>
              <div><strong className="text-slate-900">Concepts:</strong> OOP, DSA (500+ LeetCode), REST APIs</div>
              <div><strong className="text-slate-900">Tools & Cloud:</strong> Git, GitHub, VS Code, Postman, Azure GenAI</div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono border-b border-emerald-100 pb-1 mb-3">
              Featured Projects
            </h2>
            
            {/* CODEXA */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-slate-900 text-sm">CODEXA | React.js, Node.js, Express.js, MongoDB, JWT, REST APIs</span>
                <span className="text-xs text-emerald-700 font-mono font-bold">Live Demo</span>
              </div>
              <ul className="list-disc list-inside space-y-1 mt-1 text-slate-700 text-xs">
                <li>Developed a full-stack coding platform inspired by LeetCode, allowing users to practice coding problems, submit solutions, and monitor their learning progress.</li>
                <li>Implemented JWT-based authentication, role-based access control, and secure RESTful APIs for user management, problem handling, and submissions.</li>
                <li>Built features such as problem categorization, search, difficulty filters, and personalized dashboards to enhance the coding experience.</li>
                <li>Designed a responsive React frontend and optimized MongoDB database operations to ensure fast, scalable, and reliable application performance.</li>
              </ul>
            </div>

            {/* CVision */}
            <div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-slate-900 text-sm">CVision | MERN Stack, RESTful API, JWT, Python, Machine Learning, Multer</span>
                <span className="text-xs text-emerald-700 font-mono font-bold">Live Demo</span>
              </div>
              <ul className="list-disc list-inside space-y-1 mt-1 text-slate-700 text-xs">
                <li>Developed a full-stack AI Resume Analyzer using the MERN stack to analyze resumes against job descriptions and generate an ATS-style compatibility score with actionable insights.</li>
                <li>Built RESTful APIs using Node.js and Express.js for resume upload, user authentication, resume analysis, and result processing with JWT-based authentication and protected routes.</li>
                <li>Developed and integrated a machine learning model trained on a custom dataset to extract and evaluate resume attributes, including skills, experience, education, and job-description relevance.</li>
                <li>Built a responsive React.js dashboard to display resume analysis results and recommendations.</li>
              </ul>
            </div>
          </div>

          {/* Training */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono border-b border-emerald-100 pb-1 mb-2">
              Training
            </h2>
            <div>
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>Gen AI with Azure — Summer Training (JOVAC), GLA University</span>
                <span className="font-mono text-xs text-slate-500">June 2025 – July 2025</span>
              </div>
              <p className="text-xs text-slate-700 mt-1">
                Built and deployed GenAI solutions on Microsoft Azure, working hands-on with Azure OpenAI, prompt engineering, and AI-powered application design.
              </p>
            </div>
          </div>

          {/* Certifications & Soft Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono border-b border-emerald-100 pb-1 mb-2">
              Certifications & Soft Skills
            </h2>
            <div className="space-y-1 text-xs text-slate-700">
              <div><strong className="text-slate-900">Certifications:</strong> Java Basic Certification — HackerRank</div>
              <div><strong className="text-slate-900">Soft Skills:</strong> Problem Solving, Communication, Teamwork, Leadership, Time Management</div>
              <div><strong className="text-slate-900">Key Milestone:</strong> 500+ DSA Problems Solved on LeetCode across Java & C++</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
