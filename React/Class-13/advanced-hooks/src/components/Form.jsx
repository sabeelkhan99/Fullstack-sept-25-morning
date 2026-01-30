import React, { useRef, useState } from 'react'

const Form = () => {

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const usernameInpRef = useRef();
    const passwordInpRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log('form submitted');
        console.log(usernameInpRef.current.value);
        console.log(passwordInpRef.current.value);

        usernameInpRef.current.value = "";
        passwordInpRef.current.value = "";
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <input type="text" placeholder='username' ref={usernameInpRef}/>
            <input type="password" placeholder='password' ref={ passwordInpRef } />
            <button>Submit</button>
        </form>
    )
}

export default Form
