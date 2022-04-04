import React, { useState } from "react";
import "../main.css";

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);

    function sumar() {
        if (contador<stock) {
            setContador(contador + 1);    
        }
    }

    function restar() {
        if (contador>0) {
            setContador(contador - 1);    
        }
    }

    function handlerOnAdd() {
        onAdd(contador)
    }

    return (
        <div className="card p-3 mx-auto my-5">
            <>
                <h2 className="text-center">Producto</h2>
                <div className="d-flex flex-row justify-content-around align-items-center">
                    <button className="btn btn-primary" onClick={restar}>-</button>
                    <p className="m-0 w-25 text-center">{contador}</p>
                    <button className="btn btn-primary" onClick={sumar}>+</button>
                </div>
                <button className="btn btn-primary m-3" onClick={handlerOnAdd}>Agregar al carrito</button>
            </>
        </div>
    )
}

export default ItemCount;
