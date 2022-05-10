# Proyecto Final curso REACT 

El proyecto consta en la creación de un carrito de compra para una web ya creada en un curso previo, disponible en otro repositorio:

https://github.com/JuanMaDolce/CanelaAromas.git

## Componentes "Tontos"

Se crean distintos componentes en contenedor "tontos" que se utilizan en distintas paginas:

-NavBar
-Item
-ItemCount
-ItemDetail
-CarWidget
-ItemList

Cada componente posee el código correspondiente que, al recibir los parámetros e instrucciones de los componentes inteligentes, mostrarán la información en el DOM de nuestro carrito.

Los componentes obtienen diferentes porpiedades para vincular los componentes padre, con los hijos, para poder imprimir la información en en DOM.

### Componentes "Inteligentes"

Se crean dos componentes inteligentes, separados en dos páginas:

-ItemListContainer
-ItemDetailContainer

Dentro de cada componente se hardcodea un array de objetos que utilizaremos para obtener la información que se imprimirá en el DOM, y que toman como parámetro los componentes "tontos"

Se utilizan hooks tales como useEffect / useParams / useState para interactuar con el array de objetos, simular llamadas asincrónicas a la API, estableces los parámetros de inicio y actualización del estado del DOM.

### Vinculando páginas

Para vincular las páginas y no perder información entre ellas, se crean las rutas (Routes y Route) utilizando el npm react-router-dom y accediendo a los items y categorías de cada elemento que se ha impreso en el DOM, tomando como parámetro las propiedades de los objetos hardcodeados en el array de objetos.
