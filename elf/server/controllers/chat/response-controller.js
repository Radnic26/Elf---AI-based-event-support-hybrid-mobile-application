const responseService = require('../../services/response-service')

const getResponse = async(req, res, next) => {
    try {
        let response = await responseService.proposeSolution(req.body.content)
        res.status(200).send(response)
    } catch(err) {
        next(err)
    }
}

module.exports = {
    getResponse
}