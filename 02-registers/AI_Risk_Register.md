# AI Risk Register

**AGILE LABS PTE. LTD.** · Rev 1.0 · 14 August 2026 · Owner: ISM · Classification: Internal

> **Evidence for CTM 2025 clauses B.3.5, B.3.6.** Method per [ISMS-28](../01-policies/ISMS-28_AI_Risk_Management_Procedure.md).
>
> **These rows are to be merged into the CS Risk Assessment (RA-RTP workbook)**, using the existing 5×5 scale, risk acceptance criteria and risk owners. AI risk does not get its own methodology — the auditor already accepted the existing one at B.3.5–B.3.9.
>
> Ratings below are **proposed starting points** based on the Company's current AI use. They must be assessed by the risk owners, not adopted as written.

---

## Scoring

Uses the existing methodology: Likelihood 1–5 × Impact 1–5. Bands: Critical (20–25) · High (12–16) · Medium-High (8–10) · Medium (4–6) · Low (1–3).

Three additional AI dimensions are recorded per ISMS-28 Section 5: **Action space** (Narrow / Moderate / Broad), **Reversibility** (Reversible / Recoverable / Irreversible), **Autonomy** (Suggest / Approve / Notify / Autonomous).

---

## 1. Register

### R1 — Data leakage

| Ref | Scenario | L | I | Inherent | Action space | Revers. | Autonomy | Existing controls | Treatment | Residual | Owner |
|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-R1.1 | Developer pastes customer confidential material or personal data into a sanctioned AI tool | 3 | 5 | **High** | Narrow | Irreversible | Suggest | ISMS-24 Section 7 data rules; training; exclusions; training-opt-out on vendor | Mitigate — training, quiz, quarterly reminder, reporting duty | *[  ]* | ISM |
| AI-R1.2 | Developer uses an unsanctioned free-tier GenAI service with Company code | 3 | 4 | **High** | Narrow | Irreversible | Suggest | Web filtering; SSO-only tools; policy + acknowledgement | Mitigate — filter coverage verified quarterly; provide a good sanctioned alternative | *[  ]* | ISM |
| AI-R1.3 | AI tool indexes a repository or path containing secrets or restricted customer material | 2 | 5 | **High** | Narrow | Irreversible | Suggest | Ignore files and workspace exclusions (ISMS-25 Section 4); secret scanning | Mitigate — exclusions verified quarterly | *[  ]* | Technical Leader |
| AI-R1.4 | Vendor changes terms and begins training on submitted content | 2 | 5 | **High** | Narrow | Irreversible | n/a | ISMS-29 Section 7 monitoring; quarterly settings verification | Mitigate — trigger-event reassessment | *[  ]* | ISM |
| AI-R1.5 | Confidential AI output shared externally without recognising it inherits classification | 3 | 3 | **Medium-High** | Narrow | Irreversible | Suggest | ISMS-27 Section 2.3 inheritance rule; training topic 4 | Mitigate — training and worked example in AI Data Inventory Section 3 | *[  ]* | ISM |

### R2 — Prompt injection and manipulation

| Ref | Scenario | L | I | Inherent | Action space | Revers. | Autonomy | Existing controls | Treatment | Residual | Owner |
|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-R2.1 | Instructions embedded in a repository file, ticket or document redirect the AI tool | 3 | 3 | **Medium-High** | Narrow | Recoverable | Suggest | Human review of all output; ISMS-25 Section 6 instruction/data separation | Mitigate — adversarial test T2; reporting duty | *[  ]* | Technical Leader |
| AI-R2.2 | Injection in a delivered AI feature causes disclosure of system prompt or connected data | 2 | 4 | **Medium-High** | Moderate | Irreversible | Approve | ISMS-25 Section 6; adversarial tests T1–T4 before release | Mitigate — test set mandatory at SDLC Stage 4 | *[  ]* | Technical Leader |

### R3 — Excessive agency

