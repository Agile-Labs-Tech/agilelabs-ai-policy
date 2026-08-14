# CIS Benchmark Baseline Mapping — AI Hosts and Endpoints

**AGILE LABS PTE. LTD.** · Rev 1.0 · 14 August 2026 · Owner: DevOps Administrator · Classification: Internal

> **Evidence for CTM 2025 clause A.6.4(a)** — *"Process is not in place on securing configuration per CIS Benchmarks for server and computer used for deploy AI services/application."*
>
> Governed by [ISMS-25 Section 8](../01-policies/ISMS-25_AI_Secure_Configuration_Standard.md).

---

## 1. Scope

| Population | Count | Benchmark | Level |
|---|---|---|---|
| Company-issued macOS endpoints used for AI-assisted development | 17 | CIS Benchmark for macOS | Level 1 |
| AWS instances used for AI workloads or sandboxing | *[verify — 0 or n]* | CIS Benchmark for the Linux distribution + CIS Benchmark for AWS Foundations | Level 1 |
| Customer-managed environments | Per engagement | Customer's own baseline | Per customer |

**Scoping statement.** The Company has no on-premises servers and production runs in customer environments. The in-scope population for A.6.4(a) is therefore the endpoint fleet plus any cloud instance used for AI work. This is a documented scoping position, not an omission — see ISMS-25 Section 8.

## 2. macOS endpoint baseline

Status values: **Implemented** · **Partial** · **Deviation approved** · **Not applicable**

| Ref | CIS control area | Requirement | Implemented setting / mechanism | Status | Evidence ref | Verified by | Date |
|---|---|---|---|---|---|---|---|
| C-01 | Disk encryption | Full-disk encryption enabled on all endpoints | Enforced via endpoint management policy (Sophos Central) | *[  ]* | EV-CIS-01 | | |
| C-02 | Automatic updates | OS and security updates applied within the defined window | Update policy scheduled via endpoint console; verified per ISMS-22 | *[  ]* | EV-CIS-02 | | |
| C-03 | Screen lock | Screen lock within defined idle period; password required on wake | Endpoint policy | *[  ]* | | | |
| C-04 | Host firewall | Firewall enabled, stealth mode, incoming connections restricted | Endpoint policy | *[  ]* | | | |
| C-05 | Malware protection | Real-time scanning enabled; weekly full scan | Sophos Intercept X, per ISMS-23 | *[  ]* | | | |
| C-06 | Application control | Only authorised software installed; AI tools from the sanctioned list only | Authorised Software list; Sophos application control | *[  ]* | | | |
| C-07 | Account management | No shared accounts; standard user for daily work where practical; admin rights controlled | ISMS-01 access control | *[  ]* | | | |
| C-08 | Password / authentication | Minimum 12 characters, complexity, no reuse, MFA on Company services | ISMS-01 Password Control Standards; 1Password | *[  ]* | | | |
| C-09 | Remote access / sharing services | Screen sharing, remote login and file sharing disabled unless required and approved | Endpoint policy | *[  ]* | | | |
| C-10 | Logging and audit | System logging enabled and retained | Sophos Central event log; ISMS-14 retention | *[  ]* | | | |
| C-11 | Time synchronisation | Network time enabled — required for reliable incident timelines | OS default, verified | *[  ]* | | | |
| C-12 | Browser and web protection | Web filtering active, including GenAI category blocking | Sophos Web Filtering; Cloudflare Gateway | *[  ]* | | | |
| C-13 | Backup | Time Machine backup weekly, verified monthly | Per ISMS-14; monthly measurement check | *[  ]* | | | |
| C-14 | AI tool configuration on device | Sanctioned AI tools only; ignore files present; privacy mode on | Per ISMS-25 Section 4 | *[  ]* | | | |

## 3. Cloud instance baseline

Complete only if an AWS instance is used for AI workloads or sandboxing. If none, record "not applicable" with a date and a named verifier — an empty section reads as unchecked.

| Ref | CIS control area | Requirement | Implemented setting / mechanism | Status | Evidence ref | Verified by | Date |
|---|---|---|---|---|---|---|---|
| C-20 | Remote access | No direct SSH exposure to the internet; MFA on administrative access | Access via Cloudflare Tunnel/Access or authenticated bastion, both with MFA | *[  ]* | | | |
| C-21 | Identity and access | Least-privilege IAM roles; no long-lived root credentials; keys rotated | IAM roles; rotation per ISMS-25 Section 5 | *[  ]* | | | |
| C-22 | Network exposure | Security groups least-privilege; reviewed quarterly | Per ISMS-16 quarterly review | *[  ]* | | | |
| C-23 | Host hardening | Hardened image or documented build steps; unnecessary services disabled | *[  ]* | *[  ]* | | | |
| C-24 | Patching | OS and package updates within ISMS-22 timelines | *[  ]* | *[  ]* | | | |
| C-25 | Logging | CloudTrail enabled; instance logs retained per ISMS-14 | *[  ]* | *[  ]* | | | |
| C-26 | Encryption | EBS volumes encrypted; TLS 1.2+ for all service traffic | Per ISMS-09 | *[  ]* | | | |
| C-27 | Sandbox isolation | Disposable container on a dedicated instance for unknown code; no access to Company or customer data | Per the arrangement evidenced at B.13.6 | *[  ]* | | | |

## 4. Deviations

Every deviation requires ISM approval, a compensating control and a review date. **An unrecorded deviation is a non-compliance** (ISMS-25 Section 2.4).

| Ref | Control | Deviation | Justification | Compensating control | Approved by | Date | Review date |
|---|---|---|---|---|---|---|---|
| D-01 | *[  ]* | *[  ]* | *[  ]* | *[  ]* | ISM | | |

## 5. Verification record

| Quarter | Verified by | Endpoints covered | Deviations open | Evidence location | Date |
|---|---|---|---|---|---|
| Q3 2026 | DevOps Administrator | *[ / 17]* | *[  ]* | ISMS evidence folder | *[date]* |

---

## Completion guidance

**The auditor will ask three questions.** Have an answer for each:

1. **"Which benchmark, at which level?"** — Name the benchmark and version, not "CIS". Level 1 is the appropriate choice for a development endpoint fleet; Level 2 would break legitimate developer work. Say so.
2. **"Show me it applied on a device."** — Have one endpoint's configuration report open, with the date visible. The mapping table is the claim; the console export is the evidence.
3. **"What could you not implement, and what did you do instead?"** — A mapping with zero deviations across 14 controls and 17 developer machines will be read as untested. Recording two or three honest deviations with compensating controls is more credible, and is the correct application of ISMS-25 Section 2.4.

**Practical note.** Full CIS macOS Level 1 has considerably more controls than the 14 listed here. This table selects the controls that materially bear on AI use and on the CTM clause. If the Company adopts the full benchmark later, extend the table rather than replacing it — and state in Section 1 that the table is a mapped subset, so the scope of the claim is honest.
