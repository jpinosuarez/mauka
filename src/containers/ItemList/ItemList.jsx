import React from "react";
import Item from "./Item";
import GridSystem from "../../components/GridSystem/GridSystem";

const ItemList = (items) => {
    const productos = items.productos;

    return (
        <>
            <GridSystem colCount={4} md={6}>

                {productos.map((item) => {
                    return <Item key={item.id} id={item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price} />
                })}

                {/* {productos.length > 0 ?
                    productos.map((item) => {
                        return <Item key={item.id} id={item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price} />
                    })
                    : [<p>No se encontraron productos</p>]} */}
            </GridSystem>


        </>
    )
}

export default ItemList;