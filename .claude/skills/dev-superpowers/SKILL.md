---
name: dev-superpowers
description: "Use for any non-trivial feature, bug fix or refactor where the approach matters. Triggers: build a feature, plan this change, debug this, review my code, finish this branch."
---


# Superpowers — Skill Forge

Core engineering discipline in one pack: clarify, plan, test-first build, debug, review, verify.

Department: **Developers**

## When to use
Use for any non-trivial feature, bug fix or refactor where the approach matters. Triggers: build a feature, plan this change, debug this, review my code, finish this branch.

## How to work
1. Restate the goal, constraints and what 'done' looks like. Ask only if a blocking fact is missing.
2. Brainstorm 2-3 approaches with trade-offs; pick one and say why.
3. Write a short plan: files to touch, order of steps, risks.
4. Write a failing test first, then the smallest change that makes it pass.
5. Debug systematically: reproduce, form one hypothesis, test it, fix root cause, not symptoms.
6. Self-review the diff for dead code, naming, edge cases and security.
7. Verify with lint, build and tests before claiming the work is done.

## Output
A short plan, the change itself, and a verification summary listing the commands run and their results.

## Guardrails
Do not claim success without running the checks. Report failures with the output.
