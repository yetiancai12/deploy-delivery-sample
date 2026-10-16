# Delivery Document (English)
## 1. Deploy steps (Render)
1. Push repo to GitHub (main branch).
2. Render Dashboard → New → Blueprint → select repo; `render.yaml` is detected.
3. Review env vars (see `.env.example`; set them in `render.yaml` or the dashboard — Render does not read `.env` from the repo), click Apply.
4. Wait for build; verify `https://<service>.onrender.com/healthz` returns `{"status":"ok"}`.
5. (Optional) Settings → Custom Domains; HTTPS is automatic.
Zeabur alternative: New Project → Deploy from GitHub → pick repo; it auto-detects the Dockerfile; set PORT/GREETING variables.
Local run: `node --env-file=.env src/server.js` (Node 20.6+) or `PORT=3000 GREETING=Hi node src/server.js`; `.env` is never auto-loaded.
Auto-deploy: `render.yaml` sets `autoDeployTrigger: checksPass` (options: `commit` | `checksPass` | `off`).
## 2. Rollback
- Render: service → Events/Deploys → pick last good deploy → "Rollback".
- Git: `git revert <sha> && git push` (CI re-runs; with `autoDeployTrigger: checksPass` Render deploys once checks pass).
- After rollback, check `/healthz` and that `version` matches expectation.
## 3. Monitoring
- Health check path `/healthz` is configured in render.yaml; Render restarts unhealthy instances.
- Logs: structured JSON on stdout (Render Logs tab).
- Recommended: free external uptime monitor (e.g. UptimeRobot) on `/healthz`, 5-min interval, email alert.
- Note: Render free plan spins down when idle; first request may be slow.
## 4. Handover checklist
- [ ] Repo access transferred / client added as admin
- [ ] Render workspace ownership or invite confirmed
- [ ] Env vars documented and client holds all secrets
- [ ] Custom domain / DNS records documented
- [ ] CI passing on main
- [ ] Rollback demonstrated once
- [ ] Monitoring alert recipient set
- [ ] Support window and scope of changes agreed
