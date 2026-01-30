import React, { useCallback, useState } from 'react'
import Button from './Button'

const Demo = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const submitForm = useCallback((event) => {
        event.preventDefault();
        console.log('Form Submitted');
    }, [])

    return (
        <div>
            <h3>Current Theme: {isDarkTheme ? 'dark' : 'light'}</h3>
            <button onClick={()=> setIsDarkTheme(!isDarkTheme)}>Switch Theme</button>
            <form>
                <input type="text" placeholder='username' />
                <input type="text" placeholder='password' />
                <Button submitForm={ submitForm } />
            </form>
        </div>

    )
}

export default Demo
