import { EventEmitter } from 'fbemitter'
const STATIC = require('../statics/constants')

class UserStore {
    constructor() {
        this.users = []
        this.loggedUser = ''
        this.emitter = new EventEmitter()
        this.responseStatus = ''
        this.error = ''
        this.token = ''
    }
    
    async addUser(user) {
        try {   
            let response = await fetch(`${STATIC.ngrokServer}/chat/user`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            let result = await response.json()
            if(result.hasOwnProperty('errors')) {
                this.error = result.errors[0].message
                this.emitter.emit('USER_ADD_ERROR')
            }
            else {
                this.emitter.emit('USER_ADD_SUCCESSFUL')
                console.log('registration successful!')
            }
        } catch(err) {
            this.error = await err.json()
            this.emitter.emit('USER_ADD_ERROR')
        }
    }

    async login(user) {
        try {
            let response = await fetch(`${STATIC.ngrokServer}/chat/login`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            if(response.status !== 500) {
                let result = await response.json()
                if(!result.hasOwnProperty('error')) {
                    localStorage.setItem('userToken', result.tokenValue)
                    this.token = result.tokenValue
                    console.log('login successful!')
                    this.emitter.emit('LOGIN_SUCCESSFUL')
                }
                else {
                    this.error = result.error
                    this.emitter.emit('LOGIN_ERROR')
                }
            }
            else {
                this.emitter.emit('LOGIN_ERROR')
            }
            
        } catch(err) {
            console.log(err)
            this.emitter.emit('LOGIN_ERROR')
        }
    }

    async getLoggedUser(userId) {
        try {
            let response = await fetch(`${STATIC.ngrokServer}/chat/user/${userId}`)
            let user = await response.json()
            this.loggedUser = user
            this.emitter.emit(`GET_LOGGED_USER_SUCCESS`)
        } catch(err) {
            console.warn(err)
            this.emitter.emit('GET_LOGGED_USER_ERROR')
        }
    }
}

export default UserStore