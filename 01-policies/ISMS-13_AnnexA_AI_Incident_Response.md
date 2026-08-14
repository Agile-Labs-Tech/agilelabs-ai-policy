# AI Incident Response

**AGILE LABS PTE. LTD.** — ISMS-13 Incident Management Procedure

| | | | |
|---|---|---|---|
| **Document number** | ISMS-13 Annex A | **Revision** | 1.0 |
| **Document owner** | Information Security Manager (ISM) | **Issue date** | 14 August 2026 |
| **Classification** | Internal | **Next review** | Annually, after any AI incident, and after each AI incident exercise |
| **Approval chain** | Prepared: Technical Leader · Reviewed: ISM · Approved: Director |  | |

---

## Revision history

| Rev | Date | Prepared by | Change |
|---|---|---|---|
| 1.0 | 14 August 2026 | Technical Leader | Extension to ISMS-13. Integrates AI-specific incident categories, response tasks, escalation, PDPC notification criteria and the annual AI incident exercise. |

## Approval

| Role | Name | Date |
|---|---|---|
| Prepared by — Technical Leader | Wayne Tng | 14 August 2026 |
| Reviewed by — Information Security Manager | Sze Tho ChangSheng | 14 August 2026 |
| Approved by — Director | Liao Zhuli, Sujata | 14 August 2026 |
## 1. Purpose, scope and users

This annex **integrates** AI-specific incident response into the Incident Management Procedure (ISMS-13). It defines what counts as an AI incident, how AI incidents are detected, contained, investigated and reported.

The existing incident lifecycle, severity model, Emergency Response Team and escalation path in ISMS-13 continue to apply. This annex adds the AI-specific content.

**Scope:** incidents involving AI tools used by the Company, AI services and models consumed by the Company, AI capability delivered to customers.

## 2. AI incident categories

| # | Category | Examples | Initial severity guide |
|---|---|---|---|
| **AI-1** | **Data exposure through an AI tool** | Confidential code, customer data or personal data pasted into or ingested by an AI service; sensitive repository indexed by an AI tool; output containing confidential content shared externally | High — **Critical** if personal or customer data |
| **AI-2** | **Prompt injection or instruction manipulation** | Instructions embedded in a document, ticket, web page or repository cause an AI tool or feature to act outside its intended purpose, disclose its context, or call tools it should not | Medium — High if data or actions affected |
| **AI-3** | **Excessive or unintended agency** | An AI feature or agent performs an unauthorised action — modifies data, calls an API, sends a message, changes configuration | **High** (escalated to Technical Leader and Director) |
| **AI-4** | **AI account, key or workspace compromise** | AI service API key leaked or abused; unauthorised access to an AI workspace; anomalous usage or cost spike | High |
| **AI-5** | **AI compromise** | Malicious or backdoored AI package, model artefact or extension; compromised AI vendor; tampered dependency introduced through AI-suggested code; unexpected model substitution | High — **Critical** if in production |
| **AI-6** | **Harmful, incorrect or infringing output released** | Materially incorrect AI output relied upon in a deliverable; generated code reproducing licensed third-party material; output causing customer impact | Medium — High |
| **AI-7** | **AI service failure or degradation** | Provider outage, model deprecation, rate limiting or latency affecting a delivered service | By business impact per BIA |
| **AI-8** | **Vendor-notified AI incident** | AI provider notifies a breach, vulnerability or unauthorised data use affecting Company or customer content | Assess on notification |

## 3. Detection and reporting

| Source | Detail |
|---|---|
| **Staff reports** | **The primary detection source.** Any employee who suspects an AI incident reports it immediately to the Technical Leader and ISM to raises an incident in the incident management tool. |
| Endpoint and web filtering alerts | Attempts to reach unsanctioned AI services, blocked categories, malware detections |
| AI tool administrative and usage reports | Unexpected members, anomalous usage or cost, disabled security settings |
| Application monitoring | Error and refusal spikes, unusual tool invocation patterns, malformed input volumes in AI-enabled features |
| Code review and scanning | Secrets, suspicious dependencies or unexpected network calls found in AI-assisted code |
| Vendor and external notification | Provider status pages, security bulletins, customer reports |


## 4. Response process

| Phase | AI-specific tasks |
|---|---|
| **Identify and triage** | Establish which AI tool, model version, account and data classes were involved, and whether personal data or customer data is in scope. **Preserve the prompt, retrieved context, output, timestamps and session or request identifiers before anything is deleted.** |
| **Contain** | Suspend the affected AI tool, workspace, integration or feature. Revoke or rotate affected API keys and sessions as needed. Disable the offending agent capability or tool permission. Remove affected content from the tool where deletion is supported, and request vendor-side deletion. Where an injected instruction is suspected, **quarantine the source content so it is not re-ingested**. |
| **Eradicate** | Remove or remediate the root cause: malicious package or artefact, exposed secret, over-permissive tool scope, missing exclusion, misconfigured retention setting, weak system prompt, missing output validation. Re-test the corrected behaviour. |
| **Recover** | Restore the service or feature under change control, with corrected configuration and, where relevant, a pinned known-good model or package version. **Confirm monitoring is in place before resuming normal use.** |
| **Review** | Post-incident review and monitoring |

