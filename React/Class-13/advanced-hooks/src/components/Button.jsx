import React, { memo } from 'react'

const Button = memo((props) => {
  return (
    <button onClick={props.submitForm} style={{border:'1px solid #ccc'}}>
        submit
    </button>
  )
})

export default Button
