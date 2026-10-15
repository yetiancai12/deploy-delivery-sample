const { createServer } = require('./app');
const port = Number(process.env.PORT) || 3000;
const server = createServer().listen(port, '0.0.0.0', () => console.log(JSON.stringify({ level: 'info', msg: 'listening', port })));
process.on('SIGTERM', () => server.close(() => process.exit(0)));
