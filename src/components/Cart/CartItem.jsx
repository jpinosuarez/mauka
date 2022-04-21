import React from 'react';

const CartItem = (product) => {

    return (
        <div className='d-flex flex-row'>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
        </div>
    )
}

export default CartItem;