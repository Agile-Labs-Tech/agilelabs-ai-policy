# Internal Audit Checklist — AI Security Pillar

**AGILE LABS PTE. LTD.** · Rev 1.0 · 14 August 2026 · Owner: ISM · Classification: Internal

> **Addresses AFI-4** — *"No integration of CTM audit into ISMS audit (last year finding)."* This is a **repeat** area for improvement.
>
> This checklist is to be merged into the existing *ISO27001:2022 IA Checklist* so that CTM clauses, including the AI pillar, are audited internally each cycle. The systemic point of AFI-4 is that gaps should be found by the internal audit, not by the certification body.

---

## Audit details

| | |
|---|---|
| Standard / criteria | CSA CTM 2025, Performer tier — AI Security pillar; ISO/IEC 27001:2022; AIMS documents |
| Internal auditor | *[Wayne Tng — note independence limitation below]* |
| Audit date | *[  ]* |
| Auditee(s) | ISM, Technical Leader, DevOps Administrator, HR Director/DPO |
| Previous findings | 18 minor NC, 5 AFI (CTM recertification, 27–30 May 2026) |

> **Independence note.** In a 19-person company the internal auditor is often the person who wrote the documents. That is a real limitation and should be stated in the audit report rather than glossed over. Mitigations: the ISM reviews sections authored by the Technical Leader and vice versa; the Director reviews the audit report; consider an external reviewer for the AI sections every second cycle.

---

## Section 1 — Governance (B.1)

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 1.1 | Is there an approved AI Acceptable Use Policy, and is it in the document register? | ISMS-24, signed; register entry | ☐ C ☐ NC ☐ OFI | |
| 1.2 | Have AI security objectives been established, approved and measured? | AIMS-01 Section 3; AI Objectives register with results | ☐ C ☐ NC ☐ OFI | |
| 1.3 | Is a named individual accountable for AI security? | AIMS-00 Section 3.2; management review minute | ☐ C ☐ NC ☐ OFI | |
| 1.4 | Has AI security been reviewed by senior management in the last 12 months? | Management review minute, AI section | ☐ C ☐ NC ☐ OFI | |

## Section 2 — Policies and communication (B.2)

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 2.1 | Has the quarterly AI review been held, with cross-functional input recorded? | AI review records for the last 4 quarters | ☐ C ☐ NC ☐ OFI | *Check who attended, not just that it happened* |
| 2.2 | Has AI security best practice been communicated to staff at least quarterly? | Slack posts / all-hands decks, dated | ☐ C ☐ NC ☐ OFI | |
| 2.3 | Is the AI policy set complete, approved and current (reviewed within 12 months)? | Document register; revision dates | ☐ C ☐ NC ☐ OFI | |
| 2.4 | Have all active staff acknowledged the AI policy? | Acknowledgement log vs current headcount | ☐ C ☐ NC ☐ OFI | |

## Section 3 — Risk and compliance (B.3, B.5)

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 3.1 | Are AI risks in the CS Risk Assessment with owners, treatment and residual ratings? | RA-RTP workbook, AI rows | ☐ C ☐ NC ☐ OFI | |
| 3.2 | Have AI risks been reviewed in the last 12 months? | Review date on the workbook | ☐ C ☐ NC ☐ OFI | |
| 3.3 | Are AI laws and governance frameworks listed in the Register, with a dated approval? | Register of Legal Requirements | ☐ C ☐ NC ☐ OFI | |
| 3.4 | Are non-applicability assessments (EU AI Act, UK) recorded and current? | Register Section 2 | ☐ C ☐ NC ☐ OFI | |
| 3.5 | Was the AI legal register reviewed quarterly at the quarterly AI review? | AI review record, agenda item 7 | ☐ C ☐ NC ☐ OFI | |

## Section 4 — Training (B.7, A.4.4(j))

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 4.1 | Is there a documented policy stating training types, frequency and audience? | ISMS-30 Section 3 | ☐ C ☐ NC ☐ OFI | |
| 4.2 | Did AI training cover **all 11 mandatory topics**, including the reporting duty? | Training deck vs ISMS-30 Section 4 | ☐ C ☐ NC ☐ OFI | |
| 4.3 | Is there a quiz item on reporting, and did staff pass it? | Quiz results | ☐ C ☐ NC ☐ OFI | |
| 4.4 | Did new joiners complete AI training within 30 days? | Induction records | ☐ C ☐ NC ☐ OFI | |

## Section 5 — AI assets and data (B.9, A.3.4)

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 5.1 | Does the AI Asset Register reflect the tools **actually in use**? | Register vs web filter logs, expense records, workspace membership | ☐ C ☐ NC ☐ OFI | *Test by observation, not by asking* |
| 5.2 | Have AI features in existing SaaS products been checked and decided? | AI Asset Register Section 6 | ☐ C ☐ NC ☐ OFI | |
| 5.3 | Does the AI Data Inventory cover all 7 lifecycle stages for every row? | AI Data Inventory | ☐ C ☐ NC ☐ OFI | |
| 5.4 | Is vendor retention recorded alongside Company retention? | Inventory stage 6 | ☐ C ☐ NC ☐ OFI | |
| 5.5 | Does the AI data flow match actual behaviour? | Diagram vs a live walkthrough with a developer | ☐ C ☐ NC ☐ OFI | |
| 5.6 | Is the classification inheritance rule applied in practice? | Sample: where did the output of a Confidential prompt end up? | ☐ C ☐ NC ☐ OFI | |
| 5.7 | Are provenance records complete for any third-party model artefact? | Provenance register | ☐ C ☐ NC ☐ OFI | |

