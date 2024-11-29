const express = require('express');
const { getUserProfile, getAllUsers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { roleMiddleware } = require('../middleware/roleMiddleware');
const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.get('/admin', protect, roleMiddleware('admin'), getAllUsers);

module.exports = router;
