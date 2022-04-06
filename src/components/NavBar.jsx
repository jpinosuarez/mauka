import logo from "./logo.png";
import React from "react";
import "../main.css";
import CartWidget from "./CartWidget"
import { NavLink} from "react-router-dom";

const NavBar = () => {
    const categories = [
        { name: "NEW ARRIVALS", route: "/category/newarrivals", id: 1 },
        { name: "HOMBRES", route: "/category/hombres", id: 2 },
        { name: "MUJERES", route: "/category/mujeres", id: 3 },
        { name: "NIÑOS", route: "/category/ninos", id: 4 },
        { name: "WINTER", route: "/category/winter", id: 5 },
        { name: "SALE", route: "/category/sale", id: 6 }
    ]
    return (
        <>
            <nav id="navBar">
                <NavLink to="/">
                    <img id="logo" src={logo} alt="logo"></img>
                </NavLink>
                <ul id="navBarItems">
                    {categories.map((element) => {
                        return (
                            <li>
                                <NavLink key={element.id} to={element.route}>{element.name}</NavLink>
                            </li>
                        )
                    })}
                    <li>
                        <NavLink key="cart" to="/cart">
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
