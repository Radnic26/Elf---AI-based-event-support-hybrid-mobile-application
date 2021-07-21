import React from 'react'
import { connect } from 'react-redux'



class Account extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

    render() {
        const { currentUser } = this.props
        return (
            <div style={{ textAlign: 'center' }}>
                <div style={{ marginTop: '10px' }}>
                    <img alt="drawerChatIcon" src={currentUser.photoURL} style={{ height: '10vh' }} />
                </div>
                <div style={{ marginTop: '3vh' }}>
                    Nume: {currentUser.name}
                </div>
                <div style={{ marginTop: '2vh' }}>
                    Utilizator: {currentUser.username}
                </div>
                <div style={{ marginTop: '2vh' }}>
                    Email: {currentUser.email}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  })

export default connect(mapStateToProps)(Account);
