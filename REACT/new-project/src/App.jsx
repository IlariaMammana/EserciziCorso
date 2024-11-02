import React from 'react'
import HelloWorld from './HelloWorld'
import Greatings from './Greatings'

const App = () => {

  return (
    <>
      <HelloWorld />
      <Greatings nomeUtente={"Marco"} età={18}/>
    </>
  )
}

export default App
