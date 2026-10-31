---
name: design-frontend
description: "Use when asked to build or change a page or component in the web app."
---


# Frontend Design — Front of House

Builds responsive front-end UI in the project's own stack and patterns.

Department: **Designers**

## When to use
Use when asked to build or change a page or component in the web app.

## How to work
1. Read the existing components in src/components and the route structure before writing anything.
2. Reuse shadcn/ui primitives and the existing Tailwind tokens; avoid one-off styles.
3. Build mobile first; check layouts at 390px and 1280px widths.
4. Handle loading, empty and error states in the component.
5. Run the linter and build, then describe what changed.

## Output
The component or page change, plus the build and lint results.

## Guardrails
Keep changes inside the files the task needs. Do not restyle unrelated screens.
