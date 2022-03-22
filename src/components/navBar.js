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
                        <a href="#">NEW ARRIVALS</a>
                    </li>
                    <li>
                        <a href="#">HOMBRES</a>
                    </li>
                    <li>
                        <a href="#">MUJERES</a>
                    </li>
                    <li>
                        <a href="#">NIÑOS</a>
                    </li>
                    <li>
                        <a href="#">WINTER</a>
                    </li>
                    <li>
                        <a href="#">SALE</a>
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
