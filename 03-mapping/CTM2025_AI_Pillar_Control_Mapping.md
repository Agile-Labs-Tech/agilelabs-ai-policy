# CTM 2025 AI Pillar — Control Mapping

**AGILE LABS PTE. LTD.** · Rev 1.0 · 14 August 2026 · Owner: ISM · Classification: Internal

Every finding from the CTM 2025 recertification audit (27–30 May 2026) mapped to the document that establishes the control and the **record that proves it operated**.

> **Read the third column carefully.** A document closes a finding on paper. A record closes it in the audit room. Findings were raised as *"not established"* — for the verification audit on 17–18 August 2026 the auditor will look for both.

---

## 1. Minor non-conformities (18)

| # | Clause | Finding | Document establishing the control | **Record proving it operated** | Status |
|---|---|---|---|---|---|
| 6 | **B.1.3** | AI Acceptable Use Policy was not evident | [ISMS-24](../01-policies/ISMS-24_AI_Acceptable_Use_and_Security_Policy.md) | Approved policy (signed) + acknowledgement log + communication post | *[  ]* |
| 7 | **B.1.6** | Objectives to guide secure use of AI systems not established | [AIMS-01 Section 3](../00-framework/AIMS-01_AI_Policy_and_Objectives.md), [ISMS-24](../01-policies/ISMS-24_AI_Acceptable_Use_and_Security_Policy.md) Section 4 | [AI Objectives register](../02-registers/AI_Objectives_and_Measures.md) with Q3 results + management review minute | *[  ]* |
| 8 | **B.2.3** | AI cross-functional team not established; best practices not communicated | [AIMS-00 Section 3.2](../00-framework/AIMS-00_AI_Management_System_Scope_and_Context.md) (quarterly AI review, cross-functional roles) + [ISMS-30 Section 5](../01-policies/ISMS-30_AI_Competence_Training_and_Awareness.md) (communication) | AI review record showing who took part + quarterly staff communication (Slack post / all-hands deck) | *[  ]* |
| 9 | **B.2.4** | AI Policies/Procedures not established | The full set — [ISMS-24](../01-policies/ISMS-24_AI_Acceptable_Use_and_Security_Policy.md) · [25](../01-policies/ISMS-25_AI_Secure_Configuration_Standard.md) · [27](../01-policies/ISMS-27_AI_Data_Governance_and_Handling_Standard.md) · [28](../01-policies/ISMS-28_AI_Risk_Management_Procedure.md) · [29](../01-policies/ISMS-29_AI_Supplier_and_Third_Party_Assurance.md) · [30](../01-policies/ISMS-30_AI_Competence_Training_and_Awareness.md) · [31](../01-policies/ISMS-31_Agentic_AI_Governance_Policy.md), plus [ISMS-07 Annex A](../01-policies/ISMS-07_AnnexA_Secure_AI_Development_Lifecycle.md) and [ISMS-13 Annex A](../01-policies/ISMS-13_AnnexA_AI_Incident_Response.md) | All approved and entered in the ISMS document register | *[  ]* |
| 10 | **B.5.1** | AI law / governance framework not listed in the Register | [ISMS-28 Section 8](../01-policies/ISMS-28_AI_Risk_Management_Procedure.md) | [AI Legal Register](../02-registers/AI_Legal_and_Regulatory_Register.md) merged into the Company Register, reviewed and **dated-approved** | *[  ]* |
| 11 | **B.9.5** | Policies/procedures on classification and handling of AI assets not established | [ISMS-27 Section 2](../01-policies/ISMS-27_AI_Data_Governance_and_Handling_Standard.md), [ISMS-24](../01-policies/ISMS-24_AI_Acceptable_Use_and_Security_Policy.md) Section 6–7 | [AI Asset Register](../02-registers/AI_Asset_Register.md) populated + updated data classification guideline | *[  ]* |
| 12 | **B.9.6** | Data flow diagram for AI assets not established | [ISMS-27](../01-policies/ISMS-27_AI_Data_Governance_and_Handling_Standard.md) Section 4 | [AI Data Flow](../02-registers/AI_Data_Flow.md) — diagram + step narrative, verified against actual behaviour | *[  ]* |
| 13 | **B.9.7** | Secure AI data handling not established for input, model, output | [ISMS-27](../01-policies/ISMS-27_AI_Data_Governance_and_Handling_Standard.md) Sections 5–7 | [AI Data Inventory](../02-registers/AI_Data_Inventory.md) + provenance records + configuration evidence | *[  ]* |
| 14 | **B.12.4** | No process to secure configuration of AI servers, services, models, packages, libraries | [ISMS-25 Sections 4, 5, 7, 8](../01-policies/ISMS-25_AI_Secure_Configuration_Standard.md) | Dated configuration evidence pack for every AI asset | *[  ]* |
| 15 | **B.12.8** | Secure configuration for AI not established — model hardening, prompt engineering | [ISMS-25](../01-policies/ISMS-25_AI_Secure_Configuration_Standard.md) Sections 5, 6 | Adversarial test record (Section 6.1 test set) or a recorded "no AI feature released" position | *[  ]* |
| 16 | **B.14.3** | No SDLC framework for AI across the life cycle | [ISMS-07 Annex A](../01-policies/ISMS-07_AnnexA_Secure_AI_Development_Lifecycle.md) | Stage-gate record for at least one project + merge request records showing Section 4 controls | *[  ]* |
| 17 | **B.21.4** | Incident Response plan for AI-specific scenarios not evident | [ISMS-13 Annex A Sections 2, 8](../01-policies/ISMS-13_AnnexA_AI_Incident_Response.md) | **Completed AI incident tabletop exercise record** | *[  ]* |
| 18 | **B.21.6** | Incident management policy does not integrate AI-specific incident response | [ISMS-13 Annex A](../01-policies/ISMS-13_AnnexA_AI_Incident_Response.md) Sections 4, 5 | ISMS-13 **revision-bumped** to reference Annex A, in the document register | *[  ]* |
| 19 | **A.3.4(a)** | Data inventory for AI covering the data life cycle not evident | [ISMS-27](../01-policies/ISMS-27_AI_Data_Governance_and_Handling_Standard.md) Section 3 | AI Data Inventory complete across **all 7 lifecycle stages**, merged into the Company Data Inventory | *[  ]* |
| 20 | **A.3.4(c)** | Policy/procedure to protect AI tools and services not evident | [ISMS-24](../01-policies/ISMS-24_AI_Acceptable_Use_and_Security_Policy.md) Sections 6, 8; [ISMS-25](../01-policies/ISMS-25_AI_Secure_Configuration_Standard.md) Section 4–5 | Workspace member export + SSO/MFA configuration + key inventory | *[  ]* |
| 21 | **A.3.4(d)** | Measures to mitigate data leakage to external/internal AI tools not established | [ISMS-24](../01-policies/ISMS-24_AI_Acceptable_Use_and_Security_Policy.md) Section 9 | Web filter policy + GenAI category config + block events + vendor privacy settings screenshots | *[  ]* |
| 22 | **A.4.4(j)** | Reporting of AI security concerns / unexpected behaviour not communicated to employees | [ISMS-24](../01-policies/ISMS-24_AI_Acceptable_Use_and_Security_Policy.md) Section 11; [ISMS-30 Section 4](../01-policies/ISMS-30_AI_Competence_Training_and_Awareness.md) | Briefing deck + attendance + **quiz result on the reporting question** | *[  ]* |
| 23 | **A.6.4(a)** | No process for CIS Benchmark configuration on computers used for AI | [ISMS-25](../01-policies/ISMS-25_AI_Secure_Configuration_Standard.md) Section 8 | [CIS Baseline Mapping](../02-registers/CIS_Baseline_Mapping.md) completed, with deviations approved | *[  ]* |

