import React, { useContext } from 'react'
import CartContext from '../../pages/Store/cart-context'
import './CartProducts.css'

const CartProducts = ({item}) => {

    const carListCtx = useContext(CartContext)

    return (
        <div className='cartProducts'>
            <img src={item.url} alt="Imagen Producto" />
            <div>
                <h1>{item.name}</h1>
                <h3>Precio Unitario ${item.price}</h3>
            </div>
            <p>{item.quantity}</p>
            <div className='deleteProduct'>
                <h2  onClick={() => carListCtx.removeProduct(item.id)} >~ Eliminar Unidad ~</h2>
                <h2 onClick={() => carListCtx.removeAllProduct(item.id)} >~ Eliminar el Producto ~</h2>
            </div>
        </div>
    )
}

export default CartProducts