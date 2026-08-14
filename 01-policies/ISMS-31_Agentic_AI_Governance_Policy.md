# Agentic AI Governance Policy

**AGILE LABS PTE. LTD.**

| | | | |
|---|---|---|---|
| **Document number** | ISMS-31 | **Revision** | 1.0 |
| **Document owner** | Information Security Manager (ISM) | **Issue date** | 14 August 2026 |
| **Classification** | Internal | **Next review** | Annually, or on adoption of any agentic capability |
| **Approval chain** | Prepared: Technical Leader · Reviewed: ISM · Approved: Director |  | |

---


## Revision history

| Rev | Date | Prepared by | Change |
|---|---|---|---|
| 1.0 | 14 August 2026 | Technical Leader | New document. Establishes governance for agentic AI on the four dimensions of the IMDA Model AI Governance Framework for Agentic AI v1.5, with hard boundaries, an approval process and six-monthly review. |

## Approval

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared by — Technical Leader | Wayne Tng | | |
| Reviewed by — Information Security Manager | Sze Tho ChangSheng | | |
| Approved by — Director | Liao Zhuli, Sujata | | |
## 1. Purpose and scope

An **agentic AI system** is one that can plan and take actions autonomously — invoking tools, calling APIs, executing code, reading and writing data, or operating over multiple steps toward a goal without a human approving each step.

The distinction that matters is not how capable the model is. It is **whether the system can act**.

**Scope:** any agentic capability the Company uses internally, builds into a customer deliverable, or integrates from a third party. This includes:

- AI coding tools operating in autonomous or "agent" modes that edit files, run commands or open merge requests;
- AI features that call tools, functions or external APIs on a user's behalf;
- multi-agent arrangements where AI components invoke one another;
- third-party agents, plugins, MCP servers or extensions integrated into Company tooling;
- workflow automation driven by an AI decision rather than a deterministic rule.

## 2. The default position

> **Agentic capability is off by default.** It requires Technical Leader approval.

## 3. Governance structure

The Company adopts the four dimensions of the IMDA Model AI Governance Framework for Agentic AI as the structure of its agentic controls.

### 3.1 Dimension 1 — Assess and bound risks upfront

| Element | Requirement |
|---|---|
| **Action space** | Every action the agent can take is enumerated explicitly. |
| **Reversibility** | Each action is classified Reversible / Recoverable with effort / Irreversible. |
| **Autonomy level** | Suggest only / Act with approval / Act then notify / Fully autonomous. |
| **Bounding measures** | The specific limits applied — scopes, allowlists, rate limits, environment restrictions, spend caps, time limits. |
| **Systemic and multi-agent risk** | Where agents interact, whether an error can cascade or amplify between them. |

**Hard boundaries** — not subject to case-by-case approval:

1. No agent acts on a **customer production system**.
2. No agent holds **production credentials** or long-lived privileged keys.
3. No agent **moves money**, executes a financial transaction, or commits the Company contractually.
4. No agent **sends external communication** — email, message, ticket comment to a customer — without human approval of the content.
5. No agent **deletes data** outside a scratch or sandbox environment.
6. No agent **grants, modifies or escalates access** for itself or anyone else.
7. No agent operates on **personal data** without a DPO-approved.

### 3.2 Dimension 2 — Enabling meaningfully human accountability

| Requirement | Implementation |
|---|---|
| **Named accountable owner** per agentic capability | Recorded in the AI Asset Register. |
| **Human approval checkpoints** for high-stakes or irreversible actions | Enforced technically via review.
| **Automation bias monitored** | Override and rejection rates, and approval response times. |
| **Stop mechanism** | Every agentic needs to be able to halt it immediately, and and allow rollback. |

### 3.3 Dimension 3 — Implement technical controls and processes


| Stage | Agentic controls |
|---|---|
| **Design** | Enumerate tools individually; least privilege per tool; read-only by default; separate agent identity; define the approval and isolate the execution environment. |
| **Development** | System prompt states purpose and hard limits; untrusted content delimited and never treated as instruction; tool outputs validated before being fed back to the model; secrets never in agent context; agent code. |
| **Pre-deployment** | Testing per ISMS-25 Section 6.1, test the stop mechanism; test failure and partial-completion behaviour; test the approval gate cannot be bypassed. |
| **Deployment** | Gradual rollout — sandbox, then internal low-stakes, then scoped production use. Spend and rate caps live before first use. |
| **Operations** | Continuous monitoring for anomalous tool use, loops, and cost. |
| **Change** | Any change to the tool set, permissions, model or system prompt is a change requiring re-assessment and re-test |
| **End of life** | Revoke agent identity and credentials; remove integrations; archive logs and configuration for explainability. |

**Third-party agents, plugins and MCP servers** are supply chain (ISMS-29 Section 1). Each is individually approved, its permissions enumerated, its source and integrity verified, and its updates treated as changes. An agent that can install or invoke arbitrary further tools is not approved.

### 3.4 Dimension 4 — Enable end-user responsibility

| Example |
|---|
| Users are told what the agent can do, what data it can reach, and what it cannot do |
| Users know how to stop it and how to escalate |
| Users know they remain accountable for the outcome |
| Users can contest or override an agent action |


## 4. Incident handling

Agentic-specific first response, in order:

1. **Stop the agent** using the documented stop mechanism.
2. **Revoke the agent's identity and credentials** — separately from any human user's.
3. **Enumerate what it did**, from the action log, not from the model's own account of what it did.
4. **Assess reversibility** of each action taken and reverse what can be reversed.
5. **Quarantine the triggering content** where injection is suspected, so it is not re-ingested.

## 5. Records

| Record | Owner | Retention |
|---|---|---|
| Adversarial test results | Technical Leader | 3 years |
| Yearly reviews | ISM | 3 years |

---
