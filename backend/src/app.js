const express = require('express');
const connectDB = require('./DB/mongoDB');
const app = express();
const { errorHandler } = require('./middleware/errorMiddleware');

// Connect to MongoDB
connectDB();

// middleware for parsing json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/cards', require('./routes/cardRoutes'));

// middleware for handling error
app.use(errorHandler);
// app.get('/', (req, res) => {
//   res.send('launch the app');
// });

module.exports = app;
