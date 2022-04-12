import React, {useState} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = (details) => {

    const [finalizado, setFinalizado] = useState(false);

    const onAdd = (params)=> {
        if (params > 0) {
            console.log("Usted agregó " + params + " unidad/es al carrito.");
        } else {
            console.log("No ha seleccionado unidades para agregar al carrito");
        }
        setFinalizado(true);
    }

    return (
        <>
            <div className='d-flex m-3 border rounded flex-row justify-content-around'>
                <img className='border rounded w-25 m-3' src={details.pictureUrl} alt="" />
                <div className='d-flex flex-column justify-content-center'>
                    <h2>{details.title}</h2>
                    <p>3 Y 6 cuotas sin interés</p>
                    <p>ENVÍO GRATIS COMPRA SUPERIOR A $9900</p>
                    <p>$ {details.price}</p>
                    <p>Stock: {details.stock} unidades</p>
                    {!finalizado ? (
                        <ItemCount onAdd={onAdd} stock={details.stock} initial={1} />
                    ) : (
                        <Link to="/cart">
                            <button className='btn btn-primary'>Ir al carrito</button>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
};

export default ItemDetail;