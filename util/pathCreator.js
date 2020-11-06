const User = require('../models/user')


const pathCreator = async (last_name) =>{
    const users = await User.find({last_name:last_name})
    const pathName = `${last_name}.${users.length +1}`

    return pathName
}

module.exports = {
    pathCreator,
}