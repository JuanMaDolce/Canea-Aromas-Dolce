import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../images/logo.png';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <div className='nav'>
            <img className='logo' src={logo} alt="logo" />
            <nav>
                <ul className='categorias'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/category/velas'>Velas</NavLink></li>
                    <li><NavLink to='/category/hornitos'>Hornitos</NavLink></li>
                    <li><NavLink to='/category/difusores'>Difusores</NavLink></li>
                </ul>
            </nav>
            <CartWidget />
        </div>
    );
}
export default NavBar;
