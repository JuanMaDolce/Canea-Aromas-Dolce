import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import {doc, getDoc} from 'firebase/firestore'
import db from '../../services/firebase';
import './ItemDetailContainer.css'

function getItem(id) {

    const itemRef = doc(db, 'items', id);

    return getDoc(itemRef);
}

export const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams();
    
    useEffect(()=>{
        getItem(itemId)
            .then(snapshot => {
                setItem({...snapshot.data(), id: snapshot.id})
                setLoading(false)
            })
    },[itemId])

    return (
        <div className='box'>
            {!loading ? <ItemDetail item={item}/> : <p>Cargando...</p>}
        </div>
        )
}
