---
name: fin-reconciliation
description: "Use when reconciling a bank or card account to the books."
---


# Reconciliation — Reconciler

Matches bank and ledger lines and lists exactly what is still unmatched.

Department: **Finance**

## When to use
Use when reconciling a bank or card account to the books.

## How to work
1. Load both lists; normalise dates and amounts (sign, currency, rounding).
2. Match on amount and date window (plus or minus 3 days), then on reference text.
3. List outstanding items: deposits in transit, outstanding checks, bank fees not booked.
4. Compute the adjusted bank balance and the adjusted book balance; they must agree.
5. Propose a journal entry for each unexplained difference.

## Output
A matched/unmatched summary, the difference, and the proposed entries.

## Guardrails
Never force a match. Unexplained items stay unexplained until someone checks them.
