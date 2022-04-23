import React, {useContext} from "react";
import "../../styles/main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { contexto } from "../../context/CartContext";

const CartWidget = () => {

    const {widgetQty} = useContext(contexto);

    return (
        <>
            <FontAwesomeIcon className="fa-2xl" icon={faCartShopping}/>
            <span className="position-absolute translate-middle badge rounded-pill bg-secondary">{widgetQty}</span>
        </>
    )
}

export default CartWidget;