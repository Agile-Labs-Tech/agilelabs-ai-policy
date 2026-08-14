# AI Data Governance and Handling Standard

**AGILE LABS PTE. LTD.**

| | | | |
|---|---|---|---|
| **Document number** | ISMS-27 | **Revision** | 1.0 |
| **Document owner** | Information Security Manager (ISM) | **Issue date** | 14 August 2026 |
| **Classification** | Internal | **Next review** | Annually, or on material change to AI use |
| **Approval chain** | Prepared: Technical Leader · Reviewed: ISM · Approved: Director |  | |


---

## Revision history

| Rev | Date | Prepared by | Change |
|---|---|---|---|
| 1.0 | 14 August 2026 | Technical Leader | New document. Establishes AI asset classification, the AI data lifecycle, data flow mapping, provenance, integrity and secure handling of AI input, model and output, closing CTM 2025 findings B.9.5, B.9.6, B.9.7 and A.3.4(a). |

## Approval

| Role | Name | Date |
|---|---|---|
| Prepared by — Technical Leader | Wayne Tng | 14 August 2026 |
| Reviewed by — Information Security Manager | Sze Tho ChangSheng | 14 August 2026 |
| Approved by — Director | Liao Zhuli, Sujata | 14 August 2026 |

## 1. Purpose, scope and users

This standard establishes how data associated with AI systems is **classified, inventoried, mapped, handled, protected and disposed of** across its full lifecycle — collection, input, processing, output, storage, retention and destruction.

**Scope:** every data element that touches an AI system in scope of AIMS-00 Section 2.4 — prompts, uploaded files, source code, retrieved context, embeddings and vector stores, model artefacts, generated output, and AI tool logs.

This standard extends the existing *Data Classification of Agile Lab Pte Ltd* guideline and the Data Inventory. **Where a rule here is stricter, this standard applies**.

## 2. AI asset classification

### 2.1 What counts as an AI asset

| Asset type | Examples |
|---|---|
| **AI tool** | AI-assisted IDE, AI assistant, AI feature inside a SaaS product |
| **AI service / API** | Hosted model endpoint called by Company code |
| **Prompt asset** | System prompts, prompt templates |
| **Context store** | Vector database, retrieval index, cached context |
| **AI account / key** | Workspace accounts, API keys, service credentials |
| **AI data** | Input, output, logs |


### 2.2 Classification of AI assets

AI assets take the classification of the highest-classified data they can reach — not the data they typically handle. An AI tool with access to a Confidential repository is a Confidential asset even if most sessions involve Internal code.

| Class | AI asset examples | Handling |
|---|---|---|
| **Public** | Published prompt examples, public model documentation | No restriction |
| **Internal** | AI tool configuration, sanctioned tool list, generic prompt templates | Company accounts only |
| **Confidential** | System prompts for delivered features, AI tool workspaces with source code access, embeddings derived from Company code, AI usage logs containing prompt content | Access on least privilege; not shared externally without approval |
| **Customer confidential** | Any AI asset holding or reaching customer material | Only within the arrangement documented in the contract and the AI Asset Register |

### 2.3 The inheritance rule

This is the single most important rule in this standard, and the one most often broken in practice. Three consequences follow, and all three are enforced:

1. Output generated from Confidential source code is **Confidential**. It is not "just a suggestion from a tool" and must not be pasted into a ticket, chat, email or another AI tool that is not cleared for Confidential.
2. Embeddings and vector indexes derived from Confidential material are **Confidential**. Embeddings are not anonymisation.
3. A summary of Confidential material is **Confidential**. Reducing volume does not reduce classification.

## 3. AI data lifecycle

Every AI data element is recorded in the [AI Data Inventory](../02-registers/AI_Data_Inventory.md) across all seven stages.

| Stage | What is recorded | Controls |
|---|---|---|
| **1. Collection / source** | Where the data originates; whether the Company has the right to use it for this purpose | Provenance recorded (Section 5); customer permission checked where applicable |
| **2. Input / prompt** | What is submitted to the AI system, and its classification | ISMS-24 Section 7 permitted-data table; exclusions and ignore files; secret scanning |
| **3. Processing** | Which AI system processes it, under which vendor terms | Sanctioned tools only; training opt-out; |
| **4. Output** | What is returned and where it goes | Inheritance rule in Section 2.3; human review; output treated as untrusted |
| **5. Storage** | Where input, context and output come to rest | Encrypted at rest; stored only where the Data Inventory permits |
| **6. Retention** | How long the Company keeps it, and how long the vendor keeps it | Company retention per the Data Inventory; vendor retention set to minimum available. |
| **7. Disposal** | How it is destroyed, and how destruction is confirmed | Vendor-side deletion requested and confirmation retained where available |


## 4. Data flow mapping

The Company maintains an AI data flow diagram and a step narrative showing, for every AI asset: input and prompt sources, retrieval and context sources, the model or provider used, output destinations, storage, retention, **and where the Agile Labs boundary ends and the customer boundary begins**.

- Maintained in [AI_Data_Flow.md](../02-registers/AI_Data_Flow.md).
- Reviewed at least annually, and on any change to an AI tool, model, integration or customer arrangement.

## 5. Data provenance

