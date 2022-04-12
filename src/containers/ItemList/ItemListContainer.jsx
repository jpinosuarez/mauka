import React, { useState, useEffect } from "react";
import ItemList from "./ItemList"
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

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    // =========================
    let [loading, setLoading] = useState(true);
    // =========================

    const {id} = useParams();

    useEffect(() => {

        promesa.then((productos) => {
            if (id) {
                setProductos(productos.filter(producto=>producto.category===id))
            }else{
                setProductos(productos)
            }
        }).catch(() => {
            console.log("error");
        }).finally(()=>{
            setLoading(false);
        })

    }, [id])



    return (
        <>
            <ItemList productos={productos} />
            <GridLoader color="#e87d31" loading={loading} css={override} size={35} />
        </>
    )
}

export default ItemListContainer;