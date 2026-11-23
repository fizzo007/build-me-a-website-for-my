export const companyInfo = {
  name: "Syfag Ventures",
  legalName: "Syfag Ventures Global Group",
  tagline: "Empowering Innovation. Scaling Impact. Building Enduring Value.",
  description: "Syfag Ventures is a modern venture capital, strategic holding, and enterprise incubation firm partnering with audacious founders and transformative businesses to drive exponential growth across technology, global trade, clean energy, and real infrastructure.",
  foundedYear: 2021,
  contact: {
    email: "contact@syfagventures.com",
    partnerEmail: "invest@syfagventures.com",
    phone: "+1 (800) 482-SYFAG / +44 20 7946 0882",
    address: "Global Headquarters: 100 Bishopsgate, Level 19, London EC2N 4AG",
    regionalHubs: [
      { city: "London", country: "United Kingdom", focus: "Global Capital & Strategic M&A" },
      { city: "Dubai", country: "United Arab Emirates", focus: "Trade Corridors & Emerging Tech" },
      { city: "Lagos", country: "Nigeria", focus: "Sub-Saharan Growth & FinTech" },
      { city: "New York", country: "United States", focus: "Enterprise SaaS & Institutional Partners" },
      { city: "Singapore", country: "Singapore", focus: "APAC Logistics & CleanTech" }
    ]
  },
  metrics: [
    { label: "Capital Mobilized & Deployed", value: "$65M+", change: "+42% YoY" },
    { label: "Active Portfolio Enterprises", value: "24", change: "Across 4 Continents" },
    { label: "Average Portfolio Growth", value: "3.4x", change: "Over 24-Month Horizon" },
    { label: "Strategic Enterprise Partners", value: "50+", change: "Fortune 500 & Global Leaders" },
    { label: "Jobs Created in Portfolio", value: "1,850+", change: "Global Workforce" }
  ]
};

