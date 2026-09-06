import React from 'react';
import { Award, Flame, Layers, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const iconMap = {
  Award: Award,
  Flame: Flame,
  Layers: Layers,
};

export default function Certifications() {
  const softSkills = [
    "Algorithmic Problem Solving",
    "Technical Communication",
    "Agile Teamwork",
    "Ownership & Leadership",
    "Sprint & Time Management",
    "Code Review & Documentation"
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">Achievements</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Recognized skills and verified credentials underscoring technical execution and problem-solving grit.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {certifications.map((item, idx) => {
            const Icon = iconMap[item.icon] || Award;

            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-emerald-100/90 hover:border-emerald-300 shadow-xl shadow-emerald-500/5 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono border border-emerald-200 font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-700 mb-4 flex items-center gap-1.5 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{item.issuer} &bull; {item.date}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-100 flex items-center text-xs font-mono text-emerald-700 gap-1.5 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Credential</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills & Working Style Card */}
        <div className="p-8 rounded-3xl bg-white border border-emerald-200 shadow-xl shadow-emerald-500/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono uppercase mb-2 font-bold">
                <HeartHandshake className="w-4 h-4 text-emerald-600" />
                <span>Core Competencies & Soft Skills</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">How I Work & Collaborate</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Technical ability paired with clear communication, reliability, problem-solving determination, and rapid adaptability in fast-paced software environments.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 max-w-md justify-start md:justify-end">
              {softSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold hover:bg-emerald-100 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
