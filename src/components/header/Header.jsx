import React from 'react'
import { Link } from 'react-router-dom'
import "./css/header.css"


const header = () => {
    return (
        <header className="header_nav">
            <img src="" alt="icon reverse tapes" />
            <nav>
                <ul className="list_link_nav">
                    <li><Link className="link_nav" to="/">Home</Link></li>
                    <li><Link className="link_nav" to="/product">Product</Link></li>
                    <li><Link className="link_nav" to="/boutique">Boutique</Link></li>
                    <li><Link className="link_nav" to="/boutique"><img src={process.env.REACT_APP_SERVER+'/static/icon_bascket.svg'} alt="icon pour le panier" /></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default header;
