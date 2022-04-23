import React, {useState, useContext} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { contexto } from '../../context/CartContext';


const ItemDetail = (details) => {

    const [finalizado, setFinalizado] = useState(false);
    const {addProduct} = useContext(contexto);

    const onAdd = (params)=> {
        if (params > 0) {
            addProduct(details, params);
        } else {
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
                        <div className='d-flex flex-column align-items-center'>
                        <Link to="/cart">
                            <button className='btn btn-primary my-2'>Ir al carrito</button>
                        </Link>
                        <Link to="/">
                            <button className='btn btn-primary my-2'>Ver más productos</button>
                        </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
};

export default ItemDetail;