# AI Management System — Scope and Context

**AGILE LABS PTE. LTD.**

| | | | |
|---|---|---|---|
| **Document number** | AIMS-00 | **Revision** | 1.0 |
| **Document owner** | Information Security Manager (ISM) | **Issue date** | 14 August 2026 |
| **Classification** | Internal | **Next review** | Annually, or on material change to AI use |
| **Approval chain** | Prepared: Technical Leader · Reviewed: ISM · Approved: Director |  | |

---
## Revision history

| Rev | Date | Prepared by | Change |
|---|---|---|---|
| 1.0 | 14 August 2026 | Technical Leader | New document. Establishes AIMS scope, context, AI roles and governance structure. |

## Approval

| Role | Name | Date |
|---|---|---|
| Prepared by — Technical Leader | Wayne Tng | 14 August 2026 |
| Reviewed by — Information Security Manager | Sze Tho ChangSheng | 14 August 2026 |
| Approved by — Director | Liao Zhuli, Sujata | 14 August 2026 |


## 1. Purpose

This document establishes the scope, context and governance structure of Agile Labs' AI management system (AIMS). It defines the following:
- What AI does this company actually use and building
- Where does its responsibility start and stop 
- who owns it.

It is written as an extension of the existing ISO/IEC 27001:2022 ISMS documented in ISMS-01. It also serves as the governance basis for the **CSA Cyber Trust Mark (CTM 2025), Performer tier, AI Security pillar**.

## 2. Clause 4 — Context of the organisation

### 2.1 The organisation

Agile Labs Pte. Ltd. (UEN 201611401H) is a Singapore software development and system integration company.

Office: 12 Woodlands Square, #07-84 Woods Square, Singapore 737715.

No on-premises servers; cloud workloads run in AWS and, for customer projects, in customer-controlled environments.

### 2.2 The AI roles the Company plays

Agile Labs occupies three, and explicitly not a fourth:

| Role | Occupied? | What this means here |
|---|---|---|
| **AI user** (uses AI systems for its own work) | **Yes** | AI-assisted development tooling used by developers on Company and customer projects. |
| **AI system developer / integrator** | **Yes, conditionally** | Where a customer engagement includes building or integrating AI capability into a delivered system. |
| **AI system operator** | **Limited** | Production environments belong to customers. The Company operates AI capability only where a contract says so. |
| **AI model producer** (trains or fine-tunes foundation models) | **No** | The Company does not train foundation models and does not purchase training data. Where training or fine-tuning occurs, it is performed by or for the customer, in the customer's environment, on the customer's data. |


### 2.3 Interested parties and their requirements

| Interested party | Relevant requirement |
|---|---|
| Customers | Confidentiality of source code and production data; contractual restrictions on AI use; sector obligations passed down (e.g. MAS-regulated customers) |
| Employees | Clear, usable rules on what AI tools may be used and for what; a safe route to report concerns |
| CSA / ISOCert (certification body) | Conformity with CTM 2025 AI Security pillar clauses at Performer tier |
| PDPC | PDPA compliance where AI processing touches personal data, including breach notification |
| IMDA | Alignment with the Model AI Governance Framework family |
| AI vendors | Acceptable use of their services; licensing terms |
| Directors / shareholders | AI risk within appetite; no uninsured exposure |

### 2.4 Scope of the AIMS

**In scope**

- All AI and generative AI services used for Company or customer work, whether standalone or embedded as a feature in other software.
- All AI capability designed, built, integrated, deployed or supported by the Company as part of a customer deliverable.
- All data used as input to, held as context by, or produced as output from an AI system — prompts, uploaded files, source code, retrieved context, generated output.
- All Company-issued endpoints and cloud instances used to develop, access, run or operate AI capability.
- AI suppliers and the AI components of existing suppliers.

**Out of scope, and why**

| Excluded | Reason |
|---|---|
| Customer-owned training data and training environments | Not in Company custody. Controlled by the customer under the customer's own governance. Company obligations are limited to those in the applicable contract. |
| Customer production environments | Operated by the customer. The Company holds no persistent access; AI tools are never granted access (ISMS-24 Section 6.1). |

Scope boundaries are drawn on the diagram in [AI_Data_Flow.md](../02-registers/AI_Data_Flow.md).

## 3. Clause 5 — Leadership

### 3.1 Commitment

The Director approves this AIMS, the AI policy and the AI objectives, provides the resources to operate them, and reviews AI security performance at the annual management review. AI status is a standing item on the management review agenda from the 2026 cycle onward.

### 3.2 Roles, responsibilities and authorities

| Role | Held by | AI accountability |
|---|---|---|
| Director | Liao Zhuli, Sujata | Approves the AI policy, objectives and this AIMS; approves external and regulator communication; accepts residual AI risk |
| Information Security Manager — designated **AI Security Owner** | Sze Tho ChangSheng | Single accountable owner for AI security. Owns the AI policy set, AI Asset Register, AI risk, AI incident ownership and reporting. |
| Technical Leader | Wayne Tng | AI configuration baseline; secure AI development lifecycle; AI-assisted code quality gate |
| DevOps Administrator | Steven Yap | Applies and evidences configuration; key and access management; containment actions in an AI incident |
| Data Protection Officer (HR Director) | Kwek Joo Hong | Personal data impact of AI use; notification assessment and decision under PDPA |
| All staff | — | Use only approved tools; apply the data rules; review AI output; report concerns |

> **Designating a single AI Security Owner is the systemic fix** for the root cause identified across the 18 findings: AI adoption was treated as a productivity change rather than a change to ISMS scope, and no one owned it.

