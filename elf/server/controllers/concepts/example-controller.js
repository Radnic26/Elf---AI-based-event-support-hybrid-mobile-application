const { Category, Subcategory, Example } = require('../../models/models')

const getAllExamples = async(req, res, next) => {
    try {
        let examples = await Example.findAll({
            attributes: ['id', 'example', 'subcategoryId']
        })
        res.status(200).send(examples)
    } catch(err) {
        next(err)
    }
}

const getExampleFromSubcategory = async(req, res, next) => {
    try { 
        let subcategory = await Subcategory.findByPk(req.params.sid, {
            include: [Example]
        })
        if(subcategory) {
            res.status(200).send(subcategory.examples)
        }
        else {
            res.status(404).json({message: 'not found'})
        }
    } catch(err) {
        next(err)
    }
}

const createExample = async(req, res, next) => {
    try {
        let category = await Category.findByPk(req.params.cid)
        if(category) {
            let subcategory = await Subcategory.findByPk(req.params.sid)
            if(subcategory) {
                let example = req.body
                example.subcategoryId = subcategory.id
                await Example.create(example)
                res.status(201).json({message: 'created'})
            }
            else {
                res.status(404).json({message: 'not found'})
            }
        }
        else {
            res.status(404).json({message: 'not found'})
        }
    } catch(err) {
        next(err)
    }
}

const deleteExample = async(req, res, next) => {
    try {
        let example = await Example.findByPk(req.params.eid)
        if (example){
            await example.destroy()
            res.status(202).json({message : 'accepted'})    
        }
        else{
            res.status(404).json({message : 'not found'})   
        }
    } catch (err) {
        next(err)
    } 
}

module.exports = {
    getAllExamples,
    getExampleFromSubcategory,
    createExample,
    deleteExample
}