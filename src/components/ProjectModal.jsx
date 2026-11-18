import React, { useState } from 'react';
import { 
  X, 
  Play, 
  CheckCircle, 
  AlertCircle, 
  Code, 
  FileSearch, 
  ExternalLink, 
  Sparkles,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState('overview');
  const [runningCode, setRunningCode] = useState(false);
  const [codeExecutionDone, setCodeExecutionDone] = useState(false);
  
  // CVision ATS simulator state
  const [targetRole, setTargetRole] = useState('Full Stack MERN Developer');
  const [analyzingResume, setAnalyzingResume] = useState(false);
  const [atsScore, setAtsScore] = useState(project.demoData?.matchScore || 89);

  const handleRunCode = () => {
    setRunningCode(true);
    setCodeExecutionDone(false);
    setTimeout(() => {
      setRunningCode(false);
      setCodeExecutionDone(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, 900);
  };

  const handleRunATSAnalysis = () => {
    setAnalyzingResume(true);
    setTimeout(() => {
      setAnalyzingResume(false);
      const scores = [88, 91, 94, 89];
      setAtsScore(scores[Math.floor(Math.random() * scores.length)]);
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 }
      });
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal dialog */}
      <div className="relative w-full max-w-4xl bg-white border border-emerald-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header bar */}
        <div className="p-6 border-b border-emerald-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white font-bold shadow-md shadow-emerald-600/20`}>
              {project.id === 'codexa' ? <Code className="w-5 h-5" /> : <FileSearch className="w-5 h-5" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono font-semibold">
                  {project.badge}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-mono">{project.tagline}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal tabs */}
        <div className="flex border-b border-emerald-100 bg-white px-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Architecture & Specs
          </button>
          <button
            onClick={() => setActiveTab('interactive')}
            className={`py-3.5 px-4 text-xs font-bold border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'interactive'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Simulator Preview</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto bg-white">
          {activeTab === 'overview' ? (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase text-emerald-800 font-mono mb-2">Project Overview</h4>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-emerald-800 font-mono mb-3">Key Engineering Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-emerald-800 font-mono mb-2">Tech Stack Breakdown</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* Interactive Simulator for CODEXA */}
              {project.id === 'codexa' && (
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl border border-emerald-100">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-emerald-800 font-bold uppercase bg-emerald-100 px-2 py-0.5 rounded">
                          {project.demoData.difficulty}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 font-semibold">
                          Docker Sandbox &bull; OpenJDK 17
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mt-1">{project.demoData.problemTitle}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{project.demoData.description}</p>
                      <div className="text-[11px] font-mono text-emerald-700 font-medium mt-1">
                        ⚡ {project.demoData.runnerInfo}
                      </div>
                    </div>

                    <button
                      onClick={handleRunCode}
                      disabled={runningCode}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all cursor-pointer whitespace-nowrap self-start sm:self-center"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{runningCode ? 'Compiling in Docker...' : 'Execute in Sandbox'}</span>
                    </button>
                  </div>

                  {/* Code Editor Preview (Monaco Editor Style) */}
                  <div className="rounded-2xl bg-[#061712] border border-emerald-900/40 overflow-hidden font-mono text-xs shadow-lg">
                    <div className="bg-[#040f0c] px-4 py-2 border-b border-emerald-900/30 flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <Code className="w-3.5 h-3.5" /> Solution.java
                      </span>
                      <span className="text-emerald-500/80 font-mono text-[11px]">OpenJDK 17 &bull; Monaco Engine</span>
                    </div>
                    <pre className="p-4 text-emerald-300 overflow-x-auto leading-relaxed">
                      <code>{project.demoData.codeSnippet}</code>
                    </pre>
                  </div>

                  {/* Test Cases Results with Docker Telemetry */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                      <span className="uppercase font-bold">Driver-Code Assembly & Verdicts:</span>
                      {codeExecutionDone && (
                        <span className="text-emerald-700 font-bold">
                          ✓ Verdict: ACCEPTED (Avg: 35ms &bull; Memory: 24.1 MB)
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {project.demoData.testCases.map((tc, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl border text-xs font-mono transition-all ${
                            codeExecutionDone
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-medium'
                              : 'bg-slate-50 border-slate-200 text-slate-500'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-slate-500 font-semibold">Test Case {idx + 1}</span>
                            {codeExecutionDone && (
                              <span className="text-emerald-700 font-bold bg-emerald-100/80 px-1.5 py-0.2 rounded text-[10px]">
                                {tc.verdict} ({tc.time})
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] truncate text-slate-700">{tc.input}</div>
                          <div className="text-[11px] text-emerald-700 font-semibold mt-1">Expected: {tc.output}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Interactive Simulator for CVision */}
              {project.id === 'cvision' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-emerald-700 font-bold uppercase">
                          AI NLP Resume Screener & Intelligence
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded">
                          FastAPI IPC Service
                        </span>
                      </div>
                      <div className="text-sm font-bold text-slate-900 mt-1">
                        Target Role: {targetRole}
                      </div>
                      <p className="text-xs text-slate-500">
                        Sentence-Transformers (all-MiniLM-L6-v2) + RapidFuzz (60+ tech aliases) + Ollama (Phi-3)
                      </p>
                    </div>

                    <button
                      onClick={handleRunATSAnalysis}
                      disabled={analyzingResume}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all cursor-pointer whitespace-nowrap self-start sm:self-center"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{analyzingResume ? 'Running Inference...' : 'Analyze Sample Resume'}</span>
                    </button>
                  </div>

                  {/* ATS Score Gauges */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-mono text-emerald-800 font-semibold mb-1">ATS Semantic Score</span>
                      <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-700">
                        {atsScore}%
                      </span>
                      <span className="text-[10px] text-emerald-700 font-mono font-bold mt-1">&bull; High Cosine Similarity</span>
                    </div>

                    {project.demoData.categoryScores.map((cat, i) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                        <span className="text-[11px] text-slate-600 font-semibold">{cat.label}</span>
                        <div className="my-2">
                          <span className="text-lg font-bold text-slate-800">{cat.score}%</span>
                          <div className="w-full h-1.5 bg-slate-200 rounded-full mt-1">
                            <div
                              className="h-full bg-emerald-600 rounded-full"
                              style={{ width: `${cat.score}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-semibold text-emerald-700">{cat.status}</span>
                      </div>
                    ))}
                  </div>

                  {/* Detected Skills vs Suggestions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-emerald-100">
                      <div className="font-bold text-emerald-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600" /> RapidFuzz Mapped Tech Aliases
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.demoData.detectedSkills.map((s, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 font-mono font-semibold">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-amber-200">
                      <div className="font-bold text-amber-800 mb-2 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 text-amber-600" /> Flagged Missing Competencies
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.demoData.missingKeywords.map((k, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-mono font-semibold">
                            + {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Ollama (Phi-3) Feedback Block */}
                  {project.demoData.ollamaFeedback && (
                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs">
                      <div className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Ollama (Phi-3) AI Career Feedback:
                      </div>
                      <p className="text-slate-700 leading-relaxed font-sans">
                        "{project.demoData.ollamaFeedback}"
                      </p>
                    </div>
                  )}

                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-emerald-100 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View Source Code</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Close Modal
          </button>
        </div>

      </div>
    </div>
  );
}
