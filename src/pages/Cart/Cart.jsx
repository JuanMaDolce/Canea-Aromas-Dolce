import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../pages/Store/cart-context'
import CartProducts from '../../components/CartList/CartProducts'
import './Cart.css'


const Cart = () => {

    const cartProducts = useContext(CartContext)

    return (
        <div className='cart'>
            {cartProducts.products.map(item => <CartProducts key={item.id} item={item}/>)}
            {cartProducts.products.length 
                ?   <div className='purchase'>
                        <h2 onClick={() => cartProducts.clear()} >~ Vaciar Carrito ~</h2>
                        <h1>~ Total de la compra ${cartProducts.getTotal()} ~</h1>
                        <h2><Link to='/checkout'>~ Comprar ~</Link></h2>
                    </div>
                : <h1 className='backToHome'><Link to='/'>~ No hay productos en el Carrito ~</Link></h1>
            }
        </div>
    )
}

export default Cart