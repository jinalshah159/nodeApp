let {
    Technology
  } = require('../schema/technology')
  
  async function createTechnology(technologyObj) {
    try {
      const technology = new Technology(technologyObj)
      let result = await technology.save();
      return result;
    } catch (ex) {
      console.log(ex)
    }
  }
  
  async function getTechnology() {
    try {
      let technology = await Technology.find()
      return technology;
    } catch (ex) {
      console.log(ex)
    }
  }
  
  async function getTechnologyById(id) {
    try {
      let technology = await Technology.findById(id)
      return technology;
    } catch (ex) {
      console.log(ex)
    }
  }
  
  async function updateTechnologyById(id, name) {
    try {
      let technology = await Technology.findByIdAndUpdate(id, {
        $set: {
          name: name
        }
      }, {
        new: true
      })
      return technology;
    } catch (ex) {
      console.log(ex)
    }
  }
  
  async function removeTechnologyById(id) {
    try {
      let technology = await Technology.findByIdAndDelete(id)
      return technology;
    } catch (ex) {
      console.log(ex)
    }
  }
  
  module.exports = {
    createTechnology,
    getTechnology,
    getTechnologyById,
    updateTechnologyById,
    removeTechnologyById
  };