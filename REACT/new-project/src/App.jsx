import { Routes, Route } from 'react-router-dom'
import { Provider as ReduxProvider } from "react-redux"

import Home from "./pages/Home"
import About from "./pages/About"

import PublicLayout from './layouts/PublicLayout'
import ToDoDetails from './pages/ToDoDetails'
import store from './store/index.js'

const App = () => {
    return (
        <>
        <ReduxProvider store={store}>
            <Routes>
                <Route path='/' element={<PublicLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="tododetails/:id" element={<ToDoDetails />} />
                </Route>
            </Routes>
        </ReduxProvider>
        </>
    )
}

export default App