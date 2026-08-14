# ISO/IEC 27001 · ISO/IEC 42001 · CTM 2025 — Cross-Map

**AGILE LABS PTE. LTD.** · Rev 1.0 · 14 August 2026 · Owner: ISM · Classification: Internal

Statement-of-Applicability-style cross-reference showing how the AI document set satisfies three frameworks at once. Use this when a customer, auditor or certification body asks the same question in a different vocabulary.

---

## 1. ISO/IEC 42001:2023 — management system clauses

| Clause | Requirement | Document | Applicable |
|---|---|---|---|
| 4.1 | Understanding the organisation and its context | AIMS-00 Section 2 | Yes |
| 4.2 | Interested parties | AIMS-00 Section 2.3 | Yes |
| 4.3 | Scope of the AIMS | AIMS-00 Section 2.4 | Yes |
| 4.4 | AI management system | AIMS-00 whole | Yes |
| 5.1 | Leadership and commitment | AIMS-00 Section 3.1 | Yes |
| 5.2 | AI policy | AIMS-01 Section 1 | Yes |
| 5.3 | Roles, responsibilities, authorities | AIMS-00 Section 3.2 | Yes |
| 6.1.1–6.1.4 | Risks and opportunities; AI risk assessment; AI system impact assessment | ISMS-28 Sections 3–6 | Yes |
| 6.2 | AI objectives and planning | AIMS-01 Section 3 | Yes |
| 6.3 | Planning of changes | AIMS-00 Section 4; ISMS-14 change management | Yes |
| 7.1 | Resources | AIMS-00 Section 5 | Yes |
| 7.2 | Competence | ISMS-30 Sections 3, 6 | Yes |
| 7.3 | Awareness | ISMS-30 Sections 4, 5 | Yes |
| 7.4 | Communication | AIMS-01 Section 5; ISMS-30 Section 5 | Yes |
| 7.5 | Documented information | AIMS-00 Section 5; ISMS document control | Yes |
| 8.1 | Operational planning and control | ISMS-24, ISMS-25, ISMS-27 | Yes |
| 8.2 | AI risk assessment | ISMS-28 | Yes |
| 8.3 | AI risk treatment | ISMS-28 Section 7 | Yes |
| 8.4 | AI system impact assessment | ISMS-28 Section 6 | Yes |
| 9.1 | Monitoring, measurement, analysis, evaluation | AIMS-00 Section 7; AI Objectives register | Yes |
| 9.2 | Internal audit | Internal Audit Checklist — AI | Yes |
| 9.3 | Management review | AIMS-00 Section 7 | Yes |
| 10.1 | Continual improvement | AIMS-00 Section 8 | Yes |
| 10.2 | Nonconformity and corrective action | CAR Register; ISMS process | Yes |

## 2. ISO/IEC 42001:2023 Annex A — AI controls

| Annex A area | Control theme | Document | Applicable | Note |
|---|---|---|---|---|
| A.2 | Policies related to AI | AIMS-01; ISMS-24 | Yes | |
| A.3 | Internal organisation — roles, reporting of concerns | AIMS-00 Section 3.2; ISMS-24 Sections 5, 11 | Yes | Duties held by named roles; no standing committee |
| A.4 | Resources for AI systems — data, tooling, computing, human | AIMS-00 Section 5; AI Asset Register | Yes | |
| A.5 | Assessing impacts of AI systems | ISMS-28 Section 6 | Yes | Short-form for internal AI-assisted development |
| A.6 | AI system life cycle | ISMS-07 Annex A; ISMS-25 | Yes | |
| A.7 | Data for AI systems — provenance, quality, preparation | ISMS-27 Sections 3, 5, 6 | Yes | Company does not train models; provenance applies to artefacts and context |
| A.8 | Information for interested parties | ISMS-24 Section 10; ISMS-29 Section 6; ISMS-31 Section 3.4 | Yes | |
| A.9 | Use of AI systems — responsible use, intended purpose | ISMS-24; ISMS-31 | Yes | |
| A.10 | Third-party and customer relationships | ISMS-29 | Yes | |

## 3. ISO/IEC 27001:2022 Annex A — controls extended for AI

Only controls materially extended by this document set are listed. All other Annex A controls continue to apply unchanged under the existing ISMS.

