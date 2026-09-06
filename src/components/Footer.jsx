import React from 'react';
import { ArrowUp, Code2, Heart, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-emerald-100 bg-white/90 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 p-[1.5px] shadow-sm">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-emerald-600 text-sm">NV</span>
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">{personalInfo.name}</div>
              <div className="text-xs text-slate-500 font-mono">
                Full Stack MERN &bull; 500+ LeetCode &bull; B.Tech CSE @ GLA
              </div>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-semibold">
            <a href="#hero" className="hover:text-emerald-700 transition-colors">Home</a>
            <a href="#leetcode" className="hover:text-emerald-700 transition-colors">LeetCode (500+)</a>
            <a href="#projects" className="hover:text-emerald-700 transition-colors">CODEXA & CVision</a>
            <a href="#skills" className="hover:text-emerald-700 transition-colors">Skills</a>
            <a href="#education" className="hover:text-emerald-700 transition-colors">Education</a>
            <button
              onClick={onOpenResume}
              className="text-emerald-700 hover:underline cursor-pointer"
            >
              Resume
            </button>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 transition-colors shadow-2xs"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 transition-colors shadow-2xs"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 transition-colors cursor-pointer shadow-2xs"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3">
          <div>
            &copy; {new Date().getFullYear()} Nitesh Verma. Engineered with React, Tailwind & Vite.
          </div>
          <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
            <span>Designed with green & white minimalism</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
