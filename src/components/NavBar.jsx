import logo from "./logo.png";
import React from "react";
import "../main.css";
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <nav id="navBar">
                <a href="index.html">
                    <img id="logo" src={logo} alt="logo"></img>
                </a>
                <ul id="navBarItems">
                    <li>
                        <p>NEW ARRIVALS</p>
                    </li>
                    <li>
                        <p>HOMBRES</p>
                    </li>
                    <li>
                        <p>MUJERES</p>
                    </li>
                    <li>
                        <p>NIÑOS</p>
                    </li>
                    <li>
                        <p>WINTER</p>
                    </li>
                    <li>
                        <p>SALE</p>
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
