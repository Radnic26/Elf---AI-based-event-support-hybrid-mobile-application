import * as actionTypes from './types'

export const setUser = user => {
    return {
        type: actionTypes.SET_USER,
        payload: {
            currentUser: user
        }
    }
}

export const clearUser = () => {
    return {
        type: actionTypes.CLEAR_USER
    }
}

export const addMessage = (message, isTyping) => {
    return {
        type: actionTypes.ADD_MESSAGE,
        payload: {
            chatBubbleId: message.chatBubbleId,
            message: message.content,
            context: message.context,
            isTyping: isTyping
        }
    }
}