## 2. Areas for improvement (5)

| # | Clause | Finding | Addressed by | Record | Status |
|---|---|---|---|---|---|
| AFI-1 | A.9.4(a), B.9.2 | Procedure does not state PDPC notification conditions (significant harm / 500+ individuals) | [ISMS-13 Annex A Section 6.1](../01-policies/ISMS-13_AnnexA_AI_Incident_Response.md) | ISMS-13 revised with cross-reference to the criteria | *[  ]* |
| AFI-2 | B.9.8 | No comprehensive data management policy (collect, use, protect, dispose) | [ISMS-27](../01-policies/ISMS-27_AI_Data_Governance_and_Handling_Standard.md) covers **AI data**; a Company-wide data management policy is **still outstanding** | [ISMS-27](../01-policies/ISMS-27_AI_Data_Governance_and_Handling_Standard.md) approved; Company-wide policy scheduled | **Partial** |
| AFI-3 | B.22.8 | BCP/DR exercise not conducted in 2025 | Outside the AI pillar. AI service failure (AI-7) added as a scenario option | DR exercise record — **outstanding** | **Not addressed here** |
| AFI-4 | B.6 | No integration of CTM audit into ISMS internal audit (repeat) | [Internal Audit Checklist — AI](../04-audit-pack/Internal_Audit_Checklist_AI.md) | Updated internal audit checklist and audit plan | *[  ]* |
| AFI-5 | B.7.1 | No documented policy on cyber training requirements (repeat) | [ISMS-30](../01-policies/ISMS-30_AI_Competence_Training_and_Awareness.md) Section 3 | [ISMS-30](../01-policies/ISMS-30_AI_Competence_Training_and_Awareness.md) approved + training records | *[  ]* |

