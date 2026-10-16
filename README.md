# deploy-ready-sample
Zero-dependency Node 20 service used as a reference deliverable of the Deploy-Ready Pack.
Endpoints: `GET /` , `GET /healthz`.

## Run locally
```
npm test
# Option A: plain environment variables
PORT=3000 GREETING="Hello" npm start
# Option B: load a .env file (Node 20.6+). The app does NOT read .env by itself.
cp .env.example .env
node --env-file=.env src/server.js
# then, in another terminal:
curl localhost:3000/healthz
```
Note: `.env` is not loaded automatically; `npm start` uses only variables already in your shell. On Render, set variables in `render.yaml` / the dashboard instead.
Docker: `docker build -t deploy-ready-sample . && docker run -p 3000:3000 deploy-ready-sample`

## Deploy (Render)
`render.yaml` uses `autoDeployTrigger: checksPass`, so Render deploys only after the GitHub Actions CI checks pass on the linked branch.
See docs/DELIVERY.en.md (English) / docs/DELIVERY.zh.md (中文).

Status: tested locally (`npm test`, `/healthz`). Docker image build and live Render deployment have not been verified.
