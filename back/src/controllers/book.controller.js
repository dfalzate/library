const Book = require('../models/book.model');
// const jwt = require('jsonwebtoken');

module.exports = {
  async find(req, res) {
    try {
      const result = await Book.find()
        .populate({
          path: 'authors',
          select: 'email -_id',
        })
        .populate({
          path: 'categories',
          select: 'name -_id',
        });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async findById(req, res) {
    try {
      const id = req.params.bookId;
      const result = await Book.findById(id)
        .populate({
          path: 'authors',
          select: 'email -_id',
        })
        .populate({
          path: 'categories',
          select: 'name -_id',
        });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async create(req, res) {
    try {
      // const token = req.headers.authorization;
      // const { userFinded } = jwt.decode(token, process.env.SECRET);
      let book = req.body;
      console.log('Server', book);
      if (!book.categories) {
        book = { ...book, categories: [] };
      }
      book = { ...book, categories: book.categories.concat(book.category) };
      console.log('Server', book);
      const result = await Book.create(book);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async findByIdAndUpdate(req, res) {
    try {
      const bookId = req.params.bookId;
      const body = req.body;
      const result = await Book.findByIdAndUpdate(bookId, body, {
        useFindAndModify: false,
        new: true,
      });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async findByIdAndDelete(req, res) {
    try {
      const id = req.params.bookId;
      const result = await Book.findByIdAndDelete(id);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
