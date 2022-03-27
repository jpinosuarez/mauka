import React, { useState } from "react";
import Item from "./Item";
import "../main.css"

const ItemList = (items) => {

    const [productos, setProductos] = useState([
        { id: "buzo1", title: "buzo1", price: 1000, pictureUrl: "https://static.dafiti.com.ar/p/aloud-0708-262147-1-product.jpg" },
        { id: "buzo2", title: "buzo2", price: 1500, pictureUrl: "https://static.dafiti.com.ar/p/aloud-0751-566909-1-product.jpg" },
        { id: "buzo3", title: "buzo3", price: 2000, pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/021/090/products/buzo-111-b94d01cd5eddb21d7a15995687983936-640-0.png" }
    ])

    return (
        <>
            <div className="border m-2 p-5">
                <h2 className="text-center p-5 m-2">ItemList</h2>
                <div className="row">
                    {productos.map((item) => {
                        return <Item key={item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default ItemList;