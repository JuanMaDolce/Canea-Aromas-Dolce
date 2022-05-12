import React, {useContext} from 'react'
import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import CartContext from '../../pages/Store/cart-context'

export const ItemDetail = ({item}) => {

    const cartCtx = useContext(CartContext);
    
    function addHandler(quantityToAdd) {
        cartCtx.addProduct({quantity: quantityToAdd, ...item});
    }

    return (
        <>
            <div className='boxCart'>
                    <div className='cardsItem'>
                        <img src={item.url} alt="" />
                    </div>
                    <div className='cardsDescription'>
                        <h2>{item.nombre}</h2>
                        <p>{item.description}</p>
                        <h2>{item.price}</h2>
                    </div>
                    <div className='cartControler'>
                        <ItemCount stock={5} initial={0} onAdd={addHandler}/>
                        <button className='buttons' onClick={() => console.log(cartCtx.products)} >Ver Carrito</button>
                        <button className='buttons' onClick={() => cartCtx.removeProduct(item.id)} >Eliminar Producto</button>
                        <button className='buttons' onClick={() => cartCtx.clear()} >Vaciar Carrito</button>
                        <button className='buttons' onClick={() => console.log(cartCtx.isInCart(item.id))} >¿Producto Agregado?</button>
                        <button className='buttons' onClick={() => alert('Total de Items en el Carrito ' + cartCtx.getCartQuantity())} >Cantidad Total</button>
                        <div className='checkOut'>
                            {cartCtx.products.length ? <h2><Link to='/Cart'>~Finalizar Compra~</Link></h2> : null}
                            <p>({ cartCtx.getCartQuantity()} Items)</p>
                        </div>
                    </div>
            </div>
        </>
    )
}