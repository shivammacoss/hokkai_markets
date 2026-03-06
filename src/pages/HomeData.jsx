// HOKKAI MARKETS - Home Page Data
import React from 'react'
import { FiZap, FiShield, FiGlobe, FiCpu, FiTarget, FiDroplet, FiActivity, FiDollarSign, FiLayers, FiMonitor, FiSmartphone, FiServer, FiHeadphones } from 'react-icons/fi'

export const whyFeatures = [
  { icon: <FiDroplet size={20}/>, title: 'Institutional-Grade Liquidity', desc: 'We connect traders to deep liquidity pools sourced from premium financial institutions, ensuring minimal slippage and competitive pricing.', color: 'text-red-accent', bg: 'bg-red-accent/10', kanji: '流動' },
  { icon: <FiZap size={20}/>, title: 'Ultra-Fast Execution', desc: 'Our advanced matching engines are optimized for millisecond execution speeds, making it ideal for scalpers, day traders, and algorithmic strategies.', color: 'text-red-accent', bg: 'bg-red-accent/10', kanji: '速度' },
  { icon: <FiTarget size={20}/>, title: 'Transparent Pricing', desc: 'We operate with a fair and transparent pricing model. No hidden fees, no manipulation — just clean execution.', color: 'text-green-accent', bg: 'bg-green-accent/10', kanji: '透明' },
  { icon: <FiGlobe size={20}/>, title: 'Multi-Asset Access', desc: 'Trade multiple asset classes from one account with seamless platform integration across forex, indices, commodities, stocks, and crypto.', color: 'text-blue-400', bg: 'bg-blue-400/10', kanji: '市場' },
  { icon: <FiCpu size={20}/>, title: 'Advanced Technology', desc: 'Our platform integrates professional charting tools, customizable indicators, real-time market data, and AI-powered insights.', color: 'text-purple-400', bg: 'bg-purple-400/10', kanji: '技術' },
  { icon: <FiHeadphones size={20}/>, title: '24/5 Expert Support', desc: 'Our multilingual support team is available round-the-clock via live chat, WhatsApp, and email — in your language, on your schedule.', color: 'text-cyan-400', bg: 'bg-cyan-400/10', kanji: 'サポート' },
]

export const marketAssets = [
  { label: 'Forex', icon: '💱', desc: 'Trade over 60+ currency pairs including major, minor, and exotic pairs with competitive spreads and flexible leverage options.', kanji: '外為' },
  { label: 'Indices', icon: '📊', desc: 'Access global stock indices from the US, Europe, and Asia, allowing you to trade entire economies in one position.', kanji: '指数' },
  { label: 'Commodities', icon: '🥇', desc: 'Diversify with precious metals like Gold and Silver, as well as energy products including Crude Oil and Natural Gas.', kanji: '商品' },
  { label: 'Stocks', icon: '📈', desc: 'Trade shares of leading global companies with real-time pricing and margin flexibility.', kanji: '株式' },
  { label: 'Cryptocurrencies', icon: '₿', desc: 'Access major digital assets with secure execution and competitive trading conditions.', kanji: '暗号' },
]

