const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      validate: [
        {
          validator: value => {
            return mongoose.models.User.findOne({ email: value }).then(user => {
              return !user;
            });
          },
          message: 'El usuario ya existe'
        }
      ]
    },
    password: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ['admin', 'author', 'lector']
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
