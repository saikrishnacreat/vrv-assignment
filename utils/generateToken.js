const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: '30d', // Token expires in 30 days
  });
};

module.exports = generateToken;
