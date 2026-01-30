import React, { useState } from 'react'
import useToggle from '../hooks/useToggle';

const Person = () => {

    const [isHeartBroken, toggleHeartBroken] = useToggle(false);

    const toggleHeartBrokenHandler = () => {
        toggleHeartBroken();
    }
    
    return (
        <div>
            <h2 onClick={toggleHeartBrokenHandler}>{ isHeartBroken ? '💔' : '💚' }</h2>
        </div>
    )
}

export default Person
