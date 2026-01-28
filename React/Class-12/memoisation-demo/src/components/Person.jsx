import React, { memo } from 'react'

const Person = memo((props) => {
    console.log('person re-rendered');
  return (
    <div>
          <h2>Name: {props.name }</h2>
    </div>
  )
})

export default Person
