import React from 'react'
import withAuth from '../hocs/withAuth'

const Person = () => {
    return (
        <div>
            <h2>My Name is Max</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maiores deserunt animi inventore quaerat, provident ad quo aspernatur repellat expedita deleniti amet. Corporis ratione, quia vero ex aliquam dolorum eaque?</p>
        </div>
    )
}

export default  withAuth(Person)
