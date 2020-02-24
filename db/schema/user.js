let mongoose = require('../connection')
const Joi = require('@hapi/joi');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'project'
  }
})

const User = mongoose.model('user', userSchema);

function validateuser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  }).unknown();
  return schema.validate(user, {
    abortEarly: false
  });
}

exports.User = User;
exports.validate = validateuser;