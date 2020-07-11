import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App/App';
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import * as serviceWorker from './serviceWorker';
import checkForUserToken from './utils/checkLocalStorage'
import UserStore from './dbStores/UserStore'
import { HashRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/reducer'
import { setUser, clearUser, addMessage } from './actions/actions'
import LinearProgress from './components/LinearProgress/LinearProgress'

const store = createStore(rootReducer, composeWithDevTools())

class Root extends React.Component {
  componentDidMount() {
    const userStore = new UserStore()
    const userId = checkForUserToken()
    if (userId) {
      userStore.getLoggedUser(userId)
      userStore.emitter.addListener('GET_LOGGED_USER_SUCCESS', () => {
        let firstMessage = {
          chatBubbleId: 1,
          content: 'Salut ' + userStore.loggedUser.username + '! Eu sunt Tia, cu ce te pot ajuta?',
          context: 'greet'
        }
        this.props.addMessage(firstMessage, false)
        this.props.setUser(userStore.loggedUser)
        this.props.history.push('/')
      })
    }
    else {
      this.props.history.push('/login')
      this.props.clearUser()
    }
  }


  render() {
    return this.props.isLoading ? 
      <LinearProgress />
      :
      (
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      )
  }
}

const mapStateToProps = state => ({
  isLoading: state.user.isLoading
})

const RootWithAuth = withRouter(connect(mapStateToProps, { setUser, clearUser, addMessage })(Root))

const renderReactDom = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <RootWithAuth />
      </Router>
    </Provider>,
    document.getElementById('root'))
}

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    renderReactDom()
  }, false)
}
else {
  renderReactDom()
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
