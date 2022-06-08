import React, {useState} from 'react'
import './ItemCount.css'

export const ItemCount = ({stock,initial,onAdd}) => {

    const [count, setCount] = useState(initial)

    function sumar() {
        if (count < stock) {
            setCount(count + 1)
        } 
    }

    function restar() {
        if (count > initial){
            setCount(count - 1)
        }
    }

    return (
        <div className='counter'>
            <button className='buttons' onClick={() => restar()}>-</button>
            <input readOnly value={count} />
            <button className='buttons' onClick={() => sumar()}>+</button>
            <div>
                <button className='buttons' onClick={count > stock ? null : () => onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}