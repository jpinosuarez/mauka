import React, { useState } from "react";
import Item from "./Item";
import "../main.css"

const ItemList = (items) => {
    const productos = items.productos;
    console.log(productos);

    return (

        <div className="d-flex flex-row justify-content-center">
            {productos.map((item) => {
                return <Item key={item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price} />
            })} </div>

    )
}

export default ItemList;