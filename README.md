# deploy-ready-sample
Zero-dependency Node 20 service used as a reference deliverable of the Deploy-Ready Pack.
Endpoints: `GET /` , `GET /healthz`.

## Run locally
```
cp .env.example .env
npm test
PORT=3000 npm start
curl localhost:3000/healthz
```
Docker: `docker build -t deploy-ready-sample . && docker run -p 3000:3000 deploy-ready-sample`

## Deploy (Render)
See docs/DELIVERY.en.md (English) / docs/DELIVERY.zh.md (中文).
