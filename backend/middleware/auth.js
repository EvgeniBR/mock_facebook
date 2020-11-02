const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        console.log(token);
        const decoded = jwt.verify(token, 'facebookmock')
        console.log(decoded);
        console.log('try');
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!user) {
            console.log('if');
            throw new Error()
        }

        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
        console.log('catch');
    }
}

module.exports = auth