let User = require('../schema/user')
async function createUser(name) {
    const user = new User({
        name: name    
    })
    let result = await user.save();
    console.log(result);
    return result;
}

async function getUser() {
    try{
        let user = await User.find()
        return user;
    } catch(ex) {
        console.log(ex)
    }

}


module.exports = {createUser, getUser};
