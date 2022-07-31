const User = require('../../models/User');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { authMiddleware } = require('../../utils/auth');
const { config } = require('../../config/config');

// Get all users
router.get('/', authMiddleware, async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete users. Only for Admins
router.delete('/:userId', authMiddleware, async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndDelete({ _id: userId });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a new User. Only for Admins
router.post('/signup', authMiddleware, async (req, res) => {
  try {
    const userData = await User.create({
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });

    res.status(200).json({ userData, message: 'New user created!' });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Log in
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ email: req.body.email });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect credentials' });
      return;
    }

    const validPassword = await userData.isCorrectPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect credentials' });
      return;
    }

    const payload = {
      sub: userData._id,
      role: userData.role,
    };

    const token = jwt.sign(payload, config.jwtSecret);

    res
      .status(200)
      .header('Authorization', `Bearer ${token}`)
      .cookie('jwt', token)
      .json({
        message: 'You are now logged in!',
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
