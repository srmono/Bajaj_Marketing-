import React from 'react'

function Greet(props){
    const {name} = props;

    return <h1> Hello  {name} I am Functional </h1>
}

//const Greet = () => <h1> Hello I am Functional component</h1>

export default Greet;