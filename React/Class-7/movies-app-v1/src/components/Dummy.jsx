import React from 'react'

const Dummy = (props) => {
    console.log(props);
  return (
    <div>
          <h1>This is a Dummmy Component : {props.name}</h1>
          {props.children}
    </div>
  )
}

export default Dummy
