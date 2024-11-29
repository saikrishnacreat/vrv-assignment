const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');

// Register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = new User({
    name,
    email,
    password: await bcrypt.hash(password, 10),
  });

  await user.save();
  const token = generateToken(user._id);

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token,
  });
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user._id);

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token,
  });
};

module.exports = { registerUser, loginUser };
