import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Code2, 
  Terminal, 
  Sparkles, 
  MapPin, 
  CheckCircle2,
  Cpu,
  Layers,
  Award
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero({ onOpenResume, onOpenTerminal }) {
  const titles = [
    "Full Stack & DevOps Engineer",
    "500+ Problems (LeetCode & GFG)",
    "Creator of CODEXA (Docker Code Judge)",
    "Creator of CVision (AI Resume Screener)",
    "Azure GenAI & RAG Practitioner"
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold shadow-sm shadow-emerald-500/10 mb-8 animate-fade-in backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 -ml-4" />
            <span>Open to Opportunities &bull; B.Tech CSE @ GLA University</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">
              {personalInfo.name}
            </span>
          </h1>

          {/* Typing Subtitle */}
          <div className="h-12 sm:h-14 flex items-center justify-center mb-6">
            <p className="font-mono text-lg sm:text-2xl text-slate-800 flex items-center font-medium">
              <span className="text-emerald-600 mr-2 font-bold">&gt;</span>
              <span>{displayText}</span>
              <span className="inline-block w-2.5 h-6 ml-1 bg-emerald-600 animate-pulse" />
            </p>
          </div>

          {/* Summary paragraph */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mb-10">
            Passionate software engineer skilled in <span className="text-slate-900 font-semibold">Java (Core, OOP, Collections)</span>, <span className="text-slate-900 font-semibold">Full-Stack MERN</span>, and <span className="text-slate-900 font-semibold">DevOps & AI Systems</span>. Architect of <span className="text-emerald-700 font-semibold">CODEXA</span> (Docker-sandboxed OpenJDK 17 online judge) and <span className="text-teal-700 font-semibold">CVision</span> (FastAPI + Sentence-Transformers NLP screener), with <span className="text-emerald-600 font-bold">500+ problems solved</span> across LeetCode & GeeksforGeeks.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-emerald-50/70 text-slate-700 hover:text-emerald-700 font-semibold text-sm border border-emerald-100/90 hover:border-emerald-300 transition-all cursor-pointer transform hover:-translate-y-0.5 shadow-sm shadow-emerald-500/5"
            >
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>View Resume</span>
            </button>

            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-emerald-50/70 text-emerald-800 font-mono text-sm border border-emerald-200 hover:border-emerald-400 transition-all cursor-pointer shadow-sm shadow-emerald-500/5"
            >
              <Terminal className="w-4 h-4 text-emerald-600" />
              <span>Terminal CLI</span>
            </button>
          </div>

          {/* Quick Info & Socials */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-mono border-t border-emerald-100 pt-6 w-full max-w-2xl">
            <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>{personalInfo.location}</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-700" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-700" />
                <span>LinkedIn</span>
              </a>

              <a
                href="#leetcode"
                className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
              >
                <LeetCodeIcon className="w-4 h-4 text-emerald-600" />
                <span>LeetCode (500+)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Highlight Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white border border-emerald-100/80 hover:border-emerald-300 shadow-md shadow-emerald-500/5 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl font-extrabold mb-1 group-hover:scale-105 transition-transform origin-left inline-block">
                <span className={`bg-gradient-to-r ${item.highlight} bg-clip-text text-transparent`}>
                  {item.value}
                </span>
              </div>
              <div className="font-bold text-slate-800 text-sm">{item.label}</div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">{item.subtext}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
