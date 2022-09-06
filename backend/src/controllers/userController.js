const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');

/**
 * Description
 *  Register a new user
 * Route
 * /api/users
 *
 * TODO
 *  -コントローラーに新規ロジックが含まれているのでリファクタリングする
 */
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // 検証
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('フィールドを記入してください');
  }
  // ユーザーがDBに存在しているかどうか取得
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    //　特定のユーザーが登録しているかを知らせないためにメッセージ曖昧にした。
    throw new Error('ユーザー情報が間違っています。');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // 新規ユーザーの作成
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('ユーザー情報が間違っています。');
  }
});

/**
 * Route /api/login
 */
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // ユーザーの存在確認
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('入力情報が間違っています');
  }
});

//Route /api/users/profile
const getProfile = asyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
  };
  res.status(200).json(user);
});

//
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '10d' });
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
};
