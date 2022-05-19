import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import './ItemDetailContainer.css'

function getItem(id) {
    const db = getFirestore();

    const itemRef = doc(db, 'items', id);

    return getDoc(itemRef);
}

export const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setloading] = useState(true)
    const { itemId } = useParams();
    
    useEffect(()=>{
        getItem(itemId)
            .then(snapshot => {
                setItem({...snapshot.data(), id: snapshot.id})
                setloading(false)
            })
    },[itemId])

    return (
        <div className='box'>
            {!loading ? <ItemDetail item={item}/> : <p>Cargando...</p>}
        </div>
        )
}
