const mongoose = require('mongoose');

const cardSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    question: {
      type: String,
      required: [true, '問題を入力してください'],
    },
    answer: {
      type: String,
      required: [true, '答えを入力してください'],
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Card', cardSchema);
