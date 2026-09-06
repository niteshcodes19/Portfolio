import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  Code2,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background radial glow */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">Extraordinary</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            I am actively looking for Software Engineering internships, full-time developer opportunities, and exciting collaborative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Quick Email Card */}
            <div className="p-6 rounded-3xl bg-white border border-emerald-100/90 shadow-xl shadow-emerald-500/5 flex items-center justify-between group hover:border-emerald-300 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono">Email Address</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Quick Phone Card */}
            <div className="p-6 rounded-3xl bg-white border border-emerald-100/90 shadow-xl shadow-emerald-500/5 flex items-center justify-between group hover:border-emerald-300 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono">Phone & WhatsApp</div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-teal-700 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 transition-colors cursor-pointer"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl bg-white border border-emerald-100/90 shadow-xl shadow-emerald-500/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-mono">Current Base</div>
                <div className="text-sm sm:text-base font-bold text-slate-900">
                  {personalInfo.location}
                </div>
                <div className="text-xs text-slate-500 font-mono mt-0.5">
                  Open to relocation & remote roles across India & globally
                </div>
              </div>
            </div>

            {/* Social profiles connect */}
            <div className="p-6 rounded-3xl bg-white border border-emerald-100/90 shadow-xl shadow-emerald-500/5">
              <div className="text-xs font-mono uppercase text-emerald-800 font-bold mb-3">
                Professional Network
              </div>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 flex flex-col items-center justify-center gap-1.5 text-slate-700 hover:text-emerald-700 transition-all text-xs font-semibold"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 flex flex-col items-center justify-center gap-1.5 text-slate-700 hover:text-emerald-700 transition-all text-xs font-semibold"
                >
                  <GithubIcon className="w-5 h-5" />
                  <span>GitHub</span>
                </a>

                <a
                  href="#leetcode"
                  className="p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 flex flex-col items-center justify-center gap-1.5 text-slate-700 hover:text-emerald-700 transition-all text-xs font-semibold"
                >
                  <LeetCodeIcon className="w-5 h-5 text-emerald-600" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-emerald-100/90 shadow-2xl shadow-emerald-500/5 relative">
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span>Send a Direct Message</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Have a question, job opening, or want to discuss a project? Drop a message here or reach out via email.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Thank You for Connecting!</h4>
                <p className="text-xs text-slate-700 max-w-sm mx-auto">
                  Your message was noted. You can also write directly to{' '}
                  <span className="text-emerald-700 font-mono font-bold">{personalInfo.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-xs font-bold text-white hover:bg-emerald-500 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1.5 font-bold">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe / Tech Recruiter"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1.5 font-bold">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1.5 font-bold">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship Opportunity / Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1.5 font-bold">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Nitesh, I came across your portfolio and project CODEXA / CVision..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
