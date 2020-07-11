import {combineReducers} from 'redux'
import * as ActionTypes from '../actions/types'
import { Message } from 'react-chat-ui'

const initialUserState = {
    currentUser: null,
    isLoading: true
}

const initialMessageState = {
    messages: [],
    context: null,
    isTyping: false
}

const userReducer = (state = initialUserState, action) => {
    switch(action.type) {
        case ActionTypes.SET_USER:
            return {
                currentUser: action.payload.currentUser,
                isLoading: false
            }

        case ActionTypes.CLEAR_USER:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

const messageReducer = (state = initialMessageState, action) => {
    switch(action.type) {
        case ActionTypes.ADD_MESSAGE:
            return {
                ...state,
                messages: state.messages.concat(new Message({ id: action.payload.chatBubbleId, message: action.payload.message })),
                context: action.payload.context,
                isTyping: action.payload.isTyping
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    message: messageReducer
})

export default rootReducer