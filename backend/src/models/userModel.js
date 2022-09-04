const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, '名前を入力してください'],
    },
    email: {
      type: String,
      require: [true, 'メールアドレスを入力してください'],
      unique: true,
    },
    password: {
      type: String,
      require: [true, 'パスワードを入力してください'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
