export const LINKS = {
  cv: "https://prakharparashar.lovable.app/assets/Prakhar_Parashar_CV-_plRxiEH.docx",
  email: "mailto:prakharparashar@aol.com",
  linkedin: "https://www.linkedin.com/in/prakharparashar",
  github: "https://github.com/parasharprakhar",
} as const;

export const SECTIONS = [
  { id: "cover", num: "00", label: "Cover" },
  { id: "ledger", num: "01", label: "Ledger" },
  { id: "record", num: "02", label: "Record" },
  { id: "cases", num: "03", label: "Cases" },
  { id: "systems", num: "04", label: "Systems" },
  { id: "attestations", num: "05", label: "Attestations" },
  { id: "access", num: "06", label: "Access" },
] as const;

export const SIGNALS = [
  { label: "Return cycle time", value: "2 days to 5 min" },
  { label: "Backorder exposure", value: "$19M to under $1M" },
  { label: "SAP S/4HANA migration", value: "98.7% success, zero disruption" },
];

export const LEDGER: { metric: string; context: string; reading: string }[] = [
  {
    metric: "Years in operations / SAP",
    context: "GBS & intelligent automation combined",
    reading: "13+",
  },
  {
    metric: "RPA initiatives delivered",
    context: "Blue Prism, 2022 to 2025, 100% on-time go-live",
    reading: "7+",
  },
  {
    metric: "SAP S/4HANA migration success",
    context: "Sole Global POC, GBS OM/CS",
    reading: "98.7%",
  },
  { metric: "CSAT achieved", context: "up from an 85% baseline", reading: "97%" },
  { metric: "Inventory accuracy", context: "Power BI KPI dashboards", reading: "85% to 98%" },
  {
    metric: "Backorder exposure reduced",
    context: "delivered 3 months ahead of target",
    reading: "$19M to under $1M",
  },
  { metric: "Return Analysis cycle time", context: "99.8% reduction", reading: "2 days to 5 min" },
  { metric: "Order Entry cycle time", context: "85% reduction via RPA", reading: "20 min to 3 min" },
  { metric: "Global SOPs standardised", context: "12 countries", reading: "40% effort reduction" },
  {
    metric: "Post-migration issues resolved",
    context: "zero revenue disruption",
    reading: "2,000+ in 3 days",
  },
];

export type RecordEntry = {
  dates: string;
  role: string;
  org: string;
  bullets: string[];
  active?: boolean;
};

export const RECORD: RecordEntry[] = [
  {
    dates: "2012 — 2017",
    role: "Language & Specialist Roles",
    org: "Capgemini & Various MNCs, India",
    bullets: [
      "Multilingual operations across EMEA.",
      "Additional language-specialist roles.",
    ],
  },
  {
    dates: "Oct 2017 — Jan 2020",
    role: "Senior French Specialist",
    org: "Capgemini, Bengaluru",
    bullets: [
      "Managed French-speaking client accounts across EMEA.",
      "Processed multilingual order-management operations.",
    ],
  },
  {
    dates: "Jan 2020 — Sep 2022",
    role: "Senior Specialist — Operations & Process Standardisation",
    org: "Mann+Hummel Filters, Bengaluru",
    bullets: [
      "Reduced manual effort 40% — early automation thinking that became the Blue Prism programme.",
      "Designed and standardised 10+ SOPs adopted globally.",
      "Delivered the Order Management pilot training programme with zero missed SLA targets.",
    ],
  },
  {
    dates: "Oct 2022 — Jun 2025",
    role: "Lead Analyst — Operations & Process Improvement",
    org: "Mann+Hummel Filters, Bengaluru",
    bullets: [
      "Led RPA adoption for 85% cycle-time reduction (20 min to 3 min).",
      "Drove CSAT from 85% to 97%.",
      "Built Power BI dashboards lifting inventory accuracy from 85% to 98%.",
    ],
  },
  {
    dates: "Jul 2025 — Present",
    role: "Senior Operations & Digital Transformation Leader — RPA Programme Lead",
    org: "Mann+Hummel Filters, Bengaluru",
    active: true,
    bullets: [
      "Dual mandate: leading 17+ analysts plus GBTS Automation Ambassador.",
      "Owns the full RPA & AI pipeline across 7+ Blue Prism initiatives at 100% on-time with zero rework.",
      "Sole Global POC for the SAP S/4HANA migration — 98.7% success, 2,000+ issues resolved in 3 days.",
      "Designed and deployed VocabPro & VocabPro 2.0 AI-enabled apps.",
      "Contributes to ACQUA and MOESA AI-supported automation.",
    ],
  },
];

export type CaseFile = {
  ref: string;
  year: string;
  title: string;
  stamp: string;
  problem: string;
  response: string;
  result: string;
};

