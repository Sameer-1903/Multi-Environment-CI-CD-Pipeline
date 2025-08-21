# Multi-Environment CI/CD Pipeline — Starter Monorepo

This is a from-scratch starter you can push to GitHub and extend. It includes:
- **frontend/**: React app (Vite) with Dockerfile
- **backend/**: Node.js + Express API with Dockerfile
- **docker-compose.yml**: Local dev for frontend, backend, and PostgreSQL
- **deploy/helm/**: Helm charts for frontend, backend, and a PostgreSQL subchart
- **.github/workflows/**: CI, CD to dev, CD to prod (with manual approval)
- **infra/terraform/**: EKS skeleton using community modules (fill in variables / credentials)

> Replace `YOUR_DOCKERHUB_USERNAME` (or ECR registry path) and `YOUR_REGISTRY` placeholders.
> For EKS, configure AWS credentials and Terraform backend as needed.

## Quick Start (Local)
```bash
# 1) Copy env files (edit as needed)
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# 2) Build images & start services
docker compose up --build

# 3) Visit:
#    Frontend: http://localhost:5173
#    Backend:  http://localhost:8080/api/health
#    Postgres: localhost:5432 (user: app, pass: app, db: appdb)
```

## Build & Run Individually
```bash
# Frontend (dev)
cd frontend
npm i
npm run dev

# Backend (dev)
cd backend
npm i
npm run dev
```

## Kubernetes (Helm) — Dev values
```bash
# Set your kube-context to dev cluster first
kubectl config use-context your-dev-context

# Create namespace (first time only)
kubectl create ns app || true

# Install/upgrade
helm upgrade --install app ./deploy/helm/app -n app -f deploy/helm/values-dev.yaml
```

## GitHub Actions
- `.github/workflows/ci.yml` — Lint, test, build, scan, push images
- `.github/workflows/cd-dev.yml` — Auto-deploy to dev on push to `dev`
- `.github/workflows/cd-prod.yml` — Manual prod deploy with blue/green + smoke tests

## Monitoring
See `monitoring/README.md` for Prometheus + Grafana via Helm chart.
