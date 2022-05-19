import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../../components/ItemList/ItemList';
import './ItemListContainer.css'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

function recibirProductos(category) {
    const db = getFirestore();

    const itemCollection = collection(db, 'items');

    const q = category && query(
        itemCollection,
        where('category', '==', category)
    );

    return getDocs(q || itemCollection)
}


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setloading] = useState(true)
    const { categoryId } = useParams();

    useEffect(()=>{

        recibirProductos(categoryId)
            .then(snapshot =>{
                setProductos(snapshot.docs.map(doc => {
                    return {...doc.data(), id: doc.id}
                })) 
                setloading(false)
            })
    },[categoryId]);

    return (
        <div className='box'>
            <div className='cardsList'>
            {!loading ? <ItemList items={productos}/> : <p>Cargando...</p>}
            </div>
        </div>
        )
}