### 3.3 Quarterly AI review

AI security duties are held by the named roles above rather than by a standing committee. To keep those roles working together — and to satisfy the cross-functional expectation in CTM clause B.2.3 — the ISM holds a **quarterly AI review**.

| | |
|---|---|
| **Chair** | Information Security Manager (AI Security Owner) |
| **Participants** | Technical Leader, DevOps Administrator, and the DPO where personal data is involved. Project leads attend for specific AI use cases. |
| **Frequency** | Quarterly, and ad hoc on an AI incident or an urgent tool request |
| **Standing agenda** | Outstanding actions · new AI tool requests and decisions · AI Asset Register and Data Inventory accuracy · AI incidents, reported concerns and shadow-AI detections · AI risks · external guidance changes (CSA, IMDA, PDPC) · the communication to be issued to staff this quarter |
| **Output** | AI review record with decisions, actions, owners and dates |
| **Reports to** | Director, at the annual management review; immediately for anything beyond the ISM's authority |

**Authority.** The review may approve or decline an AI tool request within the data classes already covered by ISMS-24 Section 7, require re-verification of a tool's configuration, and suspend use of a tool pending investigation. It may **not** accept residual risk above the Company risk appetite, approve customer or regulator notification, or authorise AI use with customer or personal data outside ISMS-24 Section 7 — those remain with the Director, and with the DPO where personal data is involved.


## 4. Clause 6 — Planning

| Element | Where it lives |
|---|---|
| AI risks and opportunities | [ISMS-28 AI Risk Management Procedure](../01-policies/ISMS-28_AI_Risk_Management_Procedure.md) and the [AI Risk Register](https://docs.google.com/spreadsheets/d/1wScBPiUj2EtrSmPwBMbXwvXbK40x3zwJK1Qqm-Dpm1k/edit?gid=0#gid=0) |
| AI objectives and planning to achieve them | [AIMS-01 AI Policy and Objectives](AIMS-01_AI_Policy_and_Objectives.md) and the [AI Objectives register](https://docs.google.com/spreadsheets/d/1wScBPiUj2EtrSmPwBMbXwvXbK40x3zwJK1Qqm-Dpm1k/edit?gid=0#gid=0) |
| AI system impact assessment | Required at Stage 1 of the AI SDLC for any AI capability affecting individuals |
| Legal and regulatory requirements | [AI Legal and Regulatory Register](https://docs.google.com/spreadsheets/d/1wScBPiUj2EtrSmPwBMbXwvXbK40x3zwJK1Qqm-Dpm1k/edit?gid=0#gid=0), merged into the Company Register of Legal, Regulation and Contractual Requirements |

## 5. Clause 7 — Support

| Element | Where it lives |
|---|---|
| Resources | Approved by the Director at management review; AI tool subscriptions tracked in the asset management tool |
| Competence and awareness | [ISMS-30 AI Competence, Training and Awareness Policy](../01-policies/ISMS-30_AI_Competence_Training_and_Awareness.md) |
| Documented information | This set, controlled under the existing ISMS document control process and register |

## 6. Clause 8 — Operation

| Element | Where it lives |
|---|---|
| Operational planning and control | [ISMS-24](../01-policies/ISMS-24_AI_Acceptable_Use_and_Security_Policy.md) (use), [ISMS-25](../01-policies/ISMS-25_AI_Secure_Configuration_Standard.md) (configuration), [ISMS-27](../01-policies/ISMS-27_AI_Data_Governance_and_Handling_Standard.md) (data) |
| AI development lifecycle | [ISMS-07 Annex A Secure AI Development Lifecycle](../01-policies/ISMS-07_AnnexA_Secure_AI_Development_Lifecycle.md) — 7 stages with gates |
| Third parties | [ISMS-29 AI Supplier and Third-Party AI Assurance](../01-policies/ISMS-29_AI_Supplier_and_Third_Party_Assurance.md) |
| Agentic capability | [ISMS-31 Agentic AI Governance Policy](../01-policies/ISMS-31_Agentic_AI_Governance_Policy.md) |
| Incident response | [ISMS-13 Annex A AI Incident Response](../01-policies/ISMS-13_AnnexA_AI_Incident_Response.md) |

## 7. Clause 9 — Performance evaluation

| Activity | Frequency | Owner | Output |
|---|---|---|---|
| AI objective measurement | Annually | ISM | AI Objectives register updated |
| AI internal audit | Annually | Internal auditor | [Internal Audit Checklist — AI](../03-audit-pack/Internal_Audit_Checklist_AI.md) |
| CTM self-assessment including AI pillar | Annually | ISM | Self-assessment record |
| Management review — AI section | Annually | Director | Management review minute |
| Quarterly AI review | Quarterly | ISM | AI review record (Section 3.3) |

> **On cadence.** Performance evaluation of the AI objectives is **annual**, which is what CTM clause B.1.6 requires. Operational verification runs more frequently — configuration checks, register reviews, legal-register review and supplier monitoring are quarterly under the standards that own them (ISMS-25 Section 9, ISMS-27 Section 11, ISMS-28 Section 8, ISMS-29 Section 7). Those cadences are deliberately not annual: an annual configuration check would make an eleven-month-old screenshot the evidence for objective AI-7.

## 8. Clause 10 — Improvement

Non-conformities and corrective actions follow the existing ISMS process.

## 9. Records

| Record | Owner | Retention |
|---|---|---|
| This document and its revisions | ISM | 3 years |
| Management review minutes (AI section) | ISM | 3 years |
| Scope review and AI role reassessment | ISM | 3 years |

---
