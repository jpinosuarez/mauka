import logo from "./logo.png";
import React from "react";
import "./navBar.css";

function NavBar() {
    return (
        <>
            <nav id="navBar">
                <a href="index.html">
                    <img id="logo" src={logo}></img>
                </a>
                <p>MAUKA TIENDA ONLINE</p>
                <ul id="navBarItems">
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Mi Cuenta</a>
                    </li>
                    <li>
                        <a href="#">Carrito</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