> **AFI-2 and AFI-3 are honestly incomplete.** AFI-2 is closed for AI data only; the Company-wide data management policy is a separate piece of work. AFI-3 requires a DR exercise to be *run* — no document closes it. Both are stated here rather than quietly mapped to something adjacent, because an auditor who finds an overclaimed mapping will distrust the rest of the table.

## 3. Coverage by document

| Document | Findings closed | Findings supported |
|---|---|---|
| AIMS-00 | — | B.1.4, B.1.5, B.2.4 |
| AIMS-01 | **B.1.6** | B.1.3, B.2.5, B.2.6 |
| ISMS-24 | **B.1.3, B.2.4, A.3.4(c), A.3.4(d), A.4.4(j)** | B.1.6, B.8.7, B.9.5 |
| ISMS-25 | **B.12.4, B.12.8, A.6.4(a)** | B.14.3, B.12.12 |
| ISMS-27 | **B.9.5, B.9.6, B.9.7, A.3.4(a)** | B.9.8 (AFI-2, partial) |
| ISMS-28 | **B.5.1** | B.3.5, B.3.6, B.5.2, B.5.4 |
| ISMS-29 | — | B.17.3, B.17.4, B.17.5, B.17.6, A.3.4(c) |
| ISMS-30 | **A.4.4(j)** | B.7.1 (AFI-5), B.7.3, B.7.4, B.7.6–B.7.10 |
| ISMS-31 | — | B.12.8, B.14.3, B.21.4, B.21.6 (forward-looking) |
| ISMS-07 Annex A | **B.14.3** | B.14.4, B.12.8, B.9.6, B.9.7, B.3.5 |
| ISMS-13 Annex A | **B.21.4, B.21.6, A.9.4(a), B.9.2** | B.21.3, B.21.5, A.4.4(j) |

## 4. Audit-plan session map

The verification audit plan (17–18 August 2026) covers specific domains in specific sessions. This is what to have ready when.

| Session | Domains | Documents to have open | Records to have open |
|---|---|---|---|
| **17 Aug, 10:00–12:30** | B1 Governance · B2 Policies · B3 Risk · B4 Strategy · B5 Compliance · B7 Training · A1 People | AIMS-00, AIMS-01, ISMS-24, ISMS-28, ISMS-30 | AI Objectives register · AI review record · acknowledgement log · training records · AI Legal Register (merged) · RA-RTP with AI rows |
| **17 Aug, 13:30–17:30** | B8 Assets · A2 HW/SW · B9 Data · A3 Data · B12 System security · A6 Secure config · A7 Updates · B13 Anti-virus · A4 Malware | ISMS-24, ISMS-25, ISMS-27 | AI Asset Register · AI Data Inventory · AI Data Flow · CIS Baseline Mapping · configuration evidence pack · web filter config |
| **18 Aug, 09:30–12:30** | B14 Secure SDLC · B15 Access · A5 Access · B16 Threat mgmt · B17 Third party | ISMS-07 Annex A, ISMS-29, ISMS-31 | Stage-gate record · merge request samples · adversarial test record · AI supplier assessment · key inventory |
| **18 Aug, 13:30–17:00** | B18 VA · B20 Network · B21 Incident response · A9 Incident response | ISMS-13 Annex A | **AI incident exercise record** · incident register · PDPC criteria cross-reference in ISMS-13 |

Full checklist: [Evidence Pack Checklist](../04-audit-pack/Evidence_Pack_Checklist.md).

## 5. The systemic root cause

All 18 minor NCs share one root cause, and the CAR response should say so once rather than repeating it 18 times:

> **AI tool adoption was treated as a productivity change rather than a change to ISMS scope.** The CTM 2025 AI pillar clauses were self-assessed as gaps in May 2026, but no closure plan was executed before the audit, and no owner had been designated for AI security.

**Systemic corrective actions** — these are what prevent recurrence, and what the auditor will actually weigh:

1. **Designate the ISM as AI Security Owner** (AIMS-00 Section 3.2) — a named person accountable for AI security.
2. **Add an AI impact question to the change and scope review** (ISMS-14 change management) — so the next AI capability triggers ISMS extension automatically.
3. **Add the AI pillar clauses to the ISMS internal audit checklist and the annual CTM self-assessment** (AFI-4) — so gaps are detected in-cycle rather than at recertification.
4. **Establish a quarterly AI review** owned by the ISM with cross-functional input — so AI governance has a standing cadence rather than depending on one person's attention between annual reviews.
