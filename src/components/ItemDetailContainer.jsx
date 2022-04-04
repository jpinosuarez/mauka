import React, { useState, useEffect } from "react";
import "../main.css";
import ItemDetail from "./ItemDetail";

// =========================
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";
// =========================

const productoInicial = { id: "buzo1", title: "Buzo Canguro Azul MAUKA", price: 1000, pictureUrl: "https://static.dafiti.com.ar/p/aloud-0708-262147-1-product.jpg", stock: 10 };

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productoInicial);
    }, 2000)
});


const override = css`
    display: block;
    margin: 50px auto;
    border-color: red;
`;

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});
    // =========================
    let [loading, setLoading] = useState(true);
    // =========================

    useEffect(() => {
        console.log(promesa);

        promesa.then((producto) => {
            setProducto(producto)
        }).catch(() => {
            console.log("error");
        }).finally(()=>{
            setLoading(false);
        })

    })

    return (
        <>
            <ItemDetail key={producto.id} title={producto.title} pictureUrl={producto.pictureUrl} price={producto.price} stock={producto.stock} />
            <GridLoader color="#e87d31" loading={loading} css={override} size={35} />
        </>
    )
}

export default ItemDetailContainer;