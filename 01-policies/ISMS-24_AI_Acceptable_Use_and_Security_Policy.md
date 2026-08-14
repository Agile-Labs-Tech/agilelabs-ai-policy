# AI Acceptable Use and Security Policy

**AGILE LABS PTE. LTD.**

| | | | |
|---|---|---|---|
| **Document number** | ISMS-24 | **Revision** | 1.0 |
| **Document owner** | Information Security Manager (ISM) | **Issue date** | 14 August 2026 |
| **Classification** | Internal | **Next review** | Annually, or on material change to AI use |
| **Approval chain** | Prepared: Technical Leader · Reviewed: ISM · Approved: Director |  | |


---

## Revision history

| Rev | Date | Prepared by | Change |
|---|---|---|---|
| 1.0 | 14 August 2026 | Technical Leader | New document. Establishes AI acceptable use, protection of AI tools and services, data-leakage prevention and reporting of AI security concerns. |

## Approval

| Role | Name | Date |
|---|---|---|
| Prepared by — Technical Leader | Wayne Tng | 14 August 2026 |
| Reviewed by — Information Security Manager | Sze Tho ChangSheng | 14 August 2026 |
| Approved by — Director | Liao Zhuli, Sujata | 14 August 2026 |

## 1. Purpose, scope and users

This policy defines how Agile Labs governs, secures and controls the use of artificial intelligence (AI) systems, tools and services. It sets out what employees may and may not do with AI tools, how AI tools and the data placed into them are protected, and how AI-related security concerns are reported.

**Scope.** This policy applies to:

- all externally hosted AI and generative AI (GenAI) services used for Company or customer work, including AI-assisted development tools, AI assistants, and AI features embedded in other software;
- any AI service, model or component deployed, integrated or operated by the Company, including AI capability developed and delivered to customers;
- all data used as input to, held as context by, or produced as output from an AI system — including prompts, uploaded files, code, retrieved context and generated output.


## 2. Reference documents

| Reference | Relevance |
|---|---|
| AIMS-00 AI Management System Scope and Context | AI roles, scope boundary, governance structure |
| AIMS-01 AI Policy and Objectives | AI policy statement and measurable objectives |
| ISMS-01 Information Security Management System Manual | Governance structure, classification, acceptable use. |
| ISMS-07 Secure Development Policy + Secure AI Development Lifecycle | Development and delivery of AI capability |
| ISMS-08 Supplier Security Policy / ISMS-17 ICT Procurement Policy | Assessment and onboarding of AI vendors |
| ISMS-13 Incident Management Procedure + AI Incident Response | Handling of AI-related incidents |
| ISMS-25 AI Secure Configuration Standard | Technical configuration baseline for AI tools, services and hosts |
| ISMS-27 AI Data Governance and Handling Standard | Classification, provenance, integrity and lifecycle of AI data |
| ISMS-28 AI Risk Management Procedure | AI risk identification, assessment and treatment |
| ISMS-30 AI Competence, Training and Awareness Policy | Training obligations arising from this policy |
| ISMS-31 Agentic AI Governance Policy | Additional controls where AI can act autonomously |
| Data Classification of Agile Lab Pte Ltd / Data Inventory | Classification and handling rules applied to AI input and output |
| Register of Legal, Regulation and Contractual Requirements | Applicable AI laws, frameworks and guidelines |
| CSA Guidelines and Companion Guide on Securing AI Systems | Primary external reference for AI security controls |
| IMDA/PDPC Model AI Governance Framewor; for Generative AI; for Agentic AI | AI governance expectations in Singapore |
| PDPC Advisory Guidelines on Use of Personal Data in AI Recommendation and Decision Systems (1 Mar 2024) | Personal data in AI systems |
| OWASP Top 10 for Large Language Model Applications | Threat reference for AI-enabled applications |

## 3. Definitions

