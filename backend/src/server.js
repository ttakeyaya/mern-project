const http = require('http');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = require('./app');
const server = http.createServer(app);

async function start() {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start();
