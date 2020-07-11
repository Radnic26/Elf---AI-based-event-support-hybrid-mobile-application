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
import { blue } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import md5 from 'md5'


const useStyles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    circularProgress: {
        color: blue[500],
        position: 'absolute',
        top: '36%',
        marginTop: -12,
    }
})

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            error: '',
            isValid: true,
            isLoading: false
        }

        this.userStore = new UserStore()

        this.handleChange = (evt) => {
            this.setState({
                [evt.target.name]: evt.target.value
            })
        }

        this.isPasswordValid = ({password, confirmPassword}) => {
            if(password.length < 6) {
                this.setState({
                    error: 'Parola trebuie să aibă minim 6 caractere!'
                })
                return false
            }
            else if(password !== confirmPassword) {
                this.setState({
                    error: 'Parolele trebuie să fie identice!'
                })
                return false
            }
            else {
                return true
            }
        }

        this.add = () => {
            this.setState({
                isLoading: true
            })
            let user = {
                name: this.state.fullName,
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                photoURL: `http://gravatar.com/avatar/${md5(this.state.email)}?d=identicon`
            }
            console.log(user)

            if(this.isPasswordValid(this.state)) {
                this.userStore.addUser(user)
                this.userStore.emitter.addListener('USER_ADD_SUCCESSFUL', () => {
                    this.setState({
                        isLoading: false
                    })
                    this.props.history.push('/login')
                })
    
                this.userStore.emitter.addListener('USER_ADD_ERROR', () => {
                    this.setState({
                        isValid: false,
                        error: this.userStore.error,
                        isLoading: false
                    })
                })
            }
            else {
                this.setState({
                    isValid: false,
                    isLoading: false
                })
            }
        }

    }

    render() {
        const { classes } = this.props
        const { isValid, error, isLoading } = this.state
        return (
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Înregistrare
              </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="fullName"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    id="fullName"
                                    label="Nume Complet"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    id="username"
                                    label="Nume Utilizator"
                                    onChange={this.handleChange}
                                    name="username"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    id="email"
                                    label="Email"
                                    onChange={this.handleChange}
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    name="password"
                                    label="Parolă"
                                    type="password"
                                    onChange={this.handleChange}
                                    id="password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    name="confirmPassword"
                                    label="Confirmă Parola"
                                    type="password"
                                    onChange={this.handleChange}
                                    id="confirmPassword"
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
                                Înregistrare
                                {isLoading && <CircularProgress size={34} className={classes.circularProgress}/>} 
                       
                            </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#/login" variant="body2">
                                    Ai deja cont? Autentifică-te!
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}

export default withStyles(useStyles)(Register)
