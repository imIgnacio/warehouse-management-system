module.exports = {
  isAdmin: (req, res, next) => {
    if (req.user.role === 'ROLE_ADMIN') {
      next();
    } else {
      res.status(403).send();
    }
  },
};
