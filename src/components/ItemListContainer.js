import React from "react";
import "../main.css";
import ItemCount from "./ItemCount";

function ItemListContainer () {

function onAdd(params) {
    if (params>0) {
        console.log("Usted agregó "+params+" unidad/es al carrito.");
    } else {
        console.log("No ha seleccionado unidades para agregar al carrito");
    }
    
}

    return (
        <>
            <h1 className="text-center">ItemListContainer</h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>    
    )
}

export default ItemListContainer;