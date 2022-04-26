import logo from "../../img/logo.png";
import React from "react";
import CartWidget from "../CartWidget/CartWidget"
import { NavLink} from "react-router-dom";

const NavBar = () => {
    const categories = [
        // { name: "NEW ARRIVALS", route: "/category/newarrivals", id: 1 },
        { name: "HOMBRES", route: "/category/hombres", id: 2 },
        { name: "MUJERES", route: "/category/mujeres", id: 3 },
        { name: "NIÑOS", route: "/category/ninos", id: 4 },
        { name: "WINTER", route: "/category/winter", id: 5 },
        // { name: "SALE", route: "/category/sale", id: 6 }
    ]
    return (
        <>
            <nav className="container" id="navBar">
                <NavLink to="/">
                    <img id="logo" src={logo} alt="logo"></img>
                </NavLink>
                <ul id="navBarItems">
                    {categories.map((element) => {
                        return (
                            <li key={element.id}>
                                <NavLink to={element.route}>{element.name}</NavLink>
                            </li>
                        )
                    })}
                    <li key="cart">
                        <NavLink to="/cart">
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
