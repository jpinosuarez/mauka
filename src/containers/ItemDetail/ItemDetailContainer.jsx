import React, { useState, useEffect } from "react";
// import "../../styles/main.css";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom/umd/react-router-dom.development";
import { productosIniciales } from "../../mock/productosIniciales";

// =========================
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";
// =========================

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

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});
    // =========================
    let [loading, setLoading] = useState(true);
    // =========================
    const {id} = useParams();

    useEffect(() => {
        promesa.then((producto) => {
            setProducto(producto.find(p=>p.id==id))
            console.log(producto);
        }).catch(() => {
            console.log("error");
        }).finally(()=>{
            setLoading(false);
        })
    }, [id])

    return (
        <>
            <ItemDetail key={producto.id} id={producto.id} title={producto.title} pictureUrl={producto.pictureUrl} price={producto.price} stock={producto.stock} />
            <GridLoader color="#e87d31" loading={loading} css={override} size={35} />
        </>
    )
}

export default ItemDetailContainer;