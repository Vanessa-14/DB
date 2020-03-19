/* jshint esversion: 8 */
const express = require('express');
const app = express();

app.use('/customers', require('./customers/customers'));

module.exports = app;