### 4.1 Post-incident review — Sample AI questions

1. Was the tool sanctioned? If not, why was it available?
2. Was the data class permitted for that tool?
3. Did the configuration baseline hold, or had a setting drifted?
4. Did human oversight operate — and if it operated, why did it not catch this?
5. Would the current test set have caught this? If not, add the case.
6. How long between occurrence and detection, and what would have shortened it?
7. Did the person report promptly, and if not, what discouraged them?

## 5. Escalation, roles and communication

| Role | Responsibility in an AI incident |
|---|---|
| **ISM (AI Security Officer)** | Incident owner: triage, severity, coordination, decision to escalate, reporting to Director |
| **Technical Leader** | Technical investigation of the AI feature, prompts, model behaviour, code and dependencies; remediation and retest |
| **DevOps Administrator** | Containment: key rotation, access revocation, configuration change, log and evidence collection |
| **DPO (HR Director)** | Personal data impact assessment and notification obligations; individual notification content |
| **Director** | Approves external communication, regulator notification and customer notification; provides resources |
| **Emergency Response Team** | Activated where business continuity is affected, including AI service outage impacting a delivered system |


## 6. Regulatory, customer and external notification

### 6.1 Personal data breaches — PDPC

Where an AI incident involves personal data, the DPO assesses whether it is a **notifiable data breach** under the Personal Data Protection Act. A data breach is notifiable where it:

- **results in, or is likely to result in, significant harm** to the affected individuals; **or**
- **is of significant scale** — affecting **500 or more individuals**.

| Requirement | Timeline | Responsible |
|---|---|---|
| Assess whether the breach is notifiable, expeditiously | Within **30 calendar days** of becoming aware of the breach | DPO with ISM |
| Notify the PDPC once assessed as notifiable | No later than **3 calendar days** after the assessment | DPO, approved by Director |
| Notify affected individuals where significant harm is likely | **As soon as practicable**, at the same time as or after notifying the PDPC, unless an exception applies | DPO, approved by Director |
| Notify the customer where the Company acts as data intermediary | **Without undue delay**, and within any contractual timeline — check the agreement, which may be shorter | ISM |

**Data intermediary position.** Where the Company acts on behalf of a customer, the customer is responsible for notifying the PDPC as the organisation; the Company notifies the customer without undue delay and supports their assessment. This does not remove the Company's own obligations where it is the organisation in respect of the data. The Company's role is established per engagement agreement.

### 6.2 Other notifications

- **Sector-specific obligations** of the affected customer (for example financial sector requirements) are checked against the contract and the Register of Legal, Regulation and Contractual Requirements before communication.
- **All external communication is approved by the Director.** Staff must not discuss an incident externally — **including inside AI tools**, which is a route to disclosure that did not exist before.

## 7. Evidence and investigation

**Evidence to preserve at the earliest opportunity:** prompt and input content; retrieved context; output; tool and model version; account and session identifiers; timestamps; configuration state; API usage logs; endpoint and web filtering logs; merge requests and deployment records;.

- Evidence containing Confidential or personal data is stored and handled at the classification of its content, with access restricted to the investigation team.
- Root cause analysis and considers whether the cause was **human** (data placed in a tool), **configuration** (baseline not applied), **design** (missing validation or excessive permission), **supply chain**, or **vendor**.
- Where an agent is involved, its actions are established from the action log, **not from the model's own account of what it did**.

## 8. AI incident exercises

At least one AI incident scenario is exercised each year as part of the Company's cyber exercise programme, in addition to the existing scenarios for cyber attack, human-related and natural disaster events, and the cloud provider failure scenario.

| Element | Requirement |
|---|---|
| **Frequency** | At least annually; additionally after a significant change to AI use |
| **Participants** | ISM, Technical Leader, DevOps Administrator, DPO, and the Director or a management representative |
| **Suggested scenario** | A developer under delivery pressure pastes a customer specification containing personal data and a live API key into an AI assistant; discovered two days later during code review. |
| **Conduct** | Tabletop walkthrough of detection, triage, containment, notification decision and recovery. |
| **Output** | Exercise record: date, participants, scenario, decisions taken, observations, gaps identified, corrective actions with owners and dates |
| **Follow-up** | Actions tracked to closure by the ISM and reported to the Director at management review |


## 9. Records

| Record | Owner | Retention |
|---|---|---|
| AI incident reports and incident register entries | ISM | 3 years |
| Evidence packs collected during investigation | ISM | 3 years |
| Notification assessments and regulator or customer correspondence | DPO | 3 years |
| Post-incident review reports | ISM | 3 years |
| AI incident exercise records | ISM | 3 years |

## 10. Validity and document management

This annex forms part of ISMS-13 Incident Management Procedure and is approved and revised with it. Reviewed at least annually, after any AI incident, and after each AI incident exercise.

---
