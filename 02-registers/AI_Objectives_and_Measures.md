# AI Objectives and Measures — Register

**AGILE LABS PTE. LTD.** · Rev 1.0 · 14 August 2026 · Owner: ISM · Classification: Internal

> **Evidence for CTM 2025 clause B.1.6.** Objectives are established in [AIMS-01 Section 3](../00-framework/AIMS-01_AI_Policy_and_Objectives.md). This register records measurement.
>
> **Must be approved by the Director and minuted at management review.** An objective that has never been measured or reported is not an established objective.

---

## Current period

| Period | 2026 (annual measurement) |
|---|---|
| Measured by | Information Security Manager |
| Measurement date | *[date]* |
| Approved by | Director, at management review *[date]* |

| Ref | Objective | Measure | Target | Freq | Owner | Result this period | Status | Notes |
|---|---|---|---|---|---|---|---|---|
| **AI-1** | AI used only through assessed and approved tools | % of AI tools in active use recorded in the AI Asset Register and approved | 100% | Annually | ISM | *[  ]* | *[  ]* | Denominator = tools observed in use, including web-filter hits and expense records — not only tools people declared |
| **AI-2** | No confidential, personal or customer production data exposed to AI systems | Number of confirmed data-leakage incidents involving AI tools | 0 | Annually | ISM | *[  ]* | *[  ]* | Zero is the target; zero *reports* with no reporting culture is not the same thing — read alongside AI-3 |
| **AI-3** | All staff understand and accept the rules for AI use | % of active staff with signed acknowledgement of ISMS-24 within 30 days of issue or joining | 100% | Annual / on hire | HR Director | *[  ]* | *[  ]* | Source: acknowledgement log |
| **AI-4** | AI-related risks identified and treated | AI risk scenarios reviewed and treatment status updated in the CS Risk Assessment | Reviewed at least annually | Annually | ISM | *[  ]* | *[  ]* | Source: RA-RTP workbook, AI rows |
| **AI-5** | Company can detect and respond to AI-specific incidents | AI incident scenario exercised, recorded and actions closed | ≥1 per year | Annually | ISM | *[  ]* | *[  ]* | Source: exercise record |
| **AI-6** | AI output subject to human review before use | % of merge requests containing AI-assisted code peer-reviewed and passing the security quality gate | 100% | Annually | Technical Leader | *[  ]* | *[  ]* | Source: GitLab merge request records + SonarQube |
| **AI-7** | AI tools run on a verified secure configuration | % of AI assets in the register with configuration evidence dated within the current review period | 100% | Annually | DevOps Admin | *[  ]* | *[  ]* | Source: ISMS evidence folder |
| **AI-8** | AI capability behaves within its intended purpose | Number of AI features released without a recorded adversarial test result | 0 | Per release | Technical Leader | *[  ]* | *[  ]* | Source: release records; "no AI feature released this period" is a valid result |

## Trend

Populate as years complete. Two consecutive misses on any objective is raised as an ISMS non-conformity (AIMS-01 Section 3.2).

| Ref | 2026 | 2027 | 2028 | 2029 |
|---|---|---|---|---|
| AI-1 | | | | |
| AI-2 | | | | |
| AI-3 | | | | |
| AI-4 | | | | |
| AI-5 | | | | |
| AI-6 | | | | |
| AI-7 | | | | |
| AI-8 | | | | |

## Out-of-cycle measurement

Annual measurement means a control that fails early in the year is not visible until the year end. Any of the following pulls the relevant measure forward rather than waiting:

| Trigger | Measure to re-run |
|---|---|
| A confirmed AI data-leakage incident | AI-2, and AI-1 if an unsanctioned tool was involved |
| An AI tool adopted, or an AI feature enabled in existing software | AI-1, AI-7 |
| A material change to an AI vendor's terms, plan or model | AI-7 |
| An internal or certification audit finding against the AI pillar | The objective the finding touches |
| Headcount change of more than 20% | AI-3 |

## Review record

| Date | Reviewed by | Forum | Outcome / actions |
|---|---|---|---|
| *[date]* | ISM | Annual measurement | Baseline established |
| *[date]* | Director | Management review | Objectives approved |

---

## Notes on measurement integrity

Three of these measures can be gamed by accident, and the quarterly AI review should read them with that in mind:

- **AI-1** is only meaningful if the denominator comes from observation (web filter logs, expense records, workspace membership) rather than self-declaration. Otherwise it measures honesty, not coverage.
- **AI-2** at zero can mean nothing happened or that nothing was reported. Read it against AI-3 and against the number of concerns raised under ISMS-24 Section 11 — a rise in reports with zero confirmed leakage is the healthy pattern.
- **AI-6** at 100% is expected, since the merge process enforces it. The informative number is the **rejection rate** on AI-assisted merge requests. A review process that never rejects is not reviewing (ISMS-07 Annex A Section 4.1).
- **On annual cadence.** Measuring once a year meets the CTM B.1.6 requirement, but it means the measurement is a *look-back over twelve months*, not a snapshot. AI-1, AI-6 and AI-7 in particular must be computed across the whole year — "were all tools registered on the day I checked" is a weaker claim than "was every tool registered throughout the year". Where the underlying record only shows current state, note that limitation in the Notes column rather than reporting 100%.
