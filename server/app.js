const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./src/routes/booksRoute');
const cors = require('cors');
const responseFormatter = require('./src/middlewares/responseFormatterMiddleware');
const apiRateLimit = require('./src/middlewares/rateLimitMiddleware');
const { sequelize } = require('./src/config')

sequelize.sync({ force: false, alter: true })
.then(() => {
    console.log('Database synced');
})
.catch((err) => {
    console.error('Failed to sync database:', err);
});

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(responseFormatter);

app.use(apiRateLimit);

app.use('/api/books', booksRouter);

app.use((req, res) => {
    res.sendError('Not Found', 404);
});

module.exports = app;