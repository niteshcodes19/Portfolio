import React, { useState } from 'react';
import { 
  Code, 
  Layout, 
  Server, 
  Database, 
  BrainCircuit, 
  Wrench,
  CheckCircle,
  Zap,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code: Code,
  Layout: Layout,
  Server: Server,
  Database: Database,
  BrainCircuit: BrainCircuit,
  Wrench: Wrench
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.categories.map((c) => c.title)];

  const filteredCategories = activeCategory === 'All'
    ? skillsData.categories
    : skillsData.categories.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">Engineering Arsenal</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Versatile stack spanning robust backend engineering, responsive frontend frameworks, database architecture, and algorithmic mastery.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white text-slate-600 hover:text-emerald-800 border border-emerald-100 hover:border-emerald-300 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup, idx) => {
            const Icon = iconMap[catGroup.icon] || Code;

            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-emerald-100/90 hover:border-emerald-300 shadow-xl shadow-emerald-500/5 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Category title */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-100">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{catGroup.title}</h3>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {catGroup.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {catGroup.skills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div className="flex justify-between items-center text-xs mb-1.5">
                          <span className="font-bold text-slate-800">{skill.name}</span>
                          <span className="text-emerald-700 font-mono text-[11px] font-semibold">{skill.level}%</span>
                        </div>
                        
                        {/* Progress meter */}
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-700"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        <div className="text-[11px] text-emerald-800 font-mono mt-1 flex items-center gap-1 font-medium">
                          <span className="text-emerald-500">&bull;</span>
                          <span>{skill.highlight}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer indicator */}
                <div className="mt-6 pt-4 border-t border-emerald-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-600" /> Hands-on Tested
                  </span>
                  <span>MERN &bull; Java</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
