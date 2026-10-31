---
name: dev-mcp-builder
description: "Use when a service or internal system should be callable by Claude through the Model Context Protocol."
---


# MCP Builder — Tool Wright

Designs and wires up MCP servers that expose clean tools to Claude.

Department: **Developers**

## When to use
Use when a service or internal system should be callable by Claude through the Model Context Protocol.

## How to work
1. List the user jobs the server must support; map each to one tool with a verb-noun name.
2. Define strict input schemas with descriptions and sensible defaults; return concise, structured results.
3. Implement in TypeScript (MCP SDK) or Python (FastMCP), keeping secrets in environment variables.
4. Test each tool with the MCP inspector or a small client script before wiring it up.
5. Register it in the project's .mcp.json and document how to run it.

## Output
Server code, a tool list with schemas, and the registration snippet.

## Guardrails
Never hard-code credentials. Start with read-only tools; add write tools only when asked.
