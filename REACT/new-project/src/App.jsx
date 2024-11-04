import HelloWorld from './HelloWorld'
import Greatings from './Greatings'
import Counter from './Counter'
import TextInput from './TextInput'

const App = () => {

  return (
    <>
      <HelloWorld />
      <Greatings nomeUtente={"Marco"} età={18}/>
      <br />
      <Counter />
      <br />
      <br />
      <TextInput />
      <br />
    </>
  )
}

export default App
