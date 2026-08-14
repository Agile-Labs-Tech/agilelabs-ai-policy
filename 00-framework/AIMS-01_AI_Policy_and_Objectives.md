# AI Policy and Objectives

**AGILE LABS PTE. LTD.**

| | | | |
|---|---|---|---|
| **Document number** | AIMS-01 | **Revision** | 1.0 |
| **Document owner** | Information Security Manager (ISM) | **Issue date** | 14 August 2026 |
| **Classification** | Internal | **Next review** | Annually, or on material change to AI use |
| **Approval chain** | Prepared: Technical Leader · Reviewed: ISM · Approved: Director |  | |

---

## Revision history

| Rev | Date | Prepared by | Change |
|---|---|---|---|
| 1.0 | 14 August 2026 | Technical Leader | New document. Establishes the AI policy statement and eight measurable AI security objectives, closing CTM 2025 finding B.1.6. |

## Approval

| Role | Name | Date |
|---|---|---|
| Prepared by — Technical Leader | Wayne Tng | 14 August 2026 |
| Reviewed by — Information Security Manager | Sze Tho ChangSheng | 14 August 2026 |
| Approved by — Director | Liao Zhuli, Sujata | 14 August 2026 |

## 1. AI Policy statement

Agile Labs uses artificial intelligence (AI) to build software better and faster for its customers. It does so on terms that keep customer information confidential, keep the Company accountable for what it delivers, and keep AI within the boundaries of its intended purpose.

The Company therefore commits to the following:

1. **AI is used deliberately, not by default.** Only AI tools that have been assessed, approved and recorded in the AI Asset Register may be used for Company or customer work.
2. **Customer and personal data does not leave the Company's control through an AI tool.** Data placed into an AI system is bounded by classification rules that are written down, taught, and enforced technically wherever enforcement is possible.
3. **A person remains accountable for every AI output that is used.** AI output is a draft. The employee who uses it, and the reviewer who approves it, own the result — not the tool and not the vendor.
4. **AI systems are used only for their intended purpose.** Each AI capability has a purpose and limits, and behaviour outside those limits is treated as an incident.
5. **The Company is transparent with customers about AI use.** Where AI materially contributes to a deliverable, the customer's contractual position is checked and, where required, disclosure is made.
6. **AI governance follows guidelines.** The IMDA/PDPC Model AI Governance Framework family and the CSA Guidelines on Securing AI Systems are the Company's reference points.

This policy is approved by the Director, communicated to all staff, and reviewed at least annually.

## 2. Scope

Applies to all employees, directors, and third parties granted access to Company systems, information or customer environments.

## 3. AI security objectives


| Ref | Objective | Measure | Target | Frequency | Owner |
|---|---|---|---|---|---|
| **AI-1** | AI is used only through tools that have been assessed and approved | % of AI tools in active use that are recorded in the AI Asset Register and approved | 100% | Annually | ISM |
| **AI-2** | No confidential, personal or customer production data is exposed to AI systems | Number of confirmed data-leakage incidents involving AI tools | 0 | Annually | ISM |
| **AI-3** | All staff understand and accept the rules for AI use | % of active staff with a signed acknowledgement of ISMS-24 within 30 days of issue or joining | 100% | Annually and on hire | HR Director |
| **AI-4** | AI-related risks are identified and treated | AI risk scenarios reviewed and treatment status updated in the CS Risk Assessment | Reviewed at least annually | Annually | ISM |
| **AI-5** | The Company can detect and respond to AI-specific incidents | AI incident scenario exercised, recorded and actions closed | ≥1 exercise per year | Annually | ISM |
| **AI-6** | AI output is subject to human review before use | % of merge requests containing AI-assisted code that were peer-reviewed and passed the security quality gate | 100% | Annually | Technical Leader |
| **AI-7** | AI tools run on a verified secure configuration | % of AI assets in the register with configuration evidence dated within the current review period | 100% | Annually | DevOps Administrator |
| **AI-8** | AI capability behaves within its intended purpose | Number of AI features released without a recorded adversarial test result | 0 | Per release | Technical Leader |


### 3.1 Escalation on missed targets

| Condition | Action |
|---|---|
| Any objective misses target at the annual measurement | ISM records the cause and a dated corrective action in the management review record |
| Any objective misses target in two consecutive years | Raised as an non-conformity with a remediation plan approved by the Director |
| Any confirmed leakage incident | Immediate escalation to the Director; post-incident review; policy and training reviewed |
| An AI incident or audit finding indicates an objective is off-track | Measured out of cycle rather than waiting for the annual point |


## 4. Relationship to information security objectives

These AI objectives are additional to, and consistent with, the information security objectives in ISMS-01. Where an AI objective and an information security objective address the same risk, the stricter applies.

## 5. Communication

| Audience | Method | Frequency |
|---|---|---|
| All staff | AI security briefing; ISMS Slack channel; | On issue, then at least annually |
| New joiners | Induction pack, with acknowledgement | On hire |
| Director / management review | AI section of the management review record | Annually |
| Customers | On request, and where contractually required | As required |

## 6. Records

| Record | Owner | Retention |
|---|---|---|
| Approved AI policy and revisions | ISM | 3 years |
| AI objective measurements | ISM | 3 years |
| Management review minute approving objectives | ISM | 3 years |
| Staff acknowledgements | HR Director | 3 years |

---
