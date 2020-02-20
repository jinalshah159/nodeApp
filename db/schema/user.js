let mongoose = require('../connection')
const Joi = require('joi');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true
  }
})

const User = mongoose.model('user', userSchema);

function validateuser(user) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateuser;