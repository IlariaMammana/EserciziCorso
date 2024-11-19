import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import About from "./pages/About"

import Navbar from "./components/Navbar"
import PublicLayout from './layouts/PublicLayout'

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<PublicLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </>
    )
}

export default App