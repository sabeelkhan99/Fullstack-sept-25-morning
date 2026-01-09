import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount((prevState)=> prevState+1);
    }

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={incrementHandler}>+1</button>
        </div>
    )
}

export default Counter
