const Sequelize = require('sequelize')
const { dbName, dbUser, dbPassword } = require('./../config/config')

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('connection successful')
}).catch((err) => {
    console.log(`error on connection: ${err}`)
})

const Category = sequelize.define('category', {
    category: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [2-30]
        }
    }
})

const Subcategory = sequelize.define('subcategory', {
    subcategory: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [2-30]
        }
    }
})

const Example = sequelize.define('example', {
    example: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [2-30]
        }
    }
})

const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [2-30]
        }
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [3-100]
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [6-100]
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        unique: true
    },
    photoURL: {
        type: Sequelize.STRING
    }
})

const Message = sequelize.define('message', {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    context: {
        type: Sequelize.STRING
    }
})

Category.hasMany(Subcategory)
Subcategory.hasMany(Example)
User.hasMany(Message)

sequelize.sync()

module.exports = {
    sequelize,
    Category,
    Subcategory,
    Example,
    User,
    Message
}