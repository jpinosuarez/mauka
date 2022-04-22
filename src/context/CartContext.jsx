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

    const removeItem = (item) => {
        const itemToRemove= cart.find(product=>product.id==item.id)
        console.log(itemToRemove);
        const index = cart.indexOf(itemToRemove)
        console.log(index);
        const aux = [...cart];
        aux.splice(index, 1)
        setCart(aux);
    };

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