# AI Pillar — ISMS / AIMS Document Set

**Agile Labs Pte. Ltd.** (UEN 201611401H) · 12 Woodlands Square, #07-84 Woods Square, Singapore 737715

This repository holds the AI governance and AI security document set for Agile Labs.
---

## Status

| | |
|---|---|
| Issue date | 14 August 2026 |
| Revision | 1.0 |
| Prepared by | Technical Leader (Wayne Tng) |
| Reviewed by | Information Security Manager (Sze Tho ChangSheng) |
| Approved by | Director (Liao Zhuli, Sujata) |
| Next review | Annually, or on material change to AI use |

---

## How to read this set

```
iso-ai-pillar/
├── 00-framework/     What the AI management system is, who owns it, what it covers
├── 01-policies/      The controls themselves
├── 02-registers/     The AI data flow diagram
└── 03-audit-pack/    Internal working papers
```

**The registers live in Google Sheets**, which is the controlled copy of every record that proves the controls operate. Links throughout this set point at that workbook directly. The exceptions are the **AI data flow** and the **AI network diagrams**. AI tool due diligence assessments are maintained in the AI-Tool-Due-Diligence-Assessments workbook.

### 00-framework

| File | What it is |
|---|---|
| [AIMS-00 AI Management System Scope and Context](00-framework/AIMS-00_AI_Management_System_Scope_and_Context.md) | Scope, interested parties, AI roles the Company plays, boundary with customer environments |
| [AIMS-01 AI Policy and Objectives](00-framework/AIMS-01_AI_Policy_and_Objectives.md) | Top-level AI policy statement and the measurable AI objectives (CTM B.1.6) |

### 01-policies

| Doc | Title |
|---|---|
| ISMS-24 | [AI Acceptable Use and Security Policy](01-policies/ISMS-24_AI_Acceptable_Use_and_Security_Policy.md) |
| ISMS-25 | [AI Secure Configuration Standard](01-policies/ISMS-25_AI_Secure_Configuration_Standard.md) |
| ISMS-27 | [AI Data Governance and Handling Standard](01-policies/ISMS-27_AI_Data_Governance_and_Handling_Standard.md) |
| ISMS-28 | [AI Risk Management Procedure](01-policies/ISMS-28_AI_Risk_Management_Procedure.md) |
| ISMS-29 | [AI Supplier and Third-Party AI Assurance Policy](01-policies/ISMS-29_AI_Supplier_and_Third_Party_Assurance.md) |
| ISMS-30 | [AI Competence, Training and Awareness Policy](01-policies/ISMS-30_AI_Competence_Training_and_Awareness.md) |
| ISMS-31 | [Agentic AI Governance Policy](01-policies/ISMS-31_Agentic_AI_Governance_Policy.md) |
| ISMS-07 Annex A | [Secure AI Development Lifecycle](01-policies/ISMS-07_AnnexA_Secure_AI_Development_Lifecycle.md) |
| ISMS-13 Annex A | [AI Incident Response](01-policies/ISMS-13_AnnexA_AI_Incident_Response.md) |
| ISMS-14 Annex A | [AI Logging Procedure](01-policies/ISMS-14_AnnexA_AI_Logging_Procedure.md) |

### 02-registers


| Register | Where it lives |
|---|---|
| [AI Objectives and Measures](https://docs.google.com/spreadsheets/d/1wScBPiUj2EtrSmPwBMbXwvXbK40x3zwJK1Qqm-Dpm1k/edit?gid=0#gid=0) | Google Sheets |
| [AI Asset Register](https://docs.google.com/spreadsheets/d/1wScBPiUj2EtrSmPwBMbXwvXbK40x3zwJK1Qqm-Dpm1k/edit?gid=0#gid=0) | Google Sheets |
| [AI Data Inventory](https://docs.google.com/spreadsheets/d/1wScBPiUj2EtrSmPwBMbXwvXbK40x3zwJK1Qqm-Dpm1k/edit?gid=0#gid=0) | Google Sheets |
| **[AI Data Flow](02-registers/AI_Data_Flow.md)** | This repository |
| **[AI Network Diagrams (ISMS-27 Annex B)](02-registers/AI_Network_Diagrams.md)** | This repository |
| [AI Legal and Regulatory Register](https://docs.google.com/spreadsheets/d/1wScBPiUj2EtrSmPwBMbXwvXbK40x3zwJK1Qqm-Dpm1k/edit?gid=0#gid=0) | Google Sheets |
| [AI Risk Register](https://docs.google.com/spreadsheets/d/1wScBPiUj2EtrSmPwBMbXwvXbK40x3zwJK1Qqm-Dpm1k/edit?gid=0#gid=0) | Google Sheets |
| [CIS Baseline Mapping](https://docs.google.com/spreadsheets/d/1wScBPiUj2EtrSmPwBMbXwvXbK40x3zwJK1Qqm-Dpm1k/edit?gid=0#gid=0) | Google Sheets |

---

## Document conventions

- **Approval chain:** Prepared by Technical Leader · Reviewed by Information Security Manager · Approved by Director.
- **Classification:** Internal, unless stated.
- **Retention:** 3 years for AI records;
- **Review cycle:** annually, and on any of new AI tool, a material change to a vendor's or model, an AI-related incident, or a change to applicable AI guidance.
