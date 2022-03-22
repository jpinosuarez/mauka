import logo from "./logo.png";
import React from "react";
import "../main.css";
import CartWidget from "./CartWidget"

function NavBar() {
    return (
        <>
            <nav id="navBar">
                <a href="index.html">
                    <img id="logo" src={logo}></img>
                </a>
                <ul id="navBarItems">
                    <li>
                        <a href="#">PRODUCTOS</a>
                    </li>
                    <li>
                        <a href="#">MI CUENTA</a>
                    </li>
                    <li>
                        <CartWidget/>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