| Term | Definition |
|---|---|
| AI system | Any system that uses machine learning or a foundation model to generate output, predictions, recommendations or decisions. |
| GenAI / LLM | Generative AI, including large language model services used for text, code or content generation. |
| AI tool | A product or service that provides AI capability to a user, e.g. an AI-assisted IDE or an AI assistant. |
| Prompt / input | Any content submitted to an AI system, including instructions, pasted text, source code, files and retrieved context. |
| Output | Any content returned by an AI system, including generated code, text, summaries and structured data. |
| Agentic AI | An AI system able to plan and take actions autonomously through tools, code execution or API calls. |
| Model provider | The third party operating the model or AI service. |
| Prompt injection | An attack in which instructions embedded in data or content cause an AI system to behave contrary to its intended purpose. |
| Sanctioned AI tool | An AI tool recorded in the AI Asset Register and approved under Section 6 of this policy. |

## 4. AI security objectives

The AI security objectives that guide the secure use of AI systems, and ensure they are used only for their intended purposes, are established in **[AIMS-01 Section 3](../00-framework/AIMS-01_AI_Policy_and_Objectives.md)** and measured in the [AI Objectives register](https://docs.google.com/spreadsheets/d/1wScBPiUj2EtrSmPwBMbXwvXbK40x3zwJK1Qqm-Dpm1k/edit?gid=0#gid=0). They are approved by the Director at management review and monitored by the ISM.

## 5. Roles and responsibilities

| Role | Responsibility for AI security |
|---|---|
| **Director** | Approves this policy and the AI security objectives; provides resources; reviews AI security status at management review. |
| **ISM — designated AI Security Owner** | Owns this policy and the AI Asset Register; approves AI tool requests; owns AI risk assessment and reporting; is the reporting point for AI security concerns. |
| **Technical Leader** | Maintains the AI configuration baseline and the Secure AI Development Lifecycle; ensures AI-assisted code is reviewed and passes the quality gate. |
| **DevOps Administrator** | Implements and evidences configuration, key management and host hardening for AI tools and infrastructure; revokes AI tool access on separation. |
| **Data Protection Officer (HR Director)** | Assesses personal data implications of AI use; leads regulator notification decisions. |
| **All staff** | Use only approved AI tools; apply the data rules; review AI output before use; report AI security concerns and unexpected AI behaviour. |

## 6. Sanctioned AI tools and the approval process

Only AI tools recorded in the [AI Asset Register](https://docs.google.com/spreadsheets/d/1wScBPiUj2EtrSmPwBMbXwvXbK40x3zwJK1Qqm-Dpm1k/edit?gid=0#gid=0) and approved by the ISM may be used for Company or customer work.

### 6.1 Rules of use

1. AI tools must be accessed through Company-managed business or enterprise accounts using the Company domain, with single sign-on and multi-factor authentication. **Personal accounts, personal subscriptions and free consumer tiers must not be used for Company or customer work.**
2. Free-tier and unapproved GenAI sites are **not allowed**. Attempting to bypass by using a personal device, or use a personal account to reach an AI service is a breach of this policy.
3. AI tools must not be granted access to customer production environments, customer databases or production credentials.
4. Browser extensions, IDE plugins and desktop utilities that transmit content to an AI service are AI tools for the purposes of this policy and require the same approval.
5. Where a customer instructs the Company to use a specific AI tool inside the customer's environment, that instruction is recorded with the engagement.

### 6.2 Requesting a new AI tool

| Step | Action | Responsible |
|---|---|---|
| 1 | Requester submits the tool, intended use, data classes involved and vendor URL to the ISM or Technical Leader. | Requester |
| 2 | Vendor and service assessed, data retention, security posture, contractual and licensing terms, and the AI-specific risks. | ISM with TL |
| 3 | AI Asset Register and Data Inventory updated; tool added to the sanctioned list. | ISM |
| 4 | Approved tools reviewed at least annually, and immediately after any material change to the vendor's terms, model or data handling. | Anually AI review |

**Target turnaround:** 5 to 10 working days for a standard request.

## 7. Data permitted in AI systems

**Classification rule.** A prompt, retrieved context or output inherits the classification of the highest-classified data it contains. Output derived from Confidential input is Confidential and is handled accordingly. Full handling rules are in [ISMS-27](ISMS-27_AI_Data_Governance_and_Handling_Standard.md).

| Data class | External / third-party hosted AI tools | Internally deployed or customer-hosted AI |
|---|---|---|
| **Public** | Permitted. | Permitted. |
| **Internal** (non-sensitive Company material, generic code, public libraries) | Permitted using sanctioned tools. | Permitted. |
| **Confidential** (Company source code, designs, unpublished IP, commercial terms) | Permitted **only** with a sanctioned tool contractually confirmed not to train on Company data and configured with retention controls; repositories and paths excluded from indexing where required. | Permitted with access control and logging. |
| **Customer data, customer production data, customer source code** | **PROHIBITED** unless the customer has given documented written permission. | Permitted only within the customer's own environment and under the customer's instructions. |
| **Personal data** (as defined under the PDPA) | **PROHIBITED.** Where personal data is unavoidable for a business purpose it must be anonymised or masked first, and the DPO or Technical Leader must approve the use case. | Permitted only where assessed by the DPO and Technical Leader |
| **Credentials, API keys, tokens, secrets, certificates** | **PROHIBITED in all cases**, including inside code pasted into an AI tool. | **PROHIBITED.** |
| **Regulated or contractually restricted data** | **PROHIBITED** without prior contractual review. | Case by case, approved by ISM or Technical Leader. |

### 7.1 The practical test

Before pasting anything into an AI tool, ask: *if this exact content appeared in the vendor's logs, or in a support ticket at the vendor, or in a future model's output — would that be a problem?* If yes, it does not go in. If unsure, ask the ISM or Technical Leader before, not after.

## 8. Protection of AI tools, services and accounts

1. AI tool accounts are provisioned, administered and de-provisioned by the Technical Leader or DevOps Administrator. The joiner–mover–leaver process in ISMS-01 applies to AI tools exactly as to other systems; access is revoked within 24 hours of separation.
2. Access is granted on least privilege. Administrative rights in AI workspaces are restricted to the Technical Leader and DevOps Administrator.
3. API keys, tokens and secrets for AI services are generated with the minimum scope required, stored in 1Password, never committed to a repository, and rotated when needed.
4. Subscriptions and licences for AI tools are recorded in the asset management tool and reviewed so unused or lapsed access is removed.
5. Usage and administrative logs available from AI tools are reviewed where the tool provides them..
6. AI tool spend is monitored; an unexplained usage or cost spike is treated as a potential compromise indicator.

## 9. Prevention of data leakage through AI tools

| Control | Implementation | Evidence |
|---|---|---|
| Blocking of unsanctioned AI services | Random check conducted by Technical Leader or ISM for unapproved GenAI URLs on all Company devices | Records of random check will be recorded |
| Context and indexing exclusions | Sensitive repositories, directories and files excluded from AI tool indexing and context collection (ignore files, workspace scoping) | Exclusion configuration in the repository / tool |
| Secret hygiene | Secrets never placed in prompts; secret scanning and code review detect keys before merge | Merge request records; scan results |
| Prompt discipline | Staff instructed to minimise data in prompts, mask identifiers, and prefer descriptions over pasted production data | Training deck; acknowledgement records |
| Monitoring and reporting | Suspected exposure through an AI tool is reported and handled as an incident under ISMS-13 Annex A | Incident records |

## 10. Human oversight of AI output

1. **AI output is a draft, never an authoritative result.** The employee who uses the output remains accountable for it.
2. AI-generated or AI-assisted code must be reviewed by a second competent person through the normal merge request process, and must pass the code review.
3. AI output must be checked for licence and intellectual property risk before incorporation into a deliverable. Output that appears to reproduce third-party licensed material must not be used.
4. Content generated for a customer or for external publication must be verified for factual accuracy by a competent person before release.
5. **Agentic capability** — AI that can execute code, call tools or take actions autonomously — requires prior ISM approval. It must run with least privilege, must not act on production systems, and must have a rollback mechanism.
6. AI must not be the sole basis for decisions affecting individuals, including employment, disciplinary or customer eligibility decisions.
7. **Automation bias is a named risk.** Reviewers are expected to disagree with AI output when it is wrong; a review that approves everything is not a review.

## 11. Reporting AI security concerns and unexpected AI behaviour

All staff are required to report AI security concerns and any unexpected AI behaviour so they can be investigated. **Reporting is expected and encouraged. No employee will be penalised for reporting in good faith, including where the report concerns their own mistake.** Speed of containment depends entirely on speed of reporting, and a culture that punishes the reporter buys silence instead of security.

### 11.1 What to report

- Confidential, personal, customer or credential data placed into an AI tool, whether by mistake or otherwise.
- Output containing data the user did not supply and would not expect the tool to have (possible leakage from another tenant or session).
- An AI tool ignoring its instructions, behaving inconsistently with its intended purpose, or appearing to follow instructions embedded in a document, web page, ticket or repository (possible prompt injection).
- AI-generated code or content containing suspicious network calls, unknown dependencies, obfuscated logic or apparent licensed third-party material.
- Suspected compromise of an AI tool account, API key or workspace; unexpected charges or usage spikes.
- Use of an unsanctioned AI tool, or a request from a customer or third party to use one.
- A vendor security incident, breach notice or material change to an AI service's data handling.

### 11.2 How and when to report

| Situation | Report to | Timing |
|---|---|---|
| Suspected exposure of confidential, customer or personal data | ISM or Technical Leader immediately, **and** raise an incident in the incident management tool | **Immediately** — do not wait, and do not delete evidence |
| Suspected compromise of an AI account, key or workspace | Technical Leader and DevOps Administrator; raise an incident | **Immediately** |
| Unexpected AI behaviour, suspected prompt injection, questionable output | ISM and Technical Leader, via the Slack channel | Same working day |
| General AI security question, concern or improvement suggestion | Technical Leader, ISM | Any time |


## 12. Training and awareness

Training obligations are set out in [ISMS-30](ISMS-30_AI_Competence_Training_and_Awareness.md). In summary: this policy is communicated to all staff on issue, at induction, and at least annually as part of the ISMS awareness programme. The AI module covers secure use of AI tools, the data rules and the reporting duty.

## 13. Compliance and non-compliance

- Non-compliance is recorded, assessed for risk, and handled under the Company's disciplinary process where warranted. Repeated or deliberate breaches involving customer or personal data are treated as serious misconduct.
- A first-time, self-reported mistake is treated as a training and process matter, not a disciplinary one. This distinction is deliberate and is stated in the training material.

## 14. Records

| Record | Owner | Location | Retention |
|---|---|---|---|
| AI Asset Register | ISM | Asset management tool | 3 years |
| AI Data Inventory and AI data flow diagram | ISM | Document repository | 3 years |
| AI tool requests, assessments and decisions | ISM | Document repository | 3 years |
| Policy acknowledgements and training records | HR Director / Technical Leader | HR records / training log | 3 years |
| AI security concern reports and incident records | ISM | Incident register | 3 years |
| AI objectives measurement | ISM | Measurements workbook | 3 years |

## 15. Validity and document management

Valid from the date of approval by the Director. Reviewed at least annually, and additionally whenever a new class of AI tool is adopted, an AI-related incident indicates a gap, or applicable AI guidance changes. The ISM and Technical Leader is responsible for review; changes follow the ISMS document control process.

---

## Annex A — Employee quick reference guide

**Do**
- Use only tools on the sanctioned list, signed in with your Company account
- Treat every AI output as a draft that you are accountable for
- Mask or remove identifiers before asking for help with data
- Report anything odd, immediately, including your own mistakes

**Never**
- Paste customer data, customer production data, or personal data into an external AI tool
- Paste an API key, password, token or certificate into any AI tool, in any form
- Use a personal AI account or a free tier for Company or customer work
- Merge AI-generated code you cannot explain
- Let an AI tool touch a production system

**When in doubt** → ask the Technical Leader orISM before, not after.
