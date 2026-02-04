import React from 'react'
import withDarkMode from '../hocs/withDarkMode'

const Heading = (props) => {
    return (
        <div {...props}>
            <h1>This is a Heading</h1>
        </div>
    )
}

export default withDarkMode(Heading)
