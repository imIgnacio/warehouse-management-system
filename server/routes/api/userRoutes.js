const User = require('../../models/User');
const router = require('express').Router();
const { isAdmin } = require('../../utils/auth');

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a new User
router.post('/signup', isAdmin, async (req, res) => {
  try {
    const userData = await User.create({
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.email = userData.email;
      req.session.role = userData.role;
      req.session.logged_in = true;

      res.status(200).json({ userData, message: 'New user created!' });
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Log in
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ email: req.body.email });

    if (!userData) res.status(400).json({ message: 'Incorrect credentials' });

    const validPassword = await userData.isCorrectPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect credentials' });
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = userData._id;
      req.session.email = userData.email;
      req.session.role = userData.role;
      req.session.logged_in = true;

      res
        .status(200)
        .json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Log out
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(400).end();
  }
});

module.exports = router;
