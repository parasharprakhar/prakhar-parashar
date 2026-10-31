---
name: dev-context7
description: "Use when code depends on a library, framework, SDK or CLI and the exact API, config or version matters."
---


# Context7 — Docs Fetcher

Pulls current library documentation so answers do not rely on stale memory.

Department: **Developers**

## When to use
Use when code depends on a library, framework, SDK or CLI and the exact API, config or version matters.

## How to work
1. Identify the library and the version the project actually uses (check package.json / bun.lock).
2. If the Context7 MCP tools are available, resolve the library id and query the docs for the exact question.
3. If not, fetch the official docs page for that version and read the relevant section.
4. Quote the exact signature or config key you rely on and note the version.
5. Apply it to the codebase, matching existing patterns.

## Output
The answer, the doc source, and the version it applies to.

## Guardrails
Never invent API names. If the docs do not confirm something, say so.
