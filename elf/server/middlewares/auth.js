const jwt = require('jsonwebtoken')
const { tokenSecret } = require('../config/config')

module.exports = (req, res, next) => {
    const token = req.header('auth-token')
    
    if(token) {
        try {
            const verified = jwt.verify(token, tokenSecret);
            req.userId = verified
            next()
        } catch(err) {
            res.status(400).send({message: 'Invalid token'})
        }
    }
    else {
        console.log('afefe')
        res.status(401).send('Access Denied!')
    }
}