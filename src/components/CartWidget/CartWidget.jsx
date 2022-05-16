import React, { useContext } from 'react';
import './CartWidget.css';
import cart from '../../images/cart.png';
import CartContext from '../../pages/Store/cart-context';

export default function CartWidget() {

    const widgetCtx = useContext(CartContext)

    return (
        <>
        {widgetCtx.products.length ? 
            <div className='cartWidget'>
                <img src={cart} alt="Cart" />
                <p>{widgetCtx.getCartQuantity()}</p>
            </div>
            : null} 
        </>
    )
}
