import HelloWorld from './HelloWorld'
import Greatings from './Greatings'
import Counter from './Counter'
import TextInput from './TextInput'
import LoginForm from './LoginForm'
import ItemList from './ItemList'

const App = () => {
  const items = ["item 1", "item 2", "item 3"];

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
      <LoginForm />
      <br /> 
      <ItemList items={items} />
    </>
  )
}

export default App
