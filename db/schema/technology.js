let mongoose = require('../connection')
let uniqueValidator = require('mongoose-unique-validator');

const Joi = require('@hapi/joi');

const technologySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true
  },
  learningStack: {
    type: [String],
    required: true,
    minlength: 1,
  },

})

technologySchema.plugin(uniqueValidator);
const Technology = mongoose.model('technology', technologySchema);

function validatetechnology(technology) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    learningStack: Joi.array().items(Joi.string()).required().min(1)
  }).unknown();

  return schema.validate(technology, {
    abortEarly: false
  });
}

exports.Technology = Technology;
exports.validate = validatetechnology;