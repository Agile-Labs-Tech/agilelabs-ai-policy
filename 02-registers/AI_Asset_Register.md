# AI Asset Register

**AGILE LABS PTE. LTD.** · Rev 1.0 · 14 August 2026 · Owner: ISM · Classification: Internal

> **Evidence for CTM 2025 clauses B.9.5, A.3.4(a), A.3.4(c).** Governed by [ISMS-27 Section 2](../01-policies/ISMS-27_AI_Data_Governance_and_Handling_Standard.md) and [ISMS-24 Section 6](../01-policies/ISMS-24_AI_Acceptable_Use_and_Security_Policy.md).
>
> **Any AI tool not in this register is unsanctioned.** Reviewed quarterly by the quarterly AI review.

---

## 1. AI tools

| ID | Name | Vendor | Type | Hosting region | Business purpose | Owner | Max data class | Plan / licence | Trains on our data? | Retention setting | Agentic capability | Config evidence ref | Approved | Last review |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-A01 | Cursor (AI-assisted IDE) | Cursor | AI tool | *[verify]* | Software development assistance for Company and customer projects | Technical Leader | Confidential — Company source code; excluded paths apply | Business | *[verify — expected No, privacy mode enabled]* | *[verify — set to minimum available]* | *[verify — is agent mode available? disabled at workspace level?]* | EV-CONF-01 | *[date]* | *[date]* |
| AI-A02 | *[  ]* | | | | | | | | | | | | | |
| AI-A03 | *[  ]* | | | | | | | | | | | | | |

> **Verification note.** Every bracketed cell above is a claim the auditor will test. "Privacy mode enabled" must be a dated screenshot of the setting, not a recollection. The agentic capability column exists because an unassessed agent mode is the single most likely finding at the next audit — see [ISMS-31 Section 6](../01-policies/ISMS-31_Agentic_AI_Governance_Policy.md).

## 2. AI services and APIs

| ID | Name | Provider | Endpoint / region | Called by | Model + version pinned | Key ref (1Password) | Key scope | Last rotation | Rate / cost limit | Owner | Approved |
|---|---|---|---|---|---|---|---|---|---|---|---|
| AI-S01 | *[none currently / complete]* | | | | | | | | | | |

## 3. Models and artefacts

| ID | Artefact | Source | Licence | Integrity value at acquisition | Contains personal data? | Purpose | Owner | Approved |
|---|---|---|---|---|---|---|---|---|
| AI-M01 | *[none currently — the Company does not train or host models; complete if a third-party artefact is adopted]* | | | | | | | |

## 4. Prompt assets

| ID | Asset | Location (version control) | Applies to | Reviewed in MR? | Owner | Last review |
|---|---|---|---|---|---|---|
| AI-P01 | *[system prompts for delivered AI features — complete per engagement]* | | | | | |

## 5. AI accounts and keys

| ID | Account / key | System | Holder / service | Privilege | MFA | Provisioned | Review | Revocation trigger |
|---|---|---|---|---|---|---|---|---|
| AI-K01 | *[AI tool workspace — admin]* | *[tool]* | Technical Leader | Admin | Yes | *[date]* | Quarterly | Separation, role change |
| AI-K02 | *[AI tool workspace — admin]* | *[tool]* | DevOps Administrator | Admin | Yes | *[date]* | Quarterly | Separation, role change |
| AI-K03 | *[AI tool — member accounts]* | *[tool]* | *[list or reference workspace export]* | Member | Yes | | Quarterly | Separation |

## 6. AI features in existing software

Tools that were not adopted as AI tools but have acquired AI features. **This is the highest-risk category** because the feature arrives by vendor update rather than by a procurement decision, and nobody assesses it.

| ID | Product | AI feature | Enabled? | Assessed? | Data reachable | Decision | Owner | Date |
|---|---|---|---|---|---|---|---|---|
| AI-F01 | *[e.g. Google Workspace]* | *[AI assistant features]* | *[verify]* | *[  ]* | *[  ]* | *[enable / disable / restrict]* | ISM | |
| AI-F02 | *[e.g. Slack]* | *[AI features]* | *[verify]* | *[  ]* | *[  ]* | *[  ]* | ISM | |
| AI-F03 | *[e.g. GitLab]* | *[AI features]* | *[verify]* | *[  ]* | *[  ]* | *[  ]* | ISM | |
| AI-F04 | *[e.g. Trello / Atlassian]* | *[AI features]* | *[verify]* | *[  ]* | *[  ]* | *[  ]* | ISM | |

> **Complete this section before the audit.** Every SaaS product in the Company's stack should be checked for AI features and an explicit enable/disable/restrict decision recorded. An empty section reads as "not checked", which is exactly the gap B.9.5 describes.

## 7. Rejected / prohibited tools

Recording rejections demonstrates the approval process operates, and prevents the same request being re-litigated.

| Tool | Requested by | Date | Reason for rejection | Alternative offered |
|---|---|---|---|---|
| *[example: free-tier consumer GenAI]* | *[  ]* | *[  ]* | Consumer tier trains on submitted content; no enterprise controls | Sanctioned tool AI-A01 |

## 8. Review record

| Date | Reviewed by | Changes made | Next review |
|---|---|---|---|
| *[date]* | quarterly AI review | Initial population | *[+3 months]* |

---

## Completion guidance

| Column | What "done" looks like |
|---|---|
| Hosting region | The actual region from vendor documentation or console — not "cloud" |
| Trains on our data? | Yes/No **plus** the plan tier and setting that makes it so, with a dated screenshot in the evidence folder |
| Retention setting | The configured value, plus whether zero-retention was available |
| Agentic capability | Available / not available; if available, enabled or disabled, and where that is enforced |
| Config evidence ref | A reference to a dated file in the ISMS evidence folder |
| Max data class | One of Public / Internal / Confidential / Customer confidential, consistent with [ISMS-24 Section 7](../01-policies/ISMS-24_AI_Acceptable_Use_and_Security_Policy.md) |
