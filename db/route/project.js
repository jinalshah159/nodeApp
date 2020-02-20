let {Project} = require('../schema/project')
async function createProject(projectObj) {
  try{
    const project = new Project(projectObj)
    let result = await project.save();
    console.log("-------",result);
    return result;
  } catch(ex) {
    console.log(ex)
  }
  
}

async function getProject() {
  try {
    let project = await Project.find()
    return project;
  } catch (ex) {
    console.log(ex)
  }
}

async function getProjectById(id) {
  try {
    let project = await Project.findById(id)
    return project;
  } catch (ex) {
    console.log(ex)
  }
}

async function updateProjectById(id, name) {
  try {
    let project = await Project.findByIdAndUpdate(id, {
      $set: {
        name: name
      }
    }, {
      new: true
    })
    return project;
  } catch (ex) {
    console.log(ex)
  }
}

async function removeProjectById(id) {
  try {
    let project = await Project.findByIdAndDelete(id)
    return project;
  } catch (ex) {
    console.log(ex)
  }
}

module.exports = {
  createProject,
  getProject,
  getProjectById,
  updateProjectById,
  removeProjectById
};