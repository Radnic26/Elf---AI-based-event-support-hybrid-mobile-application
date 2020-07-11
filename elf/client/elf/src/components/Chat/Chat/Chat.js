import React from 'react'
import './Chat.css'
import MessageForm from '../MessageForm/MessageForm'
import Message from '../Message/Message'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'

const Chat = (props) => {
    const { currentUser, isTyping, messages } = props
    return (
        <div className="ChatDiv">
            <Grid className="MessageGrid">
                <Message
                    className="message"
                    isTyping={isTyping}
                    messages={messages}
                />
            </Grid>
            <MessageForm
                currentUser={currentUser}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    messages: state.message.messages,
    isTyping: state.message.isTyping,
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Chat)