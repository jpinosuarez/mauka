import React, { createContext, useState } from 'react';

export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [widgetQty, setWidgetQty] = useState(0)
    const [total, setTotal] = useState(0);

    const addProduct = (product, qty) => {
        const newProduct = { ...product, qty };
        const productFind = cart.find(product => product.id === newProduct.id);
        const index = cart.indexOf(productFind);
        const aux = [...cart];
        if (index >= 0) {
            aux[index].qty += qty;
            updateTotals();

        } else {
            setCart([...cart, newProduct]);
            setWidgetQty(widgetQty+qty)
        }

        if (cart.length==0) {
            setTotal(product.price*qty)
        }
    };

    const removeItem = (item) => {
        const itemToRemove = cart.find(product => product.id == item.id)
        const index = cart.indexOf(itemToRemove)
        const aux = [...cart];
        aux.splice(index, 1)
        setCart(aux);
        setWidgetQty(widgetQty-item.qty);
    };

    const clear = () => {
        setCart([]);
    }

    const updateTotals = ()=>{
        let qtyCart = 0;
        let total = 0;
        cart.forEach(product => {
            qtyCart+=product.qty;
            total+=product.price*product.qty;
        });
        setWidgetQty(qtyCart);
        setTotal(total);
    }



    const ContextValue = {
        cart,
        addProduct,
        removeItem,
        clear,
        widgetQty,
        total,
        setTotal,
    }

    return (
        <Provider value={ContextValue}>
            {children}
        </Provider>
    )
}

export default CustomProvider;