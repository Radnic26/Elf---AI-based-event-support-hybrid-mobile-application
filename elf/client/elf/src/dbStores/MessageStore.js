import { EventEmitter } from 'fbemitter'
const STATIC = require('../statics/constants')

class MessageStore {
    constructor() {
        this.message = []
        this.emitter = new EventEmitter()
    }

    async addMessage(userId, message) {
        
        try {
            await fetch(`${STATIC.ngrokServer}/chat/message/user/${userId}`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('userToken')
                },
                body: JSON.stringify(message),
            })
            this.emitter.emit('ADD_MESSAGE_SUCCESS')
        } catch(err) {
            console.warn(err)
            this.emitter.emit('ADD_MESSAGE_ERROR')
        }
    }

    async getMessage() {
        try{
            let response = await fetch(`${STATIC.ngrokServer}/chat/messages`)
            let data = await response.json()
            this.message = data
        } catch(err) {
            console.warn(err)
        }
    }
}

export default MessageStore