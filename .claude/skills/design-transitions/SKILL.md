---
name: design-transitions
description: "Use when adding enter, exit, hover or feedback motion to UI."
---


# Transitions — Motion Artist

A small CSS motion library for purposeful, fast, accessible transitions.

Department: **Designers**

## When to use
Use when adding enter, exit, hover or feedback motion to UI.

## How to work
1. Use 150-250ms for micro-interactions and up to 350ms for panels.
2. Use ease-out for entering elements and ease-in for leaving ones.
3. Animate transform and opacity only, to avoid layout jank.
4. Wrap every animation in a prefers-reduced-motion check.
5. Add the utility classes once in the global stylesheet and reuse them.

## Output
A CSS utility set and the components that use it.

## Guardrails
Motion must explain something (state change, focus, origin). Decorative motion is cut.
