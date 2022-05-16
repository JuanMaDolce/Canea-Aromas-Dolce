import React, { useContext } from 'react'
import './CartProducts.css'
import CartContext from '../../pages/Store/cart-context'

const CartProducts = ({item}) => {

    const carListCtx = useContext(CartContext)



    return (
        <div className='cartProducts'>
            <img src={item.url} alt="Imagen Producto" />
            <div>
                <h1>{item.name}</h1>
                <h2>Precio Unitario ${item.price}</h2>
            </div>
            <p>{item.quantity}</p>
            <h2 className='deleteProduct' onClick={() => carListCtx.removeProduct(item.id)} >~ Eliminar Unidad ~</h2>
        </div>
    )
}

export default CartProducts