| Ref | Scenario | L | I | Inherent | Action space | Revers. | Autonomy | Existing controls | Treatment | Residual | Owner |
|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-R3.1 | An agent mode is enabled in a sanctioned tool without assessment and modifies code or runs commands | 3 | 4 | **High** | Broad | Recoverable | Notify | ISMS-31 default-off; workspace-level control | **Bound** — verify and disable agent modes; approval required to enable | *[  ]* | Technical Leader |
| AI-R3.2 | An AI capability takes an unauthorised action in a customer or Company system | 1 | 5 | **Medium-High** | Broad | Irreversible | Autonomous | ISMS-31 hard boundaries Section 3.1 — no agent on production, no production credentials | **Avoid** — hard boundary; not permitted | *[  ]* | ISM |

### R4 — Output error and over-reliance

| Ref | Scenario | L | I | Inherent | Action space | Revers. | Autonomy | Existing controls | Treatment | Residual | Owner |
|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-R4.1 | Incorrect AI-generated code merged and released to a customer | 3 | 4 | **High** | Narrow | Recoverable | Suggest | Mandatory peer review; SonarQube gate; comprehension requirement | Mitigate — ISMS-07 Annex A Section 4; rejection rate monitored | *[  ]* | Technical Leader |
| AI-R4.2 | Automation bias — reviewers approve AI output without genuine scrutiny | 3 | 3 | **Medium-High** | Narrow | Recoverable | Suggest | Review process; rejection-rate monitoring at quarterly AI review | Mitigate — ISMS-07 Annex A Section 4.1; training topic 6 | *[  ]* | Technical Leader |
| AI-R4.3 | AI-hallucinated dependency installed (non-existent or typosquatted package) | 2 | 4 | **Medium-High** | Narrow | Recoverable | Suggest | ISMS-07 Annex A Section 4 dependency discipline; lock files; CVE monitoring | Mitigate | *[  ]* | Technical Leader |

### R5 — Supply chain and model integrity

| Ref | Scenario | L | I | Inherent | Action space | Revers. | Autonomy | Existing controls | Treatment | Residual | Owner |
|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-R5.1 | Malicious or compromised AI IDE extension or plugin | 2 | 4 | **Medium-High** | Moderate | Recoverable | Suggest | ISMS-25 Section 4 extensions individually approved; Sophos endpoint protection | Mitigate | *[  ]* | DevOps Admin |
| AI-R5.2 | AI vendor compromised, exposing submitted content | 1 | 5 | **Medium-High** | Narrow | Irreversible | n/a | ISMS-29 Section 3.2 vendor assessment; minimum retention limits blast radius | Mitigate + accept residual | *[  ]* | ISM |
| AI-R5.3 | Silent model substitution or upgrade changes delivered behaviour | 3 | 3 | **Medium-High** | Narrow | Recoverable | Suggest | ISMS-25 Section 5 model pinning; ISMS-29 Section 3.3 A2 change notice | Mitigate — change control and re-test | *[  ]* | Technical Leader |

### R6 — Availability and dependency

| Ref | Scenario | L | I | Inherent | Action space | Revers. | Autonomy | Existing controls | Treatment | Residual | Owner |
|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-R6.1 | AI tool outage reduces development throughput | 3 | 2 | **Medium** | n/a | Reversible | n/a | Work continues without the tool; skill retention (ISMS-31 Section 3.4) | Accept | *[  ]* | Technical Leader |
| AI-R6.2 | AI provider outage degrades a delivered customer AI feature | 2 | 4 | **Medium-High** | n/a | Reversible | n/a | Graceful degradation (ISMS-25 Section 5); BIA entry; ISMS-13 Annex A AI-7 | Mitigate | *[  ]* | Technical Leader |
| AI-R6.3 | Uncontrolled AI usage cost | 2 | 2 | **Medium** | n/a | Reversible | n/a | Rate limits, quotas, billing alerts (ISMS-25 Section 5) | Mitigate | *[  ]* | DevOps Admin |

