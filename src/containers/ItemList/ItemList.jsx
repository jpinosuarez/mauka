import React from "react";
import Item from "./Item";

const ItemList = (items) => {
    const productos = items.productos;

    return (
        <>
            <div className="d-flex flex-row justify-content-center">
                {productos.map((item) => {
                    return <Item key={item.id} id={item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price} />
                })}
            </div>
        </>
    )
}

export default ItemList;