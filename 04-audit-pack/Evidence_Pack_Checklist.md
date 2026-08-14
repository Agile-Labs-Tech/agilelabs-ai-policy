# Evidence Pack Checklist — AI Pillar Verification Audit

**AGILE LABS PTE. LTD.** · Rev 1.0 · 14 August 2026 · Owner: ISM · Classification: Internal

**Audit:** CTM 2025 special/verification audit, AI Security pillar · **17–18 August 2026** · Lead auditor: Phang Mui Foong
**Opening:** 17 Aug, 09:30 · **Closing:** 18 Aug, 17:00 · **Company representative:** Sze Tho ChangSheng

> **Three days out.** The documents are drafted. What is missing is the *evidence that the controls operated*. This checklist is ordered by what closes findings fastest.

---

## 1. Critical path — must exist before 17 August

These four items close findings that **no document alone can close**. If time is short, do these first.

| # | Item | Closes | Owner | Time needed | Done |
|---|---|---|---|---|---|
| **1** | **Director signs the AI document set**; entries added to the ISMS document register | B.2.4 + every other finding | Director / ISM | 1 hour | ☐ |
| **2** | **AI security briefing delivered**; attendance, quiz results and signed acknowledgements collected | B.1.3, B.2.3, A.4.4(j) | ISM / HR Director | 1 hour + collection | ☐ |
| **3** | **AI incident tabletop exercise run**; record completed | **B.21.4** | ISM | 90 min | ☐ |
| **4** | **First quarterly AI review meeting held**; minutes recorded | **B.2.3** | ISM | 45 min | ☐ |

> Finding B.21.4 is about the **exercise**, not the plan. A documented scenario with no exercise record leaves it open. Same logic for B.2.3 and the quarterly AI review.

## 2. Registers to populate with real values

| # | Item | Closes | Owner | Done |
|---|---|---|---|---|
| 5 | [AI Asset Register](../02-registers/AI_Asset_Register.md) — **every bracketed cell replaced with a verified value**, including Section 6 AI features in existing software | B.9.5, A.3.4(a), A.3.4(c) | ISM | ☐ |
| 6 | [AI Data Inventory](../02-registers/AI_Data_Inventory.md) — all rows complete across **all 7 lifecycle stages**, merged into the Company Data Inventory | A.3.4(a), B.9.6, B.9.7 | ISM | ☐ |
| 7 | [AI Data Flow](../02-registers/AI_Data_Flow.md) — verified against actual tool behaviour | B.9.6 | Technical Leader | ☐ |
| 8 | [AI Legal Register](../02-registers/AI_Legal_and_Regulatory_Register.md) — merged into the Company Register, **reviewed and approved with a date** | B.5.1 | ISM / CEO | ☐ |
| 9 | [AI Risk Register](../02-registers/AI_Risk_Register.md) — ratings assessed by owners, residuals filled, merged into RA-RTP workbook | B.3.5, B.3.6 | ISM | ☐ |
| 10 | [CIS Baseline Mapping](../02-registers/CIS_Baseline_Mapping.md) — completed for the 17 endpoints, deviations approved | A.6.4(a) | DevOps Admin | ☐ |
| 11 | [AI Objectives register](../02-registers/AI_Objectives_and_Measures.md) — Q3 2026 baseline results recorded | B.1.6 | ISM | ☐ |

## 3. Configuration evidence — dated August 2026

Screenshots and exports. **Every one must show a visible date.** Store in the ISMS evidence folder with the reference used in the registers.

| Ref | Evidence | Closes | Done |
|---|---|---|---|
| EV-CONF-01 | AI tool privacy settings — training disabled, retention at minimum | A.3.4(d), B.12.4 | ☐ |
| EV-CONF-02 | AI tool workspace member and role export — SSO/MFA enforced, admins limited | A.3.4(c) | ☐ |
| EV-CONF-03 | Privacy mode / context control setting on the AI-assisted IDE | B.12.8, A.3.4(d) | ☐ |
| EV-CONF-04 | Ignore file / workspace exclusion configuration in a repository | A.3.4(d), B.9.7 | ☐ |
| EV-CONF-05 | Web filter GenAI category configuration + sample block events | A.3.4(d) | ☐ |
| EV-CONF-06 | Agent mode availability and status in the AI-assisted IDE | ISMS-31 Section 6 | ☐ |
| EV-CONF-07 | Vendor terms for the plan tier in use, dated | B.17.4, A.3.4(c) | ☐ |
| EV-CIS-01…n | Endpoint management console reports for the CIS controls | A.6.4(a) | ☐ |
| EV-KEY-01 | Key inventory and last rotation dates | A.3.4(c), B.12.4 | ☐ |

## 4. Process records

| # | Item | Closes | Done |
|---|---|---|---|
| 12 | ISMS-07 **revision-bumped** to reference Annex A, in the document register | B.14.3 | ☐ |
| 13 | ISMS-13 **revision-bumped** to reference Annex A, with PDPC criteria cross-referenced | B.21.6, AFI-1 | ☐ |
| 14 | Stage-gate record for at least one project under the AI SDLC | B.14.3 | ☐ |
| 15 | Sample merge requests showing peer review + SonarQube gate on AI-assisted code | B.14.3, AI-6 | ☐ |
| 16 | Adversarial test record, or a recorded "no AI feature released this period" position | B.12.8 | ☐ |
| 17 | AI supplier assessment for the AI-assisted IDE (Tier 1) | B.17.4, B.17.5 | ☐ |
| 18 | Data classification guideline updated with the inheritance rule | B.9.5 | ☐ |
| 19 | Internal audit checklist updated with CTM AI clauses | AFI-4 | ☐ |
| 20 | Management review minute recording AI objectives and AI security status | B.1.6, B.1.5 | ☐ |
| 21 | Quarterly AI security best-practice post in the ISMS Slack channel | B.2.3 | ☐ |
| 22 | [CAR Register](CAR_Register_AI_Pillar.md) completed with owners, dates and status; submitted to ISOCert | All | ☐ |

