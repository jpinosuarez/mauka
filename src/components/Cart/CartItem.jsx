import React from 'react';
import "../../styles/main.css"

const CartItem = (product) => {

    return (
        <div id='CartItem' className='d-flex flex-row'>
            <div className='w-75 d-flex flex-row align-items-center'>
                <img src={product.pictureURL} alt="" />
                <p>{product.title}</p>
            </div>
            <div className='w-25 d-flex flex-row justify-content-around'>
                <p>${product.price}</p>
                <p>qty</p>
                <p>subtotal</p>
            </div>
        </div>
    )
}

export default CartItem;