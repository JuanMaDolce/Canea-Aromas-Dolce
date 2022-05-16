import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../../components/ItemList/ItemList';
import './ItemListContainer.css'

function recibirProductos(category) {
    const myPromise = new Promise((resolve,reject) => {
        const catalogo = [
            {id:1, name: 'Bergamota', category: 'velas', url:"https://www.namesnack.com/images/namesnack-nombres-para-emprendimiento-de-velas-de-soja-3906x4882-20210526.jpeg?crop=21:16,smart&width=420&dpr=2"},
            {id:2, name: 'Jazmin', category: 'velas', url:"https://ae01.alicdn.com/kf/H6ab3d7eb908443e7acde6d850676886em/Vela-de-aromaterapia-de-250ml-fabricaci-n-de-maceta-de-aire-vela-de-cera-Diy-taza.jpg"},
            {id:3, name: 'Citrus', category: 'velas', url:"https://ae01.alicdn.com/kf/H21a53b7135414f59a2d6fd4e5230fc8eb/Velas-de-aromaterapia-para-fabricaci-n-de-velas-botellas-vac-as-taza-de-vela-de-cera.jpg_Q90.jpg_.webp"},
            {id:4, name: 'Cerámica', category: 'hornitos', url:'https://d3ugyf2ht6aenh.cloudfront.net/stores/893/752/products/20210821_1415501-5ef7984ddf4c7e4f9d16324295480522-1024-1024.jpg'},
            {id:5, name: 'Gota', category: 'hornitos', url:'https://http2.mlstatic.com/D_NQ_NP_775949-MLA42137616874_062020-O.jpg'},
            {id:6, name: 'Clásico', category: 'hornitos', url:'https://d3ugyf2ht6aenh.cloudfront.net/stores/585/864/products/hornito-retocado-guardado1-e4a38ce8879f9596ff15873083420679-1024-1024.jpg'},
            {id:7, name: 'Clásico', category: 'difusores', url:'https://f.fcdn.app/imgs/f14d39/espacioaroma.com/esaruy/180a/original/blog/114/760x0/feed-instagram-ea-1.png'},
            {id:8, name: 'Frasco', category: 'difusores', url:'https://http2.mlstatic.com/D_863225-MLA46713526573_072021-O.jpg'},
            {id:9, name: 'Copón', category: 'difusores', url:'http://d3ugyf2ht6aenh.cloudfront.net/stores/090/013/products/difusor1-1a1bd37d14be0c697016179159242388-640-0.jpg'}
        ];
        const catalogoFilter = category ? catalogo.filter(p => p.category === category) : catalogo;
        setTimeout (() => {
            resolve(catalogoFilter);
        },2000);
    });
    return myPromise;
}


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setloading] = useState(true)
    const { categoryId } = useParams();

    useEffect(()=>{
        
        recibirProductos(categoryId)
            .then(res =>{
                setProductos(res)
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
