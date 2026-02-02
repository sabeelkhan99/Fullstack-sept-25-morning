import React, { useState } from 'react'

const useVisibility = (initialVal=false) => {

    const [visibility, setVisibility] = useState(initialVal);
    
    const hide = () => {
        setVisibility(false);
    }

    const show = () => {
        setVisibility(true);
    }

    const toggle = () => {
        setVisibility((prevState) => !prevState);
    }

    return { visibility, hide, show, toggle };
}

export default useVisibility;
