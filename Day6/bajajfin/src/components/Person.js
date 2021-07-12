import React from 'react'

function Person({name}) {

    if(name === "venkat"){
        throw new Error("Not a venkat")
    }

    return (
        <div>
            <h3> {name} </h3>
        </div>
    )
}

export default Person
