import React from 'react';
import './CartWidget.css';
import cart from '../../images/cart.png';

export default function CartWidget() {
    return (
        <>
            <img className='cart'src={cart} alt="Cart" />
        </>
    )
}