export const verticals = [
  {
    id: "vc-incubation",
    title: "Venture Capital & Seed Incubation",
    shortDesc: "Backing game-changing seed to Series A tech founders solving systemic challenges.",
    fullDesc: "We provide early-stage capital, institutional validation, product architecture coaching, and go-to-market acceleration for bold technical founders in FinTech, Enterprise AI, CleanTech, and B2B Commerce.",
    icon: "Rocket",
    badge: "Early & Growth Stage",
    highlights: [
      "Initial checks from $150K to $2.5M with follow-on reserves",
      "Direct mentorship from successful repeat founders",
      "Proprietary access to corporate pilot partners and enterprise buyers",
      "Hands-on talent acquisition and executive recruitment"
    ],
    sectors: ["FinTech Infrastructure", "Enterprise AI & Data Agents", "B2B SaaS", "HealthTech"]
  },
  {
    id: "strategic-advisory",
    title: "Enterprise Advisory & Scale Strategy",
    shortDesc: "Cross-border expansion, capital restructuring, and M&A execution for mature businesses.",
    fullDesc: "We work alongside business leaders to optimize operations, structure cross-border capital, navigate complex regulatory landscapes, and execute high-yield M&A transactions that unlock unprecedented enterprise value.",
    icon: "TrendingUp",
    badge: "Advisory & M&A",
    highlights: [
      "Cross-border market entry playbooks and localized structuring",
      "Corporate finance, balance sheet recapitalization & debt structuring",
      "Post-merger integration & digital turnaround workflows",
      "Independent board advisory and governance frameworks"
    ],
    sectors: ["Corporate Finance", "International Expansion", "Digital Turnarounds", "M&A Advisory"]
  },
  {
    id: "global-trade",
    title: "Global Trade & Resilient Supply Chains",
    shortDesc: "Financing and optimizing modern international commodity and industrial corridors.",
    fullDesc: "Bridging the gap between frontier producers and international buyers through structured trade finance, digitized cargo visibility, and risk-managed supply chain syndication across agriculture, minerals, and industrial goods.",
    icon: "Globe",
    badge: "Trade & Logistics",
    highlights: [
      "Structured trade finance and automated letter of credit facilities",
      "Multi-modal freight orchestration and cold-chain resilience",
      "Comprehensive compliance and cross-border customs mitigation",
      "Direct relationships with Tier-1 ports, freight carriers, and bonded warehouses"
    ],
    sectors: ["Agri-Commodities", "Critical Minerals", "Industrial Components", "Freight Logistics"]
  },
  {
    id: "sustainable-infra",
    title: "Sustainable Infrastructure & Real Assets",
    shortDesc: "Investing in long-term tangible assets: green energy microgrids, cold storage, and smart real estate.",
    fullDesc: "Syfag Ventures deploys patient capital into sustainable infrastructure assets that generate predictable yields while fostering regional economic resilience and decarbonization.",
    icon: "Building2",
    badge: "Real Assets & ESG",
    highlights: [
      "Commercial solar micro-grids & industrial distributed power",
      "Smart warehousing, cold storage logistics & distribution hubs",
      "Sustainable urban commercial real estate with high ESG ratings",
      "Government-backed public-private infrastructure partnerships (PPP)"
    ],
    sectors: ["Solar Microgrids", "Smart Warehousing", "Green Logistics", "Commercial Real Estate"]
  },
  {
    id: "digital-studios",
    title: "Digital Studio & Technology Labs",
    shortDesc: "Architecting, incubating, and spinning out proprietary digital products and AI automation systems.",
    fullDesc: "Our in-house engineering and venture studio designs, prototypes, and launches proprietary digital platforms that streamline operations for our portfolio and partner corporations.",
    icon: "Cpu",
    badge: "Venture Studio",
    highlights: [
      "Rapid MVP prototyping and production-grade engineering in 90 days",
      "Custom generative AI workflows for enterprise data systems",
      "Fintech core ledger and payment gateway architectures",
      "Shared CTO and engineering leadership for early portfolio companies"
    ],
    sectors: ["Generative AI", "Fintech APIs", "Automated Workflows", "Proprietary Platforms"]
  }
];

