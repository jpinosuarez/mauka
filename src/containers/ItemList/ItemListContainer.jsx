import React, { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom/umd/react-router-dom.development";
import { db } from "../../firebase/firebase";

// =========================
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";
// =========================

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(productosIniciales);
//     }, 2000)
// });

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

    const { id } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, "ItemCollection")
        const q = query(productsCollection, where("category", "==", `${id}`));

        const llamado = id ? q : productsCollection;

        getDocs(llamado)
            .then((result) => {
                const docs = result.docs;
                const lista = docs.map((producto) => {
                    const id = producto.id;
                    const product = { id, ...producto.data() }
                    return product;
                });
                setProductos(lista);
            })
            .catch(error => { console.log(error); })
            .finally(() => { setLoading(false) })
    }, [id])

    return (
        <>
            <ItemList productos={productos} />
            <GridLoader color="#e87d31" loading={loading} css={override} size={35} />
        </>
    )
}

export default ItemListContainer;