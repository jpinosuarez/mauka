import React from 'react';
import "../main.css";

const Item = (item) => {
    return (
        <div className='card d-flex flex-column align-items-center mx-2 '>
            <img className='w-75' src={item.pictureUrl} alt="" />
            <p className='text-center'>{item.title}</p>
            <p className='text-center'>$ {item.price}</p>
            <button className='btn btn-primary'>VER DETALLES</button>
        </div>
    )
}

export default Item;