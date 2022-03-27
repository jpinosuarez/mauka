import React, { useState, useEffect } from "react";
import "../main.css";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const productosIniciales = [
    { id: "buzo1", title: "buzo1", price: 1000, pictureUrl: "https://static.dafiti.com.ar/p/aloud-0708-262147-1-product.jpg" },
    { id: "buzo2", title: "buzo2", price: 1500, pictureUrl: "https://static.dafiti.com.ar/p/aloud-0751-566909-1-product.jpg" },
    { id: "buzo3", title: "buzo3", price: 2000, pictureUrl: "https://static.dafiti.com.ar/p/boardwise-6895-540319-3-product.jpg" }
];

const promesa = new Promise ((resolve, reject)=>{
    setTimeout(() => {
        resolve(productosIniciales);
}, 2000)
});

const ItemListContainer = () => {

    // function onAdd(params) {
    //     if (params > 0) {
    //         console.log("Usted agregó " + params + " unidad/es al carrito.");
    //     } else {
    //         console.log("No ha seleccionado unidades para agregar al carrito");
    //     }
    // }

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        console.log(promesa);

        promesa.then(()=>{
            setProductos(productos)
        }).catch(()=>{
            console.log("todo mal");
        })
        
    })



    return (
        <>
            <h1 className="text-center">ItemListContainer</h1>
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
            <ItemList name="joaquin" productos={productosIniciales}/>
        </>
    )
}

export default ItemListContainer;