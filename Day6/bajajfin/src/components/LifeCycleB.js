import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "React"
        }

        console.log("LifeCycleB inside Constructor")
    }

    static getDerivedStateFromProps(props, state){

        console.log("LifeCycleB inside getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleB inside componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("LifeCycleB inside shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleB inside getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("LifeCycleB inside componentDidUpdate")
    }
    render() {
        console.log("LifeCycleB inside render method")
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycleB
