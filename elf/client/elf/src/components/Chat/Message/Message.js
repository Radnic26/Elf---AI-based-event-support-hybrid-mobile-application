import React from "react"
import { ChatFeed } from 'react-chat-ui'
import './Message.css'
import Typing from '../Typing/Typing'

const Messages = (props) => {
  const { messages, isTyping } = props
  return (
    <div className="Messages">
      <ChatFeed
        messages={ messages }
        bubbleStyles={
          {
            text: {
              fontSize: 17
            },
            chatbubble: {
              borderRadius: 20,
              padding: 10
            }
          }
        }
      />
      {isTyping ? <Typing /> : ''}
    </div>
  )
}

export default Messages
