const jwt = require('jsonwebtoken');
const { config } = require('../config/config');

module.exports = {
  authMiddleware: function (req, res, next) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return res.sendStatus(400);
    }

    try {
      const payload = jwt.verify(token, config.jwtSecret);

      if (payload.role === 'ROLE_ADMIN') {
        next();
      } else {
        return res.status(403).json({ message: 'No authorized' });
      }
    } catch {
      return res.status(401).json({ message: 'Invalid Token' });
    }
  },
};
