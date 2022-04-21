import React, { useContext, useState, useEffect } from 'react';
import CartItem from './CartItem';
import { contexto } from '../../context/CartContext';
import "../../styles/main.css"


const Cart = () => {

    const { cart } = useContext(contexto);
    // const {productsInCart, setProductsInCart} = useState([]);

    // useEffect(() => {
    //     first

    //     return () => {
    //         second
    //     }
    // }, [third])


    return (
        <>

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
                            return <CartItem title={product.title} price={product.price} pictureURL={product.pictureUrl} />
                        })}
                    </div>
                    <div className='w-25 px-5'>
                        <h2>Resumen</h2>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Cart;