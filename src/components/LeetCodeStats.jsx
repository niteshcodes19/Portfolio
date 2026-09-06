import React, { useState } from 'react';
import { 
  Code2, 
  Flame, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  Target, 
  Cpu, 
  GitFork, 
  Share2, 
  Layers, 
  Search,
  ExternalLink
} from 'lucide-react';
import { leetcodeStats } from '../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  GitFork: GitFork,
  Share2: Share2,
  Code2: Code2,
  Layers: Layers,
  Search: Search
};

export default function LeetCodeStats() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const total = leetcodeStats.totalSolved;
  const easy = leetcodeStats.breakdown.easy.count;
  const medium = leetcodeStats.breakdown.medium.count;
  const hard = leetcodeStats.breakdown.hard.count;

  return (
    <section id="leetcode" className="py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            <Flame className="w-3.5 h-3.5 text-emerald-600 fill-emerald-500" />
            <span>Problem Solving & Algorithms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            500+ DSA Problems <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">Conquered</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            A proven track record of algorithmic problem solving with Java & C++. Rigorous practice in data structures, time-space optimization, and clean logic.
          </p>
        </div>

        {/* Main Stats Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Overall Solved Card */}
          <div className="lg:col-span-5 p-7 rounded-3xl bg-white border border-emerald-100/90 flex flex-col justify-between shadow-xl shadow-emerald-500/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/15 transition-all" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">LeetCode Profile</h3>
                    <p className="text-xs text-slate-500 font-mono">Continuous Problem Solver</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold">
                  {leetcodeStats.acceptanceRate} Acceptance
                </span>
              </div>

              {/* Big Score Metric */}
              <div className="py-6 flex flex-col items-center justify-center border-y border-emerald-100 my-4 text-center">
                <span className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-500">
                  500+
                </span>
                <span className="text-slate-800 font-bold mt-1">Problems Solved Across Difficulties</span>
                <span className="text-xs text-slate-500 font-mono mt-0.5">Java &bull; Object-Oriented Design &bull; Optimal Complexity</span>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4 my-4">
                {/* Easy */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> Easy
                    </span>
                    <span className="text-slate-700 font-semibold">{easy} solved</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-1000"
                      style={{ width: `${(easy / total) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Medium */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-teal-700 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-teal-500" /> Medium
                    </span>
                    <span className="text-slate-700 font-semibold">{medium} solved</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full transition-all duration-1000"
                      style={{ width: `${(medium / total) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Hard */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-emerald-900 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-800" /> Hard
                    </span>
                    <span className="text-slate-700 font-semibold">{hard} solved</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-700 to-teal-800 rounded-full transition-all duration-1000"
                      style={{ width: `${(hard / total) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom highlights */}
            <div className="pt-4 border-t border-emerald-100 flex items-center justify-between text-xs text-slate-600 font-mono">
              <span className="flex items-center gap-1 font-semibold text-emerald-800">
                <Zap className="w-3.5 h-3.5 text-emerald-600" /> HackerRank Java Certified
              </span>
              <a 
                href="https://leetcode.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 hover:underline font-semibold"
              >
                Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right: Core Topics Matrix & Methodology */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Top Algorithmic Topics */}
            <div className="p-7 rounded-3xl bg-white border border-emerald-100/90 shadow-xl shadow-emerald-500/5">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-600" />
                  <span>Topic Breakdown & Solved Count</span>
                </h3>
                <span className="text-xs text-slate-500 font-mono">Click to inspect</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {leetcodeStats.topTopics.map((topic, i) => {
                  const Icon = iconMap[topic.icon] || Code2;
                  const isSelected = selectedTopic === topic.name;
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedTopic(isSelected ? null : topic.name)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-50 border-emerald-400 shadow-sm shadow-emerald-500/20'
                          : 'bg-slate-50/70 border-emerald-100/80 hover:border-emerald-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-600' : 'text-slate-500'}`} />
                        <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                          {topic.count}+
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-800 truncate">{topic.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Engineering Problem-Solving Methodology */}
            <div className="p-7 rounded-3xl bg-white border border-emerald-100/90 shadow-xl shadow-emerald-500/5">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>My Algorithmic Approach</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100/80">
                  <div className="font-bold text-emerald-800 mb-1">1. Pattern Recognition</div>
                  <p className="text-slate-600 leading-relaxed">
                    Identify core invariants, boundary conditions, and map to optimal patterns (Sliding Window, Monotonic Stack, Two Pointers).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100/80">
                  <div className="font-bold text-teal-800 mb-1">2. Complexity Optimization</div>
                  <p className="text-slate-600 leading-relaxed">
                    Iterate from naive brute force to optimal `O(N)` or `O(log N)` runtime, keeping auxiliary memory overhead strictly controlled.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-green-50/50 border border-green-100/80">
                  <div className="font-bold text-green-800 mb-1">3. Modular & Clean Code</div>
                  <p className="text-slate-600 leading-relaxed">
                    Write readable, maintainable, object-oriented code following Java best practices and modular functional patterns.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
