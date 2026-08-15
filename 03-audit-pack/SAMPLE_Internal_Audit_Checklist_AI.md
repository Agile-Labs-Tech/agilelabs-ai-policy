# Internal Audit Checklist — AI Security Pillar (Sample)
**AGILE LABS PTE. LTD.** · Rev 1.0 · 14 August 2026 · Owner: ISM · Classification: Internal

---

## Audit details

| | |
|---|---|
| Standard / criteria | CSA CTM 2025, Performer tier — AI Security pillar; ISO/IEC 27001:2022; AIMS documents |
| Internal auditor | Wayne Tng, Technical Leader |
| **Audit date** | **15 August 2026** |
| Audit type | Pre-certification internal audit, ahead of the ISOCert verification audit of 17–18 August 2026 |
| Documents reviewed | AIMS-00, AIMS-01, ISMS-07 Annex A, ISMS-13 Annex A, ISMS-24, ISMS-25, ISMS-27, ISMS-28, ISMS-29, ISMS-30, ISMS-31, AI Data Flow |


### Result legend

| Code | Meaning |
|---|---|
| **C** | Conforming — verified against evidence |
| **NC** | Non-conforming — requirement not met at the audit date |
| **OFI** | Conforming, opportunity for improvement |

---

## Section 1 — Governance

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 1.1 | Is there an approved AI Acceptable Use Policy, and is it in the document register? | ISMS-24, signed; register entry | **C** | ISMS-24 Rev 1.0 approved by the Director 14 Aug 2026. |
| 1.2 | Have AI security objectives been established, approved and measured? | AIMS-01 Section 3; AI Objectives register with results | **C** | Eight objectives (AI-1 to AI-8) established in AIMS-01 Section 3 and approved 14 Aug 2026. |
| 1.3 | Is a named individual accountable for AI security? | AIMS-00 Section 3.2; management review minute | **C** | AIMS-00 Section 3.2 designates the ISM (Sze Tho ChangSheng) as AI Security Owner, with defined authority. |
| 1.4 | Has AI security been reviewed by senior management in the last 12 months? | Management review minute, AI section | **C** | AI section was presented. Director approval of the document set on 14 Aug 2026 evidences engagement. |

## Section 2 — Policies and communication

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 2.1 | Has the Annual AI review been held, with cross-functional input recorded? | AI review records for the last 12 months | **OFI** | To be conduct next review |
| 2.2 | Has AI security best practice been communicated to staff at least once a year? | Slack posts / email | **C** |  |
| 2.3 | Is the AI policy set complete, approved and current (reviewed within 12 months)? | Document register; revision dates | **C** | Documents approved 14 Aug 2026. |
| 2.4 | Have all active staff acknowledged the AI policy? | Acknowledgement | **NC** | Acknowledge is within the Email |

## Section 3 — Risk and compliance

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 3.1 | Are AI risks in the CS Risk Assessment with owners, treatment and residual ratings? | RA-RTP workbook, AI rows | **C** | Method is established in ISMS-28 (8 risk categories; action-space / reversibility / autonomy analysis). |
| 3.2 | Have AI risks been reviewed in the last 12 months? | Review date on the workbook | **OFI** |  |
| 3.3 | Are AI laws and governance frameworks listed in the Register, with a dated approval? | Register of Legal Requirements | **C** | |
| 3.5 | Was the AI legal register reviewed annually? | AI review record, agenda item 7 | **OFI** | Document is newly generated. |

## Section 4 — Training

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 4.1 | Is there a documented policy stating training types, frequency and audience? | ISMS-30 Section 3 | **C** | ISMS-30 Section 3 defines eight training types (T1–T8) with audience, frequency, assessment method and owner. |
| 4.2 | Did AI training cover all topics. | Training deck vs ISMS-30 Section 4 | **NC** | The 11 mandatory topics are specified in ISMS-30 Section 4, but no AI training has been delivered. |
| 4.3 | Did new joiners complete AI training within 30 days? | Induction records | **OFI** | No new joiners yet. |

## Section 5 — AI assets and data

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 5.1 | Does the AI Asset Register reflect the tools actually in use? | Register | **C** |  |
| 5.2 | Have AI features in existing SaaS products been checked and decided? | AI Asset Register | **OFI** |  |
| 5.3 | Does the AI Data Inventory cover all 7 lifecycle stages for every row? | AI Data Inventory | **C** | Lifecycle model established in ISMS-27 Section 3. |
| 5.4 | Is vendor retention recorded alongside Company retention? | Register | **C** | |
| 5.5 | Does the AI data flow match actual behaviour? | Diagram vs a live walkthrough with a developer | **OFI** | AI Data Flow exists with a boundary diagram and an 8-step narrative giving classification, protocol and control per flow. No walkthrough was conducted with developer as at 15 August 2026, |
| 5.6 | Is the classification inheritance rule applied in practice? | Sample: where did the output of a Confidential prompt end up? | **NC** | Rule is documented in ISMS-27 Section 2.3. |
| 5.7 | Are provenance records complete for any third-party model artefact? | Provenance register | **C** | |

## Section 6 — Secure configuration

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 6.1 | Is configuration evidence dated within the year for every AI asset? | Evidence folder | **OFI** | |
| 6.2 | Is vendor training-on-content disabled, and evidenced? | Screenshot | **C** | |
| 6.3 | Are exclusions / ignore files present and effective? | Repository configuration. | **OFI** | No requirement for this as at 15 August 2026 |
| 6.4 | Are AI workspace admin rights limited to TL or ISM? | Access Rights | **C** | Only ISM and TL have root access | 
| 6.5 | Are API keys scoped, stored in 1Password? | 1Password | **OFI** | No requirement for this as at 15 August 2026 |

## Section 7 — Secure AI development

| # | Question | Evidence to sight | Result | Notes |
|---|---|---|---|---|
| 7.1 | Has the AI SDLC been applied to a real project, with gate records? | Stage-gate record | **OFI** | Framework established in ISMS-07 Annex A (7 stages with gates). However as no new project has been started. |
| 7.2 | Was AI-assisted code peer-reviewed and did it pass the quality gate? | Sample merge requests + SonarQube | **OFI** | No merge requst as at 15 August 2026 |
| 7.3 | What is the rejection rate on AI-assisted merge requests? | Merge request history | **OFI** | |
| 7.4 | Are system prompts version-controlled and reviewed in merge requests? | Repository | **OFI** | No merge request as at 15 August 2026 |
| 8.5 | Was adversarial testing performed before release of any AI feature? |ISMS-25 Section 6.1 | **OFI** | The test is specified. No AI feature released as at 15 August 2026. |

---
