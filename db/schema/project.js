let mongoose = require('../connection')
const Joi = require('joi');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true
  },
  technologyStack: {
    type: [String], required: true, minlength: 1,
  },

})

const Project = mongoose.model('project', projectSchema);

function validateproject(project) {
  const schema = {
    name: Joi.string().min(3).required(),
    technologyStack: Joi.array().items(Joi.string()).required().min(1)
  };

  return Joi.validate(project, schema);
}

exports.Project = Project;
exports.validate = validateproject;