import React, { Component } from 'react'
import UserStore from '../../dbStores/UserStore'
import {
    Grid,
    Container,
    TextField,
    Avatar,
    Button,
    CssBaseline,
    Link,
    Typography,
    CircularProgress
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'


const useStyles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    circularProgress: {
        color: blue[500],
        position: 'absolute',
        top: '36%',
        marginTop: -12,
    }
})

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isValid: true,
            isLoading: false,
            error: '',
            loginToken: ''
        }

        this.handleChange = (evt) => {
            this.setState({
                [evt.target.name]: evt.target.value
            })
        }

        this.add = () => {
            this.setState({
                isLoading: true
            })
            let user = {
                email: this.state.email,
                password: this.state.password
            }
            this.userStore = new UserStore()
            
            this.userStore.login(user)
            this.userStore.emitter.addListener('LOGIN_SUCCESSFUL', () => {
                this.setState({
                     isLoading: false,
                     loginToken: this.userStore.token
                })
                window.location.reload(false)
            })
    
            this.userStore.emitter.addListener('LOGIN_ERROR', () => {
                this.setState({
                    isValid: false,
                    error: this.userStore.error,
                    isLoading: false
                })
            })
        }

    }

    render() {
        const { classes } = this.props
        const { isLoading, isValid, error } = this.state
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Autentificare
              </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="email"
                                    size="small"
                                    label="Email"
                                    name="email"
                                    type="email"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    name="password"
                                    label="Parolă"
                                    size="small"
                                    type="password"
                                    id="password"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            { isValid ? <div></div> : 
                                <div style = {{marginLeft: '10px', color: 'red'}}>
                                    { error }
                                </div>
                            }
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={isLoading}
                            className={classes.submit}
                            onClick={this.add}
                        >
                            Autentificare
                            {isLoading && <CircularProgress size={34} className={classes.circularProgress}/>}
                </Button>
                <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Ai uitat parola?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#/register" variant="body2">
                {"Nu ai cont? Înregistrează-te"}
              </Link>
            </Grid>
          </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}

export default withStyles(useStyles)(Login)