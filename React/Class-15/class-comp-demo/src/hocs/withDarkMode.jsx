import React from 'react'

const withDarkMode = (Component) => {
    
    const style = {
        backgroundColor: 'gray',
        color: 'white',
        padding: '1rem',
        marginBottom: '1rem'
    }

    return function (props) {
        return <Component style={style} {...props} />
    }
}

export default withDarkMode
