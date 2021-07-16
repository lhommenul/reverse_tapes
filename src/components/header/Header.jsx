import React from 'react'
import "./css/header.css"

const header = () => {
    return (
        <header className="header_nav">
            <img src="" alt="icon reverse tapes" />
            <nav>
                <ul className="list_link_nav">
                    <li><a className="link_nav" href="/">Home</a></li>
                    <li><a className="link_nav" href="/contact">Contact</a></li>
                    <li><a className="link_nav" href="/boutique">Boutique</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default header
