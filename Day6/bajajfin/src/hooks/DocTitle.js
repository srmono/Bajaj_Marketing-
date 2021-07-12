import React, {useState, useEffect } from 'react'

function DocTitle() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // every time component update/re render 
    useEffect( () => {
        document.title = `React App ${count}`
        console.log("use effect called")
    }, [ ])


    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />

            <button onClick={ () => setCount(count + 1)}> Clicked { count} times </button>
        </div>
    )
}

export default DocTitle
