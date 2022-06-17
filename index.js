//CARROUSEL IMAGENES


let img = {
  0: "./img/image-product-1.jpg",
  1: "./img/image-product-2.jpg",
  2: "./img/image-product-3.jpg",
  3: "./img/image-product-4.jpg"
}

let imgPequeña = [

   "./img/image-product-1-thumbnail.jpg",
   "./img/image-product-2-thumbnail.jpg",
   "./img/image-product-3-thumbnail.jpg",
   "./img/image-product-4-thumbnail.jpg"
]


let posicion = 0;
let posicionCuadro = 0;

//las dos lineas de abajo solo se ejecutan al recargar la página
//en la variable guardamos el elemento html del id img0
let  imgCuadroAuxiliar = document.getElementById('img0');
//le damos una clase a lo guardado previamente en la variable
imgCuadroAuxiliar.classList.add('prueba');




function izquierda() {
  if (posicion == 0) {
    posicion = 3;
  } else {
    posicion = posicion - 1;
  }
  setImagenPrincipal(posicion)
  // document.querySelector('.imgPrincipal__img').src  = `${img[posicion]}`;

}

function derecha() {
  
  if (posicion == 3) {
    posicion = 0;
  } else {
    posicion++;
  }
  setImagenPrincipal(posicion)

  // document.querySelector('.imgPrincipal__img').src  = `${img[posicion]}`;
}

//SI HACEMOS INNERHTML HACE QUE LA PAGINA SE REFRESQUE Y POR ESO SE REFRESCABAN LAS IMAGENES LA PRIMERA VEZ QUE HACIAMOS CLICK. ES MEJOR PONER EL CODIGO EN HTML Y LUEGO EN JS SOLO MODIFICAR TENIENDO UNA POR DEFECTO, EN VEZ DE CREAR UN NUEVO ELEMENTO Y AÑADIRLO QUE ESO SUPONE QUE SE REFRESQUE LA PAGINA.




// CAMBIO DE IMAGENES
function setImagenPrincipal(imagen){
  posicion = imagen
  //Trae un parametro, entonces en el imgDiv se cambia la imagen principal por el objeto img con el nº que trae desde el onclick, que es la clave en el objeto
 document.querySelector('.imgPrincipal__img').src  = `${img[imagen]}`;

//elimina la clase añadida previamente al crear la variable imgCuadroAuxiliar
  imgCuadroAuxiliar.classList.remove('prueba');
  //recupera el elemento html seleccionado por id y le añade la clase prueba
  document.getElementById(`img${imagen}`).classList.add('prueba');
  //guardo en la variable el nuevo elemento 
  imgCuadroAuxiliar = document.getElementById(`img${imagen}`);

}



// AÑADIR AL CARRITO

let productos = document.querySelector('.textContainer__buttonContainer__icon__p').innerHTML = 0;



function anyadirProducto() {
  productos = productos + 1;
   document.querySelector('.textContainer__buttonContainer__icon__p').textContent = productos 
}


function eliminarProducto() {
  if (productos != 0) {
    productos = productos - 1;
    document.querySelector('.textContainer__buttonContainer__icon__p').textContent = productos
  } 

}

function anyadirCarrito() {
  
  carroCompra()
 
}



const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const anyadir = document.querySelector('#anyadirProducto');


function carroCompra() {
  let coste =  productos * 125;
  if(productos > 0) {

    carrito.innerHTML = `
    <p class="textoCosteCesta">Cesta</p>
    <hr class="hrCesta">
    <div class=containerCesta>
    <img class="imgzapatillasCesta" src="./img/image-product-1-thumbnail.jpg" alt="">
    <p class="textoCarrito">Fall Limited Edition Sneakers</p>
    <img class="deleteCesta" src="./img/icon-delete.svg" alt="" ">
    </div>
    <span class="costeProductoCesta">$125.00 x ${productos}</span> <span class="costeTotal"> $${coste} </span>
    `
  }
  
  
}


//ELIMINAR DE LA CESTA

document.addEventListener("click", function(event){
  if(event.target.className == "deleteCesta") {
    carrito.innerHTML = '<p id="#lista-carrito">La cesta está vacía.</p>';
  }
})





