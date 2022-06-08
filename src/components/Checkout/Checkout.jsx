import React, { useState, useContext } from 'react'
import CartContext from '../../pages/Store/cart-context'
import {collection, addDoc} from 'firebase/firestore';
import { Link } from 'react-router-dom'
import db from '../../services/firebase';
import './Checkout.css'

const Checkout = () => {

    const {products, getTotal,clear} = useContext(CartContext)
    const [orderId, setOrderID] = useState()
    const [loading, setLoading] = useState()

    const [buyer, setBuyer] = useState({
        Name:'',
        Phone:'',
        Email:''
    })

    const {Name,Phone,Email} = buyer;

    const handlerChange = (e) =>{
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

    const handlerSubmit = (e) =>{
        e.preventDefault()
        const date = new Date()
        const items = products.map(i=>{return {id:i.id, title:i.name, price:i.price, amount:i.quantity}})
        const total = getTotal()
        const data = {buyer,items,date,total}
        placeOrder(data)
    }

    const placeOrder = async (data) =>{
        setLoading(true)
        try {
            const col = collection(db,"Orders")
            const order = await addDoc(col,data)
            setLoading(false)
            setOrderID(order.id)
            clear()
        } catch (err){
            console.log(err)
        }
    }

    return (
        <div className='checkout'>
            <div >
                {loading ? 
                    <p>Cargando...</p> :
                    (!orderId &&
                    <div className='checkoutForm'>
                        <h1>~ Ingresá tus datos para finalizar tu compra ~</h1>
                        <form onSubmit={handlerSubmit} >
                            <input type="text" name="Name" placeholder="Name" value={Name} onChange={handlerChange} required/>
                            <input type="number" name="Phone" placeholder="Phone" value={Phone} onChange={handlerChange} required/>
                            <input type="email" name="Email" placeholder="Email" value={Email} onChange={handlerChange} required/>
                            <input type="submit" value="Finalizar Compra" />
                        </form>
                    </div>)
                }
            </div>
            <div>
                {
                    orderId && 
                    <div className='order'>
                        <h2>~ Gracias por tu compra {buyer.Name}! ~</h2>
                        <h2>~ Tu orden de compra es la N° {orderId} ~</h2>
                        <h2><Link to='/'>~ Volver al Inicio ~</Link></h2>
                    </div>
                }
            </div>
        </div>
    )
}

export default Checkout