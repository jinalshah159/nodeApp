let User = require('../schema/user')
async function createUser(name) {
  const user = new User({
    name: name
  })
  let result = await user.save();
  return result;
}

async function getUser() {
  try {
    let user = await User.find()
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