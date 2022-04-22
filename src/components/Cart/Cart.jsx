import React, { useContext, useState, useEffect } from 'react';
import CartItem from './CartItem';
import { contexto } from '../../context/CartContext';
import "../../styles/main.css";
import emptyCartImg from '../../img/undraw_empty_cart_co35.svg';
import { Link } from 'react-router-dom/umd/react-router-dom.development';


const Cart = () => {

    const { cart } = useContext(contexto);

    // const IsCartEmpty = () => {
    //     // if (cart.length === 0) { 
    //     //     return true;} else if (cart.length>0) {
    //     //         return false;
    //     //     }
    //     if (cart.length===0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // const {productsInCart, setProductsInCart} = useState([]);

    // useEffect(() => {
    //     first

    //     return () => {
    //         second
    //     }
    // }, [third])




    return (
        <>
            {(cart.length > 0) ?
                <div id='cart' >
                    <h1>Carrito de compras</h1>
                    <div className='d-flex flex-row justify-content-around'>
                        <div className='w-75 px-5'>
                            <ul className='d-flex flex-row justify-content-around'>
                                <li className='w-75'>Item</li>
                                <div className='w-25 d-flex flex-row justify-content-around'>
                                    <li>Precio</li>
                                    <li>Cantidad</li>
                                    <li>Subtotal</li>
                                </div>
                            </ul>
                            {cart.map((product) => {
                                return <CartItem id={product.id} title={product.title} price={product.price} pictureURL={product.pictureUrl} qty={product.qty} />
                            })}
                        </div>
                        <div className='w-25 px-5'>
                            <h2>Resumen</h2>
                        </div>
                    </div>
                </div>
                : <div className='d-flex flex-row justify-content-center'>
                    <div className='d-flex flex-column '>
                        <h1>Carrito vacio</h1>
                        <p>No tienes ningún artículo en tu carrito de compras.</p>
                        <p>Hacé clic <Link to="/">aquí</Link> para continuar comprando.</p>
                    </div>
                    <img className='w-25' src={emptyCartImg} alt="" />
                </div>
            }
        </>
    )

}

export default Cart;