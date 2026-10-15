const test = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../src/app');
test('endpoints', async () => {
  const s = createServer().listen(0);
  const base = `http://127.0.0.1:${s.address().port}`;
  try {
    let r = await fetch(base + '/healthz'); assert.equal(r.status, 200); assert.equal((await r.json()).status, 'ok');
    r = await fetch(base + '/'); assert.equal(r.status, 200);
    r = await fetch(base + '/nope'); assert.equal(r.status, 404);
  } finally { s.close(); }
});
