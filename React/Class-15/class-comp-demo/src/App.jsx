import React from 'react'
import Button from './components/Button'
import Counter from './components/Counter'
import Person from './components/Person'
import Heading from './components/Heading'

const App = () => {
    return (
        <div>
            <h1>Class Based Components</h1>
            <Button />
            <Counter />
            <Person />
            <Heading/>
        </div>
    )
}

export default App
