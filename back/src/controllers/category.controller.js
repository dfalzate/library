const Category = require('../models/category.model');

module.exports = {
  async find(req, res) {
    try {
      const result = await Category.find();
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async create(req, res) {
    try {
      const body = req.body;
      const result = await Category.create(body);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async findBydIdAndUpdate(req, res) {
    try {
      const id = req.params.categoryId;
      const body = req.body;
      const result = await Category.findByIdAndUpdate(id, body, {
        useFindAndModify: false,
        new: true
      });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async findByIdAndDelete(req, res) {
    try {
      const id = req.params.categoryId;
      const result = await Category.findByIdAndDelete(id);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  }
};
