import React from "react";
import "../main.css";
import ItemCount from "./ItemCount";

function ItemListContainer () {
    return (
        <>
            <h1 className="text-center">ItemListContainer</h1>
            <ItemCount title="tarjetita"/>
        </>    
    )
}

export default ItemListContainer;