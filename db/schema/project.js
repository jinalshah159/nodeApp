let mongoose = require('../connection')
let uniqueValidator = require('mongoose-unique-validator');

const Joi = require('@hapi/joi');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true
  },
  technologyStack: {
    type: [String],
    required: true,
    minlength: 1,
  },

})

projectSchema.plugin(uniqueValidator);
const Project = mongoose.model('project', projectSchema);

function validateproject(project) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    technologyStack: Joi.array().items(Joi.string()).required().min(1)
  }).unknown();

  return schema.validate(project, {
    abortEarly: false
  });
}

exports.Project = Project;
exports.validate = validateproject;