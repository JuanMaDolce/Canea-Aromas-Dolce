import React, {useState} from 'react'
import './ItemCount.css'

export const ItemCount = ({stock,initial,onAdd}) => {

    const [count, setCount] = useState(initial)

    function sumar() {
        if (count < stock){
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
            <button onClick={() => restar()}>-</button>
            <input readOnly value={count} />
            <button onClick={() => sumar()}>+</button>
            <div>
                <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}