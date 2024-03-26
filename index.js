//CARROUSEL IMAGENES


let img = {
  0: "./img/image-product-1.jpg",
  1: "./img/image-product-2.jpg",
  2: "./img/image-product-3.jpg",
  3: "./img/image-product-4.jpg"
}

let smallImg = [

   "./img/image-product-1-thumbnail.jpg",
   "./img/image-product-2-thumbnail.jpg",
   "./img/image-product-3-thumbnail.jpg",
   "./img/image-product-4-thumbnail.jpg"
]


let position = 0;
let boxPosition = 0;

//las dos lineas de abajo solo se ejecutan al recargar la página
//en la variable guardamos el elemento html del id img0
let  imgBoxCarousel = document.getElementById('img0');
//le damos una clase a lo guardado previamente en la variable
imgBoxCarousel.classList.add('imgSmallCarousel');


function left() {
  if (position == 0) {
    position = 3;
  } else {
    position = position - 1;
  }
  setMainImg(position)
  // document.querySelector('.imgPrincipal__img').src  = `${img[position]}`;

}

function right() {
  
  if (position == 3) {
    position = 0;
  } else {
    position++;
  }
  setMainImg(position)

  // document.querySelector('.imgPrincipal__img').src  = `${img[position]}`;
}

//SI HACEMOS INNERHTML HACE QUE LA PAGINA SE REFRESQUE Y POR ESO SE REFRESCABAN LAS IMAGENES LA PRIMERA VEZ QUE HACIAMOS CLICK. ES MEJOR PONER EL CODIGO EN HTML Y LUEGO EN JS SOLO MODIFICAR TENIENDO UNA POR DEFECTO, EN VEZ DE CREAR UN NUEVO ELEMENTO Y AÑADIRLO QUE ESO SUPONE QUE SE REFRESQUE LA PAGINA.




// CAMBIO DE IMAGENES
function setMainImg(image){
  position = image
  //Trae un parametro, entonces en el imgDiv se cambia la image principal por el objeto img con el nº que trae desde el onclick, que es la clave en el objeto
 document.querySelector('.imgPrincipal__img').src  = `${img[image]}`;

//elimina la clase añadida previamente al crear la variable imgBoxCarousel
  imgBoxCarousel.classList.remove('imgSmallCarousel');
  //recupera el elemento html seleccionado por id y le añade la clase imgSmallCarousel
  document.getElementById(`img${image}`).classList.add('imgSmallCarousel');
  //guardo en la variable el nuevo elemento 
  imgBoxCarousel = document.getElementById(`img${image}`);

}



// AÑADIR AL CARRITO

let products = document.querySelector('.textContainer__buttonContainer__icon__p').innerHTML = 0;



function addProduct() {
  products = products + 1;
   document.querySelector('.textContainer__buttonContainer__icon__p').textContent = products 
}


function deleteProduct() {
  if (products != 0) {
    products = products - 1;
    document.querySelector('.textContainer__buttonContainer__icon__p').textContent = products
  } 

}

function addCart() {
  
  shopCart()
 
}



const cart = document.querySelector('#cart');
const cartContainer = document.querySelector('#cart-list');
const deleteCartContainerBtn = document.querySelector('#delete-cart');
const add = document.querySelector('#addProduct');


function shopCart() {
  let cost =  products * 125;
  if(products > 0) {

    cart.innerHTML = `
    <p class="textoCosteCesta">Bag</p>
    <hr class="hrBag">
    <div class=containerBag>
    <img class="imgShoesBag" src="./img/image-product-1-thumbnail.jpg" alt="">
    <p class="textCart">Fall Limited Edition Sneakers</p>
    <img class="deleteBag" src="./img/icon-delete.svg" alt="" ">
    </div>
    <span class="costProductsBag">$125.00 x ${products}</span> <span class="totalCost"> $${cost} </span>
    `
  }
  
  
}


//ELIMINAR DE LA CESTA

document.addEventListener("click", function(event){
  if(event.target.className == "deleteBag") {
    cart.innerHTML = '<p id="#cart-list">The bag is empty.</p>';
  }
})





