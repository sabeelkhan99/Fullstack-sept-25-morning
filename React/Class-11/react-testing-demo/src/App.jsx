import React from 'react'
import Counter from './components/Counter'
import Product from './components/Product'

const App = () => {
  return (
    <div>
          <Counter dummyProp="Hello"/>
          <Product/>
    </div>
  )
}

export default App
