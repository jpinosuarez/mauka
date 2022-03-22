import React from "react";
import "../main.css";

function ItemCount (props) {
    return (
        <div className="card mx-auto my-5">
            {props.title}
        </div>
    )
}

export default ItemCount;
