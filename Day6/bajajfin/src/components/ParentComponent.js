import React, { Component } from 'react';
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: "parent"
        }
    }

    greetParent = () => {
        alert(`Hello ${this.state.parentName}`)
    }
    
    render() {
        return (
            <div> 
                <ChildComponent greetParent = {this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
