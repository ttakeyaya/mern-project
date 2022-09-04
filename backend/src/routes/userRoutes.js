const express = require('express');
const {
  registerUser,
  loginUser,
  getProfile,
} = require('../controllers/userController');

const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);

module.exports = router;
