import './index.css'
import Header from './components/header/header.component'
import Todos from './components/todos/todos.component'

/**
 * Render the application
 */
const render = () => {
    const rootElement = document.querySelector('.root')
    Header(rootElement)
    Todos(rootElement)
}

render()
