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
-Checkout
-CarList

Cada componente posee el código correspondiente que, al recibir los parámetros e instrucciones de los componentes inteligentes, mostrarán la información en el DOM de nuestro carrito.

Los componentes obtienen diferentes porpiedades para vincular los componentes padre, con los hijos, para poder imprimir la información en en DOM.

### Componentes "Inteligentes"

Se crean dos componentes inteligentes, separados en 3 páginas:

-ItemListContainer
-ItemDetailContainer
-Cart

Dentro de cada componente se obtiene un array de objetos desde la "base de datos" en firebase, utilizando useParams, doc, getDoc y demás funciones; que utilizaremos para obtener la información que se imprimirá en el DOM, y que toman como parámetro los componentes "tontos"

Se utilizan hooks tales como useEffect / useParams / useState para interactuar con el array de objetos, modificando las cantidades de los productos seleccionados, creando un nuevo array que utilizaremos posteriormente para crear la orden de compra.

### Vinculando páginas

Para vincular las páginas y no perder información entre ellas, se crean las rutas (Routes y Route) utilizando el npm react-router-dom y accediendo a los items y categorías de cada elemento que se ha impreso en el DOM, tomando como parámetro las propiedades de los objetos hardcodeados en el array de objetos.

### Se crea el Contexto

Componente y página:
-Store

Se da forma al contexto que se utilizará y contendrá las distintas funciones y datos que podremos incorporar a las distintas secciones de la aplicación

### Detalle de Items e Incorporación al Carrito

Se crea el botón que incorpora los items al carrito, seleccionando unidades con el límite establecido por el stock disponible. Posteriormente los items son incorporados en un array de objetos que contiene los datos de los items incorporados y las cantidades seleccionadas, esto se muestra en la página correspondiente al carrito, donde se puedem eliminar unidades o productos enteros, dando la posibilidad de ejecutar el botón "comprar".

### Formulario de compra y N° de Orden

Finalmente se realiza el ingreso de los datos que generarán el detalle del comprador, junto con la ejecución de la orden de compra obtenida por la creación de la colección de datos utilizando la propiedad collection de Fire Base, la cual mostrará el ID creado en función de los datos almacenados en Fire Base.