const { mongoose } = require('./db');
const cors = require('cors');
const express = require('express');
const userRoute = require('./routes/user.route');
const categoryRoute = require('./routes/category.route');
const bookRoute = require('./routes/category.route');
const { login } = require('./utils/middleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/users', userRoute);
app.use('/categories', login, categoryRoute, bookRoute);

module.exports = { app, mongoose };
