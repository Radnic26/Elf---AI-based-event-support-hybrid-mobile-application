const { User, Message } = require('../../models/models')

const getAllMessages = async(req, res, next) => {
    Message.findAll().then(result => {
        res.status(200).send(result)
    }).catch(err => {
        next(err)
    })
}

const getMessagesFromOneUser = async(req, res, next) => {
    try {
        let messages = await Message.findAll({
            where: {
                id: req.params.uid
            }
        })
        if(messages) {
            res.status(200).send(messages)
        }
        else {
            res.status(404).json({message: 'not found'})
        }
    } catch(err) {
        next(err)
    }
}

const createMessage = async(req, res, next) => {
    try {
        
        let user = await User.findByPk(req.params.uid)
        if (user) {
            let message = req.body
            message.userId = user.id
            await Message.create(message)
            res.status(201).json({message: 'created'})
        }
        else {
            res.status(404).json({message: 'not found'})
        }
    }catch(err) {
        next(err)
    }
}

module.exports = {
    getAllMessages,
    getMessagesFromOneUser,
    createMessage
}