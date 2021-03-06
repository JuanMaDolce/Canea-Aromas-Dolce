import {createContext, useState} from 'react';


const CartContext = createContext({
    products: [],
    addProduct: () => {},
    removeProduct: () => {},
    removeAllProduct: () => {},
    clear: () => {},
    isInCart: () => {},
    getCartQuantity: () => {},
    getTotal: () => {},
});

export const CartContextProvider = ({children}) => {

    const [productList,setProductList] = useState([])

    const clear = () => {
        setProductList ([]);
    }

    const isInCart = (id) =>{
        return productList.some(p => p.id);
    }

    const getCartQuantity = () =>{
        return productList.reduce((total,value) => {
            return total + value.quantity
        },0)
    }

    const addProduct = (product) => {
        const repeatedItemIndex = productList.findIndex(item => item.id === product.id)
        if (repeatedItemIndex !== -1) {
            setProductList(productList.map(p => p.id === product.id ? {...p, quantity: p.quantity + product.quantity} : p));
        } else {
            setProductList([product, ...productList]);
        }
    }

    const removeProduct = (id) => {
        const indexToRemove = productList.findIndex(item => item.id === id);
        if (productList[indexToRemove].quantity === 1) {
            setProductList(productList.filter(i => i.id !== id))
        } else {
            setProductList(productList.map(p => p.id === id ? {...p, quantity: p.quantity - 1} : p));
        }
    }

    const removeAllProduct = (id) => {
            setProductList(productList.filter(i => i.id !== id))
    }

    const getTotal = () => {
        const totalProducts = productList.map(item => item.quantity * item.price);
        const totalPrice = totalProducts.reduce((prev, curr) => prev + curr,0);
        return totalPrice
    }


    return (
        <CartContext.Provider value={{
            products: productList,
            addProduct,
            removeProduct,
            clear,
            isInCart,
            getCartQuantity,
            removeAllProduct,
            getTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;