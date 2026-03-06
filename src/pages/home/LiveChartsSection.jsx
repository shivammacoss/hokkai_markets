// ============================================
// HOKKAI MARKETS - Live Charts Section
// TradingView widgets for real-time market data
// ============================================

import React, { useState, useEffect, useRef, memo } from 'react'
import AnimatedSection from '../../components/AnimatedSection'
import SectionHeader from '../../components/SectionHeader'

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

const chartTabs = [
  { id: 'forex', label: 'Forex', symbol: 'FX:EURUSD', kanji: '外為' },
  { id: 'gold', label: 'Gold', symbol: 'OANDA:XAUUSD', kanji: '金' },
  { id: 'crypto', label: 'Crypto', symbol: 'BINANCE:BTCUSDT', kanji: '暗号' },
  { id: 'indices', label: 'Indices', symbol: 'TVC:DJI', kanji: '指数' },
]

// TradingView Advanced Chart Widget
const TradingViewChart = memo(function TradingViewChart({ symbol }) {
  const container = useRef(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (!container.current) return

    // Clear previous widget
    container.current.innerHTML = ''
    scriptLoaded.current = false

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbol,
      interval: 'H1',
      timezone: 'Etc/UTC',
      theme: 'dark',
      style: '1',
      locale: 'en',
      allow_symbol_change: true,
      calendar: false,
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      support_host: 'https://www.tradingview.com',
      backgroundColor: 'rgba(7, 9, 14, 1)',
      gridColor: 'rgba(255, 255, 255, 0.04)',
    })

    container.current.appendChild(script)
    scriptLoaded.current = true
  }, [symbol])

  return (
    <div
      className="tradingview-widget-container rounded-xl overflow-hidden border border-white/8"
      ref={container}
      style={{ height: '600px', width: '100%' }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  )
})

export default function LiveChartsSection() {
  const [activeTab, setActiveTab] = useState('forex')
  const activeChart = chartTabs.find(tab => tab.id === activeTab)

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #05070a 0%, #07090e 100%)' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Kanji char="相場" className="absolute -right-4 top-1/2 -translate-y-1/2 text-[180px] text-white/[0.018] font-black" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Side accent lines */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(225,29,72,0.2), transparent)' }}
      />

      <div className="section-container relative z-10">
        <SectionHeader
          badge="Live Charts"
          title="Live Market Charts"
          highlight="Live Market"
          subtitle="Real-time professional charts powered by TradingView — the world's leading charting platform."
        />

        {/* Tab Navigation */}
        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mt-10 mb-8">
            {chartTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'text-white border border-[#e11d48]/40'
                    : 'text-slate-400 border border-white/8 hover:border-white/20 hover:text-white'
                }`}
                style={
                  activeTab === tab.id
                    ? {
                        background: 'linear-gradient(145deg, rgba(225,29,72,0.15) 0%, rgba(5,7,10,0.9) 100%)',
                        boxShadow: '0 0 20px rgba(225,29,72,0.2)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.03)',
                      }
                }
              >
                <span
                  className={`text-lg ${activeTab === tab.id ? 'text-[#e11d48]' : 'text-slate-500 group-hover:text-slate-400'}`}
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {tab.kanji}
                </span>
                {tab.label}
                {activeTab === tab.id && (
                  <span
                    className="absolute -bottom-px left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                    style={{ background: '#e11d48', boxShadow: '0 0 8px rgba(225,29,72,0.6)' }}
                  />
                )}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Chart Container */}
        <AnimatedSection animation="fadeIn" delay={0.3}>
          <div className="relative">
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-[#e11d48]/30" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-[#e11d48]/30" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-[#e11d48]/30" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-[#e11d48]/30" />

            <TradingViewChart symbol={activeChart.symbol} />
          </div>
        </AnimatedSection>

        {/* Info badges */}
        <AnimatedSection animation="slideUp" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/8"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <span
                className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse"
                style={{ boxShadow: '0 0 6px rgba(0,212,170,0.6)' }}
              />
              <span className="text-slate-400 text-xs font-mono">Real-time Data</span>
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/8"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <span className="text-slate-400 text-xs font-mono">100+ Indicators</span>
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/8"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <span className="text-slate-400 text-xs font-mono">Multi-Timeframe Analysis</span>
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/8"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <span className="text-slate-400 text-xs font-mono">Professional Tools</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
