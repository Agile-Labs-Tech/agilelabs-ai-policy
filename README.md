# AI Pillar — ISMS / AIMS Document Set

**Agile Labs Pte. Ltd.** (UEN 201611401H) · 12 Woodlands Square, #07-84 Woods Square, Singapore 737715

This repository holds the AI governance and AI security document set for Agile Labs. It was written to do three jobs at once:

1. **Close the 18 minor non-conformities and 5 areas for improvement** raised against the AI Security pillar at the CSA Cyber Trust Mark (CTM 2025) recertification audit of 27–30 May 2026, ahead of the special verification audit on **17–18 August 2026**.
2. **Sit correctly inside the existing ISO/IEC 27001:2022 ISMS** rather than beside it — every document uses the ISMS document numbering, the 3-eyes approval chain, and the existing record and review cycle.
3. **Establish an ISO/IEC 42001:2023-shaped AI management system (AIMS)** so the same control set carries forward to an AI management system certification without being rewritten.

---

## Status

| | |
|---|---|
| Issue date | 14 August 2026 |
| Revision | 1.0 |
| Status | **DRAFT — for review and approval by the Director** |
| Prepared by | Technical Leader (Wayne Tng) |
| Reviewed by | Information Security Manager (Sze Tho ChangSheng) |
| Approved by | Director (Liao Zhuli, Sujata) |
| Next review | Annually, or on material change to AI use |

> **Nothing here is approved until the Director signs it.** Every document carries an approval block. Until those are signed and the documents are entered in the ISMS document register, an auditor will treat them as drafts and the findings stay open.

---

## How to read this set

```
iso-ai-pillar/
├── 00-framework/     What the AI management system is, who owns it, what it covers
├── 01-policies/      The controls themselves — the documents an auditor will ask for
├── 02-registers/     The records that prove the controls operate
├── 03-mapping/       Clause-by-clause traceability (CTM 2025, ISO 27001, ISO 42001)
└── 04-audit-pack/    CAR responses, evidence checklist, internal audit checklist
```

### 00-framework

| File | What it is |
|---|---|
| [AIMS-00 AI Management System Scope and Context](00-framework/AIMS-00_AI_Management_System_Scope_and_Context.md) | Scope, interested parties, AI roles the Company plays, boundary with customer environments |
| [AIMS-01 AI Policy and Objectives](00-framework/AIMS-01_AI_Policy_and_Objectives.md) | Top-level AI policy statement and the measurable AI objectives (CTM B.1.6) |

### 01-policies

| Doc | Title | Primary findings closed |
|---|---|---|
| ISMS-24 | [AI Acceptable Use and Security Policy](01-policies/ISMS-24_AI_Acceptable_Use_and_Security_Policy.md) | B.1.3, B.1.6, B.2.4, A.3.4(c), A.3.4(d), A.4.4(j) |
| ISMS-25 | [AI Secure Configuration Standard](01-policies/ISMS-25_AI_Secure_Configuration_Standard.md) | B.12.4, B.12.8, A.6.4(a) |
| ISMS-27 | [AI Data Governance and Handling Standard](01-policies/ISMS-27_AI_Data_Governance_and_Handling_Standard.md) | B.9.5, B.9.6, B.9.7, A.3.4(a), B.9.8 |
| ISMS-28 | [AI Risk Management Procedure](01-policies/ISMS-28_AI_Risk_Management_Procedure.md) | B.3.5 (supporting), B.5.1 |
| ISMS-29 | [AI Supplier and Third-Party AI Assurance Policy](01-policies/ISMS-29_AI_Supplier_and_Third_Party_Assurance.md) | B.17.3–B.17.5 (AI scope) |
| ISMS-30 | [AI Competence, Training and Awareness Policy](01-policies/ISMS-30_AI_Competence_Training_and_Awareness.md) | A.4.4(j), B.7.1 (AFI-5) |
| ISMS-31 | [Agentic AI Governance Policy](01-policies/ISMS-31_Agentic_AI_Governance_Policy.md) | Forward-looking; IMDA MGF for Agentic AI v1.5 |
| ISMS-07 Annex A | [Secure AI Development Lifecycle](01-policies/ISMS-07_AnnexA_Secure_AI_Development_Lifecycle.md) | B.14.3 |
| ISMS-13 Annex A | [AI Incident Response](01-policies/ISMS-13_AnnexA_AI_Incident_Response.md) | B.21.4, B.21.6, A.9.4(a), B.9.2 |

