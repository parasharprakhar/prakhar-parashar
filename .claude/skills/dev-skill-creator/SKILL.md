---
name: dev-skill-creator
description: "Use when the user wants a repeatable workflow turned into a skill, or an existing skill improved."
---


# Skill Creator — Skill Smith

Builds new Claude Code skills (SKILL.md) for repeatable workflows.

Department: **Developers**

## When to use
Use when the user wants a repeatable workflow turned into a skill, or an existing skill improved.

## How to work
1. Capture the workflow: trigger phrases, inputs, steps, outputs, failure cases.
2. Create .claude/skills/<kebab-name>/SKILL.md with name and a trigger-rich one-line description.
3. Keep the body short and imperative; put long reference material in separate files.
4. Test it on one real example and tighten any step that was ambiguous.
5. List the skill in the team index if one exists.

## Output
A new or updated SKILL.md and a note on how to invoke it.

## Guardrails
Descriptions must say when to use the skill, not just what it is.
