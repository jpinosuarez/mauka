import React from 'react';
import error404svg from "./error404.svg";

const Error404 = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <img className='w-25 my-5' src={error404svg} alt="" />
            <h1>PÁGINA NO ENCONTRADA</h1>
        </div>
        
    )
};

export default Error404;