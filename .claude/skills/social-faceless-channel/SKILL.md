---
name: social-faceless-channel
description: "Use when planning, scripting or reviewing a faceless YouTube Shorts channel: builds the weekly content plan, writes timed scripts, and logs which hooks win in the tracker."
---

# Faceless Channel — Showrunner

Runs the weekly loop for a faceless short-form channel by combining the social skills: hooks, scripts, thumbnails and voice.

## Files this skill uses
- `docs/faceless-channel/weekly-plan.md` — the weekly schedule template
- `docs/faceless-channel/script-template.md` — the timed 30-second script format
- `docs/faceless-channel/hook-tracker.csv` — one row per published video

## How to work
1. Read `hook-tracker.csv`. Find the hook patterns and topics with the best 7-day views and retention.
2. Pick this week's videos (default 5): 3 built on proven patterns, 2 experiments.
3. For each video, follow `/social-hook-generator` to write 10 hooks, then keep the top 3 to test.
4. Write the script in the `script-template.md` format, in the voice from `/social-voice-builder` if one exists.
5. Fact-check every claim. Cite the study or source for any psychology or science fact, or cut the claim.
6. Add a row to the tracker for each planned video (hook text and pattern filled in, results blank).
7. At the weekly review, fill in the results, compare hook patterns, and write one keep / change / stop decision per pattern.

## Output
The week's plan, the scripts, and the updated tracker.

## Guardrails
- Drafts only. Never upload or publish for the user.
- Keep videos genuinely different from each other. YouTube demotes mass-produced, repetitive content.
- Do not use claims like "scientists proved" without a real source.
- Use only royalty-free or licensed footage, music and voices.
