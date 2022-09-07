const express = require('express');
const connectDB = require('./DB/mongoDB');
const path = require('path');
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

// Reactアプリ
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(__dirname, '../../', 'frontend', 'build', 'index.html')
  );
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Flash Card App' });
  });
}

// middleware for handling error
app.use(errorHandler);

module.exports = app;
