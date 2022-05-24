import React, { useContext } from 'react';
import cart from '../../images/cart.png';
import CartContext from '../../pages/Store/cart-context';
import { Link } from 'react-router-dom';
import './CartWidget.css';

export default function CartWidget() {

    const widgetCtx = useContext(CartContext)

    return (
        <>
        {widgetCtx.products.length ? <Link to='/Cart'>
            <div className='cartWidget'>
                <img src={cart} alt="Cart"/>
                <p>{widgetCtx.getCartQuantity()}</p>
            </div></Link>
            : null} 
        </>
    )
}
