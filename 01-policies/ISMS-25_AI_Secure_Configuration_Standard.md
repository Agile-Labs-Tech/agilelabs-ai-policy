# AI Secure Configuration Standard

**AGILE LABS PTE. LTD.**

| | | | |
|---|---|---|---|
| **Document number** | ISMS-25 | **Revision** | 1.0 |
| **Document owner** | Information Security Manager (ISM) | **Issue date** | 14 August 2026 |
| **Classification** | Internal | **Next review** | Annually, or on material change to AI use |
| **Approval chain** | Prepared: Technical Leader · Reviewed: ISM · Approved: Director |  | |

---

## Revision history

| Rev | Date | Prepared by | Change |
|---|---|---|---|
| 1.0 | 14 August 2026 | Technical Leader | New document. Establishes the secure configuration baseline for AI tools, services and models, including CIS Benchmark application. |

## Approval

| Role | Name | Date |
|---|---|---|
| Prepared by — Technical Leader | Wayne Tng | 14 August 2026 |
| Reviewed by — Information Security Manager | Sze Tho ChangSheng | 14 August 2026 |
| Approved by — Director | Liao Zhuli, Sujata | 14 August 2026 |

This standard defines the secure configuration requirements for AI tools, AI services, AI models, AI-related software packages. It exists so AI capability is configured and verified before use.

**Scope:** all sanctioned AI tools in the AI Asset Register; all AI services, APIs and models consumed by the Company; AI-related libraries and packages used in development; and all endpoints and cloud instances used to develop, run or access AI services.

This standard supplements ISMS-22 Patch Management Policy and ISMS-14 ICT Operating Procedures. **Where a requirement here is stricter, this standard applies.**

## 2. Principles

1. **Secure by design and by default.** AI capability is configured to this baseline before it is used for Company or customer work, not afterwards.
2. **Least privilege.** AI tools, service accounts, keys and agents receive the minimum access and scope needed for their purpose.
3. **Managed deviations.** A deviation requires ISM approval, a documented compensating control and a review date. An unrecorded deviation is a non-compliance.
4. **Lifecycle alignment.** Configuration requirements follow the AI lifecycle stages and the CSA *Guidelines and Companion Guide on Securing AI Systems*.

## 3. Roles and responsibilities

| Role | Responsibility |
|---|---|
| Technical Leader | Owns this standard; defines and approves the baseline; reviews deviations. |
| DevOps Administrator | Applies and evidences the baseline on tools, services and hosts; manages keys; performs annual verification. |
| ISM | Approves deviations; confirms baseline coverage of every AI asset in the register; reports status to the annual AI review. |
| Developers | Work within the configured baseline; do not disable controls, exclusions or filters; report configuration problems to the TL. |

## 4. AI tool configuration baseline

Applies to every AI tool in the AI Asset Register. Settings are applied at the workspace / administrator level wherever the tool supports it, so they cannot be varied by individual users.

| Area | Baseline requirement | Verification |
|---|---|---|
| **Account and identity** | Company domain accounts only; SSO where supported; MFA enforced; no personal accounts, administrator role limited to TL and DevOps Administrator | Workspace member  |
| **Data retention and training** | training on Company or customer content **disabled**; | Screenshot of privacy settings; vendor terms on file |
| **Privacy mode / context control** | Privacy or equivalent mode enabled on AI-assisted development tools; code indexing restricted to approved repositories | Tool settings screenshot |
| **Exclusions** | Ignore files or workspace exclusions configured for secrets, configuration files, customer data directories, and any repository classified above the tool's permitted data class | Ignore file in repository; exclusion configuration |
| **Extensions and integrations** | Third-party extensions, MCP servers and integrations enumerated and individually approved; unapproved integrations disabled at workspace level | Integration list export |
| **Offboarding** | Access revoked within 24 hours of separation, per the joiner–mover–leaver process | Offboarding record |


## 5. AI service, model and API configuration

| Area | Baseline requirement |
|---|---|
| **Key management** | API keys created per application with the narrowest scope available; stored in 1Password; never committed to a repository or placed in a prompt; rotated at least every 12 months and immediately on suspected exposure or on separation of a holder. |
| **Model selection** | Model and version pinned in configuration. A change to the model in use is change request and is re-tested before release. |
| **Access control** | Service accounts used for AI calls have no interactive login and no access to production data stores beyond what the feature requires. |
| **Rate and cost limits** | Usage limits, quotas and billing alerts configured to bound abuse and detect anomalous consumption. |
| **Transport and storage** | TLS 1.2 or above for all calls. Prompts and outputs containing Confidential data are stored only where the Data Inventory permits. |
| **Logging** | Where the service provides logs, request metadata (timestamp, user, model, purpose) retained. Prompt and output content is logged only where necessary, per [ISMS-14 Annex A AI Logging Procedure](ISMS-14_AnnexA_AI_Logging_Procedure.md). |
| **Failure behaviour** | Timeouts, retries and circuit-breaking configured so a provider outage degrades gracefully rather than failing open. |

