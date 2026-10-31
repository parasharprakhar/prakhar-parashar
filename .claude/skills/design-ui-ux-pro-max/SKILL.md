---
name: design-ui-ux-pro-max
description: "Use when designing a new screen or component system, or when the UI lacks consistency."
---


# UI UX Pro Max — Design Lead

A full UI/UX system: tokens, components, states, accessibility and responsive rules.

Department: **Designers**

## When to use
Use when designing a new screen or component system, or when the UI lacks consistency.

## How to work
1. Define design tokens: colour roles (not raw hex in components), type scale, spacing, radius, elevation.
2. Specify components with every state: default, hover, focus, active, disabled, loading, error, empty.
3. Check WCAG AA contrast (4.5:1 body text, 3:1 large text and UI) and keyboard focus visibility.
4. Define the responsive breakpoints and how each layout collapses on a phone.
5. Map the tokens onto the project's Tailwind config and shadcn/ui components.

## Output
A token table, a component spec with states, and the code changes that implement it.

## Guardrails
Do not introduce a new visual style when the project already has one; extend it.
