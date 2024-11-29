const User = require('../models/User');

// Get user profile
const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

// Get all users (for admin)
const getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

module.exports = { getUserProfile, getAllUsers };
