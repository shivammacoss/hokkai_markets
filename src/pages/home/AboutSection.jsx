// ============================================
// HOKKAI MARKETS - About Section — Cyber-Samurai
// ============================================

import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiShield, FiZap, FiTarget, FiPlay, FiTrendingUp, FiTrendingDown } from 'react-icons/fi'
import AnimatedSection from '../../components/AnimatedSection'

function Kanji({ char, className = '' }) {
  return (
    <span
      className={`select-none pointer-events-none ${className}`}
      style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 900, lineHeight: 1 }}
      aria-hidden="true"
    >
      {char}
    </span>
  )
}

const pillars = [
  { icon: <FiShield size={14} />, label: 'Transparency', kanji: '透明' },
  { icon: <FiZap size={14} />,    label: 'Innovation',   kanji: '革新' },
  { icon: <FiTarget size={14} />, label: 'Integrity',    kanji: '誠実' },
]

export default function AboutSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #07090e 0%, #05070a 100%)' }}
    >
      {/* Background kanji watermark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Kanji char="信頼" className="absolute -right-6 top-1/2 -translate-y-1/2 text-[200px] text-white/[0.018] font-black" />
      </div>

      {/* Left accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(225,29,72,0.2), transparent)' }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Chart visualization panel ── */}
          <AnimatedSection animation="slideLeft">
            <div className="relative">
              {/* Main imagery container */}
              <div
                className="relative rounded-2xl overflow-hidden aspect-square w-full max-w-md mx-auto border border-white/8"
                style={{
                  background: 'linear-gradient(145deg, rgba(7,9,14,0.95) 0%, rgba(5,7,10,0.98) 100%)',
                }}
              >
                {/* Inner grid pattern */}
                <div className="absolute inset-0 shoji-bg opacity-30" />

                {/* Chart visualization */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full h-full relative">
                    {/* Price levels */}
                    <div className="absolute right-0 top-0 h-full flex flex-col justify-between text-right py-4">
                      <span className="text-slate-500 text-xs font-mono">1.1200</span>
                      <span className="text-slate-500 text-xs font-mono">1.0900</span>
                      <span className="text-slate-500 text-xs font-mono">1.0600</span>
                    </div>
                    
                    {/* Simulated chart line */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(225,29,72,0.3)" />
                          <stop offset="100%" stopColor="rgba(225,29,72,0)" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,150 Q30,140 60,120 T120,100 T180,80 T240,60 T300,40"
                        fill="none"
                        stroke="#e11d48"
                        strokeWidth="2"
                        className="drop-shadow-[0_0_8px_rgba(225,29,72,0.6)]"
                      />
                      <path
                        d="M0,150 Q30,140 60,120 T120,100 T180,80 T240,60 T300,40 L300,200 L0,200 Z"
                        fill="url(#chartGradient)"
                      />
                    </svg>
                  </div>
                </div>

                {/* Neon corner accents */}
                <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-[#e11d48]/50" />
                <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-[#e11d48]/50" />
                <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-[#e11d48]/50" />
                <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-[#e11d48]/50" />

                {/* Floating glass chips */}
                <div
                  className="absolute top-6 left-6 rounded-xl p-3 border border-[#e11d48]/20"
                  style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}
                >
                  <div className="text-[#e11d48] text-xs font-semibold font-mono uppercase tracking-wider">Our Vision</div>
                  <div className="text-white text-xs mt-1">Globally trusted partner</div>
                </div>

                <div
                  className="absolute bottom-6 right-6 rounded-xl p-3 border border-[#00d4aa]/20"
                  style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}
                >
                  <div className="text-[#00d4aa] text-xs font-semibold font-mono uppercase tracking-wider">Our Mission</div>
                  <div className="text-white text-xs mt-1">Empower traders worldwide</div>
                </div>

                <div
                  className="absolute bottom-6 left-6 rounded-xl p-3 border border-white/10"
                  style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(10px)' }}
                >
                  <div className="text-slate-400 text-xs font-semibold mb-1.5 uppercase tracking-wider font-mono">Core Values</div>
                  {['Transparency', 'Innovation', 'Integrity'].map(val => (
                    <div key={val} className="text-white text-xs flex items-center gap-1.5 mb-0.5">
                      <span
                        className="w-1 h-1 rounded-full bg-[#e11d48] flex-shrink-0"
                        style={{ boxShadow: '0 0 4px rgba(225,29,72,0.7)' }}
                      />
                      {val}
                    </div>
                  ))}
                </div>

                {/* EUR/USD Price chip */}
                <div
                  className="absolute top-6 right-6 rounded-xl px-3 py-2 border border-white/10"
                  style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-white text-xs font-mono font-bold">EUR/USD</span>
                    <span className="text-[#00d4aa] text-xs font-mono">1.0854</span>
                  </div>
                </div>
              </div>

              {/* Mon decoration */}
              <div
                className="absolute -top-3 -right-3 w-12 h-12 rounded-full border border-[#e11d48]/25 flex items-center justify-center"
                style={{ background: '#05070a' }}
              >
                <div className="w-8 h-8 rounded-full border border-[#e11d48]/15 flex items-center justify-center">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: 'rgba(225,29,72,0.3)', boxShadow: '0 0 6px rgba(225,29,72,0.4)' }}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── RIGHT: Structured text ── */}
          <AnimatedSection animation="slideRight" delay={0.2}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-5 h-px bg-[#e11d48]" />
              <span className="text-[#e11d48] text-xs font-bold uppercase tracking-[0.2em] font-mono">About Hokkai Markets</span>
              <div className="w-5 h-px bg-[#e11d48]" />
            </div>

            {/* Heading */}
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Michroma', sans-serif", textTransform: 'uppercase', letterSpacing: '0.03em' }}
            >
              Built on{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #e11d48, #f43f5e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Precision
              </span>
              {' '}&amp; Trust
            </h2>

            {/* Neon divider */}
            <div
              className="w-16 h-px mb-6"
              style={{ background: 'linear-gradient(90deg, #e11d48, transparent)', boxShadow: '0 0 6px rgba(225,29,72,0.4)' }}
            />

            <div className="space-y-4 mb-8">
              <p className="text-slate-400 leading-relaxed">
                Hokkai Markets was founded with a singular vision — to give every trader access to institutional-grade execution, transparent pricing, and world-class support. We combine Japanese precision with global reach.
              </p>
              <p className="text-slate-400 leading-relaxed">
                From retail beginners to professional algo-traders, our infrastructure is built to perform under any market condition — ultra-low latency, deep liquidity, and zero conflict of interest.
              </p>
            </div>

            {/* Pillars grid */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="text-center p-4 rounded-xl border border-white/8 transition-all duration-300 hover:border-[#e11d48]/30 hover:-translate-y-0.5 group"
                  style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)' }}
                >
                  <div
                    className="text-xl mb-1"
                    style={{ fontFamily: "'Noto Serif JP', serif", color: 'rgba(225,29,72,0.6)' }}
                  >
                    {p.kanji}
                  </div>
                  <div className="text-slate-400 text-xs group-hover:text-white transition-colors">{p.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/accounts"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: '#e11d48',
                  boxShadow: '0 0 18px rgba(225,29,72,0.35)',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(225,29,72,0.6)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 18px rgba(225,29,72,0.35)'}
              >
                Open Live Account <FiArrowRight size={15} />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold text-sm rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Try Demo Free
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
