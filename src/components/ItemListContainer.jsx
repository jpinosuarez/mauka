import React, { useState, useEffect } from "react";
import "../main.css";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom/umd/react-router-dom.development";
import { productosIniciales } from "./mock/productosIniciales";

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

    const {id} = useParams();

    useEffect(() => {

        promesa.then((productos) => {
            if (id) {
                setProductos(productos.filter(producto=>producto.category==id))
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
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
            <ItemList productos={productos} />
            <GridLoader color="#e87d31" loading={loading} css={override} size={35} />
        </>
    )
}

export default ItemListContainer;