| Provenance field | Why |
|---|---|
| Source | Establishes chain of custody |
| Licence and permitted use | Prevents IP and licensing breach |
| Integrity value (checksum or signature) at acquisition | Detects tampering and substitution |
| Whether it contains personal data | Triggers DPO assessment |
| Whether the Company has the right to use it for the stated purpose | Prevents use of data acquired for a different purpose |
| Approval and approver | Accountability |


## 6. Data integrity

| Control | Requirement |
|---|---|
| Input integrity | Inputs validated and sanitised before submission. Content from untrusted sources is delimited and never treated as instruction. |
| Context integrity | Retrieval sources are approved and access-scoped.. |
| Model integrity | Model and version pinned; artefact checksums verified; unexpected model change treated as an incident. |
| Output integrity | Output validated against expected schema where structured; never executed or used to build a query or command without validation. |
| Record integrity | Model version, prompt version and configuration recorded at release so past behaviour can be reproduced during investigation. |
| Transmission integrity | TLS 1.2+ for all AI service calls. |

## 7. Secure handling rules by position

### 7.1 Data input

- Only data classes permitted by ISMS-24 Section 7 may be submitted.
- Minimise: submit the least data that answers the question. Prefer a description over a paste, a redacted sample over a live extract.
- Mask or remove direct identifiers before submission where personal data is unavoidable and DPO/Technical Leader approved.
- Secrets never enter a prompt, in any form, including inside pasted code and configuration.
- Excluded paths and ignore files prevent restricted content entering tool context automatically. Disabling an exclusion is a change requiring TL approval.

### 7.2 AI model

- Only sanctioned models and versions, from approved providers.
- Model artefacts verified for provenance and integrity before use.
- Model change treated as a change, re-tested per ISMS-25 Section 6.1 before release.

### 7.3 Data output

- Output inherits classification (Section 2.3) and is handled at that classification.
- Output is reviewed by a competent person before use.
- Output is treated as untrusted data.
- Output stored only where the Data Inventory permits.

### 7.4 AI logs and telemetry

AI tool logs frequently contain prompt content and therefore inherit its classification. Where the Company controls the logging, prompt and output content is logged only where necessary, classified accordingly, access-restricted. Where the vendor controls the logging, the retention setting is recorded in the AI Asset Register.

## 8. Personal data in AI systems

1. Personal data is **prohibited** as input to external AI tools (ISMS-24 Section 7). Where a business purpose makes it unavoidable, it must be anonymised or masked first and the use case approved by the DPO or Technical Leader.
2. Where an AI feature processes personal data in a customer environment, the PDPC Advisory Guidelines on Use of Personal Data in AI Recommendation and Decision Systems are considered at Stage 1 of the AI SDLC, and the assessment is recorded.
3. The Company's role — organisation or data intermediary — is established per engagement..
4. Personal data used with AI is recorded in the Data Inventory with purpose, lawful basis, retention and disposal, like any other personal data.
5. AI must not be the sole basis for a decision affecting an individual.

## 9. Retention and disposal

| Data | Company retention | Disposal method |
|---|---|---|
| AI prompts and inputs (not otherwise retained) | Not stored by the Company beyond the session unless required | n/a |
| AI-generated code merged into a repository | Per project retention | Repository deletion per requested |
| Embeddings and context indexes | Life of the feature | Index deletion and confirmation |
| Model artefacts | Life of the feature | Secure deletion |
| AI incident evidence packs | 3 years | Secure deletion|

**On retirement of an AI tool or capability**: revoke keys and accounts, remove integrations, request vendor-side deletion of Company content, retain the deletion confirmation where the vendor provides one, and record disposal.

## 10. Roles and responsibilities

| Role | Responsibility |
|---|---|
| ISM | Owns this standard, the AI Asset Register and the AI Data Inventory; approves classification decisions in dispute. |
| Technical Leader | Owns provenance and integrity records for models, artefacts and prompt assets; owns the data flow diagram content. |
| DevOps Administrator | Implements storage, encryption, retention and deletion controls. |
| DPO (HR Director) | Approves any personal data use case involving AI; owns notification assessment. |
| Data owners | Confirm classification of their data when it is proposed for AI use. |
| All staff | Apply Section 7 in daily use. |

## 11. Verification

| Check | Frequency | Owner | Evidence |
|---|---|---|---|
| AI Asset Register accuracy against tools actually in use | Anually | ISM | Reviewed register with date |
| AI Data Inventory completeness across all 7 lifecycle stages | Annually | ISM | Reviewed inventory |
| Data flow diagram matches actual behaviour | Annually and on change | Technical Leader | Reviewed diagram |
| Vendor retention settings still at minimum | Annually | DevOps Administrator | Dated screenshots |
| Provenance records complete for all model artefacts | Annually | Technical Leader | Register |

## 12. Records

| Record | Owner | Retention |
|---|---|---|
| AI Asset Register | ISM | 3 years |
| AI Data Inventory | ISM | 3 years |
| AI data flow diagram and step narrative | ISM | 3 years |
| Provenance and integrity records | Technical Leader | 3 years |
| Classification decisions and DPO approvals | ISM / DPO | 3 years |
| Disposal and vendor deletion confirmations | Technical Leader | 3 years |

## 13. Validity and document management

Reviewed at least annually and on material change to AI use.

---