## Section 6 — Secure configuration (B.12, A.6.4)

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 6.1 | Is configuration evidence dated within the current quarter for every AI asset? | Evidence folder | ☐ C ☐ NC ☐ OFI | |
| 6.2 | Is vendor training-on-content disabled, and evidenced? | EV-CONF-01 | ☐ C ☐ NC ☐ OFI | |
| 6.3 | Are exclusions / ignore files present and effective? | Repository configuration; test with a sample path | ☐ C ☐ NC ☐ OFI | |
| 6.4 | Are AI workspace admin rights limited to TL and DevOps Admin? | Member/role export | ☐ C ☐ NC ☐ OFI | |
| 6.5 | Are API keys scoped, stored in 1Password and rotated within 12 months? | Key inventory | ☐ C ☐ NC ☐ OFI | |
| 6.6 | Is the CIS baseline mapping complete, with deviations approved? | CIS Baseline Mapping | ☐ C ☐ NC ☐ OFI | |
| 6.7 | Is CVE monitoring extended to AI tools, SDKs and libraries? | CVE check record | ☐ C ☐ NC ☐ OFI | |
| 6.8 | Is agentic capability disabled or assessed and approved? | ISMS-31 Section 6; tool configuration | ☐ C ☐ NC ☐ OFI | |

## Section 7 — Secure AI development (B.14)

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 7.1 | Has the AI SDLC been applied to a real project, with gate records? | Stage-gate record | ☐ C ☐ NC ☐ OFI | |
| 7.2 | Was AI-assisted code peer-reviewed and did it pass the quality gate? | Sample merge requests + SonarQube | ☐ C ☐ NC ☐ OFI | |
| 7.3 | **What is the rejection rate on AI-assisted merge requests?** | Merge request history | ☐ C ☐ NC ☐ OFI | *A 100% approval rate indicates automation bias, not quality* |
| 7.4 | Are system prompts version-controlled and reviewed in merge requests? | Repository | ☐ C ☐ NC ☐ OFI | |
| 7.5 | Was adversarial testing performed before release of any AI feature? | Test record vs ISMS-25 Section 6.1 | ☐ C ☐ NC ☐ OFI | |

## Section 8 — Third party (B.17)

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 8.1 | Has every AI supplier been assessed and tiered? | Supplier assessments | ☐ C ☐ NC ☐ OFI | |
| 8.2 | Where terms are click-through, is the contractual gap and residual risk recorded and accepted? | ISMS-29 Section 5 record | ☐ C ☐ NC ☐ OFI | |
| 8.3 | Have customer contracts been checked for AI restrictions before tool use? | Engagement records | ☐ C ☐ NC ☐ OFI | |
| 8.4 | Were trigger-event reassessments performed where a vendor changed terms or model? | Reassessment records | ☐ C ☐ NC ☐ OFI | |

## Section 9 — Incident response (B.21, A.9.4)

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 9.1 | Does ISMS-13 reference the AI annex, and is the revision current? | ISMS-13; document register | ☐ C ☐ NC ☐ OFI | |
| 9.2 | Was an AI incident scenario exercised in the last 12 months? | Exercise record | ☐ C ☐ NC ☐ OFI | |
| 9.3 | Were the exercise's corrective actions closed? | Action log | ☐ C ☐ NC ☐ OFI | |
| 9.4 | Are PDPC notification criteria and timelines stated explicitly? | ISMS-13 Annex A Section 6.1 | ☐ C ☐ NC ☐ OFI | |
| 9.5 | Were AI concerns reported during the period, and how were they handled? | Incident register | ☐ C ☐ NC ☐ OFI | *Zero reports with no reporting culture is a finding, not a pass* |
| 9.6 | Do staff know how to report? | **Ask two staff members directly** | ☐ C ☐ NC ☐ OFI | *This is the real test of A.4.4(j)* |

## Section 10 — Previous findings

| # | Question | Result | Notes |
|---|---|---|---|
| 10.1 | Are all 18 minor NCs from May 2026 closed and effective? | ☐ C ☐ NC ☐ OFI | |
| 10.2 | Are the 5 AFIs addressed or scheduled with owners and dates? | ☐ C ☐ NC ☐ OFI | |
| 10.3 | **Have the systemic corrective actions (CAR Section 1.1) been implemented?** | ☐ C ☐ NC ☐ OFI | *This is what stops recurrence* |
| 10.4 | Have the two repeat findings (B.6, B.7.1) recurred? | ☐ C ☐ NC ☐ OFI | *A third occurrence would be serious* |

---

## Audit summary

| | |
|---|---|
| Conformities | |
| Non-conformities | |
| Opportunities for improvement | |
| Conclusion | |
| Auditor / date | |
| Reviewed by Director / date | |

---

## Note on audit technique

The May 2026 findings were all *"not established"* — absence of documents. Now that documents exist, the internal audit must test something harder: **whether they are used**.

Three techniques that find what document review misses:

1. **Observe, don't ask.** For 5.1, compare the AI Asset Register against web filter logs and expense records rather than asking what tools people use.
2. **Trace a real instance.** For 5.6, pick one merge request containing AI-assisted code and follow the data backwards: what went into the prompt, what classification, where did the output end up.
3. **Ask two staff directly.** For 9.6, the evidence for "reporting has been communicated" is not the deck. It is whether a randomly chosen employee can say what they would do.

A previous internal audit found *"no NC or Area for improvement"* (evidenced at B.6.6) — and the certification body then found 18. An internal audit that finds nothing is usually measuring the wrong thing.