### R7 — Legal, IP and licensing

| Ref | Scenario | L | I | Inherent | Action space | Revers. | Autonomy | Existing controls | Treatment | Residual | Owner |
|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-R7.1 | Generated code reproduces identifiable licensed third-party material in a customer deliverable | 2 | 4 | **Medium-High** | Narrow | Recoverable | Suggest | ISMS-24 Section 10.3 licence check; review | Mitigate | *[  ]* | Technical Leader |
| AI-R7.2 | AI used on an engagement where the customer contract prohibits or restricts it | 2 | 4 | **Medium-High** | Narrow | Irreversible | Suggest | ISMS-29 Section 6 pass-through check at project initiation | Mitigate — contract check before tool use | *[  ]* | ISM |
| AI-R7.3 | Unclear ownership of AI-generated output in a deliverable | 2 | 3 | **Medium** | n/a | Recoverable | n/a | ISMS-29 Section 5 requirement 7; contract review | Mitigate | *[  ]* | ISM |

### R8 — Privacy and individual impact

| Ref | Scenario | L | I | Inherent | Action space | Revers. | Autonomy | Existing controls | Treatment | Residual | Owner |
|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-R8.1 | Personal data processed by an AI system without lawful basis or DPO assessment | 2 | 5 | **High** | Narrow | Irreversible | Suggest | ISMS-24 Section 7 prohibition; ISMS-27 Section 8; DPO approval gate | Mitigate | *[  ]* | DPO |
| AI-R8.2 | Notifiable data breach involving personal data exposed through an AI tool | 1 | 5 | **Medium-High** | Narrow | Irreversible | n/a | ISMS-13 Annex A Section 6.1 notification criteria and timelines; annual exercise | Mitigate | *[  ]* | DPO |
| AI-R8.3 | AI output shapes a decision affecting an individual without human oversight | 1 | 4 | **Medium** | Narrow | Recoverable | Suggest | ISMS-24 Section 10.6 prohibition; ISMS-28 Section 6 impact assessment | Avoid | *[  ]* | ISM |

## 2. Summary

| Category | Rows | Highest inherent | Primary treatment |
|---|---|---|---|
| R1 Data leakage | 5 | High | Mitigate — policy, training, technical exclusion, vendor terms |
| R2 Prompt injection | 2 | Medium-High | Mitigate — separation, testing, human review |
| R3 Excessive agency | 2 | High | **Bound / Avoid** — hard boundaries, default-off |
| R4 Output error | 3 | High | Mitigate — mandatory review and gate |
| R5 Supply chain | 3 | Medium-High | Mitigate — approval, pinning, monitoring |
| R6 Availability | 3 | Medium-High | Mitigate / Accept |
| R7 Legal and IP | 3 | Medium-High | Mitigate — contract checks |
| R8 Privacy | 3 | High | Mitigate / Avoid |
| **Total** | **24** | | |

## 3. Review record

| Date | Reviewed by | Scope | Changes | Next review |
|---|---|---|---|---|
| *[date]* | ISM with risk owners | All 24 rows | Initial assessment | Annually + on trigger |

---

## Completion guidance

- **Ratings must be assessed, not accepted.** The L and I values above are proposed for a company of this size and profile. Each risk owner confirms or changes them, and the change is the evidence that assessment happened.
- **The residual column must be filled.** An empty residual rating means the treatment has not been evaluated, which is what B.3.6 asks for.
- **AI-R3.1 is the live one.** If an agent mode is available and enabled in the AI-assisted IDE, this risk is realised today and the likelihood is 5, not 3. Verify before the audit — see [ISMS-31 Section 6](../01-policies/ISMS-31_Agentic_AI_Governance_Policy.md).
- **Merge, don't parallel-run.** Once these rows are in the RA-RTP workbook, this file becomes a reference copy. Maintain one register.
