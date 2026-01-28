import React, {memo} from 'react'

const Happy = memo(() => {
    console.log('Happy re-rendered');
  return (
    <div>
        <h2>I am - 😀</h2>
    </div>
  )
})

export default Happy