export const portfolioVentures = [
  {
    id: "nexus-pay",
    name: "NexusPay Global",
    tagline: "Next-generation B2B cross-border settlement rails for emerging trade corridors.",
    category: "fintech",
    categoryLabel: "FinTech & AI",
    stage: "Series A",
    metrics: "+340% YoY Volume",
    statsHighlight: "$210M Processed",
    year: "2023",
    description: "NexusPay eliminates the latency and excessive fees of legacy SWIFT corridors by utilizing regulated multi-currency digital ledgers, reducing cross-border B2B settlement times from 4 days to under 8 minutes.",
    syfagRole: "Lead Seed Investor & Strategic Banking Partner Introductions",
    impact: "Expanded from 2 to 14 African & Middle Eastern trade corridors; partnered with 4 tier-1 commercial banks.",
    tags: ["Cross-Border Payments", "FinTech", "Treasury API"]
  },
  {
    id: "auralogix",
    name: "AuraLogix Logistics",
    tagline: "AI-driven autonomous freight dispatch and supply chain tracking engine.",
    category: "trade",
    categoryLabel: "Trade & Logistics",
    stage: "Growth Stage",
    metrics: "4.8M Metric Tons Moved",
    statsHighlight: "32% Cost Reduction",
    year: "2022",
    description: "AuraLogix dynamically matches long-haul freight capacity with industrial producers, mitigating empty backhauls and reducing freight downtime through predictive route intelligence.",
    syfagRole: "Strategic Capital & Enterprise Industrial Pilot Integration",
    impact: "Over 850 verified carriers onboarded; automated dispatch reduced carbon footprint by 19% across partner fleets.",
    tags: ["Freight Tech", "AI Logistics", "Fleet Optimization"]
  },
  {
    id: "verdant-core",
    name: "VerdantCore Energy",
    tagline: "Decentralized industrial solar micro-grids and smart battery energy storage systems (BESS).",
    category: "energy",
    categoryLabel: "Clean Energy",
    stage: "Operational / Yielding",
    metrics: "32MW Total Capacity",
    statsHighlight: "42,000 Tons CO2 Saved",
    year: "2022",
    description: "VerdantCore finances, constructs, and operates turnkey solar and battery infrastructure for manufacturing facilities and agricultural processing clusters facing erratic grid power.",
    syfagRole: "Co-developer & Project Equity Arranger",
    impact: "Provides 24/7 clean baseload power to 16 industrial estates, decreasing their operational energy bills by 38%.",
    tags: ["Renewable Energy", "BESS", "Industrial Solar"]
  },
  {
    id: "omniscale",
    name: "OmniScale Cloud",
    tagline: "Autonomous AI agents and data pipeline infrastructure for high-compliance enterprise teams.",
    category: "fintech",
    categoryLabel: "FinTech & AI",
    stage: "Incubation to Seed",
    metrics: "75+ Enterprise Pilots",
    statsHighlight: "99.98% Model Accuracy",
    year: "2024",
    description: "Born inside the Syfag Digital Studio, OmniScale allows enterprise legal, compliance, and underwriting teams to deploy private LLM agents on sensitive proprietary documents with zero data leakage.",
    syfagRole: "Incubation, Seed Capital & Engineering Co-Founding",
    impact: "Adopted by top insurance underwriters and private wealth firms, compressing manual document verification by 80%.",
    tags: ["Enterprise AI", "Private LLMs", "Workflow Automation"]
  },
  {
    id: "aerofleet-commodities",
    name: "AeroFleet Commodities",
    tagline: "High-integrity agricultural sourcing and transparent supply chain aggregation.",
    category: "trade",
    categoryLabel: "Trade & Logistics",
    stage: "Profitable / Scaling",
    metrics: "$38M Annual Run-Rate",
    statsHighlight: "12,000+ Smallholders",
    year: "2021",
    description: "AeroFleet aggregates premium non-GMO grains, cocoa, and sesame from verified agricultural cooperatives, providing upfront working capital and direct access to European and Asian buyers.",
    syfagRole: "Trade Finance Syndicate Lead & Corporate Restructuring",
    impact: "Boosted farmer household revenues by 28% while ensuring 100% deforestation-free provenance compliance.",
    tags: ["Agri-Trade", "Ethical Sourcing", "Working Capital"]
  },
  {
    id: "syfag-urban-assets",
    name: "Syfag Urban Assets",
    tagline: "Sustainable smart-logistics centers and modular modern industrial parks.",
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    stage: "Asset Portfolio",
    metrics: "185,000 sq ft Managed",
    statsHighlight: "98.5% Occupancy",
    year: "2023",
    description: "Syfag Urban Assets acquires, retrofits, and manages strategic last-mile logistics distribution parks near key international ports and airport arterial corridors.",
    syfagRole: "Direct Asset Ownership & Asset Management",
    impact: "Delivered EDGE Green Building certification across all properties, securing anchor leases with global e-commerce and pharmaceutical distributors.",
    tags: ["Industrial Real Estate", "Smart Warehouses", "High-Yield Assets"]
  }
];

