import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../../components/ItemList/ItemList';
import {collection, getDocs, query, where} from 'firebase/firestore';
import db from '../../services/firebase';
import './ItemListContainer.css'

function getData(category) {

    const itemCollection = collection(db, 'items');

    const q = category && query(
        itemCollection,
        where('category', '==', category)
    );

    return getDocs(q || itemCollection)
}

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();

    useEffect(()=>{

        getData(categoryId)
            .then(snapshot =>{
                setProductos(snapshot.docs.map(doc => {
                    return {...doc.data(), id: doc.id}
                })) 
                setLoading(false)
            })
    },[categoryId]);

    return (
        <>
        <div data-aos="fade-up" className='box'>
            <div className='cardsList'>
            {!loading ? <ItemList items={productos}/> : <p>Cargando...</p>}
            </div>
        </div>

                </>
        )
}
