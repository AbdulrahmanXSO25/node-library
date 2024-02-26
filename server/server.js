const dotenvFilePath = process.env.NODE_ENV === 'dev' ? './env/.env.dev' : './env/.env';
require('dotenv').config({ path: dotenvFilePath });

const app = require('./app');
const http = require('http');

const PORT = process.env.APP_PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});