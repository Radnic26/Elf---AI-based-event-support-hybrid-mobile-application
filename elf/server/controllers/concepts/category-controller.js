const { Category, Subcategory, Example } = require('../../models/models')

const getAllCategories = async (req, res, next) => {
    try {
        let categories = await Category.findAll({
            attributes: ['id', 'category']
        })
        res.status(200).send(categories)
    } catch(err) {
        next(err)
    }
}

const getAllCategoriesMultipleJoins = async (req, res, next) => {
    try {
        let categories = await Category.findAll({
            attributes: ['id', 'category'],
            include: [{
                model:Subcategory,
                attributes: ['id', 'subcategory', 'categoryId'],
                include: [{ 
                    model: Example, 
                    attributes: ['id', 'example', 'subcategoryId'] 
                }]
            }]
        })
        res.status(200).send(categories)
    } catch(err) {
        next(err)
    }
}

const createCategory = async(req, res, next) => {

    console.log(req.body)
    try {

        await Category.create(req.body)
        res.status(201).json({message: 'created'})
    } catch(err) {
        next(err)
    }
}

const updateCategory = async(req, res, next) => {
    try {
        let category = await Category.findByPk(req.params.cid)
        if(category) {
            await category.update(req.body)
            res.status(202).send({message: 'accepted'})
        }
        else {
            res.status(404).send({message: 'not found'})
        }
    } catch(err) {
        next(err)
    }
}

const deleteCategory = async(req, res, next) => {
    try {
        let category = await Category.findByPk(req.params.cid)
        if(category) {
            let subcategory = await Subcategory.findAll({
                where: {
                    categoryId: category.id
                }
            })
            if(subcategory) {
                await Example.destroy({
                    where: {
                        subcategoryId: subcategory[0].dataValues.id
                    }
                })
                await Subcategory.destroy({
                    where: {
                        categoryId: category.id
                    }
                })
                await category.destroy()
                res.status(200).send({message: 'accepted'})
            }
            else {
                res.status(404).send({message: 'not found'})
            }
        }
        else {
            res.status(404).send({message: 'not found'})
        }
    } catch(err) {
        next(err)
    }
}

module.exports = {
    getAllCategories,
    getAllCategoriesMultipleJoins,
    createCategory,
    updateCategory,
    deleteCategory
}