---
name: dev-claude-mem
description: "Use at the start of work to recall past decisions, and at the end to record new ones. Triggers: remember this, what did we decide, pick up where we left off."
---


# Claude-Mem — Memory Keeper

Keeps durable project memory in plain markdown so decisions survive between sessions.

Department: **Developers**

## When to use
Use at the start of work to recall past decisions, and at the end to record new ones. Triggers: remember this, what did we decide, pick up where we left off.

## How to work
1. At session start, read .claude/memory/MEMORY.md and the files it links to.
2. During work, note decisions, constraints and open questions.
3. At session end, write or update one memory file per topic with the date and the reason for each decision.
4. Keep MEMORY.md as a one-line index of the files.
5. Never store secrets, tokens or personal data.

## Output
Updated markdown files under .claude/memory/ and a short summary of what changed.

## Guardrails
Memory must be verifiable. Mark anything unverified as such.
