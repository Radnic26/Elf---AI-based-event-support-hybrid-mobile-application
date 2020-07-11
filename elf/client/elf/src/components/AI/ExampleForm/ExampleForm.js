import React from 'react'
import './ExampleForm.css'
import ConceptStore from '../../../dbStores/ConceptStore'
import { EventEmitter } from 'fbemitter'

class ExampleForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            selectedCategoryId: '',
            subcategories: [],
            selectedSubcategoryId: '',
            example: ''
        }

        this.emitter = new EventEmitter()

        this.conceptStore = new ConceptStore()

        this.handleCategorySelectChange = (evt) => {
            this.setState({selectedCategoryId: evt.target.value})
        }

        this.handleSubcategorySelectChange = (evt) => {
            this.setState({selectedSubcategoryId: evt.target.value})
        }

        this.handleInputChange = (evt) => {
            this.setState({[evt.target.name]: evt.target.value})
        }

        this.add = () => {
            let newExample = {
                example: this.state.example
            }
            console.log(newExample)

            this.conceptStore.addExample(newExample, this.state.selectedCategoryId, this.state.selectedSubcategoryId)
            window.location.reload(true)
        }
    }

    componentDidMount() {
        this.conceptStore.getAllCategories()
        this.conceptStore.getAllSubcategories()
        
        this.conceptStore.emitter.addListener('GET_ALL_CATEGORIES_SUCCESS', () => {
            this.setState({
                categories: this.conceptStore.categories
            })
        })

        this.emitter.emit('EXAMPLE_FORM_SUCCESSFUL_LOAD')
        this.conceptStore.emitter.addListener('GET_ALL_SUBCATEGORIES_SUCCESS', () => {
            this.setState({
                subcategories: this.conceptStore.subcategories
            })
        })
      }    

      componentWillUnmount() {
          this.conceptStore.abortController.abort()
      }

    render() {
        const { categories, subcategories } = this.state;

        let categoriesList = categories.length > 0
            && categories.map((item, i) => {    
            return (
                <option key={i} value={item.id}>{item.category}</option>
            )
        }, this);
        

        let subcategoriesList = subcategories.length > 0
            && subcategories.map((item, i) => {
            return (
                <option key={i} value={item.id}>{item.subcategory}</option>
            )
        }, this);

        return (
            <div>
                <div className="addExamplesHeader">Add examples</div>
                <div className="subcategoryForm">
                    <label>Select a category</label>
                    <select className="selectSubcategory" onChange={ this.handleCategorySelectChange }>
                    <option value="defaultValue">Select a category</option>
                        { categoriesList } 
                    </select>
                </div>
                
                <div className="subcategoryForm">
                    <label>Select a subcategory</label>
                    <select className="selectSubcategory" onChange={ this.handleSubcategorySelectChange }> 
                        <option value="defaultValue">Select a subcategory</option>
                        { subcategoriesList }
                    </select>
                </div>
                
                <div className="exampleForm">
                    <label className="exampleLabel">Example</label>
                    <input type="text" name="example" placeholder="example" onChange={ this.handleInputChange }/>
                    <button className="addExampleButton" onClick={ this.add }>Add</button>
                </div>
            </div>
        )
    }
}



export default ExampleForm