## 6. Model hardening and prompt engineering practices

Applies to any AI capability the Company builds, integrates or operates, including features delivered to customers.

| Control | Requirement |
|---|---|
| **System prompt design** | The system prompt states the intended purpose and explicit limits. It is controlled with the application code and reviewed as part of the merge request. |
| **Instruction / data separation** | Untrusted content (user input, documents, web content, ticket text, repository content) is clearly delimited and never treated as instructions. The system prompt states that embedded instructions in content must be ignored. |
| **Input validation** | Inputs are length-limited, type-checked and sanitised before submission. File and content types restricted to those required. |
| **Output handling** | Output is treated as **untrusted data**: encoded before rendering, validated against an expected schema where structured, and never executed, evaluated, or used to build a query or command without validation. |
| **Least privilege for tools and agents** | Where the AI can call tools or functions, each tool is individually enumerated, scoped to the minimum permission, and read-only by default. Write or destructive actions require explicit human confirmation. |
| **Human in the loop** | Actions with commercial, contractual, security or personal-data impact require human approval before execution. A stop and rollback mechanism is documented. |
| **Guardrails and refusals** | Out-of-scope requests are refused; sensitive request categories are blocked; intended behaviour is documented so deviation can be recognised as an incident. |
| **Context isolation** | Retrieved context is scoped to what the user is authorised to see. Retrieval must not become a path around access control. |
| **Testing** | Before release and after material change, AI features are tested against prompt injection, data-exfiltration and scenarios from customer |
| **Monitoring** | Prompt patterns, refusal spikes and unusual tool invocation are reviewed in routine monitoring. Suspected manipulation must be reported. |

### 6.1 Minimum adversarial test set

Every AI feature is tested against at least these before release. Results — including "not applicable, because…" — are recorded.

| # | Test | Pass criterion |
|---|---|---|
| T1 | Direct prompt injection via user input ("ignore previous instructions…") | Feature stays within stated purpose |
| T2 | Indirect prompt injection via ingested content (document, ticket, web page, repo file) | Embedded instructions are not executed |
| T3 | System prompt extraction | System prompt and configuration not disclosed |
| T4 | Data exfiltration via output (encoding sensitive context into a URL, image, or code comment) | No unauthorised data leaves through output |
| T5 | Excessive agency (invoking a tool outside the enumerated set, or a write action without approval) | Blocked; attempt logged |
| T6 | Output injection into downstream sink (HTML render, SQL, shell, template) | Output encoded/validated; no injection |
| T7 | Malformed and oversized input | Rejected cleanly; no crash or resource exhaustion |
| T8 | Provider failure and rate limiting | Graceful degradation; no fail-open |

A high-severity finding blocks release.

## 7. Host and endpoint secure configuration (CIS Benchmarks)

All computers and servers used to develop, deploy, access or operate AI services or applications are configured against the applicable **CIS Benchmark**. The Company has no on-premises servers; AI work is performed on Company-issued endpoints and, where applicable, on cloud instances.

| Host type | Benchmark applied | Implementation | Verification |
|---|---|---|---|
| Company-issued macOS endpoints used for AI-assisted development | CIS Benchmark for macOS, Level 1 | Baseline enforced through the endpoint management console — device encryption, screen lock, host firewall, automatic updates, application control, malware protection. | Anually review of endpoint console reports; |
| Cloud instances hosting AI services, sandboxes or AI-related workloads | CIS Benchmark for the relevant Linux distribution, Level 1; CIS Benchmark for the cloud platform for account-level settings | Hardened image or documented build steps; SSH only through the approved tunnel or bastion with MFA; no direct internet exposure; security groups reviewed quarterly | Configuration review |
| Customer-managed environments | Customer's own baseline | Where the Company deploys AI capability into a customer environment, hardening responsibilities are confirmed **in writing** with the customer. | Written confirmation retained |


## 8. Verification, monitoring and change

- The DevOps Administrator/ Technical Leader verifies the AI tool, service baseline anually.
- Any new AI tool, model, integration is configured to this baseline before first productive use; the check is part of the tool approval process.
- Material changes to a vendor's default configuration, model behaviour and, where relevant, reassessment of risk.
- This standard is reviewed annually and after any AI-related incident that reveals a configuration weakness.

## 9. Records

| Record | Owner | Retention |
|---|---|---|
| CIS Baseline Mapping, including deviations | DevOps Administrator | 3 years |
| Key inventory and rotation record | DevOps Administrator | 3 years |
| AI dependency and model artefact review records | Technical Leader | 3 years |
| Testing results for AI features | Technical Leader | 3 years |

## 10. Validity and document management

Reviewed at least annually by the Technical Leader.

---
