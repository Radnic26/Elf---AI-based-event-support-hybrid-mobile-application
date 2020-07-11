import React from 'react'
import './ConceptsForm.css'
import CategoryForm from '../CategoryForm/CategoryForm'
import SubcategoryForm from '../SubcategoryForm/SubcategoryForm'
import ExampleForm from '../ExampleForm/ExampleForm'

class ConceptsForm extends React.Component {
    
    render() {
        return (
            <div className="ConceptsForm">
                <CategoryForm />
                <SubcategoryForm />
                <ExampleForm />
            </div>
        )
    }
}



export default ConceptsForm