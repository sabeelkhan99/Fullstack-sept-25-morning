import React from 'react'
import withDarkMode from '../hocs/withDarkMode'

const Login = (props) => {
    return (
        <form {...props}>   
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
            <button>Login</button>
        </form>
    )
}

export default withDarkMode(Login)
