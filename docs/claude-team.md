# Claude Team

The "Build Your Whole Team with Claude" org chart, built as Claude Code project skills.

Each skill lives at `.claude/skills/<slug>/SKILL.md`, and Claude Code loads them automatically in this repo. Invoke one by name (for example `/fin-reconciliation`), or ask in plain language and the router skill `/claude-team` picks the right member.

`claude-code` (the CEO) is the router skill `/claude-team`. It sends work to the department skills below.

## Developers

| Skill | Nickname | What it does |
|---|---|---|
| `/dev-superpowers` | Skill Forge | Plan, test-first build, debug, review, verify |
| `/dev-context7` | Docs Fetcher | Pull current library docs before using an API |
| `/dev-mcp-builder` | Tool Wright | Design and wire up MCP servers |
| `/dev-skill-creator` | Skill Smith | Create new Claude Code skills |
| `/dev-webapp-testing` | QA Engineer | Browser-test the running app |
| `/dev-claude-mem` | Memory Keeper | Keep durable project memory in `.claude/memory/` |

## Designers

| Skill | Nickname | What it does |
|---|---|---|
| `/design-ui-ux-pro-max` | Design Lead | Tokens, components, states, accessibility |
| `/design-taste` | Taste Maker | Ranked design critique |
| `/design-frontend` | Front of House | Build responsive UI in the project's stack |
| `/design-transitions` | Motion Artist | Purposeful, accessible CSS motion |
| `/design-web-artifacts` | Prototyper | Single-file HTML prototypes |
| `/design-brand-guidelines` | Brand Keeper | Brand kit: palette, type, voice, logo rules |

## Marketing

| Skill | Nickname | What it does |
|---|---|---|
| `/mktg-copywriting` | Word Smith | Headlines, benefits, objections, CTA |
| `/mktg-ai-seo` | Search Whisperer | Make pages citable by AI answer engines |
| `/mktg-cro` | Conversion Lead | Audit friction, ranked ICE hypotheses |
| `/mktg-ad-creative` | Ad Maker | Ad headlines, copy, visual briefs |
| `/mktg-customer-research` | Voice of Customer | Themes and verbatim quotes from feedback |
| `/mktg-lead-magnets` | Bait Master | Lead magnet, landing page, nurture emails |

## Social Media

| Skill | Nickname | What it does |
|---|---|---|
| `/social-post-writer` | Ghostwriter | LinkedIn drafts in the user's voice |
| `/social-profile-optimizer` | Profile Doctor | Headline, About, featured items |
| `/social-reels-scripting` | Reel Writer | 15–45 second scripts with beats |
| `/social-hook-generator` | Hook Smith | Ten scroll-stopping opening lines |
| `/social-voice-builder` | Voice Coach | Style guide extracted from samples |
| `/social-youtube-thumbnail` | Cover Tester | Thumbnail concepts scored for testing |

## Finance

| Skill | Nickname | What it does |
|---|---|---|
| `/fin-financial-statements` | Statement Builder | P&L, balance sheet, cash flow from a trial balance |
| `/fin-journal-entry` | Journal Keeper | Balanced journal entries with support refs |
| `/fin-reconciliation` | Reconciler | Bank-to-book matching and open items |
| `/fin-variance-analysis` | Variance Analyst | Actual vs budget drivers and commentary |
| `/fin-audit-support` | Auditor | PBC list, evidence index, open items |
| `/fin-close-management` | The Closer | Month-end close checklist and status |

## Small Business

| Skill | Nickname | What it does |
|---|---|---|
| `/biz-cash-flow-snapshot` | Cash Watcher | Cash, burn and runway |
| `/biz-invoice-chase` | Debt Chaser | Aging report and escalating reminders |
| `/biz-plan-payroll` | Payroll Planner | Gross-to-net and employer cost estimates |
| `/biz-margin-analyzer` | Margin Analyst | Margin by product and price sensitivity |
| `/biz-tax-prep` | Tax Prepper | Document checklist and quarterly estimates |
| `/biz-run-campaign` | Campaign Runner | Campaign plan, calendar, weekly review |

## Legal

| Skill | Nickname | What it does |
|---|---|---|
| `/legal-review-contract` | Contract Reviewer | Summary, key terms, risky clauses, redlines |
| `/legal-triage-nda` | NDA Triage | Traffic-light NDA checklist |
| `/legal-compliance-check` | Compliance Officer | Obligations mapped to evidence |
| `/legal-risk-assessment` | Risk Assessor | Likelihood × impact risk register |
| `/legal-vendor-check` | Vendor Vetter | Security, DPA, insurance, financial health |
| `/legal-signature-request` | Signature Wrangler | Signing packet, held for approval before sending |

## Ground rules

- Drafts only. Skills never send email, post content, sign documents, post to a ledger, or spend money without explicit approval.
- Finance, tax, payroll and legal skills prepare work for a qualified professional. They are not advice or certification.
- Superpowers, Claude-Mem, UI UX Pro Max, Taste and similar names are native project skills written for this repo. They are not the original third-party plugins.
- Context7 and Webapp Testing use MCP or Playwright when available and say so when they fall back.
