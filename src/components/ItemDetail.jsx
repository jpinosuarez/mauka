import React from 'react';


const ItemDetail = (details) => {

    return (
        <>
            <div className='d-flex m-3 border rounded flex-row justify-content-around'>
                <img className='border rounded w-25 m-3' src={details.pictureUrl} alt="" />
                <div className='d-flex flex-column justify-content-center'>
                    <p>{details.title}</p>
                    <p>3 Y 6 cuotas sin interés</p>
                    <p>ENVÍO GRATIS COMPRA SUPERIOR A $9900</p>
                    <p>$ {details.price}</p>
                    <p>Stock: {details.stock} unidades</p>
                    <button className='btn btn-primary'>COMPRAR AHORA</button>
                </div>
            </div>
        </>
    )
};

export default ItemDetail;