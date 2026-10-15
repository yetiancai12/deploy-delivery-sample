# 交付文档(中文)
## 1. 部署步骤(Render)
1. 将代码推送到 GitHub main 分支。
2. Render 控制台 → New → Blueprint → 选择仓库,自动识别 `render.yaml`。
3. 核对环境变量(见 `.env.example`),点击 Apply。
4. 等待构建完成,访问 `https://<服务名>.onrender.com/healthz`,应返回 `{"status":"ok"}`。
5. (可选)Settings → Custom Domains 绑定域名,HTTPS 自动签发。
Zeabur 方案:New Project → 从 GitHub 部署 → 选仓库,自动识别 Dockerfile;设置 PORT/GREETING 变量。
## 2. 回滚
- Render:服务 → Deploys → 选择上一个正常版本 → Rollback。
- Git:`git revert <sha> && git push`(CI 重跑,自动部署)。
- 回滚后检查 `/healthz`,确认 `version` 符合预期。
## 3. 监控
- render.yaml 已配置健康检查 `/healthz`,实例不健康会被自动重启。
- 日志:stdout 结构化 JSON(Render Logs 页)。
- 建议:用免费外部探活(如 UptimeRobot)每 5 分钟检查 `/healthz`,邮件告警。
- 注意:Render 免费套餐空闲会休眠,首次请求较慢。
## 4. 交接清单
- [ ] 仓库权限已转移 / 客户为管理员
- [ ] Render 工作区所有权或邀请已确认
- [ ] 环境变量已文档化,密钥由客户持有
- [ ] 域名/DNS 记录已记录
- [ ] main 分支 CI 通过
- [ ] 已演示一次回滚
- [ ] 监控告警接收人已设置
- [ ] 已约定支持期与变更范围
