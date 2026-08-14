# Corrective Action Register — CTM 2025 AI Security Pillar

**AGILE LABS PTE. LTD.** · Rev 1.0 · 14 August 2026 · Owner: ISM · Classification: Internal

> **For submission to ISOCert** ahead of the verification audit, 17–18 August 2026.
>
> Audit reference: CTM 2025 recertification, 27–30 May 2026. Lead auditor: Phang Mui Foong.
> Findings: 18 minor non-conformities (all AI pillar), 5 areas for improvement, 0 major.

---

## 1. Root cause

All 18 minor non-conformities share a single systemic root cause. It is stated once here rather than repeated per row.

> **AI tool adoption was treated as a productivity change rather than a change to ISMS scope.** The Company adopted AI-assisted development tooling without extending the ISMS to cover it. The CTM 2025 AI pillar clauses were self-assessed as gaps on 21 May 2026, but no closure plan was executed before the audit on 27–30 May, and no individual had been designated as owner for AI security.
>
> The five areas for improvement share a related cause: **controls designed for the classical scope were not re-examined when scope or practice changed.**

### 1.1 Systemic corrective actions

These prevent recurrence. They apply across all 18 findings.

| # | Corrective action | Owner | Target | Evidence | Status |
|---|---|---|---|---|---|
| S1 | Designate the ISM as **AI Security Owner** with documented accountability | Director | *[date]* | AIMS-00 Section 3.2 approved; management review minute | *[  ]* |
| S2 | Add an **AI impact question** to the ISMS-14 change management review and the annual scope review | ISM | *[date]* | Updated change review form | *[  ]* |
| S3 | Add **CTM clauses including the AI pillar** to the ISMS internal audit checklist and audit plan | ISM | *[date]* | Updated checklist ([draft](Internal_Audit_Checklist_AI.md)) | *[  ]* |
| S4 | Establish a **quarterly AI review** owned by the ISM, with a standing agenda and cross-functional input from the Technical Leader, DevOps Administrator and DPO, reporting to the Director at management review | ISM | *[date]* | AI review record; management review minute | *[  ]* |
| S5 | Include the AI pillar in the **annual CTM self-assessment** with a documented closure plan for any gap found | ISM | *[date]* | Self-assessment procedure updated | *[  ]* |

## 2. Findings register

Status values: **Open** · **In progress** · **Ready for verification** · **Closed**

