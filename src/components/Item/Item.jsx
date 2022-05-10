import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {
    return (
        <>
            <div className='products'>
                <div>
                    <h2>{item.nombre}</h2>
                    <img src={item.url} alt="" />
                </div>
                <Link to={'/item/' + item?.id} className='detalle' >~Detalle~</Link>
            </div>
        </>
    )
}
