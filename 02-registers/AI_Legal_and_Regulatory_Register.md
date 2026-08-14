# AI Addendum to the Register of Legal, Regulation and Contractual Requirements

**AGILE LABS PTE. LTD.** · Rev 1.0 · 14 August 2026 · Owner: ISM · Classification: Internal

> **Evidence for CTM 2025 clause B.5.1** — *"The company's AI development project mainly are in Singapore. AI related law or governance framework in Singapore should be listed in the Register of Legal, Regulation and Contractual Requirements."*
>
> **These rows are to be merged into the existing Register**, which is then reviewed and approved with a dated signature (last reviewed by Wayne, approved by CEO, 22 May 2026 — a new dated approval is required after the merge).
>
> **Singapore has no standalone AI statute.** The instruments below are the applicable governance framework. Saying "there is no AI law in Singapore" and stopping there is what produced the finding; the correct response is to list the frameworks that *do* apply and record why.

---

## 1. Register rows

| Ref | Instrument | Issuer | Date / version | Type | Applicability to Agile Labs | Compliance action | Owner | Next review |
|---|---|---|---|---|---|---|---|---|
| **L-AI-01** | Personal Data Protection Act 2012 (as amended), including Part VIA data breach notification | Parliament / PDPC | In force | **Statute** | **Applies** where AI processing involves personal data | AI use of personal data controlled per [ISMS-24](../01-policies/ISMS-24_AI_Acceptable_Use_and_Security_Policy.md) Section 7 and [ISMS-27](../01-policies/ISMS-27_AI_Data_Governance_and_Handling_Standard.md) Section 8; notification criteria stated in [ISMS-13 Annex A](../01-policies/ISMS-13_AnnexA_AI_Incident_Response.md) Section 6.1 | DPO | *[date]* |
| **L-AI-02** | PDPC Advisory Guidelines on Use of Personal Data in AI Recommendation and Decision Systems | PDPC | 1 March 2024 | Advisory guideline | **Applies** if AI features process personal data for recommendations or decisions | Assessed at AI SDLC Stage 1; DPO review; AI system impact assessment per [ISMS-28](../01-policies/ISMS-28_AI_Risk_Management_Procedure.md) Section 6 | DPO | *[date]* |
| **L-AI-03** | PDPC guidance on use of personal data in generative AI | PDPC | *[verify current status and date]* | Guideline | **Monitor** — relevant to GenAI use with personal data | Track finalisation and reassess | DPO | *[date]* |
| **L-AI-04** | Model AI Governance Framework (2nd Edition) | IMDA / PDPC | 2020 | Voluntary framework | **Reference** for internal AI governance structures | Governance reflected in [AIMS-00](../00-framework/AIMS-00_AI_Management_System_Scope_and_Context.md), [ISMS-24](../01-policies/ISMS-24_AI_Acceptable_Use_and_Security_Policy.md) | ISM | *[date]* |
| **L-AI-05** | Model AI Governance Framework for Generative AI | IMDA / AI Verify Foundation | 30 May 2024 | Voluntary framework | **Reference** for GenAI use and delivery | Considered in AI risk assessment ([ISMS-28](../01-policies/ISMS-28_AI_Risk_Management_Procedure.md)) and AI SDLC | ISM | *[date]* |
| **L-AI-06** | Model AI Governance Framework for Agentic AI | IMDA | **v1.5, 20 May 2026** (v1.0 January 2026; updated 5 June 2026) | Voluntary framework | **Applies** if agentic capability is adopted or delivered | Four dimensions adopted as the structure of [ISMS-31](../01-policies/ISMS-31_Agentic_AI_Governance_Policy.md); agentic use requires ISM approval | ISM | *[date]* |
| **L-AI-07** | Guidelines and Companion Guide on Securing AI Systems | CSA | October 2024 | Voluntary guideline | **Applies** — primary security reference for the CTM AI pillar | Lifecycle approach adopted in [ISMS-07 Annex A](../01-policies/ISMS-07_AnnexA_Secure_AI_Development_Lifecycle.md) and [ISMS-25](../01-policies/ISMS-25_AI_Secure_Configuration_Standard.md) | ISM | *[date]* |
| **L-AI-08** | Securing Agentic AI — Addendum to the Guidelines and Companion Guide on Securing AI Systems | CSA | 17 June 2026 | Voluntary guideline | **Applies** if agentic capability is adopted or delivered | Threat modelling and agent controls per [ISMS-31](../01-policies/ISMS-31_Agentic_AI_Governance_Policy.md) Section 3.3 and [ISMS-25](../01-policies/ISMS-25_AI_Secure_Configuration_Standard.md) Section 6 | Technical Leader | *[date]* |
| **L-AI-09** | Cyber Security Trust Mark (CTM 2025), Performer tier — AI Security pillar | CSA | 2025 | **Certification criteria** | **Applies** — the Company is certified against it | This entire document set; annual self-assessment; internal audit coverage | ISM | *[date]* |
| **L-AI-10** | Cybersecurity Act 2018 | Parliament / CSA | In force | Statute | **Applies** generally; no CII designation | Existing ISMS controls | ISM | *[date]* |
| **L-AI-11** | AI Verify testing framework and toolkit | IMDA / AI Verify Foundation | Current | Voluntary tool | **Optional** assurance tool for delivered AI capability | Consider for customer-facing AI assurance | Technical Leader | *[date]* |
| **L-AI-12** | MAS FEAT Principles (Fairness, Ethics, Accountability, Transparency) | MAS | Current | Sector guidance | **Conditional** — applies where a customer is a MAS-regulated financial institution. Confirm per engagement | Contract review at project initiation ([ISMS-29](../01-policies/ISMS-29_AI_Supplier_and_Third_Party_Assurance.md) Section 6) | ISM | *[date]* |
| **L-AI-13** | ISO/IEC 42001:2023 — AI management systems | ISO/IEC | 2023 | Voluntary standard | **Reference** — AIMS structured to it; certification not currently sought | [AIMS-00](../00-framework/AIMS-00_AI_Management_System_Scope_and_Context.md) structured to clauses 4–10 | ISM | *[date]* |
| **L-AI-14** | ISO/IEC 23894:2023 — AI risk management | ISO/IEC | 2023 | Voluntary standard | **Reference** — method adopted | [ISMS-28](../01-policies/ISMS-28_AI_Risk_Management_Procedure.md) | ISM | *[date]* |

