import React, { useContext, useState, useEffect } from 'react';
import CartItem from './CartItem';
import { contexto } from '../../context/CartContext';


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
        cart.map((product) => {
            return <CartItem title={product.title} price={product.price} />
        })
    )
}

export default Cart;