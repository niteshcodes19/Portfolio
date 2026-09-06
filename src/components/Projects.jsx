import React, { useState } from 'react';
import { 
  Code, 
  FileSearch, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Server, 
  Cpu, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="py-24 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Crafted for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">Scale & Performance</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Full-stack MERN and AI-powered applications engineered with production-ready REST APIs, authentication security, and intuitive user experiences.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project) => {
            const isCodexa = project.id === 'codexa';

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-white border border-emerald-100/90 hover:border-emerald-300 shadow-xl shadow-emerald-500/5 p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 relative overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />

                <div>
                  {/* Top bar */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                        {isCodexa ? <Code className="w-6 h-6" /> : <FileSearch className="w-6 h-6" />}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs text-slate-500 font-mono">
                          {project.tagline}
                        </span>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold whitespace-nowrap">
                      {project.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Core Features list */}
                  <div className="space-y-2.5 mb-8">
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-emerald-50/80 border border-emerald-100 text-emerald-900 text-xs font-mono font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA actions */}
                <div className="pt-6 border-t border-emerald-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                    <span>Test Drive Live Simulator</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-xs font-semibold border border-emerald-100/90 shadow-sm transition-colors cursor-pointer"
                    >
                      Architecture
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-emerald-100/90 shadow-sm transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Highlight Banner: Azure GenAI Summer Training Project */}
        <div className="mt-10 p-7 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50/60 to-white border border-emerald-200 shadow-xl shadow-emerald-500/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <Cpu className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-xl font-bold text-slate-900">GenAI with Azure & Prompt Engineering</h4>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 font-mono font-semibold">
                  JOVAC GLA Univ
                </span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
                Hands-on enterprise application development with Microsoft Azure OpenAI, prompt engineering pipelines, and connecting intelligent LLMs with backend RESTful microservices.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2"
            >
              <span>Discuss AI Integrations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