| Ref | Clause | Type | Finding (as raised) | Correction (immediate) | Deliverable / evidence | Owner | Target | Status |
|---|---|---|---|---|---|---|---|---|
| 6 | B.1.3 | Minor NC | AI Acceptable Use Policy was not evident | Issue ISMS-24; approve via the 3-eyes chain; communicate to all staff and collect acknowledgements | ISMS-24 approved · acknowledgement log · Slack/all-hands communication | ISM | *[date]* | *[  ]* |
| 7 | B.1.6 | Minor NC | Objectives to guide secure use of AI systems and use per intended purposes not established | Establish eight AI security objectives with measures and targets; approve at management review; add to ISMS-01 objectives | AIMS-01 Section 3 · AI Objectives register · management review minute | ISM | *[date]* | *[  ]* |
| 8 | B.2.3 | Minor NC | AI cross-functional team not established; AI security best practices not communicated | Assign AI duties across named roles (AIMS-00 Section 3.2) and establish a quarterly AI review chaired by the ISM with the Technical Leader, DevOps Administrator and DPO; hold the first review; deliver an AI security briefing and post best practice to the ISMS channel | AIMS-00 Section 3.2 · AI review record listing participants · briefing deck · attendance · Slack post | ISM | *[date]* | *[  ]* |
| 9 | B.2.4 | Minor NC | AI Policies/Procedures not established | Issue the AI document set (AIMS-00/01, ISMS-24 to ISMS-31, ISMS-07 Annex A, ISMS-13 Annex A); register in the ISMS document register | 12 approved documents · updated document register | ISM | *[date]* | *[  ]* |
| 10 | B.5.1 | Minor NC | AI related law or governance framework in Singapore should be listed in the Register | Merge the AI instruments into the Register; record the UK and EU applicability assessments; review and approve with a date | Updated Register with dated review and approval | ISM | *[date]* | *[  ]* |
| 11 | B.9.5 | Minor NC | Policies/procedures on classification and handling of AI asset not established | Establish AI asset classification and handling rules (ISMS-27 Section 2, ISMS-24 Section 6–7); populate the AI Asset Register; extend the classification guideline with the inheritance rule | ISMS-27 · ISMS-24 · AI Asset Register · updated classification guideline | ISM | *[date]* | *[  ]* |
| 12 | B.9.6 | Minor NC | Data flow diagram for AI assets not established — training data, input including prompts, output from AI | Produce the AI data flow diagram and step narrative covering all three; add AI rows to the Data Inventory | AI Data Flow (diagram + narrative) · updated Data Inventory | Technical Leader | *[date]* | *[  ]* |
| 13 | B.9.7 | Minor NC | Secure AI data handling not established for data input, AI model, data output — integrity, provenance, security | Establish handling rules for input, model and output covering integrity, provenance and retention | ISMS-27 Sections 5–7 · ISMS-25 Section 5–6 · ISMS-07 Annex A Section 3.2 · AI Data Inventory | ISM | *[date]* | *[  ]* |
| 14 | B.12.4 | Minor NC | No process to secure configuration of AI servers, services, models, packages or libraries | Issue ISMS-25; apply the baseline to every AI asset; capture dated configuration evidence | ISMS-25 approved · configuration evidence pack | DevOps Admin | *[date]* | *[  ]* |
| 15 | B.12.8 | Minor NC | Secure configuration for AI not established — model hardening, prompt engineering | Establish model hardening and prompt engineering requirements; apply to AI features; record adversarial test results | ISMS-25 Sections 6 and 6.1 · test record | Technical Leader | *[date]* | *[  ]* |
| 16 | B.14.3 | Minor NC | No SDLC framework for AI across the life cycle of the AI system | Issue ISMS-07 Annex A covering all seven life cycle stages and AI-assisted development controls; apply to a current project | ISMS-07 Annex A · stage-gate record for one project · merge request samples | Technical Leader | *[date]* | *[  ]* |
| 17 | B.21.4 | Minor NC | Incident Response plan for AI-specific scenarios not evident | Add AI incident scenarios to ISMS-13 Annex A; **conduct an AI incident tabletop exercise before the verification audit** | ISMS-13 Annex A · completed exercise record | ISM | *[date]* | *[  ]* |
| 18 | B.21.6 | Minor NC | Incident management policy and response plan does not integrate AI-specific incident response | Integrate AI categories, response tasks, escalation and notification into ISMS-13 via Annex A; reissue ISMS-13 referencing the annex | ISMS-13 revision bump referencing Annex A | ISM | *[date]* | *[  ]* |
| 19 | A.3.4(a) | Minor NC | Data inventory for AI covering the life cycle of the data not evident | Add AI data rows covering collection, input, processing, output, storage, retention and disposal; merge into the Company Data Inventory | AI Data Inventory merged into Data Inventory | ISM | *[date]* | *[  ]* |
| 20 | A.3.4(c) | Minor NC | Policy/procedure to protect AI tools and services not evident | Establish protection requirements for AI tools, accounts, keys and subscriptions; evidence account and settings state | ISMS-24 Section 8 · ISMS-25 Section 4–5 · workspace and settings exports | DevOps Admin | *[date]* | *[  ]* |
| 21 | A.3.4(d) | Minor NC | Measures to mitigate data leakage to external/public and internal AI tools not established | Document and evidence the leakage controls: web filtering, managed accounts, training opt-out, indexing exclusions, secret hygiene, prompt discipline | ISMS-24 Section 9 · web filter policy · privacy settings screenshots | DevOps Admin | *[date]* | *[  ]* |
| 22 | A.4.4(j) | Minor NC | Reporting of AI security concerns or unexpected AI Behaviour not communicated to employees | Define what and how to report (ISMS-24 Section 11); communicate in the AI briefing; add to induction and annual training with a quiz item | ISMS-24 Section 11 · ISMS-30 · briefing deck · attendance · quiz results | ISM | *[date]* | *[  ]* |
| 23 | A.6.4(a) | Minor NC | No process for securing configuration per CIS Benchmarks for computers used to deploy AI services/applications | Adopt CIS Benchmarks for macOS endpoints and any cloud host used for AI; complete the baseline mapping with deviations and justification | ISMS-25 Section 8 · CIS Baseline Mapping completed | DevOps Admin | *[date]* | *[  ]* |

