let {
  User
} = require('../schema/user')

async function createUser(name, project) {
  const user = new User({
    name: name,
    project: project
  })
  let result = await user.save();
  return result;
}

async function getUser() {
  try {
    let user = await User
      .find()
      .populate('project', 'name -_id')
      .select('name project')
    return user;
  } catch (ex) {
    console.log(ex)
  }
}

async function getUserById(id) {
  try {
    let user = await User.findById(id)
    return user;
  } catch (ex) {
    console.log(ex)
  }
}

async function updateUserById(id, name) {
  try {
    let user = await User.findByIdAndUpdate(id, {
      $set: {
        name: name
      }
    }, {
      new: true
    })
    return user;
  } catch (ex) {
    console.log(ex)
  }
}

async function removeUserById(id) {
  try {
    let user = await User.findByIdAndDelete(id)
    return user;
  } catch (ex) {
    console.log(ex)
  }
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  updateUserById,
  removeUserById
};