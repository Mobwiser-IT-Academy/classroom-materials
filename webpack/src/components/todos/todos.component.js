import './todos.styles.css'

/**
 * All todos
 */
const todos = [
    { id: '1', title: 'Task #1' },
    { id: '2', title: 'Task #2' },
    { id: '3', title: 'Task #3' },
    { id: '4', title: 'Task #4' },
    { id: '5', title: 'Task #5' },
    { id: '6', title: 'Task #6' },
    { id: '7', title: 'Task #7' },
    { id: '8', title: 'Task #8' },
    { id: '9', title: 'Task #9' },
    { id: '10', title: 'Task #10' },
]

/**
 * The html template
 */
const template = () => {
    let todosHtml = ''
    todos.forEach((todo) => {
        todosHtml += `<div class="todo-container">
        <p id="${todo.id}">${todo.title}</p>
        <button class="todo-button">Done</button>
    </div>`
    })
    return `
        <div>
            ${todosHtml}
        </div>
    `
}

/**
 * Button click event handler
 *
 * @param {*} event - the target event
 */
const onButtonclick = (event) => {
    event.currentTarget.closest('.todo-container').classList.add('done')
}

/**
 * Register click events on todos buttons
 *
 * @param {*} container - todos element container
 */
const registerEvents = (container) => {
    const buttons = container.querySelectorAll('.todo-button')
    for (const button of buttons) {
        button.addEventListener('click', (event) => onButtonclick(event))
    }
}

/**
 * Todos component
 *
 * @param {*} container - the node element where the todos will be added
 */
const Todos = (container) => {
    const todos = document.createElement('div')
    todos.innerHTML = template()
    container.appendChild(todos)

    registerEvents(container)
}

export default Todos
