import React from 'react'; //rfce snippet

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetParent}> Greet Parent</button>
        </div>
    )
}

export default ChildComponent
