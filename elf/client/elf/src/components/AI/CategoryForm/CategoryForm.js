import React from 'react'
import './CategoryForm.css'
import ConceptStore from '../../../dbStores/ConceptStore'

class CategoryForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            categories: [],
            selectedCategory: []
        }

        this.conceptStore = new ConceptStore()

        this.handleChange = (evt) => {
            this.setState({
                [evt.target.name]: evt.target.value
            })
        }

        this.add = () => {
            this.conceptStore.addCategory({
                category: this.state.category,
            })

            this.conceptStore.emitter.addListener('ADD_CATEGORY_SUCCESSFUL', () => {
                window.location.reload(false)
            })
        }
    }

    render() {
        return (
            <div>
                <div className="addCategoryHeader">Add a category</div>
                <div className="categoryForm">
                    <label className="categoryLabel">Category</label>
                    <input
                        type="text"
                        name="category"
                        placeholder="category"
                        onChange={this.handleChange}
                    />
                    <button className="addCategoryButton" onClick={this.add}>Add</button>
                </div>
            </div>
        )
    }
}



export default CategoryForm