| Control | Title | AI extension | Document |
|---|---|---|---|
| A.5.1 | Policies for information security | AI policy set added | AIMS-01; ISMS-24 |
| A.5.2 | Information security roles and responsibilities | AI Security Owner designated | AIMS-00 Section 3.2 |
| A.5.7 | Threat intelligence | AI threat sources (OWASP LLM, CSA) tracked | ISMS-28 Section 3 |
| A.5.9 | Inventory of information and other associated assets | AI Asset Register | ISMS-27 Section 2; AI Asset Register |
| A.5.10 | Acceptable use of information and other associated assets | AI acceptable use | ISMS-24 |
| A.5.12 | Classification of information | AI asset classification + inheritance rule | ISMS-27 Section 2 |
| A.5.13 | Labelling of information | AI output inherits and carries classification | ISMS-27 Section 2.3 |
| A.5.14 | Information transfer | AI tool as a transfer channel; permitted-data table | ISMS-24 Section 7 |
| A.5.19–A.5.22 | Supplier relationships; ICT supply chain | AI supplier assessment and monitoring | ISMS-29 |
| A.5.23 | Information security for use of cloud services | AI services as cloud services | ISMS-29 Section 3 |
| A.5.24–A.5.28 | Incident management planning, assessment, response, evidence | AI incident categories and response tasks | ISMS-13 Annex A |
| A.5.31 | Legal, statutory, regulatory, contractual requirements | AI instruments in the Register; quarterly review | ISMS-28 Section 8; AI Legal Register |
| A.5.34 | Privacy and protection of PII | Personal data in AI systems; PDPC criteria | ISMS-27 Section 8; ISMS-13 Annex A Section 6.1 |
| A.6.3 | Information security awareness, education and training | AI training programme and mandatory content | ISMS-30 |
| A.8.1 | User endpoint devices | CIS baseline for AI endpoints | ISMS-25 Section 8 |
| A.8.2–A.8.5 | Privileged access; access restriction; authentication | AI workspace admin restriction; SSO/MFA | ISMS-24 Section 8; ISMS-25 Section 4 |
| A.8.8 | Management of technical vulnerabilities | CVE monitoring extended to AI tools, SDKs, libraries | ISMS-25 Section 7 |
| A.8.9 | Configuration management | AI configuration baseline | ISMS-25 Sections 4, 5 |
| A.8.10–A.8.12 | Information deletion; data masking; data leakage prevention | AI disposal, masking, leakage controls | ISMS-27 Section 9; ISMS-24 Section 9 |
| A.8.16 | Monitoring activities | AI usage, cost and behaviour monitoring | ISMS-25 Section 6; ISMS-07 Annex A Section 3.6 |
| A.8.25–A.8.29 | Secure development lifecycle; secure coding; security testing | AI SDLC and adversarial testing | ISMS-07 Annex A; ISMS-25 Section 6.1 |
| A.8.30 | Outsourced development | AI capability delivered into customer environments | ISMS-07 Annex A Section 3.5 |
| A.8.31 | Separation of environments | AI sandbox isolation; no agent on production | ISMS-25 Section 8; ISMS-31 Section 3.1 |
| A.8.32 | Change management | Model, prompt and permission changes as changes | ISMS-25 Section 5; ISMS-31 Section 3.3 |

## 4. CTM 2025 AI pillar → framework equivalence

Quick translation for anyone asked the same question in a different vocabulary.

| CTM 2025 clause | ISO/IEC 27001:2022 | ISO/IEC 42001:2023 | Document |
|---|---|---|---|
| B.1.3 Governance / AUP | A.5.1, A.5.10 | 5.2, A.2, A.9 | ISMS-24 |
| B.1.6 Objectives | 6.2 | 6.2, A.2 | AIMS-01 Section 3 |
| B.2.3 Cross-functional team + communication | A.5.2, 7.4 | 5.3, 7.4, A.3 | AIMS-00 Section 3.2; ISMS-30 Section 5 |
| B.2.4 Policies and procedures | A.5.1 | A.2 | Full set |
| B.3.5 / B.3.6 Risk | 6.1.2, 8.2 | 6.1.2, 8.2, A.5 | ISMS-28 |
| B.5.1 Legal register | A.5.31 | 4.2, A.2 | AI Legal Register |
| B.9.5 Classification of AI assets | A.5.9, A.5.12 | A.4, A.7 | ISMS-27 Section 2 |
| B.9.6 Data flow | A.5.12, A.8.12 | A.7 | AI Data Flow |
| B.9.7 Secure AI data handling | A.5.12–A.5.14, A.8.10–A.8.12 | A.7 | ISMS-27 Sections 5–7 |
| B.12.4 / B.12.8 Secure configuration | A.8.9, A.8.8 | A.6 | ISMS-25 |
| B.14.3 AI SDLC | A.8.25–A.8.29 | A.6 | ISMS-07 Annex A |
| B.17.x Third party | A.5.19–A.5.23 | A.10 | ISMS-29 |
| B.21.4 / B.21.6 Incident response | A.5.24–A.5.28 | A.9 | ISMS-13 Annex A |
| A.3.4(a) Data inventory | A.5.9 | A.4, A.7 | AI Data Inventory |
| A.3.4(c) Protect AI tools | A.8.2–A.8.5, A.5.23 | A.4 | ISMS-24 Section 8; ISMS-25 Section 4 |
| A.3.4(d) Data leakage | A.8.12 | A.7, A.9 | ISMS-24 Section 9 |
| A.4.4(j) Reporting concerns | A.6.3, A.5.24 | A.3, 7.3 | ISMS-24 Section 11; ISMS-30 |
| A.6.4(a) CIS Benchmarks | A.8.1, A.8.9 | A.6 | ISMS-25 Section 8; CIS Baseline Mapping |
| A.9.4(a) Notification | A.5.24, A.5.31, A.5.34 | A.9 | ISMS-13 Annex A Section 6 |

---

## Note on certification claims

This cross-map is a **design artefact**, not a certification claim.

- The Company is certified against **CSA CTM 2025, Performer tier** and operates an **ISO/IEC 27001:2022** ISMS.
- Structuring the AI documents to ISO/IEC 42001:2023 means the work is reusable if AI management system certification is later sought. **It does not confer any ISO/IEC 42001 conformity claim today**, and this document must not be presented to a customer as if it did.
- If ISO/IEC 42001 certification is pursued, the gaps to close are principally: a formal AIMS scope statement approved by top management (AIMS-00 provides the content, approval is outstanding), a complete AI system impact assessment methodology applied to real systems, and an internal audit and management review cycle executed against the 42001 clauses specifically.
