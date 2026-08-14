# AI Risk Management Procedure

**AGILE LABS PTE. LTD.**

| | | | |
|---|---|---|---|
| **Document number** | ISMS-28 | **Revision** | 1.0 |
| **Document owner** | Information Security Manager (ISM) | **Issue date** | 14 August 2026 |
| **Classification** | Internal | **Next review** | Annually, or on material change to AI use |
| **Approval chain** | Prepared: Technical Leader · Reviewed: ISM · Approved: Director |  | |

---


## Revision history

| Rev | Date | Prepared by | Change |
|---|---|---|---|
| 1.0 | 14 August 2026 | Technical Leader | New document. Establishes AI-specific risk identification, the action-space/reversibility/autonomy analysis, AI system impact assessment, and the quarterly legal-register review process closing CTM 2025 finding B.5.1. |

## Approval

| Role | Name | Date |
|---|---|---|
| Prepared by — Technical Leader | Wayne Tng | 14 August 2026 |
| Reviewed by — Information Security Manager | Sze Tho ChangSheng | 14 August 2026 |
| Approved by — Director | Liao Zhuli, Sujata | 14 August 2026 |

## 1. Purpose, scope and users

This procedure defines how the Company identifies, analyses, evaluates, treats and monitors risks arising from artificial intelligence.

**What is different for AI** is what gets identified. Conventional risk identification asks what could compromise a system. AI risk identification also asks what the system could do wrong while working exactly as designed.

**Scope:** all AI use in scope of AIMS-00 Section 2.4.

## 2. Where AI risk is recorded

[AI Risk Register](../02-registers/AI_Risk_Register.md)

## 3. Risk identification — AI-specific sources

Risk identification draws on all of the following. Each is a prompt for the assessment, not a checklist to tick.

| Source | Use |
|---|---|
| **AI Asset Register** | Every asset is a risk surface. A tool with no risk row is an unassessed tool. |
| **AI Data Inventory and data flow** | Each boundary crossing is a candidate risk. |
| **OWASP Top 10 for LLM Applications** | Technical threat taxonomy for AI-enabled applications. |
| **AI incidents and reported concerns** | Realised risk is the best evidence of unassessed risk. |
| **Vendor and provider changes** | Model deprecation, terms changes, sub-processor changes. |
| **Customer contracts** | Restrictions, sector obligations, liability positions. |

## 4. AI risk categories

The Company assesses AI risk under eight headings. Each has at least one row in the register.

| # | Category | Typical scenario |
|---|---|---|
| **R1** | **Data leakage** | Confidential, customer or personal data exposed to an AI vendor through prompt, context or indexing |
| **R2** | **Prompt injection and manipulation** | Instructions embedded in ingested content redirect an AI tool or feature |
| **R3** | **Excessive agency** | An AI capability takes an action it was not authorised to take |
| **R4** | **Output error and over-reliance** | Incorrect, fabricated or subtly wrong output relied upon in a deliverable; automation bias in review |
| **R5** | **Supply chain and model integrity** | Malicious package, tampered model artefact, compromised vendor, backdoored extension |
| **R6** | **Availability and dependency** | Provider outage, model deprecation, rate limiting, unsustainable cost |
| **R7** | **Legal, IP and licensing** | Generated code reproducing licensed material; unclear ownership of output; breach of a customer's AI restriction |
| **R8** | **Privacy and individual impact** | Personal data processed without basis; a decision affecting an individual made or shaped by AI without oversight |

## 5. Risk analysis — the three AI dimensions

In addition to the standard likelihood × impact analysis, every AI risk row records three dimensions drawn from IMDA's *assess and bound risks upfront*. They are the levers the Company can use.

| Dimension | Question | Scale |
|---|---|---|
| **Action space** | What can this AI actually do? Read only? Write? Call external systems? Spend money? | Narrow / Moderate / Broad |
| **Reversibility** | If it does the wrong thing, can it be undone, and how fast? | Reversible / Recoverable with effort / Irreversible |
| **Autonomy** | How much happens without a human deciding? | Suggest only / Act with approval / Act then notify / Fully autonomous |

**Bounding rule.** Where a risk scores Broad action space *and* Irreversible *and* anything beyond "Act with approval", the capability is not deployed until one of the three is reduced.

## 6. AI system impact assessment

Any AI capability that:

- processes personal data, or
- produces output that affects an individual (eligibility, ranking, assessment, recommendation), or
- can take actions with commercial, contractual or security consequence, or
- is delivered to a customer as part of a system.

| Section | Content |
|---|---|
| Intended purpose and limits | What it is for; what it must not be used for |
| Affected individuals or groups | Who could be impacted, and how |
| Data used | Classes, sources, provenance, personal data status |
| Action space / reversibility / autonomy | Per Section 5 |
| Failure modes | What wrong looks like, and who notices |
| Human oversight | Where a person reviews, approves or stops it |
| Fairness and error considerations | Whether error rates could fall unevenly, where relevant |
| Transparency | What users and affected individuals are told |
| Residual risk and decision | Accepted by, with date |


## 7. Risk treatment

Treatment options and acceptance criteria are unchanged from the *Risk Assessment and Treatment Methodology*. AI-specific treatment patterns, in order of preference:

1. **Avoid** — do not use AI for this purpose, or do not use this data class with AI.
2. **Bound** — reduce action space, remove autonomy, add a human approval gate, restrict retrieval scope.
3. **Reduce** — apply ISMS-25 configuration controls, exclusions, validation, adversarial testing, monitoring.
4. **Transfer** — contractual terms with the vendor or customer; insurance. Note that reputational and regulatory exposure does not transfer.
5. **Accept** — only within the Company risk appetite, recorded with the accepting authority and a review date.

Each risk row records: risk owner, treatment decision, treatment activities, treatment owner, target date, implementation status.

## 8. Legal and regulatory requirements


| Activity | Frequency | Owner |
|---|---|---|
| Review the AI instruments in the Register, for new issuances and version changes | Annually | ISM |
| Reassess applicability where the Company enters a new jurisdiction or a new sector customer | On engagement | ISM |
| Full review and approval of the Register | Annually, with the existing Register review | ISM, approved by Director |
| Record an explicit **non-applicability assessment** where an instrument does not apply | On assessment | ISM |

Content: [AI Legal and Regulatory Register](../02-registers/AI_Legal_and_Regulatory_Register.md).

## 9. Monitoring and review

| Activity | Frequency | Owner |
|---|---|---|
| AI risk review as part of the annual Risk Assessment | Annually | ISM |
| AI risk register review at the anually AI review | Annually | ISM |
| Re-assessment on trigger — new AI tool, new AI feature, vendor material change, AI incident, new customer AI restriction, new applicable guidance | On trigger | ISM |
| Report to management review | Annually | ISM |

## 10. Roles

| Role | Responsibility |
|---|---|
| ISM | Owns AI risk identification, register maintenance and reporting; runs the assessment |
| Technical Leader | Technical analysis, action-space and reversibility assessment, treatment design |
| DPO | Privacy and individual-impact analysis |
| Risk owners | Own the risk and the treatment outcome |
| Director | Accepts residual risk beyond ISM authority |

## 11. Records

| Record | Owner | Retention |
|---|---|---|
| AI Risk Assessment | ISM | 3 years |
| AI system impact assessments | ISM | 3 years |
| Register of Legal, Regulation and Contractual Requirements — AI entries and non-applicability assessments | ISM | 3 years |

---
