const express = require('express');
const auth = require('../middleware/authMiddleware');
const {
  registerUser,
  loginUser,
  getProfile,
} = require('../controllers/userController');

const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/profile', auth, getProfile);

module.exports = router;
