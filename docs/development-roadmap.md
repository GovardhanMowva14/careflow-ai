# CareFlow AI — Development Roadmap

## Phase 1 — Foundation (current)

- [x] Monorepo structure (frontend, backend, docs, CI)
- [x] FastAPI health and info endpoints
- [x] React landing page with backend connectivity indicator
- [x] Pytest, Ruff, ESLint, TypeScript checks, GitHub Actions CI

## Phase 2 — Synthetic healthcare data

- [ ] Sample FHIR R4 Patient, Practitioner, ServiceRequest, Coverage resources
- [ ] Read-only FHIR API routes backed by JSON files
- [ ] Frontend views for browsing synthetic records

## Phase 3 — Data layer

- [ ] PostgreSQL schema for referrals and coordination tasks
- [ ] pgvector for knowledge snippets and retrieval experiments
- [ ] Docker Compose for local database

## Phase 4 — Agentic workflows

- [ ] LangGraph orchestration for referral triage and scheduling assistance
- [ ] Local or free-tier LLM adapters with explicit mock mode
- [ ] Human-in-the-loop approval steps

## Phase 5 — Enterprise integration

- [ ] ServiceNow Personal Developer Instance integration
- [ ] Case creation and status sync (synthetic scenarios)
- [ ] Audit logging and workflow documentation

## Phase 6 — Hardening

- [ ] Expanded test coverage and contract tests
- [ ] Containerized deployment manifests
- [ ] Observability (structured logs, metrics hooks)

Each phase should remain runnable locally without paid cloud services unless explicitly optional.
