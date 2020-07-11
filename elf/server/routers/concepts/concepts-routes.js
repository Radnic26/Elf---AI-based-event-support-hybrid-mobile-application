const express = require('express')
const router = express.Router()

const categoryController = require('../../controllers/concepts/category-controller')
const subcategoryController = require('../../controllers/concepts/subcategory-controller')
const exampleController = require('../../controllers/concepts/example-controller')

router.get('/categories', categoryController.getAllCategories)
router.get('/categoriesFull', categoryController.getAllCategoriesMultipleJoins)
router.post('/category', categoryController.createCategory)
router.put('/category/:cid', categoryController.updateCategory)
router.delete('/category/:cid', categoryController.deleteCategory)

router.get('/subcategories', subcategoryController.getAllSubcategories)
router.get('/category/:cid/subcategory', subcategoryController.getSubcategoryWithCategoryId)
router.post('/category/:cid/subcategory', subcategoryController.createSubcategory)
router.put('/category/:cid/subcategory/:sid', subcategoryController.updateSubcategory)
router.delete('/subcategory/:sid', subcategoryController.deleteSubcategory)
router.delete('/category/:cid/subcategory/:sid', subcategoryController.deleteSubcategoryFromCategory)

router.get('/examples', exampleController.getAllExamples)
router.get('/subcategory/:sid/examples', exampleController.getExampleFromSubcategory)
router.post('/category/:cid/subcategory/:sid/example', exampleController.createExample)
router.delete('/example/:eid', exampleController.deleteExample)

module.exports = router