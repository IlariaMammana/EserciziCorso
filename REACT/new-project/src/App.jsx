import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import About from "./pages/About"

import PublicLayout from './layouts/PublicLayout'
import ToDoDetails from './pages/ToDoDetails'

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<PublicLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="tododetails/:id" element={<ToDoDetails />} />
                </Route>
            </Routes>
        </>
    )
}

export default App