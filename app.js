const express = require('express');
const cors = require('cors');

const contactsRouter = require('./app/routes/contact.route');
const ApiError = require('./app/api-error');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactsRouter);

app.use((req, res, next) => {
  return next(new ApiError(404, 'Resource Not Found'));
});

app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    error: err.message || 'Internal server error',
  });
});

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Contact Book application',
  });
});

module.exports = app;
