import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "React"
        }

        console.log("LifeCycleA inside Constructor")
    }

    static getDerivedStateFromProps(props, state){

        console.log("LifeCycleA inside getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleA inside componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifeCycleA inside shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleA inside getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate(){
        console.log("LifeCycleA inside componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: "Bajaj Project"
        })
    }
    
    render() {
        console.log("LifeCycleA inside render method")
        return (
            <div>
                <LifeCycleB />
                <button onClick={this.changeState}> Update Name </button>
            </div>
        )
    }
}

export default LifeCycleA
