const http = require('http');
const started = Date.now();
const VERSION = process.env.APP_VERSION || require('../package.json').version;

function send(res, code, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(code, { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) });
  res.end(body);
}

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, 'http://x');
    if (req.method === 'GET' && url.pathname === '/') {
      return send(res, 200, { service: 'deploy-ready-sample', message: process.env.GREETING || 'Hello from the Deploy-Ready Pack', version: VERSION });
    }
    if (req.method === 'GET' && url.pathname === '/healthz') {
      return send(res, 200, { status: 'ok', uptime_s: Math.round((Date.now() - started) / 1000), version: VERSION });
    }
    send(res, 404, { error: 'not_found' });
  });
}
module.exports = { createServer };
