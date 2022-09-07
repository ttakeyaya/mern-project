const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

/**
 * 認可用
 */
const auth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      //ヘッダーよりトークンを取得する
      token = req.headers.authorization.split(' ')[1];
      // jsonwebtokenを利用し、トークンを調べる
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // トークンをキーにしてユーザ情報を取得する
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized');
    }
  }

  // トークンが存在しないケース
  if (!token) {
    res.status(404);
    throw new Error('認証失敗しました');
  }
};

module.exports = auth;