### 02-registers

| File | Clause it evidences |
|---|---|
| [AI Objectives and Measures](02-registers/AI_Objectives_and_Measures.md) | B.1.6 |
| [AI Asset Register](02-registers/AI_Asset_Register.md) | B.9.5, A.3.4(a), A.3.4(c) |
| [AI Data Inventory](02-registers/AI_Data_Inventory.md) | A.3.4(a), B.9.6, B.9.7 |
| [AI Data Flow](02-registers/AI_Data_Flow.md) | B.9.6 |
| [AI Legal and Regulatory Register](02-registers/AI_Legal_and_Regulatory_Register.md) | B.5.1 |
| [AI Risk Register](02-registers/AI_Risk_Register.md) | B.3.5, B.3.6 |
| [CIS Baseline Mapping](02-registers/CIS_Baseline_Mapping.md) | A.6.4(a) |

### 03-mapping

| File | Purpose |
|---|---|
| [CTM 2025 AI Pillar Control Mapping](03-mapping/CTM2025_AI_Pillar_Control_Mapping.md) | Every one of the 23 findings → the document and record that closes it |
| [ISO 27001 / ISO 42001 / CTM Cross-Map](03-mapping/ISO27001_ISO42001_CTM_CrossMap.md) | Statement-of-Applicability-style cross-reference |

### 04-audit-pack

| File | Purpose |
|---|---|
| [CAR Register — AI Pillar](04-audit-pack/CAR_Register_AI_Pillar.md) | Corrective action response, one row per finding, for submission to ISOCert |
| [Evidence Pack Checklist](04-audit-pack/Evidence_Pack_Checklist.md) | What to have open on screen on 17–18 August, per audit-plan session |
| [Internal Audit Checklist — AI](04-audit-pack/Internal_Audit_Checklist_AI.md) | Closes AFI-4 (CTM not integrated into ISMS internal audit) |

---

## The standards this set is built against

| Standard / framework | How it is used here |
|---|---|
| **ISO/IEC 27001:2022** + Annex A | The parent management system. AI documents extend existing ISMS controls; they do not duplicate them. |
| **ISO/IEC 42001:2023** (AI management system) | Structure of the AIMS: context, leadership, planning, support, operation, evaluation, improvement, and the Annex A AI controls. |
| **ISO/IEC 23894:2023** (AI risk management) | Method used in ISMS-28 for AI-specific risk identification and treatment. |
| **ISO/IEC 22989:2022** | Terminology — the definitions in ISMS-24 Section 3 follow it. |
| **CSA Cyber Trust Mark (CTM 2025), Performer tier, AI Security pillar** | The certification actually being audited. Clause mapping in every document annex. |
| **CSA Guidelines and Companion Guide on Securing AI Systems** (Oct 2024) and **Securing Agentic AI — Addendum** (17 Jun 2026) | Primary technical reference for AI security controls and the lifecycle model. |
| **IMDA/PDPC Model AI Governance Framework** (2nd ed. 2020), **for Generative AI** (30 May 2024), **for Agentic AI** v1.5 (20 May 2026, updated 5 Jun 2026) | Governance expectations in Singapore. The four agentic dimensions drive ISMS-31. |
| **PDPA 2012** and **PDPC Advisory Guidelines on Use of Personal Data in AI Recommendation and Decision Systems** (1 Mar 2024) | Personal data obligations, breach notification criteria in ISMS-13 Annex A Section 6. |
| **OWASP Top 10 for LLM Applications** | Threat reference for adversarial testing in ISMS-25 Section 6 and ISMS-07 Annex A Section 3.4. |

---

## What still has to happen before 17 August

