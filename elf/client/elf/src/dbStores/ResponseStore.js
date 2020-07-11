import { EventEmitter } from 'fbemitter'
const STATIC = require('../statics/constants')

class ResponseStore {
    constructor() {
        this.emitter = new EventEmitter()
        this.reply = []
    }

    async getResponse(question) {
        let response = await fetch(`${STATIC.ngrokServer}/chat/response`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('userToken')
            },
            body: JSON.stringify(question)
        })
        let data = await response.json()
        if (Object.keys(data).length === 25) {
            this.reply = data
        }
        else {
            if (Object.values(data.solution)[0].length > 1) {
                let index = Math.floor(Math.random() * data.solution.length)
                this.reply = data.solution[index]
            }
            else {
                this.reply = data.solution
            }
        }
        this.emitter.emit('GET_RESPONSE_SUCCESS')
    } catch(err) {
        console.warn(err)
        this.emitter.emit('GET_RESPONSE_ERROR')
    }
}

export default ResponseStore