export const growthFramework = [
  {
    step: "01",
    title: "Rigorous Scouting & Alignment",
    summary: "Deep-dive analysis of unit economics, proprietary moat, regulatory viability, and founder integrity.",
    detail: "We don't chase superficial hype. We evaluate defensible technology, underlying cash flows, and whether our strategic network can deliver an unfair competitive advantage.",
    timeframe: "Weeks 1 - 3"
  },
  {
    step: "02",
    title: "Catalytic Capital & Bespoke Structuring",
    summary: "Deploying flexible capital structures tailored to accelerate growth without excessive founder dilution.",
    detail: "From equity rounds to asset-backed credit and inventory financing facilities, we build a financial foundation engineered for long-term endurance and maximum valuation uplift.",
    timeframe: "Weeks 4 - 6"
  },
  {
    step: "03",
    title: "Operational Velocity & Ecosystem Access",
    summary: "Connecting ventures directly to Tier-1 customers, cross-border banking rails, and corporate leadership.",
    detail: "Our portfolio companies don't wait months for cold introductions. We immediately plug founders into our proprietary rolodex of enterprise purchasers, regulatory partners, and technical talent.",
    timeframe: "Months 2 - 18"
  },
  {
    step: "04",
    title: "Sustained Market Leadership & Exit Horizon",
    summary: "Institutional governance, global syndication, follow-on rounds, and strategic liquidity events.",
    detail: "We prepare our portfolio assets for institutional exits, cross-border M&A acquisitions, or long-term dividend distribution through institutional-grade governance and audited compliance.",
    timeframe: "Months 18 - 48"
  }
];

export const testimonials = [
  {
    quote: "Syfag Ventures isn't just capital on a cap table. When we faced severe regulatory hurdles entering the GCC corridor, their team directly brokered the institutional approvals that took our monthly volume from $1M to $18M in nine months.",
    author: "Tariq Al-Mansoor",
    role: "Co-Founder & CEO, NexusPay Global",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    badge: "Portfolio Founder"
  },
  {
    quote: "Their dual mastery of physical trade assets and cutting-edge software architecture gave AuraLogix the credibility to close multi-million dollar contracts with international mining and agricultural conglomerates.",
    author: "Elena Rostova",
    role: "Chief Operating Officer, AuraLogix",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    badge: "Portfolio Executive"
  },
  {
    quote: "In an industry crowded with passive investors, the partners at Syfag Ventures stand out for their operational realism, sharp commercial instincts, and unmatched execution speed.",
    author: "Dr. Marcus Vance",
    role: "Managing Director, Apex Capital Partners",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    badge: "Co-Investment Partner"
  }
];

export const faqs = [
  {
    q: "What types of companies and sectors does Syfag Ventures invest in?",
    a: "We invest across two primary horizons: high-growth technology enterprises (FinTech, Enterprise AI, B2B SaaS, and Logistics Tech) and high-yield physical/real economy assets (Sustainable Energy, Global Commodities Trade, and Industrial Real Estate). We look for proven unit economics, strong moats, and massive market expansion potential."
  },
  {
    q: "What is your typical investment check size and stage?",
    a: "For venture investments, our initial checks typically range from $150,000 to $2,500,000 at the Seed to Series A stage, with dedicated reserves allocated for pro-rata follow-on rounds. For strategic advisory, trade finance syndication, and infrastructure projects, we structure and mobilize engagements from $2M to $25M+."
  },
  {
    q: "What is the turnaround time for a pitch proposal review?",
    a: "Our investment committee reviews all submissions on a rolling weekly schedule. If your proposal matches our mandate, our sector lead will contact you within 5 to 7 business days to coordinate an exploratory discovery call."
  },
  {
    q: "Does Syfag Ventures only operate in specific geographic regions?",
    a: "While our core operating hubs are in London, Dubai, Lagos, New York, and Singapore, our investment and advisory mandate is global. We specifically specialize in companies bridging frontier markets with mature international capital and trade corridors."
  },
  {
    q: "How does Syfag Ventures support companies beyond capital?",
    a: "We operate on an active-partnership model. We provide hands-on strategic guidance including direct introductions to Tier-1 enterprise buyers, commercial banking syndicates, executive talent hiring, international market registration, and financial restructuring."
  },
  {
    q: "Can businesses apply for strategic advisory without selling equity?",
    a: "Yes. Our Enterprise Advisory & Scale Strategy practice works with established mid-market enterprises and conglomerates on fee-and-performance structures for M&A, cross-border expansion, and digital turnarounds without requiring immediate venture equity."
  }
];
