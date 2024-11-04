import React, { useState } from 'react'
import HelloWorld from './HelloWorld'
import Greatings from './Greatings'
import Counter from './Counter'

const App = () => {

  return (
    <>
      <HelloWorld />
      <Greatings nomeUtente={"Marco"} età={18}/>
      <Counter />
    </>
  )
}

export default App
