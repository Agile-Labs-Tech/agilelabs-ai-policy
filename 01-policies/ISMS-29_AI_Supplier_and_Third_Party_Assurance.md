# AI Supplier and Third-Party AI Assurance Policy

**AGILE LABS PTE. LTD.**

| | | | |
|---|---|---|---|
| **Document number** | ISMS-29 | **Revision** | 1.0 |
| **Document owner** | Information Security Manager (ISM) | **Issue date** | 14 August 2026 |
| **Classification** | Internal | **Next review** | Annually, or on material change to AI use |
| **Approval chain** | Prepared: Technical Leader · Reviewed: ISM · Approved: Director |  | |

---
## Revision history

| Rev | Date | Prepared by | Change |
|---|---|---|---|
| 1.0 | 14 August 2026 | Technical Leader | New document. Establishes AI-specific supplier assessment criteria, risk tiering, contractual requirements, customer pass-through checks, monitoring and exit. |

## Approval

| Role | Name | Date |
|---|---|---|
| Prepared by — Technical Leader | Wayne Tng | 14 August 2026 |
| Reviewed by — Information Security Manager | Sze Tho ChangSheng | 14 August 2026 |
| Approved by — Director | Liao Zhuli, Sujata | 14 August 2026 |
## 1. Purpose, scope and users

This policy defines how the Company assesses, contracts with, monitors and exits **AI suppliers** — third parties that provide AI capability, host AI models, process data through AI, or embed AI features into services the Company already uses.

**Scope**

| In scope | Example |
|---|---|
| AI tool and platform vendors | AI-assisted IDE, AI assistant |
| Existing suppliers that add AI features | A SaaS product that enables an AI assistant |
| Sub-Provider of a model | The model provider behind a reseller |
| Third-party AI agents or extensions integrated into Company tooling | Plugins, MCP servers, browser extensions |

**Out of scope:** suppliers with no AI component, and AI operated by a customer inside the customer's own environment.

The existing vendor evaluation scorecard, contractual requirements and onboarding process continue to apply; this document adds the AI-specific assessment criteria.

## 2. The principle

> **An AI vendor is a data processor with a model attached.** The assessment question is not "is this tool good" but "what does this vendor receive, how long do they keep it, what do they do with it, who else sees it, and what happens when we leave."

## 3. AI supplier assessment criteria

### 3.1 Data handling

| # | Criterion | Evidence required | Acceptance |
|---|---|---|---|
| D1 | **Does the vendor train on Company or customer content?** | Vendor terms for the specific plan tier, plus the in-product setting | **Must be "no"** for any tool permitted Confidential data. |
| D2 | **Retention period for prompts, context and output** | Vendor documentation + configured setting | Minimum available option enabled; zero-data-retention where offered |
| D3 | **Sub-processors** — who else receives the data | Vendor sub-processor list | Enumerated and acceptable; changes notified |
| D4 | **Human review of content by vendor staff** | Vendor terms | Disclosed; disabled where optional |
| D5 | **Deletion on request and on exit** | Vendor terms | Deletion supported; confirmation obtainable |
| D6 | **Tenant isolation** | Vendor security documentation | Content not shared across customers |

### 3.2 Security posture

| # | Criterion | Evidence |
|---|---|---|
| S1 | Independent certification or attestation (ISO/IEC 27001, SOC 2, or equivalent) | Certificate / report |
| S2 | SSO and MFA support; workspace-level administrative control | Product documentation |
| S3 | Audit logging available to the customer | Product documentation |
| S4 | Vulnerability disclosure and incident notification process | Vendor policy |
| S5 | Breach notification commitment and timeline | Contract clause |

### 3.3 AI-specific criteria

| # | Criterion | Why |
|---|---|---|
| A1 | Model provenance — whose models, hosted where | Determines the real supply chain |
| A2 | Model change and deprecation policy, with notice period | Model change is a change to delivered behaviour (ISMS-25 Section 5) |
| A3 | Guardrails and abuse controls in the service | Affects residual risk |
| A4 | Agentic capability — can the tool take actions? | Triggers ISMS-31 |
| A5 | Transparency about known limitations | Supports the impact assessment |

### 3.4 Commercial and continuity

| # | Criterion | Why |
|---|---|---|
| C1 | Vendor viability and funding stage | AI vendors fail and get acquired frequently |
| C2 | Exit path and substitutability — how hard is it to leave? | Concentration risk |
| C3 | Pricing model and cost-control mechanisms | Runaway cost risk with usage-based AI |
| C4 | Licence terms for the Company's use case, including customer work | Prevents a licence breach discovered at audit |

## 4. Risk tiering

Not every AI supplier deserves the same depth of assessment. Tier is set by the highest data class the tool may receive and by its action space.

| Tier | Definition | Assessment depth | Reassessment |
|---|---|---|---|
| **Tier 1 — Critical** | Receives Confidential or customer data, **or** can take actions in Company or customer systems |  review by ISM; Director awareness | Annually + on any material change |
| **Tier 2 — Standard** | Receives Internal data only; suggest-only | Sections 3.1 and 3.2 assessment | Annually |
| **Tier 3 — Low** | Public data only; no persistent account | Recorded in the register with a short rationale | Every 2 years |


## 5. Pass-through obligations from customers

Before an AI tool is used on a customer engagement, the ISM confirms against the contract:

- Does the customer permit AI-assisted development at all?
- Does the customer require disclosure of AI use, or approval of specific tools?
- Are there data residency, sub-processor or confidentiality terms that the AI vendor would breach?
- Does the customer's sector impose obligations that flow down (for example a MAS-regulated customer)?

Where the answer is unclear, the position is clarified with the customer in writing before the tool touches the engagement.

## 6. Monitoring

| Activity | Frequency | Owner |
|---|---|---|
| Vendor terms and privacy settings re-verified | Annually | ISM |
| Vendor security bulletins, status pages and change notices monitored | Continuous | Technical Leader |
| Sub-processor list change check | Annually and on notification | ISM |


## 7. Exit

On termination or replacement of an AI supplier:

1. Revoke all accounts, API keys and integrations (ISMS-24 Section 8).
2. Export or migrate any Company content held in the service.
3. Request deletion of Company and customer content; retain the confirmation.
4. Remove client-side components from endpoints.
5. Record the disposal per ISMS-11 and ISMS-27 Section 9.

## 8. Roles

| Role | Responsibility |
|---|---|
| ISM | Owns AI supplier assessment, tiering, contractual position and reassessment |
| Technical Leader | Technical evaluation, client-side component review, model and change monitoring |
| DevOps Administrator | Configuration verification, account and key lifecycle, exit actions |
| DPO | Assessment where personal data is involved |
| Director | Accepts residual risk on click-through terms. |

## 9. Records

| Record | Owner | Retention |
|---|---|---|
| AI supplier assessments and scorecards | ISM | 3 years |
| Vendor terms as at date of assessment | ISM | 3 years |
| Contractual gap and residual risk acceptances | ISM / Director | 3 years |
| Customer permissions and clarifications on AI use | ISM | 3 years (or contract term, if longer) |
| Reassessment records and trigger-event reviews | ISM | 3 years |
| Exit and deletion confirmations | DevOps Administrator / TL | 3 years |

---
