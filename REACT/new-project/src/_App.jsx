import HelloWorld from './components/HelloWorld'
import Greatings from './components/Greatings'
import Counter from './components/Counter'
import TextInput from './components/TextInput'
import LoginForm from './components/LoginForm'
import ItemList from './components/ItemList'
import Card from './components/Card'
import UncontrolledInput from './components/UncontrolledInput'
import ToDoList from './components/ToDoList'

const App = () => {
  const items = ["item 1", "item 2", "item 3"];

  return (
    <>
      <HelloWorld />
      <Greatings nomeUtente={"Marco"} età={18} />
      <br />
      <Counter />
      <br />
      <br />
      <TextInput />
      <br />
      <LoginForm />
      <br />
      <UncontrolledInput />
      <br />
      <ItemList items={items} />
      <br />
      <Card>
        <img src="" alt="" />
        <h3>Titolo</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore odio dolore, nam reiciendis ea cupiditate voluptate sapiente deleniti sequi autem doloribus architecto deserunt quo libero veniam molestiae corporis. Non, odio.</p>
        <button>More info</button>
      </Card>
      <br />
      <ToDoList />
    </>
  )
}

export default App
