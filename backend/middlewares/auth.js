const jwt = require('jsonwebtoken');
const ErrorUnauthorized = require('../errors/errorUnauthorized');
const { NODE_ENV, JWT_SECRET } = require('../constants/constants');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new ErrorUnauthorized('Вы не авторизовались.');
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'secret');
  } catch (err) {
    next(new ErrorUnauthorized('Вы не авторизовались.'));
  }
  req.user = payload;

  next();
};
