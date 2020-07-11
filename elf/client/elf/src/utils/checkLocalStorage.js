const jwt = require('jsonwebtoken')
const STATIC = require('../statics/constants')

module.exports = () => {
    const token = localStorage.getItem('userToken')
    if(token !== null) {
        return jwt.verify(token, STATIC.tokenSecret).id
    }
    else {
        return false
    }
}