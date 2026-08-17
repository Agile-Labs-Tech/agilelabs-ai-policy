# AI Logging Procedure

**AGILE LABS PTE. LTD.** — ISMS-14 Operating Procedures for Information and Communication Technology

| | | | |
|---|---|---|---|
| **Document number** | ISMS-14 Annex A | **Revision** | 1.0 |
| **Document owner** | Technical Leader | **Issue date** | 14 August 2026 |
| **Classification** | Internal | **Next review** | Annually, or on material change to AI use |
| **Approval chain** | Prepared: Technical Leader · Reviewed: ISM · Approved: Director |  | |

---

## Revision history

| Rev | Date | Prepared by | Change |
|---|---|---|---|
| 1.0 | 14 August 2026 | Technical Leader | New annex to ISMS-14. Establishes the operational procedure for logging AI prompts, outputs and metadata across development, staging/UAT and production. |

## Approval

| Role | Name | Date |
|---|---|---|
| Prepared by — Technical Leader | Wayne Tng | 14 August 2026 |
| Reviewed by — Information Security Manager | Sze Tho ChangSheng | 14 August 2026 |
| Approved by — Director | Liao Zhuli, Sujata | 14 August 2026 |

## 1. Purpose, scope and users

This annex defines the operational procedure for logging AI activity: what is logged in each environment, how logs are handled and protected, how long they are kept, and who decides what is retained in production.

**Scope:** AI capability the Company develops, integrates or delivers, across development, staging/UAT and production environments; and the administrative logs of approved AI tools.

## 2. Logging by environment

| Environment | Prompts and outputs | Metadata | Purpose |
|---|---|---|---|
| **Development** | **Logged in full** | Logged | Validation, debugging, prompt refinement |
| **Staging / UAT** | **Logged in full** | Logged | Validation and test evidence before release |
| **Production** | **Not logged by default.** Content logging only per a documented decision (Section 3) | Logged | Operations, monitoring, incident investigation |

**Metadata**: timestamp, user or session identifier, model and version, request type or feature, tool/function calls made, response status, latency, and token or cost figures. Metadata should not includes prompt or output content.

Full content logging is acceptable in development and staging/UAT because customer production data and personal data are not used in those environments; secrets are never present in prompts in any environment.

## 3. Production logging decision

What is retained in production is decided **before go-live**.

1. The Technical Leader proposes what to log, applying data minimisation: metadata; prompt/output content only where necessary for a stated purpose (e.g. dispute resolution, quality monitoring, incident investigation, regulatory or contractual requirement).
2. Where the system processes customer data, the logging position is agreed with the customer. Where personal data would appear in logged content, the DPO/TL must assesses first.
3. The decision is revisited on material change to the system, and at the annual review.

## 4. Handling and protection of AI logs

1. Logs containing prompt or output content **inherit the classification of that content** and are handled at that classification.
2. Access to AI logs is restricted to the Technical Leader, DevOps Administrator and ISM, and granted to others only for a documented or investigation purpose.
3. Logs content is never pasted into an AI tool or any unsanctioned system.
4. Logs relevant to a suspected incident are preserved immediately and handled as evidence.

## 5. Retention and disposal

| Log type | Retention |
|---|---|
| Development prompt/output logs | Until validation is complete |
| Staging/UAT prompt/output logs | Upon sign-off |
| Production metadata andcontent logs (where approved) | Per the Section 3 decision and the engagement contract |

## 6. Review and monitoring

1. System Monitoring: the Technical Leader reviews for anomalous prompt patterns, error and refusal spikes, unusual tool invocation and unexpected usage or cost.
2. Any findings that are suspicious are raised as incidents; anomalous usage or cost is treated as a potential account compromise.

## 7. Records

| Record | Owner | Retention |
|---|---|---|
| Production logging decision records (Section 3) | Technical Leader | Life of the system |
| Dev and UAT validation log extracts used as test evidence | Technical Leader | 3 years |

---