## 3. Areas for improvement

| Ref | Clause | Finding | Action | Deliverable | Owner | Target | Status |
|---|---|---|---|---|---|---|---|
| AFI-1 | A.9.4(a), B.9.2 | Incident procedure does not state PDPC notification conditions (significant harm / 500+ individuals) | State the criteria and timelines explicitly and cross-reference from ISMS-13 | ISMS-13 Annex A Section 6.1 + cross-reference in ISMS-13 | DPO | *[date]* | *[  ]* |
| AFI-2 | B.9.8 | Lack of comprehensive data management policy covering collect, use, protect, dispose | ISMS-27 covers AI data. **A Company-wide data management policy remains outstanding** and is scheduled separately | ISMS-27 approved; Company-wide policy planned | ISM | *[date]* | **Partial** |
| AFI-3 | B.22.8 | BCP/DR exercise not conducted in 2025 | Conduct a DR exercise and record it; schedule annually in the ISMS calendar. **Not addressed by the AI document set** | DR exercise record | ISM | *[date]* | **Open** |
| AFI-4 | B.6 | No integration of CTM audit into ISMS internal audit (repeat) | Add CTM clauses including the AI pillar to the internal audit checklist and audit plan | Updated internal audit checklist and plan | ISM | *[date]* | *[  ]* |
| AFI-5 | B.7.1 | No documented policy outlining cyber training requirements (repeat) | Document training types, frequency, audience and assessment requirements | ISMS-30 approved · training records | ISM | *[date]* | *[  ]* |

## 4. Status summary

| Status | Count |
|---|---|
| Open | *[  ]* |
| In progress | *[  ]* |
| Ready for verification | *[  ]* |
| Closed | *[  ]* |
| **Total findings** | **23** |

## 5. Declaration

| | |
|---|---|
| Prepared by | Wayne Tng, Technical Leader · *[date]* |
| Reviewed by | Sze Tho ChangSheng, Information Security Manager · *[date]* |
| Approved by | Liao Zhuli, Sujata, Director · *[date]* |
| Submitted to | ISOCert · *[date]* |

---

## Guidance for completing this register

**Two things carry disproportionate weight with an auditor reviewing a CAR response.**

1. **Root cause quality.** Eighteen findings with eighteen root causes reading "policy not written" tells an auditor the Company has not understood why it happened. One honest systemic root cause with five systemic corrective actions tells them it has. Section 1 is written that way deliberately.

2. **Correction vs corrective action.** *Correction* fixes this instance (write the policy). *Corrective action* stops it recurring (designate an owner; add AI to the change review). Rows in Section 2 give the correction; Section 1.1 gives the corrective action. An auditor who sees only corrections will ask what stops it happening again with the next technology.

**On honesty.** AFI-2 is marked Partial and AFI-3 Open, because that is the truth and neither is fixed by an AI document. Overstating closure on two AFIs to make a table look complete risks the credibility of the eighteen rows that genuinely are closed.
