const { Category, Subcategory, Example } = require('../../models/models')

const getAllSubcategories = async(req, res, next) => {
    try {
        let subcategories = await Subcategory.findAll({ 
            attributes: ['id', 'subcategory', 'categoryId']
        })
        res.status(200).send(subcategories)
    } catch(err) {
        next(err)
    }
}

const getSubcategoryWithCategoryId = async(req, res, next) => {
    try {
        let category = await Category.findByPk(req.params.cid, {
            include: [{
                model: Subcategory,
                attributes: ['id', 'subcategory', 'categoryId']
            }]
        })
        if(category) {
            res.status(200).send(category.subcategories)
        }
        else {
            res.status(404).json({message: 'not found'})
        }
    } catch(err) {
        next(err)
    }
}

const createSubcategory = async(req, res, next) => {
    try {
        let category = await Category.findByPk(req.params.cid)
            if (category) {
                req.body.categoryId = category.id
                await Subcategory.create(req.body)
                res.status(201).json({message: 'created'})
            }
            else {
                res.status(404).json({message: 'not found'})
            }
    } catch(err) {
        next(err)
    }
}

const updateSubcategory = async(req, res, next) => {
    try {
        let category = await Category.findByPk(req.params.cid)
        if(category) {
            let subcategories = await category.getSubcategories({
                where: {
                    id: req.params.sid
                }
            })
            if(subcategories) {
                let subcategory = subcategories.shift()
                if(subcategory) {
                    await subcategory.update(req.body)
                    res.status(201).json({message: 'updated'})
                }
                else {
                    res.status(404).json({message: 'not found'})
                }
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

const deleteSubcategory = async(req, res, next) => {
    try {
        await Example.destroy({
            where: {
                subcategoryId: req.params.sid
            }
        })
        await Subcategory.destroy({
            were: {
                id: req.params.sid
            }
        })
        res.status(201).json({message: 'deleted'})
    } catch(err) {
        next(err)
    }
}

const deleteSubcategoryFromCategory = async(req, res, next) => {
    try {
        let category = await Category.findByPk(req.params.cid)
        if(category) {
            let subcategories = await category.getSubcategories ({
                where: {
                    id: req.params.sid
                }
            })
            let subcategory = subcategories.shift()
            if(subcategory) {
                await Example.destroy({
                    where: {
                        subcategoryId: subcategory.id
                    }
                })
                await subcategory.destroy()
                res.status(201).json({message: 'deleted'})
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


module.exports = {
    getAllSubcategories,
    getSubcategoryWithCategoryId,
    createSubcategory,
    updateSubcategory,
    deleteSubcategory,
    deleteSubcategoryFromCategory
}