const express = require('express')
const router = express.Router()
const authMiddleware = require('../../middlewares/auth')

const userController = require('../../controllers/chat/user-controller')
const messageController = require('../../controllers/chat/message-controller')
const responseController = require('../../controllers/chat/response-controller')

router.get('/users', userController.getAllUsers)
router.get('/user/:uid', userController.getUser)
router.get('/user/:uid/messages', userController.getUserWithMessages)
router.post('/user', userController.createUser)
router.post('/login', userController.login)

router.get('/messages', messageController.getAllMessages)
router.get('/messages/user/:uid', messageController.getMessagesFromOneUser)
router.post('/message/user/:uid', authMiddleware, messageController.createMessage)

router.post('/response', authMiddleware, responseController.getResponse)

module.exports = router