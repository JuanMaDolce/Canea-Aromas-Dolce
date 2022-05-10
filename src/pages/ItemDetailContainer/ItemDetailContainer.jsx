import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

function getItem(id) {
    const myPromise2 = new Promise((resolve,reject) => {
        const catalogo = [
            {id:1, nombre: 'Bergamota', category: 'velas', description: 'Hojas de bergamota y notas de nectarina jugosas sentadas en un ramo de pétalos de iris, jazmín y freesia. Capas de ámbar báltico y haba de tonka.', url:"https://www.namesnack.com/images/namesnack-nombres-para-emprendimiento-de-velas-de-soja-3906x4882-20210526.jpeg?crop=21:16,smart&width=420&dpr=2", precio: '$750'},
            {id:2, nombre: 'Jazmin', category: 'velas', description:'Blend floral inspirado en jazmines, violetas de los alpes, rosas y lilas presentes', url:"https://ae01.alicdn.com/kf/H6ab3d7eb908443e7acde6d850676886em/Vela-de-aromaterapia-de-250ml-fabricaci-n-de-maceta-de-aire-vela-de-cera-Diy-taza.jpg", precio: '$750'},
            {id:3, nombre: 'Citrus', category: 'velas', description:'Diseñada con materiales nobles y naturales, sin conservantes ni colorantes sintéticos, y con los aceites esenciales naturales de Mandarina, Pomelo y Limón.', url:"https://ae01.alicdn.com/kf/H21a53b7135414f59a2d6fd4e5230fc8eb/Velas-de-aromaterapia-para-fabricaci-n-de-velas-botellas-vac-as-taza-de-vela-de-cera.jpg_Q90.jpg_.webp", precio: '$750'},
            {id:4, nombre: 'Cerámica', category: 'hornitos', description:'Hornito de cerámica doble tono', url:'https://d3ugyf2ht6aenh.cloudfront.net/stores/893/752/products/20210821_1415501-5ef7984ddf4c7e4f9d16324295480522-1024-1024.jpg', precio: '$1200'},
            {id:5, nombre: 'Gota', category: 'hornitos', description:' Hornito Gota, diseñado para una mayor iluminación', url:'https://http2.mlstatic.com/D_NQ_NP_775949-MLA42137616874_062020-O.jpg', precio: '$1500'},
            {id:6, nombre: 'Clásico', category: 'hornitos', description:'Hornito de madera, clásico pero elegante', url:'https://d3ugyf2ht6aenh.cloudfront.net/stores/585/864/products/hornito-retocado-guardado1-e4a38ce8879f9596ff15873083420679-1024-1024.jpg', precio: '$800'},
            {id:7, nombre: 'Clásico', category: 'difusores', description:'Disfusor estandar, ideal para uso refill', url:'https://f.fcdn.app/imgs/f14d39/espacioaroma.com/esaruy/180a/original/blog/114/760x0/feed-instagram-ea-1.png', precio: '$500'},
            {id:8, nombre: 'Frasco', category: 'difusores', description:'Frasco aromatizado con flores disecadas aromáticas', url:'https://http2.mlstatic.com/D_863225-MLA46713526573_072021-O.jpg', precio: '$800'},
            {id:9, nombre: 'Copón', category: 'difusores', description:'Difusor en forma de copón, para una mayor cantidad de aromatizante, y durabilidad', url:'http://d3ugyf2ht6aenh.cloudfront.net/stores/090/013/products/difusor1-1a1bd37d14be0c697016179159242388-640-0.jpg', precio: '$600'}
        ];
        const item = catalogo.filter(item => item.id === parseInt(id) )

        setTimeout (() => {
            resolve(item[0]);
        },2000);
    });
    return myPromise2;
}

export const ItemDetailContainer = () => {

    const [item, setDetail] = useState({})
    const { itemId } = useParams();

    useEffect(()=>{
        getItem(itemId)
        .then(res=>{
            setDetail(res)
        })
    },[itemId])

    return (
        <div className='box'>
            <ItemDetail item={item}/>
        </div>
        )
}
