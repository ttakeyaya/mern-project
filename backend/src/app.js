const express = require('express');
const connectDB = require('./config/mongoDB');
const app = express();

// データベースへの接続
connectDB();

app.get('/', (req, res) => {
  res.send('HI');
});

module.exports = app;