export const platforms = [
  { icon: <FiMonitor size={22}/>, name: 'Hokkai WebTrader', tag: 'Browser-Based', desc: 'Instant access from any browser. No downloads. Full charting, one-click orders, and real-time data.', color: 'text-red-accent', bg: 'bg-red-accent/10', border: 'border-red-accent/20', features: ['100+ Indicators', 'Multi-Chart', 'One-Click Trading'] },
  { icon: <FiSmartphone size={22}/>, name: 'Mobile Trading App', tag: 'iOS & Android', desc: 'Trade on the go with full account management, price alerts, real-time data, and intuitive navigation.', color: 'text-green-accent', bg: 'bg-green-accent/10', border: 'border-green-accent/20', features: ['Face ID', 'Push Alerts', 'Instant Deposit'] },
  { icon: <FiServer size={22}/>, name: 'Desktop Terminal', tag: 'Professional Grade', desc: 'Multi-panel professional interface with order book, watchlist, and advanced algorithmic trading support.', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20', features: ['Order Book', 'Algo Trading', 'API Access'] },
]

export const platformFeatures = [
  '100+ Technical Indicators', 'Multi-Chart Layout', 'One-Click Trading',
  'Automated Trading Support', 'Economic Calendar Integration', 'Risk Management Tools',
]

export const accounts = [
  { name: 'Standard', badge: 'Beginner', badgeColor: 'bg-blue-500/20 text-blue-400', minDeposit: '$100', spreads: 'From 1.5 pips', commission: 'Zero commission', desc: 'Designed for new traders entering the financial markets. Competitive spreads and a simple pricing model ideal for beginners and swing traders.', features: ['Competitive spreads','Zero commission','Full platform access','24/5 support'], cta: 'Open Standard', highlight: false },
  { name: 'ECN Raw', badge: 'Popular', badgeColor: 'bg-red-accent/20 text-red-accent', minDeposit: '$500', spreads: 'From 0.0 pips', commission: 'Fixed low commission', desc: 'Built for traders who demand tight spreads and institutional pricing. Connects directly to liquidity providers with minimal markups.', features: ['Raw spreads from 0.0','Ultra-low commission','Scalping allowed','Priority execution'], cta: 'Open ECN Raw', highlight: true },
  { name: 'Pro', badge: 'Advanced', badgeColor: 'bg-purple-500/20 text-purple-400', minDeposit: '$5,000', spreads: 'Ultra-tight', commission: 'Reduced', desc: 'Tailored for experienced traders seeking enhanced trading conditions. Includes advanced analytics tools and premium support access.', features: ['Tightest spreads','Priority execution','Advanced analytics','Dedicated support'], cta: 'Open Pro', highlight: false },
  { name: 'VIP', badge: 'Exclusive', badgeColor: 'bg-gold-500/20 text-gold-400', minDeposit: 'Custom', spreads: 'Custom pricing', commission: 'Negotiable', desc: 'Institutional-level account for high-volume traders. Personalized trading experience with enhanced support and execution priority.', features: ['Personal manager','Exclusive pricing','Institutional liquidity','Custom solutions'], cta: 'Contact Us', highlight: false },
]

export const tradingConditions = [
  { icon: <FiActivity size={20}/>, title: 'No Dealing Desk (NDD)', desc: 'Orders are routed directly to liquidity providers without manual intervention, ensuring transparent and conflict-free trading.', color: 'text-red-accent', bg: 'bg-red-accent/10' },
  { icon: <FiDollarSign size={20}/>, title: 'Spreads & Commissions', desc: 'We offer both spread-only accounts and raw spread accounts with commission structures. Competitive pricing across all instruments.', color: 'text-red-accent', bg: 'bg-red-accent/10' },
  { icon: <FiLayers size={20}/>, title: 'Flexible Leverage', desc: 'Flexible leverage options available depending on account type and regulatory jurisdiction. Traders are encouraged to manage risk responsibly.', color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { icon: <FiShield size={20}/>, title: 'Risk Management', desc: 'Stop Loss & Take Profit, Trailing Stop, Negative Balance Protection, and Margin Call Alerts built into every account.', color: 'text-green-accent', bg: 'bg-green-accent/10' },
]

export const toolsResearch = [
  { icon: '📰', label: 'Daily Market Analysis', desc: 'Expert daily insights on global markets' },
  { icon: '📋', label: 'Technical & Fundamental Reports', desc: 'In-depth research reports' },
  { icon: '📡', label: 'Trading Signals', desc: 'Real-time actionable trade signals' },
  { icon: '🤖', label: 'AI-Powered Market Insights', desc: 'Machine learning driven analysis' },
  { icon: '📅', label: 'Economic Calendar', desc: 'Track key market-moving events' },
  { icon: '🧮', label: 'Risk & Position Size Calculator', desc: 'Manage risk with precision' },
  { icon: '🖥️', label: 'VPS Hosting', desc: 'Ultra-low latency for algo trading' },
]

export const educationItems = [
  { icon: '📖', label: 'Beginner Guides', desc: 'Start your trading journey with confidence', lessons: '6 Lessons' },
  { icon: '💹', label: 'Forex Basics', desc: 'Master the fundamentals of forex trading', lessons: '6 Lessons' },
  { icon: '🎯', label: 'Advanced Trading Strategies', desc: 'Refine your edge with proven strategies', lessons: '6 Lessons' },
  { icon: '🎬', label: 'Video Tutorials', desc: 'Learn visually at your own pace', lessons: '6 Lessons' },
  { icon: '🎙️', label: 'Weekly Live Webinars', desc: 'Interactive sessions with expert traders', lessons: '6 Lessons' },
  { icon: '📚', label: 'E-books & Trading Manuals', desc: 'Comprehensive reference materials', lessons: '6 Lessons' },
]

export const stats = [
  { value: 50000, suffix: '+', label: 'Active Traders', decimals: 0 },
  { value: 2, suffix: 'B+', label: 'Monthly Volume', decimals: 0, prefix: '$' },
  { value: 60, suffix: '+', label: 'Countries', decimals: 0 },
  { value: 4.8, suffix: '★', label: 'Client Rating', decimals: 1 },
]

export const testimonials = [
  { quote: "The execution speed is incredible — scalping strategies work perfectly. Spreads on majors stay below 0.2 pips even during London open. Outstanding.", author: 'Kenji T.', role: 'Scalper · Japan', rating: 5 },
  { quote: "Deposited via USDT — credited in under 10 minutes. Withdrawal of $15,000 processed same day. Hokkai's finance team is responsive and professional.", author: 'Wei C.', role: 'Crypto Trader · Singapore', rating: 5 },
  { quote: "Running 3 VPS-hosted EAs simultaneously. Zero downtime in 8 months. The MT5 server connectivity is rock solid. Highly professional setup.", author: 'Marco B.', role: 'EA Developer · Italy', rating: 5 },
  { quote: "Customer support in Arabic is a game changer. UPI and bank transfer both work flawlessly for my region. Very professional team.", author: 'Khalid A.', role: 'Position Trader · Saudi Arabia', rating: 5 },
  { quote: "Copy trading feature allowed me to follow top traders while learning. Made profit in my first month. The transparency of trade history is impressive.", author: 'Linh N.', role: 'Copy Trader · Vietnam', rating: 5 },
  { quote: "Best spread on Nasdaq 100 I have found — 0.4 points average. Switched from my old broker and never looked back. Outstanding platform.", author: 'Carlos M.', role: 'Index Trader · Brazil', rating: 5 },
]

export const faqs = [
  { q: 'What is the minimum deposit to start trading?', a: 'The minimum deposit is $50 for Standard accounts. ECN Raw accounts require $200. VIP accounts start at $10,000. You can fund via bank wire, credit card, Skrill, Neteller, USDT, or UPI with zero fees.' },
  { q: 'Is Hokkai Markets regulated?', a: 'Yes. Hokkai Markets operates under regulatory oversight from VARA (Dubai), FCA (UK), MAS (Singapore), ASIC (Australia), and VFSC (Vanuatu). All client funds are held in segregated accounts with tier-1 banking partners.' },
  { q: 'What leverage is available?', a: 'Leverage up to 1:500 is available on forex pairs for eligible clients. Gold and metals up to 1:200, Crypto CFDs up to 1:10, and Indices up to 1:100. Leverage requirements vary by region and account type.' },
  { q: 'How fast are withdrawals processed?', a: 'Same-day processing for most methods. E-wallets (Skrill, Neteller) and crypto withdrawals typically complete within 2–4 hours. Bank wire transfers take 1–3 business days. All withdrawals are free of charge.' },
  { q: 'Do you offer a demo account?', a: 'Yes! Our free demo account comes preloaded with $10,000 virtual funds. It mirrors live market conditions with real spreads and execution speeds. Access via MT4, MT5, WebTrader, or our mobile app. No time limit.' },
  { q: 'What is the spread on EUR/USD?', a: 'EUR/USD spreads start from 0.0 pips on ECN Raw accounts (plus $3.50 commission per lot). Standard accounts average 1.0–1.2 pips with no commission. Spreads may widen during major news events and low-liquidity sessions.' },
  { q: 'Is there an Islamic (swap-free) account?', a: 'Yes. Our Islamic account is 100% Shariah-compliant with no overnight swap charges on any instrument. Available for all account types upon request. Simply contact our support team to activate swap-free trading.' },
  { q: 'Can I use Expert Advisors (EAs) and algo trading?', a: 'Absolutely. MT4 and MT5 both fully support Expert Advisors, automated trading, and algorithmic strategies. Scalping, hedging, and high-frequency trading are all permitted. We also offer VPS hosting partnerships for EA traders.' },
]

export const spreadsData = [
  { instrument: 'EUR/USD', category: 'Major Forex', standard: '1.5 pips', ecn: '0.0 pips', commission: '$3.5/lot', leverage: '1:500' },
  { instrument: 'GBP/USD', category: 'Major Forex', standard: '1.8 pips', ecn: '0.2 pips', commission: '$3.5/lot', leverage: '1:500' },
  { instrument: 'USD/JPY', category: 'Major Forex', standard: '1.5 pips', ecn: '0.1 pips', commission: '$3.5/lot', leverage: '1:500' },
  { instrument: 'AUD/USD', category: 'Major Forex', standard: '1.8 pips', ecn: '0.2 pips', commission: '$3.5/lot', leverage: '1:500' },
  { instrument: 'XAU/USD', category: 'Gold', standard: '$0.35', ecn: '$0.15', commission: '$4/lot', leverage: '1:200' },
  { instrument: 'XAG/USD', category: 'Silver', standard: '$0.03', ecn: '$0.01', commission: '$4/lot', leverage: '1:200' },
  { instrument: 'US30', category: 'Index', standard: '3.0 pts', ecn: '1.5 pts', commission: '$4/lot', leverage: '1:100' },
  { instrument: 'NAS100', category: 'Index', standard: '2.5 pts', ecn: '1.0 pts', commission: '$4/lot', leverage: '1:100' },
  { instrument: 'BTC/USD', category: 'Crypto', standard: '50 pts', ecn: '25 pts', commission: '$5/lot', leverage: '1:10' },
  { instrument: 'OIL/USD', category: 'Commodity', standard: '$0.05', ecn: '$0.02', commission: '$4/lot', leverage: '1:100' },
]

export const paymentMethods = [
  { method: 'Bank Wire', time: '1–3 Business Days', minDeposit: '$200', fee: 'Zero Fee' },
  { method: 'Credit / Debit Card', time: 'Instant', minDeposit: '$50', fee: 'Zero Fee' },
  { method: 'Skrill', time: 'Instant', minDeposit: '$50', fee: 'Zero Fee' },
  { method: 'Neteller', time: 'Instant', minDeposit: '$50', fee: 'Zero Fee' },
  { method: 'USDT / Crypto', time: '~30 Minutes', minDeposit: '$50', fee: 'Zero Fee' },
  { method: 'UPI / Local Bank', time: 'Instant', minDeposit: '$20', fee: 'Zero Fee' },
]

export const trustBadges = [
  { label: 'FSC Regulated', desc: 'Licensed and regulated by the Financial Services Commission' },
  { label: 'SSL Secured', desc: '256-bit SSL encryption on all data transmissions' },
  { label: 'Segregated Funds', desc: 'Client funds held in separate accounts with Tier-1 banks' },
  { label: 'Negative Balance Protection', desc: 'You can never lose more than your deposit' },
]

export const promotions = [
  { type: 'HOT', title: 'Welcome Deposit Bonus', value: '50%', desc: 'Get 50% bonus on your first deposit up to $500. Start trading with more capital and maximize your potential returns.', terms: 'T&C apply. Min deposit $100. Bonus withdrawable after 30 lot volume.' },
  { type: 'FREE', title: 'No Deposit Bonus', value: '$30', desc: 'Get $30 free to try live trading with zero risk. No deposit required — just register and verify your account.', terms: 'T&C apply. Profits withdrawable after 5 lot volume. One per person.' },
  { type: '', title: 'Cashback Rebate', value: '$2/lot', desc: 'Earn $2 cashback for every standard lot traded. The more you trade, the more you earn — automatically credited weekly.', terms: 'Available on all live accounts. Paid every Friday.' },
  { type: '', title: 'Refer a Friend', value: '$100', desc: 'Invite friends to trade with Hokkai Markets. Earn $100 for every friend who deposits and trades a minimum of 5 lots.', terms: 'Unlimited referrals. No cap on earnings.' },
]

export const ibTiers = [
  { tier: 'Silver IB', rate: '$3', volume: '0–50 lots/month' },
  { tier: 'Gold IB', rate: '$5', volume: '50–200 lots/month', popular: true },
  { tier: 'Platinum IB', rate: '$7', volume: '200+ lots/month' },
]
