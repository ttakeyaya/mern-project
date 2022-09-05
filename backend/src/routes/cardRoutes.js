const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  getCards,
  createCard,
  deleteCard,
  updateCard,
} = require('../controllers/cardController');

router.get('/', auth, getCards);
router.post('/', auth, createCard);
router.delete('/:id', auth, deleteCard);
router.put('/:id', auth, updateCard);

module.exports = router;
