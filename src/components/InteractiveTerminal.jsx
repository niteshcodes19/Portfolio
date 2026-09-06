import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';
import { terminalCommands, personalInfo } from '../data/portfolioData';

export default function InteractiveTerminal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'output', text: "Welcome to Nitesh Verma's Developer Console v1.0.0" },
    { type: 'output', text: "Type 'help' or click the quick action chips below to inspect credentials." },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'input', text: `$ ${cmd}` }];

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (terminalCommands[trimmed]) {
      newHistory.push({ type: 'output', text: terminalCommands[trimmed] });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${trimmed}". Type 'help' for available commands.`,
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  const quickChips = ['help', 'about', 'skills', 'projects', 'leetcode', 'hire', 'contact'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl bg-[#061712] border border-emerald-500/40 rounded-3xl shadow-2xl shadow-emerald-500/15 overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Terminal Titlebar */}
        <div className="bg-[#030d0a] border-b border-emerald-900/40 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <button 
                onClick={onClose} 
                className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity cursor-pointer"
                title="Close"
              />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <div className="flex items-center gap-2 ml-3 text-xs font-mono text-emerald-300 font-bold">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>nitesh@developer-workspace:~</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-emerald-400 hover:text-white hover:bg-emerald-900/40 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick chip buttons */}
        <div className="bg-[#05130f] border-b border-emerald-900/30 px-5 py-2.5 flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold mr-1">Quick:</span>
          {quickChips.map((chip) => (
            <button
              key={chip}
              onClick={() => executeCommand(chip)}
              className="px-2.5 py-1 rounded-lg bg-[#0b271e] hover:bg-emerald-600 text-emerald-200 hover:text-white border border-emerald-700/40 text-xs font-mono font-medium transition-colors cursor-pointer"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 font-mono text-xs sm:text-sm space-y-3">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'input' ? (
                <div className="text-emerald-400 font-bold">{item.text}</div>
              ) : item.type === 'error' ? (
                <div className="text-rose-400">{item.text}</div>
              ) : (
                <div className="text-emerald-100 whitespace-pre-wrap leading-relaxed">
                  {item.text}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <div className="bg-[#030d0a] border-t border-emerald-900/40 p-3.5 flex items-center gap-2">
          <span className="text-emerald-400 font-mono font-bold text-sm sm:text-base">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-emerald-100 font-mono text-xs sm:text-sm outline-none placeholder:text-emerald-600"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
