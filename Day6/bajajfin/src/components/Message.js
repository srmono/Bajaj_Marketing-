import React, { Component } from 'react'; //rce snippet to create class component

class Message extends Component {

    //rconst snippet to create constructor with state
    constructor(props) {
        super(props)
    
        this.state = {
             message: "I am from state"
        }
    }
    
    changeMessage = () => {
        this.setState({
            message: "Hey React, I am updated"
        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={this.changeMessage}> Change Message</button>
            </div>
        )
    }
}

export default Message
