import React, {createContext, useState} from 'react';

export const contexto = createContext();
const {Provider} = contexto;

const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (product, qty) => {
        const newProduct = {...product, qty};
        if (IsInCart(product.id)) {
            const productFind = cart.find(product=>product.id===newProduct.id);
            const index = cart.indexOf(productFind);
            const aux = [...cart];
            aux[index].qty += qty;
            setCart(aux);
        } else {
            setCart([...cart, newProduct]);
        }
    };

    const removeItem = () => {};

    const IsInCart = (id) => {
        return false;
    };

    const clear = () => {
        setCart([]);
    }

    const ContextValue = {
        cart,
        addProduct,
        removeItem,
        IsInCart,
        clear
    }

    return (
        <Provider value={ContextValue}>
            {children}
        </Provider>
    )
}

export default CustomProvider;