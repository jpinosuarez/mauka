import React from 'react'

const Item = (item) => {
    return (
        <div className='card d-flex flex-column align-items-center'>
            <img className='w-75' src={item.pictureUrl} alt="" />
            <p className='text-center'>{item.title}</p>
            <p className='text-center'>$ {item.price}</p>
            <button className='btn btn-primary'>Ver detalles</button>
        </div>
    )
}

export default Item;