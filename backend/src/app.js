const express = require('express');
const connectDB = require('./DB/mongoDB');
const app = express();

// Connect to MongoDB
connectDB();

//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', require('./routes/userRoutes'));

app.get('/', (req, res) => {
  res.send('HI');
});

module.exports = app;
