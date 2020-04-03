const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  async singup(req, res) {
    try {
      let user = req.body;
      user.password = await bcrypt.hash(user.password, 8);
      await User.create(user);
      res.status(200).send('User created!');
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async login(req, res) {
    try {
      const userReceived = req.body;
      const userFinded = await User.findOne({ email: userReceived.email });
      if (userFinded) {
        const check = await bcrypt.compare(
          userReceived.password,
          userFinded.password
        );
        if (check) {
          const token = jwt.sign({ userFinded }, process.env.SECRET);
          res.status(200).send(token);
        } else res.status(401).send('Please check email or password');
      } else {
        res.status(401).send('Please check email or password');
      }
    } catch (error) {
      res.status(400).send(error);
    }
  }
};
