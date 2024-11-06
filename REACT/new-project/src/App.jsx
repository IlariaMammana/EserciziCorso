import HelloWorld from './HelloWorld'
import Greatings from './Greatings'
import Counter from './Counter'
import TextInput from './TextInput'
import LoginForm from './LoginForm'
import ItemList from './ItemList'
import Card from './Card'
import UncontrolledInput from './UncontrolledInput'

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
      <UncontrolledInput />
      <br/>
      <ItemList items={items} />
      <br />
      <Card>
        <img src="" alt="" />
        <h3>Titolo</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore odio dolore, nam reiciendis ea cupiditate voluptate sapiente deleniti sequi autem doloribus architecto deserunt quo libero veniam molestiae corporis. Non, odio.</p>
        <button>More info</button>
      </Card>
    </>
  )
}

export default App
