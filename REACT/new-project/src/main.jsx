import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'


import { TodoProvider } from './provider/ToDoContext.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <TodoProvider>
                <App />
            </TodoProvider>
        </BrowserRouter>
)
