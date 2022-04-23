import React, { useContext } from 'react';
import "../../styles/main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { contexto } from '../../context/CartContext';

const CartItem = (product) => {

    const { removeItem } = useContext(contexto);

    const clickHandler = () => {
        removeItem(product)
    };

    return (
        <div className='CartItem border-bottom my-3 border-secondary d-flex flex-column'>
            <div className='d-flex flex-row'>
                <div className='w-75 d-flex flex-row align-items-center'>
                    <img src={product.pictureURL} alt="" />
                    <p>{product.title}</p>
                </div>
                <div className='w-25 d-flex flex-row justify-content-around'>
                    <p>${product.price}</p>
                    <p>{product.qty}</p>
                    <p>${product.qty * product.price}</p>
                </div>
            </div>
            <div className='d-flex justify-content-end mx-1'>
                {/* <button onClick={clickHandler}>
                <FontAwesomeIcon  className='fa-lg w-auto' id="trashIcon" icon={faTrashCan} />
                </button> */}

                <FontAwesomeIcon onClick={clickHandler} className='fa-lg w-auto' id="trashIcon" icon={faTrashCan} />


            </div>
        </div>
    )
}

export default CartItem;