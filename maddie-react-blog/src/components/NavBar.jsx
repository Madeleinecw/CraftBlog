import React from "react";

const NavBar = (props) => {

    return(

        <header className="nav-bar">
            <ul className="nav-bar-links">
                <li className="nav-link">
                    <a href="/tags/1">Knits</a>
                </li>
                <li className="nav-link">
                    <a href="/tags/2">Embroideries</a>
                </li>
                <li className="nav-link">
                    <a href="/about">About</a>
                </li>
                <li className="nav-link">
                    <a href="/">Home</a>
                </li>
            </ul>
        </header>
    )

}

export default NavBar;