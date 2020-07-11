import { EventEmitter } from 'fbemitter'
const STATIC = require('../statics/constants')

class ConceptStore {
    constructor() {
        this.categories = []
        this.subcategories = []
        this.emitter = new EventEmitter()
        this.abortController = new AbortController()
    }

    async addCategory(category) {
        try {
            await fetch(`${STATIC.ngrokServer}/concepts/category`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category)
            })
            this.emitter.emit('ADD_CATEGORY_SUCCESSFUL')
        } catch(err) {
            console.error(err)
            this.emitter.emit('ADD_CATEGORY_ERROR')
        }
    }

    async getAllCategories() {
        try {
            let response = await fetch(`${STATIC.ngrokServer}/concepts/categories`, { signal: this.abortController.signal })
            let data = await response.json()
            this.categories = data
            this.emitter.emit('GET_ALL_CATEGORIES_SUCCESS')
        } catch(err) {
            console.warn(err)
            this.emitter.emit('GET_ALL_REVIEWS_ERROR')
        }
    }

    async addSubcategory(subcategory, categoryId) {
        try {
            await fetch(`${STATIC.ngrokServer}/concepts/category/${categoryId}/subcategory`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subcategory)
            })
        } catch(err) {
            console.warn(err)
            this.emitter.emit('ADD_SUBCATEGORY_ERROR')
        }
    }

    async getAllSubcategories() {
        try {
            let response = await fetch(`${STATIC.ngrokServer}/concepts/subcategories`, { signal: this.abortController.signal })
            let data = await response.json()
            this.subcategories = data
            this.emitter.emit('GET_ALL_SUBCATEGORIES_SUCCESS')
        } catch(err) {
            console.warn(err)
            this.emitter.emit('GET_ALL_SUBCATEGORIES_ERROR')
        }
    }

    async addExample(example, categoryId, subcategoryId) {
        try {
            await fetch(`${STATIC.ngrokServer}/concepts/category/${categoryId}/subcategory/${subcategoryId}/example`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(example)
            })
        } catch(err) {
            console.warn(err)
            this.emitter.emit('ADD_EXAMPLE_ERROR')
        }
    }
}

export default ConceptStore