const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.route('/signup').post(userController.singup);
router.route('/login').post(userController.login);

module.exports = router;
