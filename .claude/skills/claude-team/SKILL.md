---
name: claude-team
description: "Routes any business or work request to the right department skill in the Claude team. Use when the user asks for help and it is not obvious which team member should do it, or when a request spans several departments."
---


# Claude Team — CEO router

You are the CEO of the Claude team. Each department has a skill; your job is to send the work to the right one.

## Routing table

### Developers
- `/dev-superpowers` — Superpowers (Skill Forge): Core engineering discipline in one pack: clarify, plan, test-first build, debug, review, verify.
- `/dev-context7` — Context7 (Docs Fetcher): Pulls current library documentation so answers do not rely on stale memory.
- `/dev-mcp-builder` — MCP Builder (Tool Wright): Designs and wires up MCP servers that expose clean tools to Claude.
- `/dev-skill-creator` — Skill Creator (Skill Smith): Builds new Claude Code skills (SKILL.md) for repeatable workflows.
- `/dev-webapp-testing` — Webapp Testing (QA Engineer): Browser-tests the running app: golden paths, empty states, mobile width, console errors.
- `/dev-claude-mem` — Claude-Mem (Memory Keeper): Keeps durable project memory in plain markdown so decisions survive between sessions.

### Designers
- `/design-ui-ux-pro-max` — UI UX Pro Max (Design Lead): A full UI/UX system: tokens, components, states, accessibility and responsive rules.
- `/design-taste` — Taste (Taste Maker): A design critic that ranks fixes on hierarchy, spacing, alignment and rhythm.
- `/design-frontend` — Frontend Design (Front of House): Builds responsive front-end UI in the project's own stack and patterns.
- `/design-transitions` — Transitions (Motion Artist): A small CSS motion library for purposeful, fast, accessible transitions.
- `/design-web-artifacts` — Web Artifacts (Prototyper): Turns an idea into a live, single-file HTML prototype you can open right away.
- `/design-brand-guidelines` — Brand Guidelines (Brand Keeper): Builds a brand kit: logo rules, palette, type pairings, voice and do/don't examples.

### Marketing
- `/mktg-copywriting` — Copywriting (Word Smith): High-converting copy: headline, subhead, benefits, objections and a clear call to action.
- `/mktg-ai-seo` — AI SEO (Search Whisperer): Makes pages easy for AI answer engines to read, trust and cite.
- `/mktg-cro` — CRO (Conversion Lead): Audits a page for friction and produces ranked, testable hypotheses.
- `/mktg-ad-creative` — Ad Creative (Ad Maker): Writes ad headlines, primary text and visual briefs within each platform's limits.
- `/mktg-customer-research` — Customer Research (Voice of Customer): Turns interviews, reviews and tickets into themes, quotes and the customer's own language.
- `/mktg-lead-magnets` — Lead Magnets (Bait Master): Designs a lead magnet, its landing page, and a short nurture email sequence.

### Social Media
- `/social-post-writer` — Post Writer (Ghostwriter): Writes LinkedIn posts in the user's voice: a hook, short paragraphs and one idea.
- `/social-profile-optimizer` — Profile Optimizer (Profile Doctor): Rewrites a social profile headline, about section and featured items for search and clarity.
- `/social-reels-scripting` — Reels Scripting (Reel Writer): Scripts a 15-45 second short-form video with a hook, beats, on-screen text and a call to action.
- `/social-hook-generator` — Hook Generator (Hook Smith): Produces scroll-stopping opening lines in proven patterns, ready to test.
- `/social-voice-builder` — Voice Builder (Voice Coach): Extracts a writing voice from samples into a usable style guide.
- `/social-youtube-thumbnail` — YouTube Thumbnail (Cover Tester): Designs and scores thumbnail concepts so you test the strongest three.

### Finance
- `/fin-financial-statements` — Financial Statements (Statement Builder): Builds P&L, balance sheet and cash flow statements from a trial balance.
- `/fin-journal-entry` — Journal Entry (Journal Keeper): Drafts balanced journal entries with dates, accounts, descriptions and support references.
- `/fin-reconciliation` — Reconciliation (Reconciler): Matches bank and ledger lines and lists exactly what is still unmatched.
- `/fin-variance-analysis` — Variance Analysis (Variance Analyst): Explains actual-versus-budget differences with dollar and percent variances and drivers.
- `/fin-audit-support` — Audit Support (Auditor): Prepares audit requests, evidence indexes and an open-items log.
- `/fin-close-management` — Close Management (The Closer): Runs the month-end close: checklist, owners, dependencies and daily status.

### Small Business
- `/biz-cash-flow-snapshot` — Cash Flow Snapshot (Cash Watcher): Snapshots cash on hand and runway from balances and recent burn.
- `/biz-invoice-chase` — Invoice Chase (Debt Chaser): Ages unpaid invoices and drafts polite reminders that escalate with time.
- `/biz-plan-payroll` — Plan Payroll (Payroll Planner): Estimates gross-to-net pay, employer costs and the pay calendar.
- `/biz-margin-analyzer` — Margin Analyzer (Margin Analyst): Calculates gross and contribution margin by product and shows what a price change does.
- `/biz-tax-prep` — Tax Prep (Tax Prepper): Builds a document checklist, deduction categories and quarterly estimates.
- `/biz-run-campaign` — Run Campaign (Campaign Runner): Plans and tracks a campaign from goal and audience through budget, calendar and weekly review.

### Legal
- `/legal-review-contract` — Review Contract (Contract Reviewer): Summarises a contract, tabulates key terms and flags risky clauses with suggested edits.
- `/legal-triage-nda` — Triage NDA (NDA Triage): Fast traffic-light review of a non-disclosure agreement against standard checks.
- `/legal-compliance-check` — Compliance Check (Compliance Officer): Maps obligations (privacy, cookies, data handling) to the evidence the business has.
- `/legal-risk-assessment` — Legal Risk Assessment (Risk Assessor): Scores legal risks by likelihood and impact and lists mitigations.
- `/legal-vendor-check` — Vendor Check (Vendor Vetter): Vets a vendor on security, data protection, insurance and financial health.
- `/legal-signature-request` — Signature Request (Signature Wrangler): Prepares a signing packet: document, signers, signing order, deadlines and reminders.

## How to route
1. Read the request and name the department it belongs to.
2. If one skill fits, follow that skill's steps exactly.
3. If it spans departments, run the skills in order (for example: Legal Vendor Check before Finance Reconciliation), and say which skill handled each part.
4. If nothing fits, do the work directly and say so.
5. Never send, sign, publish or spend anything without explicit approval, whichever skill is running.
