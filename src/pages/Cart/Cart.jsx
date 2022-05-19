import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../pages/Store/cart-context'
import CartProducts from '../../components/CartList/CartProducts'
import './Cart.css'


const Cart = () => {

    const cartProducts = useContext(CartContext)

    const totalProducts = cartProducts.products.map(item => item.quantity * item.price);
    const totalPrice = totalProducts.reduce((prev, curr) => prev + curr,0)


    return (
        <div className='cart'>
            {cartProducts.products.map(item => <CartProducts key={item.id} item={item}/>)}
            {cartProducts.products.length 
                ?   <div className='checkOut'>
                        <h2 onClick={() => cartProducts.clear()} >~ Vaciar Carrito ~</h2>
                        <h1>~ Total de la compra ${totalPrice} ~</h1>
                        <h2>~ Finalizar Compra ~</h2>
                    </div>
                : <h1 className='backToHome'><Link to='/'>~ No hay productos en el Carrito ~</Link></h1>
            }
        </div>
    )
}

export default Cart