---

## 5. Session-by-session readiness

### 17 August, 10:00–12:30 — Governance, Policies, Risk, Strategy, Compliance, Training, A1 People

**Open on screen:** AIMS-00 · AIMS-01 · ISMS-24 · ISMS-28 · ISMS-30
**Records:** AI Objectives register (with Q3 results) · AI review record · acknowledgement log · training deck + attendance + quiz results · Register of Legal Requirements (merged, dated approval) · RA-RTP workbook with AI rows · management review minute

*Likely questions:* Who owns AI security? Show me the objectives and this year's result. Show me the AI review happened and who took part. Show me an employee acknowledged the policy. Show me where AI law appears in your legal register.

### 17 August, 13:30–17:30 — Assets, Data, System Security, Secure Config, Updates, Anti-virus

**Open on screen:** ISMS-24 · ISMS-25 · ISMS-27
**Records:** AI Asset Register · AI Data Inventory · AI Data Flow · CIS Baseline Mapping · configuration evidence pack (EV-CONF-*) · web filter configuration

*Likely questions:* What AI tools are in use — all of them? Show me the setting that stops the vendor training on your code. Walk me through the data flow for a prompt. Where does training data live? Show me CIS applied on one machine. What could you not implement?

### 18 August, 09:30–12:30 — Secure SDLC, Access Control, Threat Management, Third Party

**Open on screen:** ISMS-07 Annex A · ISMS-29 · ISMS-31
**Records:** stage-gate record · merge request samples · adversarial test record · AI supplier assessment · key inventory · workspace access export

*Likely questions:* Show me the AI SDLC applied to a real project. How do you know AI-generated code was reviewed? Who assessed your AI vendor? What happens when the vendor changes the model? Can any of your AI tools take actions?

### 18 August, 13:30–17:00 — Vulnerability Assessment, Network, Incident Response

**Open on screen:** ISMS-13 Annex A · ISMS-13 (revised)
**Records:** **AI incident exercise record** · incident register · PDPC notification criteria cross-reference

*Likely questions:* Show me you exercised an AI scenario. Who decides whether to notify the PDPC, and on what criteria? What would you do in the first hour if code went into a consumer AI tool?

---

## 6. AI incident exercise record

*Template for critical-path item 3. Complete during the exercise, not after.*

| Field | Content |
|---|---|
| **Exercise date** | |
| **Facilitator** | Information Security Manager |
| **Participants** (name and role) | |
| **Scenario** | A developer under delivery pressure pastes a customer specification containing personal data and a live API key into an AI assistant. Discovered two days later during code review. *(ISMS-13 Annex A categories AI-1 + AI-4)* |
| **Objectives** | Test detection and reporting · triage and severity assignment · containment including key rotation and vendor-side deletion · the PDPC notification assessment · customer notification · recovery |
| **Injects / timeline** | |
| **Detection — how identified, how long?** | |
| **Containment actions taken** | |
| **Notification assessment** — PDPA criteria applied, decision and rationale | |
| **Customer notification decision** | |
| **Observations — what worked** | |
| **Gaps identified** | |
| **Corrective actions** (action, owner, due date) | |
| **Documents updated as a result** | |
| **Reported to** | the Director at management review |
| **Record completed by / date** | |

> **Run it properly.** Ninety minutes, everyone in a room, timed against the procedure. An exercise record that shows a gap found and an action raised is *stronger* evidence than one that shows everything went perfectly — it demonstrates the exercise was real.

## 7. Acknowledgement log

*Template for critical-path item 2. Target: 100% of active staff (objective AI-3).*

| # | Name | Role / dept | Briefing attended | Quiz completed | Quiz result | Policy acknowledged | Method | Recorded by |
|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | HR Director |
| 2 | | | | | | | | |
| … | | | | | | | | |

*(19 rows for the current headcount.)*

---

## 8. Honest positions to prepare

Rehearse these. An auditor respects a clear, documented position far more than an evasive answer — and each of these is a question that will be asked.

| Question | Position | Where it is documented |
|---|---|---|
| "Do you train AI models?" | No. No foundation model training, no purchased training data. Where a customer trains, the data and environment are theirs. | AIMS-00 Section 2.2; AI Data Flow Section 3 |
| "Where are your AI servers?" | None. No on-premises servers. AI work happens on 17 managed endpoints and in customer environments. CIS scope is the endpoint fleet. | ISMS-25 Section 8 |
| "What about the EU AI Act?" | Assessed as not applicable — no AI system placed on the EU market. Assessment recorded and reviewed annually. | AI Legal Register Section 2 |
| "Do you use agentic AI?" | *[Verify before answering.]* If an agent mode exists in the IDE and is not disabled, say so and show the assessment in progress. **Do not claim it is not in use without checking.** | ISMS-31 Section 6 |
| "Only one AI tool?" | *[Verify.]* Check every SaaS product for AI features — the AI Asset Register Section 6 exists for this. An unchecked "yes, only one" is the answer most likely to be disproved on the spot. | AI Asset Register Section 6 |
| "Is the comprehensive data management policy done?" | No. ISMS-27 covers AI data; the Company-wide policy (AFI-2) is scheduled. | CAR Register Section 3 |
| "Was the DR exercise done?" | Not yet (AFI-3). It is scheduled and outside the AI pillar. | CAR Register Section 3 |