Documents alone will not close these findings. The auditor raised them as *"not established"* — and will look for evidence the control has **operated at least once**. In priority order:

| # | Action | Owner | Evidence produced |
|---|---|---|---|
| 1 | Director approves and signs the full document set; enter in ISMS document register | Director / ISM | Signed approval blocks, updated register |
| 2 | Deliver the AI security briefing to all staff; collect acknowledgements | ISM / HR Director | Deck, attendance, quiz results, acknowledgement log |
| 3 | Hold the first quarterly AI review; record the minute | ISM | AI review record with decisions and actions |
| 4 | Run the AI incident tabletop exercise | ISM | Completed exercise record |
| 5 | Populate the AI Asset Register and AI Data Inventory with **actual verified settings**, not placeholders | ISM / TL | Completed registers |
| 6 | Capture dated configuration evidence for every AI tool (privacy/retention settings, SSO/MFA, exclusions) | DevOps Admin | Screenshots/exports dated in August 2026 |
| 7 | Complete the CIS baseline mapping for the 17 macOS endpoints | DevOps Admin | Completed mapping with any deviations approved |
| 8 | Merge the AI rows into the Register of Legal, Regulation and Contractual Requirements; review and approve with a date | ISM / CEO | Updated, signed register |
| 9 | Add AI risk scenarios to the CS Risk Assessment and re-approve | ISM | Updated RA-RTP workbook |
| 10 | Post an AI security best-practice item to the ISMS Slack channel | ISM | Slack post retained |

Track these in [CAR_Register_AI_Pillar.md](04-audit-pack/CAR_Register_AI_Pillar.md).

---

## Known gaps and honest caveats

These are flagged so nobody is surprised in the audit room:

- **Placeholders are real placeholders.** Anything in `[square brackets]` is unverified and must be confirmed against the actual tool or setting before issue. An auditor who finds a bracketed placeholder in an approved policy will read the whole set as unimplemented.
- **Vendor settings must be verified, not assumed.** The claim that a vendor does not train on Company data is a claim about a specific plan tier and a specific setting on a specific date. Screenshot it.
- **Three AFIs are outside the AI pillar** and are not fixed by this set: BCP/DR exercise not conducted in 2025 (B.22.8), no standalone training policy (B.7.1 — partially addressed by ISMS-30), and CTM audit not integrated into ISMS internal audit (B.6 — addressed by the internal audit checklist here). AFI-2 (comprehensive data management policy, B.9.8) is addressed for AI data by ISMS-27 but a Company-wide data management policy is still outstanding.
- **The Company does not train foundation models** and does not buy training data. Where a customer trains or fine-tunes, the data and environment stay with the customer. The document set says this explicitly and limits Company responsibility accordingly — but this must match what the contracts actually say.
- **ISO/IEC 42001 certification is not in scope for the August audit.** The AIMS framing here is a deliberate design choice so the work is reusable; it does not by itself confer any ISO 42001 claim.

---

## Reading these documents

Markdown renders natively on GitHub, so once this is pushed no tooling is needed. To read it locally before then:

**Browsable site** (sidebar navigation, rendered diagrams, print-to-PDF):

```bash
cd tools && npm install && npm run serve
```

Then open <http://localhost:8899>. Re-run `npm run build` after editing any `.md` file.

The generated `_site/` folder is git-ignored — it is a local convenience, not part of the controlled document set. The `.md` files are the controlled originals.

**Print to PDF:** open any page and use the *Print / PDF* button (sidebar and navigation are suppressed in print).

---

## Document conventions

- **Approval chain:** Prepared by Technical Leader · Reviewed by Information Security Manager · Approved by Director. This matches the existing 3-eyes chain evidenced at B.2.5.
- **Classification:** Internal, unless stated.
- **Retention:** 3 years for AI records; 5 years for regulator correspondence and notification assessments.
- **Review cycle:** annually, and on any of — a new class of AI tool, a material change to a vendor's terms or model, an AI-related incident, or a change to applicable AI guidance.
- `[bracketed text]` = to be completed or verified by Agile Labs.
