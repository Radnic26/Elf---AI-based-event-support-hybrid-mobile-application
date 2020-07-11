import { EventEmitter } from 'fbemitter'
const STATIC = require('../statics/constants')

module.exports = async (userId) => {
    try {
        let response = await fetch(`${STATIC.ngrokServer}/chat/user/${userId}`)
        let data = await response.json()
        // console.log(data)
        // this.emitter.emit('LOGGED_USER_FETCH_SUCCESSFUL')
        return data
    } catch(err) {
        console.warn(err)
    }
}