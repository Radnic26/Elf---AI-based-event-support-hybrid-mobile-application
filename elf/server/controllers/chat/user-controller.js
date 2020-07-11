const { User, Message } = require('../../models/models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { tokenSecret } = require('../../config/config')

const getAllUsers = async(req, res, next) => {
    try {
        let users = await User.findAll()
        res.status(201).send(users)
    } catch (err) {
        next(err)
    } 
}

const getUser = async(req, res, next) => {
    try {
        let user = await User.findByPk(req.params.uid)
        if(user) {
            res.status(201).send(user)
        }
        else{
            res.status(404).json({message: 'not found'})
        }
    } catch(err) {
        next(err)
    }
}

const getUserWithMessages = async(req, res, next) => {
    try {
        let user = await User.findAll({
            where: {
                id: req.params.uid
            },
            attributes: ['id', 'name', 'username', 'password', 'email'],
            include: [Message]
        })
        if(user) {
            res.status(201).send(user)
        }
        else{
            res.status(404).json({message: 'not found'})
        }
    } catch(err) {
        next(err)
    }
}

const createUser = async(req, res, next) => {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    try {
        await User.create({
            name: req.body.name,
            username: req.body.username,
            password: hashPassword,
            email: req.body.email,
            photoURL: req.body.photoURL
        })
        res.status(201).json({message : 'created'})
    } catch(err) {
        next(err)
    } 
}

const login = async(req, res, next) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if(user) {
                const isValid = await bcrypt.compare(req.body.password, user.password)
                if(isValid) {
                    const token = jwt.sign({id: user.id}, tokenSecret)
                    res.status(200).send({tokenValue: token})
                }
                else {
                   res.status(400).send({error: 'Emailul sau parola greșite'}) 
                }
            }
            else {
                res.status(404).send({error: 'Emailul sau parola greșite'})
            }
        } catch(err) {
            next(err)
        }
    } 
    else {
        res.status(400).send({error: 'Adresa de mail nu este validă'})
    }
}


module.exports = {
    getAllUsers,
    getUser,
    getUserWithMessages,
    createUser,
    login
}