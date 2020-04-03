const router = require('express').Router();
const categoryController = require('../controllers/category.controller');
const bookController = require('../controllers/book.controller');
const {
  userIsAdmin,
  userIsAdminOrAuthor,
  userIsAdminOrUserOrLector
} = require('../utils/middleware');

//Categories
router.route('/').get(userIsAdminOrUserOrLector, categoryController.find);
router.route('/').post(userIsAdmin, categoryController.create);
router
  .route('/:categoryId')
  .put(userIsAdmin, categoryController.findBydIdAndUpdate);
router
  .route('/:categoryId')
  .delete(userIsAdmin, categoryController.findByIdAndDelete);

//Books
router
  .route('/:categoryId/books/')
  .get(userIsAdminOrUserOrLector, bookController.find);
router
  .route('/:categoryId/books/:bookId')
  .get(userIsAdminOrUserOrLector, bookController.findById);
router
  .route('/:categoryId/books/')
  .post(userIsAdminOrAuthor, bookController.create);
router
  .route('/:categoryId/books/:bookId')
  .put(userIsAdminOrAuthor, bookController.findByIdAndUpdate);
router
  .route('/:categoryId/books/:bookId')
  .delete(userIsAdminOrAuthor, bookController.findByIdAndDelete);

module.exports = router;
