import React, { useMemo, useState } from 'react'
import Happy from './Happy';
import Person from './Person';

const largeNumsArray = () => {
    console.log('Executing largeNumsArray function');
    const res = [];
    for (let i = 1; i < 1000000; i++){
        res.push(i);
    }
    return res;
}

const sum = (arr) => {
    console.log('Executing sum function');
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const Counter = () => {
    console.log('counter rerendered')
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Max');
    
    const largeArr = useMemo(()=> largeNumsArray(), []);
    const totalSum = useMemo(()=> sum(largeArr), [largeArr]);


    const changeNameHandler = () => {
        setName('Anonymous');
    }
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={()=> setCount(count+1)}>increment</button>
            <button onClick={() => setCount(count - 1)}>decrememt</button>
            <Happy />
            <Person name={ name } />
            <button onClick={changeNameHandler}>Change Name</button>
            <h2>Sum : { totalSum }</h2>
        </div>
    )
}

export default Counter
