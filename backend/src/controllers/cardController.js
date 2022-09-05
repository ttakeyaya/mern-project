const User = require('../models/userModel');
const Card = require('../models/cardModel');

/**
 *
 * @route GET /api/cards
 * @access private
 */
const getCards = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const cards = await Card.find({ user: req.user.id });

  res.status(200).json(cards);
};

/**
 * @route POST /api/cards
 * @access private
 */
const createCard = async (req, res) => {
  const { question, answer, description } = req.body;

  if (!question || !answer) {
    res.status(400);
    throw new Error('問題と答えを入力してください');
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('該当するユーザーが見つかりません');
  }

  const card = await Card.create({
    question,
    answer,
    description,
    user: req.user.id,
  });
  res.status(201).json(card);
};

/**
 * @route DELETE /api/cards/:id
 * @access private
 */
const deleteCard = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('該当するユーザーが見つかりません');
  }
  const card = await Card.findById(req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error('カードが見つかりません');
  }

  if (card.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('認可されていません');
  }

  await card.remove();
  res.status(200).json({ success: true });
};

/**
 *
 * @route PUT /api/cards/:id
 * @access private
 */
const updateCard = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('該当するユーザーが見つかりません');
  }

  const card = await Card.findById(req.params.id);

  if (!card) {
    res.status(404);
    throw new Error('該当するカードが見当たりません');
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('認可されていません');
  }

  const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(updatedCard);
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  updateCard,
};
