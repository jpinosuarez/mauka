import React from 'react'

const Item = (item) => {
    return (
        <div className='border'>
            <img src={item.pictureUrl} alt="" />
            <h1>{item.title}</h1>
            <p>Precio: {item.price}</p>
        </div>
    )
}

export default Item;