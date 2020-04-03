const jwt = require('jsonwebtoken');

module.exports = {
  login(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
      const check = jwt.verify(token, process.env.SECRET, err => {
        return err ? false : true;
      });
      return check ? next() : res.status(401).send('Bad token');
    } else {
      return res.status(401).send('Your session has expired');
    }
  },
  userIsAdmin(req, res, next) {
    const user = jwt.decode(req.headers.authorization);
    if (user.type === 'admin') {
      return next();
    } else {
      return res.status(401).send('Access denied');
    }
  },
  userIsAdminOrAuthor(req, res, next) {
    const user = jwt.decode(req.headers.authorization);
    if (user.type === 'admin' || user.type === 'author') {
      return next();
    } else {
      return res.status(401).send('Access denied');
    }
  },
  userIsAdminOrUserOrLector(req, res, next) {
    const user = jwt.decode(req.headers.authorization);
    if (
      user.type === 'admin' ||
      user.type === 'author' ||
      user.type === 'lector'
    ) {
      return next();
    } else {
      return res.status(401).send('Access denied');
    }
  }
};
