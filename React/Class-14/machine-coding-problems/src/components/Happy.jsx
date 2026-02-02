import React from 'react'
import useVisibility from '../hooks/useVisibility'

const Happy = () => {

    const { visibility: isHappy, toggle: toggleIsHappy } = useVisibility(true);

    return (
        <div>
            <h2 onClick={toggleIsHappy}>{ isHappy ? '😀' : '😡' }</h2>
        </div>
    )
}

export default Happy
