import './header.styles.css'

/**
 * Header components
 *
 * @returns Header HTML
 */
const Header = (container) => {
    const headerRoot = document.createElement('div')
    headerRoot.innerHTML = `
        <header class="header-container">
            <img src="./assets/logo.png" />
        </header>
    `

    container.appendChild(headerRoot)
}

export default Header
