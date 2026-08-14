# Secure AI Development Lifecycle

**AGILE LABS PTE. LTD.** — ISMS-07 Secure Development Policy

| | | | |
|---|---|---|---|
| **Document number** | ISMS-07 Annex A | **Revision** | 1.0 |
| **Document owner** | Information Security Manager (ISM) | **Issue date** | 14 August 2026 |
| **Classification** | Internal | **Next review** | Annually, or on material change to AI use |
| **Approval chain** | Prepared: Technical Leader · Reviewed: ISM · Approved: Director |  | |

---

## Revision history

| Rev | Date | Prepared by | Change |
|---|---|---|---|
| 1.0 | 14 August 2026 | Technical Leader | New annex to ISMS-07. Establishes the AI SDLC framework across seven life cycle stages with gates, and the controls for AI-assisted development. |

## Approval

| Role | Name | Date |
|---|---|---|
| Prepared by — Technical Leader | Wayne Tng | 14 August 2026 |
| Reviewed by — Information Security Manager | Sze Tho ChangSheng | 14 August 2026 |
| Approved by — Director | Liao Zhuli, Sujata | 14 August 2026 |

## 1. Purpose, scope and users

This annex extends the Secure Development Policy (ISMS-07) to cover artificial intelligence. It establishes the framework the Company applies **across the life cycle of an AI system** — from planning through to decommissioning — so that AI capability is developed, delivered and operated securely.

### 1.1 Two distinct cases

The requirements differ, and conflating them is how AI SDLC frameworks become unusable:

| Case | Definition |
|---|---|
| **Case A — AI-assisted development** | Using AI tools to produce or modify code, tests, configuration or documentation for Company or customer systems |
| **Case B — AI-enabled delivery** | Designing, building, integrating, deploying or supporting AI capability that forms part of a system delivered to a customer |

**Case A is the Company's current normal state.** Case B applies per engagement.

### 1.2 What the Company does not do

The Company does not train foundation models and does not purchase training data. Where model training or fine-tuning is performed by or for a customer, the data, training environment and production environment remain under the customer's control. The Company's responsibilities are limited to those recorded in the applicable contract.

## 2. Life cycle stages

The framework follows a life cycle approach consistent with the CSA *Guidelines on Securing AI Systems*. Each stage has mandatory activities and a **gate** that must be satisfied before the next stage begins.

| Stage | Purpose |
|---|---|
| **1. Planning and risk assessment** | Establish the intended purpose, boundaries and risks of the AI capability before development begins |
| **2. Design and data** | Define architecture, data flows, classification, access and the security controls that follow from the risk assessment |
| **3. Development and supply chain** | Build securely; control models, libraries, prompts and AI-assisted code |
| **4. Testing and evaluation** | Verify the AI behaves as intended and resists AI-specific attack |
| **5. Deployment** | Release under change control with secure configuration and rollback |
| **6. Operations and monitoring** | Detect misbehaviour, drift, abuse and incidents; maintain the AI asset and data records | 
| **7. End of life** | Retire AI capability, data, keys and access cleanly |

```
  ┌─────────┐   ┌────────┐   ┌───────────┐   ┌─────────┐   ┌──────────┐   ┌───────────┐   ┌────────┐
  │ 1 Plan  │──▶│ 2 Data │──▶│ 3 Develop │──▶│ 4 Test  │──▶│ 5 Deploy │──▶│ 6 Operate │──▶│ 7 Exit │
  │  & risk │   │& design│   │ & supply  │   │ & eval  │   │          │   │ & monitor │   │        │
  └─────────┘   └────────┘   └───────────┘   └─────────┘   └──────────┘   └───────────┘   └────────┘
       │             │             │              │              │               │              │
     gate:         gate:         gate:          gate:          gate:           gate:          gate:
   risk row +   data flow +    review +       test record    change rec +    register       revocation
   purpose      access design  quality gate   signed off     config evid     current        + disposal
```


## 3. Controls for AI-assisted development

| Control | Requirement |
|---|---|
| **Sanctioned tools only** | AI-assisted development performed only with tools listed in the AI Asset Register. |
| **Data limits** | Only data permitted may be exposed to the tool. Customer production data and secrets are never placed in prompts or shared context. |
| **Mandatory human review** | AI-generated or AI-assisted code is reviewed by a second competent person through the merge request process. **The author, not the tool, is accountable for the code.** |
| **Quality and security gate** | Code scanning must pass before merge. Findings introduced by AI-generated code are remediated, not suppressed. |
| **Comprehension requirement** | A developer must be able to explain what generated code does before merging it. **Code that is not understood is not merged.** |
| **Test coverage** | AI-assisted changes carry the same test expectations as hand-written code. Generated tests are reviewed for meaningfulness. |
| **Dependency discipline** | A package suggested by an AI tool is verified to exist and to be the intended package before installation, guarding against hallucinated or typosquatted dependencies. |
| **Traceability** | Merge requests to be conduct and review by another before merging of code. |

### 3.1 Practical note on the review gate

The review requirement is the control that carries the most weight in Case A.


## 4. Records

| Record | Owner | Retention |
|---|---|---|
| AI risk assessment entries in the CS Risk Assessment | ISM | 3 years |
| AI system impact assessments | ISM | 3 years |
| AI data flow diagram and Data Inventory rows | ISM | 3 years |
| Security requirements, design and gate approvals for AI features | Technical Leader | 3 years |
| AI security test results, including adversarial testing | Technical Leader | 3 years |
| Change and release records for AI capability, with model and prompt versions | Technical Leader | 3 years |
| Merge request and code review records for AI-assisted code | Technical Leader | 3 years |

---
