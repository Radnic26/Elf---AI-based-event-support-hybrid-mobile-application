const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const conceptsRouter = require('./routers/concepts/concepts-routes')
const chatRouter = require('./routers/chat/chat-routes')
const { port, host } = require('./config/config')

const app = express()

app.use(express.static('../client/elf/www'))
app.use(bodyParser.json())
app.use(cors())
app.use('/concepts', conceptsRouter)
app.use('/chat', chatRouter)
app.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).send(err)
})

app.listen(port, () => {
    console.log(`Server Up and Running at http://${host}:${port}/` + '\n')
})
