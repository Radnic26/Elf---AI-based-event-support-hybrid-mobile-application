import React from 'react'
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Chat from '../Chat/Chat/Chat'
import Account from './../Account/Account'
import SettingsItem from '../Settings/SettingsItem'
import ConceptsForm from '../AI/ConceptsForm/ConceptsForm'
import { connect } from 'react-redux'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      ...theme.mixins.toolbar,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
}));

function Home(props) {
  const { window } = props
  const { currentUser } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [chatItem, setChatItem] = React.useState(true)
  const [accountItem, setAccountItem] = React.useState(false)
  const [settingsItem, setSettingsItem] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const chatItemClicked = () => {
    setChatItem(false)
    setSettingsItem(false)
    setChatItem(true)
    if ({ mobileOpen }.mobileOpen) {
      setMobileOpen(!mobileOpen)
    }
  }

  const accountItemClicked = () => {
    setChatItem(false)
    setSettingsItem(false)
    setAccountItem(true)
    if ({ mobileOpen }.mobileOpen) {
      setMobileOpen(!mobileOpen)
    }
  }

  const settingsItemClicked = () => {
    setAccountItem(false)
    setChatItem(false)
    setSettingsItem(true)
    if ({ mobileOpen }.mobileOpen) {
      setMobileOpen(!mobileOpen)
    }
  }

  const aiItemClicked = () => {
    setAccountItem(false)
    setChatItem(false)
    setSettingsItem(false)
    if ({ mobileOpen }.mobileOpen) {
      setMobileOpen(!mobileOpen)
    }
  }


  const drawer = (
    <div className="HomeDiv">
      <div />
      <Divider />
      
      <List>
      
        <ListItem key="currentUserFullName">
          <ListItemIcon><img alt="drawerChatIcon" src={currentUser.photoURL} style={{ width: '34px' }} /></ListItemIcon>
          <ListItemText primary={currentUser.name}/>
        </ListItem>
        <Divider />
        <ListItem button key='Chat' onClick={chatItemClicked}>
          <ListItemIcon><img alt="drawerChatIcon" src="https://img.icons8.com/bubbles/50/000000/chat.png" style={{ width: '40px' }} /></ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
        <ListItem button key='Account' onClick={accountItemClicked}>
          <ListItemIcon><img alt="drawerAccountIcon" src="https://img.icons8.com/bubbles/50/000000/test-account.png" style={{ width: '40px' }} /></ListItemIcon>
          <ListItemText primary="Contul Meu" />
        </ListItem>
        <ListItem button key='Settings' onClick={settingsItemClicked}>
          <ListItemIcon><img alt="drawerSettingsIcon" src="https://img.icons8.com/bubbles/50/000000/gears.png" style={{ width: '40px' }} /></ListItemIcon>
          <ListItemText primary="Setări" />
        </ListItem>
      </List>
      <Divider />
      <ListItem button key='AI' onClick={aiItemClicked}>
        <ListItemIcon><img alt="drawerSettingsIcon" src="https://img.icons8.com/bubbles/50/000000/learning.png" style={{ width: '40px' }} /></ListItemIcon>
        <ListItemText primary="AI" />
      </ListItem>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Elf Chat
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
          { chatItem }.chatItem ? <Chat /> :
            { accountItem }.accountItem ? <Account /> :
              { settingsItem }.settingsItem ? <SettingsItem /> :
                <ConceptsForm />

        }
      </main>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Home)
