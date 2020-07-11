import React from 'react'
import './SubcategoryForm.css'
import ConceptStore from './../../../dbStores/ConceptStore'

class SubcategoryForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            selectedCategoryId: '',
            subcategory: ''
        }

        this.conceptStore = new ConceptStore()

        this.handleCategorySelectChange = (evt) => {
            this.setState({ selectedCategoryId: evt.target.value })
        }

        this.handleSubcategoryInputChange = (evt) => {
            this.setState({ [evt.target.name]: evt.target.value })
        }

        this.add = () => {
            let newSubcategory = {
                subcategory: this.state.subcategory
            }

            this.conceptStore.addSubcategory(newSubcategory, this.state.selectedCategoryId)
            window.location.reload(true)
        }
    }

    componentDidMount() {
        this.conceptStore.getAllCategories()
        this.conceptStore.emitter.addListener('GET_ALL_CATEGORIES_SUCCESS', () => {
            this.setState({
                categories: this.conceptStore.categories
            })
        })
    }

    componentWillUnmount() {
        this.conceptStore.abortController.abort()
    }

    render() {
        const { categories } = this.state;

        let categoriesList = categories.length > 0
            && categories.map((item, i) => {
                return (
                    <option key={i} value={item.id}>{item.category}</option>
                )
            }, this);

        return (
            <div>
                <div className="addSubcategoryHeader">Add a subcategory</div>
                <div className="subcategoryForm">
                    <label>Select a category</label>
                    <select className="selectCategory" onChange={this.handleCategorySelectChange} >
                        <option value="value">Select a category</option>
                        {categoriesList}
                    </select>
                </div>

                <div className="subcategoryForm">
                    <label className="subcategoryLabel">Subcategory</label>
                    <input type="text" name="subcategory" placeholder="subcategory" onChange={this.handleSubcategoryInputChange} />
                    <button className="addSubcategoryButton" onClick={this.add}>Add</button>
                </div>
            </div>
        )
    }
}



export default SubcategoryForm