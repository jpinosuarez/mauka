import React from 'react';
// import "../../styles/main.css";
import { Link } from 'react-router-dom/umd/react-router-dom.development';

const Item = (item) => {

    const URL = `/item/${item.id}`;

    return (
        <div className='card d-flex flex-column align-items-center mx-2 '>
            <img className='w-75' src={item.pictureUrl} alt="" />
            <p className='text-center'>{item.title}</p>
            <p className='text-center'>$ {item.price}</p>
            <Link to={URL} className='btn btn-primary'>VER DETALLES</Link>
        </div>
    )
}

export default Item;