import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { TextField, Button, Grid } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import './MessageForm.css'
import { connect } from 'react-redux'
import { addMessage } from './../../../actions/actions'
import MessageStore from './../../../dbStores/MessageStore'
import ResponseStore from './../../../dbStores/ResponseStore'

const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  grid: {
    padding: '10px',
    display: 'flex',
    bottom: 0
  },
  button: {
    minWidth: 10
  },
  buttonGrid: {
    width: '20px',
    marginLeft: '10px'
  }
})

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      response: []
    }

    this.messageStore = new MessageStore()
    this.responseStore = new ResponseStore()

    this.handleChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }

    this.sendMessage = () => {
      if (this.state.question !== "") {
        let message = {
          chatBubbleId: 0,
          content: this.state.question,
          context: 'test'
        }

        this.setState({
          question: ''
        })

        this.props.addMessage(message, true)

        this.messageStore.addMessage(this.props.currentUser.id, message);

        this.responseStore.getResponse(message)

        this.responseStore.emitter.addListener('GET_RESPONSE_SUCCESS', () => {
          let response = {
            chatBubbleId: 1,
            content: this.responseStore.reply,
            context: message.context
          }
          this.props.addMessage(response, false)
          this.responseStore.emitter.removeCurrentListener()
        })
      }
      else {}
    }
  }

  render() {
    const { classes } = this.props
    return (
      <div className="Form">
        <Grid container className={classes.grid} style={{ minHeight: '100%' }}>
          <Grid item xs={9}>
            <TextField
              name="question"
              id="outlined-basic-email"
              size="small"
              variant="outlined"
              placeholder="Adaugă un mesaj"
              value={this.state.question}
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={1} align="right" >
            <Button
              className={classes.buttonGrid}
              color="primary"
              size="large"
              variant="outlined"
              onClick={this.sendMessage} >
              <SendIcon />
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default connect(null, { addMessage })(withStyles(useStyles)(MessageForm))