import React, { Component } from "react";

class Welcome extends Component {

    render(){
        const {name, prof} = this.props;

        return <h1> Hey {name} you are an {prof} </h1>
    }
}

export default Welcome;