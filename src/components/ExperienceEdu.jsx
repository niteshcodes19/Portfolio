import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { education, experienceAndTraining } from '../data/portfolioData';

export default function ExperienceEdu() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Academic & Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">Specialized Training</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Solid foundations in computer science theory from GLA University complemented by hands-on GenAI cloud training on Microsoft Azure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Professional Training / Experience Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Specialized Industry Training</h3>
            </div>

            {experienceAndTraining.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-emerald-200 shadow-xl shadow-emerald-500/5 relative overflow-hidden"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-emerald-700 font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    {item.duration}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-1">{item.role}</h4>
                <div className="text-xs text-emerald-700 font-bold mb-4">{item.organization}</div>

                <div className="space-y-2.5">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick highlight box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white border border-emerald-200 shadow-sm">
              <div className="text-xs font-mono text-emerald-800 uppercase font-bold mb-2">
                Core Coursework Focus
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs font-mono text-slate-700">
                <span className="px-2.5 py-1 rounded-lg bg-white border border-emerald-200 shadow-2xs font-medium">Data Structures</span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-emerald-200 shadow-2xs font-medium">Design & Analysis of Algorithms</span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-emerald-200 shadow-2xs font-medium">Database Management (DBMS)</span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-emerald-200 shadow-2xs font-medium">Operating Systems</span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-emerald-200 shadow-2xs font-medium">Object-Oriented Programming (OOP)</span>
              </div>
            </div>
          </div>

          {/* Education Timeline Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Education History</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-emerald-100/90 hover:border-emerald-300 transition-all duration-300 shadow-xl shadow-emerald-500/5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-slate-900">{edu.institution}</h4>
                    <span className="text-xs font-mono text-emerald-700 font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      {edu.duration}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-slate-800">{edu.degree}</span>
                    {edu.score && (
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-mono font-bold">
                        {edu.score}
                      </span>
                    )}
                    {edu.status && (
                      <span className="text-xs font-mono text-emerald-700 font-medium">
                        &bull; {edu.status}
                      </span>
                    )}
                  </div>

                  {edu.highlights && (
                    <ul className="mt-3 space-y-1.5">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
