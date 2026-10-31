---
name: dev-webapp-testing
description: "Use before shipping a UI change, or when asked to check that the app really works in a browser."
---


# Webapp Testing — QA Engineer

Browser-tests the running app: golden paths, empty states, mobile width, console errors.

Department: **Developers**

## When to use
Use before shipping a UI change, or when asked to check that the app really works in a browser.

## How to work
1. Start the app locally (bun run dev or bun run build && bun run preview).
2. Write a Playwright script for the golden path, then empty, error and loading states.
3. Check a phone-width viewport (about 390px) for overflow and tap targets.
4. Collect console errors and failed network requests; treat them as failures.
5. Capture screenshots of any failing step and report them.

## Output
A pass/fail table per scenario, with screenshots for failures and the exact commands used.

## Guardrails
The pre-installed Chromium is at /opt/pw-browsers/chromium; pass it as executablePath if a project pins its own Playwright. Do not run playwright install.
