# CareFlow AI

Agentic AI-powered healthcare **patient referral and care coordination** platform (personal portfolio project).

Phase 1 delivers a production-style **monorepo foundation**: React frontend, FastAPI backend, tests, linting, and GitHub Actions CI. The app uses **synthetic data only**, runs locally without paid services, and **does not claim HIPAA compliance**.

## Technology stack

| Layer | Technologies |
|-------|----------------|
| Frontend | React, TypeScript, Vite, Tailwind CSS |
| Backend | Python 3.12+, FastAPI, Pydantic |
| Testing | Pytest, Vitest, Testing Library |
| Quality | Ruff, ESLint, TypeScript |
| DevOps | GitHub Actions (CI) |

Planned later phases: LangGraph, HL7 FHIR R4 (synthetic), PostgreSQL + pgvector, ServiceNow Personal Developer Instance.

## Prerequisites

- **Python** 3.12 or newer (3.13 tested locally)
- **Node.js** 20+ (22 LTS recommended)
- **npm** 10+
- **Git**

## Project structure

```text
careflow-ai/
├── frontend/          # React SPA
├── backend/           # FastAPI application
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── models/
│   │   └── services/
│   └── tests/
├── docs/
├── data/synthetic/
├── scripts/
├── .github/workflows/
├── .env.example
└── README.md
```

## Quick start

### 1. Clone and configure environment

```powershell
git clone https://github.com/GovardhanMowva14/careflow-ai.git
cd careflow-ai
Copy-Item .env.example .env
Copy-Item frontend\.env.example frontend\.env
```

Adjust values in `.env` and `frontend/.env` if you change ports or hostnames.

### 2. Backend

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

API documentation: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

| Endpoint | Description |
|----------|-------------|
| `GET /api/v1/health` | Service health (`status`, `service`) |
| `GET /api/v1/info` | Application name, version, description |

### 3. Frontend

In a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). The header badge shows **Connected** when the backend health check succeeds.

## Development commands

### Backend (`backend/`)

| Command | Purpose |
|---------|---------|
| `pytest -q` | Run API tests |
| `ruff check app tests` | Lint |
| `ruff format app tests` | Format |
| `uvicorn app.main:app --reload` | Dev server |

### Frontend (`frontend/`)

| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |
| `npm run test` | Vitest unit tests |

## Architecture

See [docs/architecture.md](docs/architecture.md) for diagrams, module boundaries, and future extension points.

## Roadmap

See [docs/development-roadmap.md](docs/development-roadmap.md) for phased delivery plans.

## Security and data

- Do not commit `.env`, secrets, or real patient data.
- Use only synthetic FHIR and mock integrations in future phases.
- This repository is for learning and demonstration, not clinical production use.

## License

MIT — see [LICENSE](LICENSE).
