const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    categories: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
      required: true
    },
    authors: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
