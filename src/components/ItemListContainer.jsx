import React, { useState, useEffect } from "react";
import "../main.css";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

// =========================
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";
// =========================

const productosIniciales = [
    { id: "buzo1", title: "Buzo Canguro Azul MAUKA", price: 1000, pictureUrl: "https://static.dafiti.com.ar/p/aloud-0708-262147-1-product.jpg" },
    { id: "buzo2", title: "Buzo Canguro Negro MAUKA", price: 1500, pictureUrl: "https://static.dafiti.com.ar/p/aloud-0751-566909-1-product.jpg" },
    { id: "buzo3", title: "Buzo Canguro Naranja MAUKA", price: 2000, pictureUrl: "https://static.dafiti.com.ar/p/boardwise-6895-540319-3-product.jpg" }
];

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productosIniciales);
    }, 2000)
});


const override = css`
    display: block;
    margin: 50px auto;
    border-color: red;
`;

const ItemListContainer = () => {

    // function onAdd(params) {
    //     if (params > 0) {
    //         console.log("Usted agregó " + params + " unidad/es al carrito.");
    //     } else {
    //         console.log("No ha seleccionado unidades para agregar al carrito");
    //     }
    // }

    const [productos, setProductos] = useState([]);
    // =========================
    let [loading, setLoading] = useState(true);
    // =========================

    useEffect(() => {
        console.log(promesa);

        promesa.then((productos) => {
            setProductos(productos)
        }).catch(() => {
            console.log("error");
        }).finally(()=>{
            setLoading(false);
        })

    })



    return (
        <>
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
            <ItemList productos={productos} />
            <GridLoader color="#e87d31" loading={loading} css={override} size={35} />
        </>
    )
}

export default ItemListContainer;