## 2. Non-applicability assessments

> Recording *why* an instrument does **not** apply is as important as recording the ones that do. It converts an absence into an assessed position — which is what an auditor can accept.

| Ref | Instrument | Assessment | Assessed by | Date | Reassess |
|---|---|---|---|---|---|
| **L-AI-N1** | United Kingdom — AI regulatory position | The Company has a project in the UK. **No cross-cutting UK AI statute identified.** UK data protection law applies to personal data in that project and is handled under the existing data protection controls. | ISM | *[date]* | Annually |
| **L-AI-N2** | EU Artificial Intelligence Act | **Assessed as not applicable** — the Company does not place an AI system on the EU market, does not act as a provider, importer or distributor into the EU, and no output of an AI system it provides is used in the EU. Reassess if EU deployment is contemplated. | ISM | *[date]* | Annually, and on any EU engagement |
| **L-AI-N3** | US state AI legislation | **Not applicable** — no US deployment or US-based customer for AI capability. | ISM | *[date]* | Annually |
| **L-AI-N4** | Singapore sector-specific AI requirements outside financial services (e.g. healthcare) | **Not currently applicable** — no customers in those sectors for AI capability. | ISM | *[date]* | On new engagement |

## 3. Maintenance process

Per [ISMS-28 Section 8](../01-policies/ISMS-28_AI_Risk_Management_Procedure.md), because the systemic fix for B.5.1 is a recurring review, not a one-time edit.

| Activity | Frequency | Owner | Evidence |
|---|---|---|---|
| Review AI instruments for currency, new issuances and version changes | **Quarterly** — standing agenda item 7 of the quarterly AI review | ISM | AI review record |
| Reassess applicability on entering a new jurisdiction or sector | On engagement | ISM | Engagement record |
| Full review and dated approval of the merged Register | Annually | ISM, approved by CEO | Signed Register |
| Communicate changes affecting staff practice | On change | ISM | ISMS channel post |

## 4. Review record

| Date | Reviewed by | Approved by | Changes | Next review |
|---|---|---|---|---|
| *[date]* | ISM | CEO | AI rows added to the Register; non-applicability assessments recorded | *[+3 months for AI rows; +12 months full]* |

---

## Verification notes before merging

1. **L-AI-03** — confirm the current status and title of PDPC guidance on personal data in generative AI at the date of review. Cite the version actually in force, not a draft superseded since.
2. **L-AI-06** — the agentic framework has moved quickly (v1.0 January 2026 → v1.5 20 May 2026, updated 5 June 2026). Confirm the current version at review; this is precisely the kind of entry that goes stale between annual reviews, which is why the review here is quarterly.
3. **L-AI-12** — confirm whether any current customer is MAS-regulated. If so, FEAT moves from Conditional to Applies, and the obligations flow into the engagement per ISMS-29 Section 6.
4. **All rows** — the "Next review" column must be populated with real dates before the Register is approved. Blank review dates in an approved register are themselves a finding.
