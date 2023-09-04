import React, { useState } from "react"
import { Link } from "react-router-dom"

import menus from "../constants/menus.js"

import logoImg from "../images/logo.png"

const Menu = () =>{
    return menus.map((menu, index) =>{
        return(
            menu.display ? 
                <li className="nav-item" key={index}>
                    <Link className="nav-link" to={menu.path}> {menu.title} </Link>
                </li> 
            : 
                null
        )
    })
}

const Menus = () =>{
    // Handle Navbar collapse
    const [isCollapse, setIsCollapse] = useState(true)
    const handleNavCollapse = () => setIsCollapse(!isCollapse)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logoImg} alt="Logo" width="50" height="50" />
                </a>
            <button className="navbar-toggler" onClick={handleNavCollapse} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            <div className={`${isCollapse ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <Menu />
                </ul>
            </div>
        </nav>
    )          
}

export default Menus