export const CASES: CaseFile[] = [
  {
    ref: "Case 001",
    year: "2024",
    title: "SAP S/4HANA Global Migration",
    stamp: "Resolved",
    problem:
      "Global GBS OM/CS point of contact for a migration spanning AP, AR, EDI and Intercompany — with zero tolerance for revenue disruption.",
    response:
      "Owned end-to-end testing across AP/AR/EDI/Intercompany as sole Global POC and led rapid post-migration triage.",
    result: "98.7% success rate, zero revenue disruption, 2,000+ issues resolved in 3 days.",
  },
  {
    ref: "Case 002",
    year: "2024",
    title: "Backorder Reduction Programme",
    stamp: "Resolved",
    problem: "Backorder exposure climbing to $19M, threatening service levels.",
    response: "Led the workstream end-to-end as part of the wider operations transformation.",
    result: "$19M reduced to sub-$1M, delivered 3 months ahead of target.",
  },
  {
    ref: "Case 003",
    year: "2022 — 2025",
    title: "Blue Prism RPA Portfolio",
    stamp: "Live",
    problem: "High-volume order and returns processing capping throughput and accuracy.",
    response:
      "Built and led 7+ Blue Prism initiatives — business rules, exception handling, UAT lead, PDD/SDD — and hand-built Order Entry Automation end-to-end.",
    result:
      "100% on-time go-live, zero rework, 99.8% cycle-time reduction, 300+ orders per month automated.",
  },
  {
    ref: "Case 004",
    year: "2025 ongoing",
    title: "Zite — MindClear VocabPro",
    stamp: "Live — Mann+Hummel",
    problem:
      "Cross-functional teams — Order Management, AR, AP, Pricing, Master Data — losing time to inconsistent terminology, with no shared internal tool closing the gap.",
    response:
      "Specified and shipped MindClear VocabPro: an internal wellness-and-vocabulary app pairing mindfulness with cross-functional terminology learning, built mobile-first as an installable PWA with a full theme system on the Zite platform.",
    result:
      "Live in production at Mann+Hummel, in daily use bridging terminology gaps across teams.",
  },
];

export const SYSTEMS: { cluster: string; items: string[] }[] = [
  {
    cluster: "RPA & Automation",
    items: [
      "RPA Programme Management",
      "Blue Prism (Business SME + Dev)",
      "Power Automate",
      "Intelligent Automation Design",
      "Process Re-engineering",
      "Automation ROI & FTE Benefit",
    ],
  },
  {
    cluster: "AI & GenAI",
    items: [
      "AI-Supported Automation",
      "Decipher & Nanonets",
      "Generative AI (Prompt Engineering)",
      "Claude AI / ChatGPT",
      "No-Code / GenAI App Development",
    ],
  },
  {
    cluster: "SAP & Process",
    items: [
      "SAP S/4HANA Transformation",
      "Order-to-Cash (O2C)",
      "GBS — OM & CS",
      "EDI Systems",
      "UAT Lead",
      "Root Cause Analysis",
      "Lean Six Sigma (Green Belt)",
    ],
  },
  {
    cluster: "Leadership & Tools",
    items: [
      "Global People Management (17+)",
      "Cross-functional Leadership",
      "Stakeholder & Change Management",
      "KPI Governance",
      "Power BI",
      "ServiceNow",
      "Zendesk",
      "Jira & Clockify",
      "SharePoint",
    ],
  },
];

export const CERTIFICATIONS: { name: string; issuer: string; date: string }[] = [
  { name: "Blue Prism Developer", issuer: "SS&C", date: "Oct 2025" },
  { name: "Blue Prism Foundational", issuer: "Neoops", date: "Jun 2026" },
  { name: "Prompt Craft & AI Interaction", issuer: "IBM", date: "Jun 2026" },
  { name: "Lean Six Sigma Green Belt", issuer: "LinkedIn", date: "Sep 2025" },
  { name: "Build Your Own AI Agent", issuer: "LinkedIn", date: "Mar 2026" },
  { name: "Generative AI Tools", issuer: "Microsoft", date: "Dec 2025" },
  { name: "Root Cause Analysis", issuer: "PMI", date: "Sep 2025" },
  { name: "Security Risks in AI & ML", issuer: "LinkedIn", date: "May 2025" },
  { name: "Agile Project Mgmt Professional", issuer: "Atlassian", date: "Feb 2025" },
  { name: "ServiceNow IT Leadership", issuer: "ServiceNow", date: "Dec 2024" },
  { name: "Zendesk Customer Service Pro", issuer: "Zendesk", date: "Dec 2024" },
];

export const RECOGNITION: { name: string; issuer: string; date: string }[] = [
  { name: "Citizen Developer Designated", issuer: "Mann+Hummel", date: "2026" },
  { name: "GBTS Automation Ambassador", issuer: "Mann+Hummel", date: "2025" },
  { name: "Best Team Award", issuer: "Mann+Hummel", date: "2025" },
  { name: "Operational Excellence Award ×3", issuer: "Mann+Hummel", date: "2022 — 2024" },
  { name: "Pat on the Back Award", issuer: "Mann+Hummel", date: "2024" },
  { name: "Star of the Month ×2", issuer: "Capgemini", date: "2017 — 2018" },
];
