import React, {useState} from 'react'
import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

export const ItemDetail = ({item}) => {

    const [productsAdded, setproductsAdded] = useState(null)
    
    function addHandler(quantityToAdd) {
        setproductsAdded(quantityToAdd)
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
                        <h2>{item.precio}</h2>
                    </div>
                    <div className='cardsCount'>
                        {productsAdded ? 
                        <div className='checkOut'>
                            <h2><Link to='/Cart' >~Finalizar Compra~</Link></h2>
                            <p>({productsAdded} Items Aregados)</p>
                        </div> :
                        <ItemCount stock={5} initial={0} onAdd={addHandler}/>}
                    </div>
            </div>
        </>
    )
}