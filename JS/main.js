// class Productos {
//     constructor (id, nombre, tipo, descripcion, img, stock){
//         this.id = id,
//         this.nombre= nombre,
//         this.tipo = tipo,
//         this.descripcion = descripcion,
//         this.img = img,
//         this.stock = stock
//     }
// }

let stockProductos = [
    {id:1, nombre: "Mochila Pierre Cardin", tipo: "mochila",descripcion: "Mochila reforzada de 17' con espacio para portanotebook", precio: 13000, color:"azul", img: 'images/Mochila Pierre Cardin Azul USB.png'},
    {id:2, nombre: "Mochila Pierre Cardin", tipo: "mochila",descripcion: "Mochila reforzada de 17' con espacio para portanotebook", precio: 13000,color:"gris", img: 'images/Mochila Pierre Cardin Gris USB.png'},
    {id:3, nombre: "Mochila Head", tipo: "mochila",descripcion: "Mochila de 16' con 2 compartimientos", precio: 7500,color:"negra",img: 'images/Mochila Head Negro.png'},
    {id:3, nombre: "Bolsito Cruzado", tipo: "bolso",descripcion: "100% de cuero vacuno con 2 compartimientos", precio: 8700, color:"Marron",img: 'images/bolsito marron.png'},
    {id:4, nombre: "Bolsito Cruzado", tipo: "bolso",descripcion: "100% de cuero vacuno con 2 compartimientos", precio: 8700, color:"Rosa Claro",img: 'images/bolsito rosa claro.png'},
    {id:5, nombre: "Bolsito Cruzado", tipo: "bolso",descripcion: "BOLSITO CRUZADO,3 CIERRES,MATERIAL PU -INTERIOR MATERIA NO TEJIDO", precio: 8700, color:"Gris",img: 'images/Bolsito.png'},
    {id:6, nombre: "Bandolera Portacelular", tipo: "bandolera",descripcion: "100% de cuero vacuno con 2 compartimientos", precio: 4000, color:"Gris",img: 'images/Bandolera Portacelular3.png'},
    {id:6, nombre: "Bandolera Portacelula", tipo: "bandolera",descripcion: "100% de cuero vacuno con 2 compartimientos", precio: 4000, color:"Rojo",img: 'images/Bandolera Portacelular.png'},
    {id:7, nombre: "Portatermo", tipo: "portatermo",descripcion: "Portatermo de 100% Cuero vacuno", precio: 11000, color:"marron",img: 'images/20210708_185328.png'},
    {id:8, nombre: "Portatermo", tipo: "portatermo",descripcion: "Portatermo de 100% Cuero vacuno", precio: 11000, color:"negro",img: 'images/20210708_184528.png'},
    {id:8, nombre: "Mochila con carro S.W.A.T", tipo: "mochila",descripcion: "Mochila con carro reforzada de S.W.A.T", precio: 16000, color:"Negro",img: 'images/20210708_184813.png'},
    {id:9, nombre: "Kit Juego Set de Asado Carpincho", tipo: "mochila",descripcion: "Incluye cuchillo,tenedor y plato de madera para asado", precio: 5000, color:"marron",img: 'images/Set asado 2.png'},
]

let carritoDeCompras = []
let contenedorProductos = document.getElementById('contenedor-productos');
let contadorCarrito = document.getElementById('contadorCarrito')
let total = document.getElementById('precioTotal')

///     Mostrar Productos en el HTML con JS ////
function mostrarProductos(){
    stockProductos.forEach(item => {
    let div = document.createElement('div')
    div.className = 'card col-md-3'
    div.id = `${item.id}`
    div.innerHTML = `<img class="product-image card-img-top align-self-center" src="${item.img}" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">${item.nombre}</h4>
                        <p class="card-text">${item.descripcion}</p>
                        <button class="add-to-cart add-to-cart btn btn-success">Comprar</button>
                        Precio<span class ="product-prize"> $${item.precio}</span>
                    </div>
                    `
    contenedorProductos.appendChild(div)
    })
}

mostrarProductos()


const carrito = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay"); 

////abrir al hacer click en el carrito/////
carrito.addEventListener("click", ()=>{
    if(cartModalOverlay.classList.contains("open")) {
        cartModalOverlay.classList.remove("open");
    } else {
        cartModalOverlay.classList.add("open");
    }
})

/////cerrar al hacer click en la x en carrito /////
const closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener("click", ()=>{
    cartModalOverlay.classList.remove("open");
})
///Agregar Productos al Carrito cuando aprieto el boton /////

const addToCart = document.getElementsByClassName("add-to-cart")

for(let boton of addToCart){
    boton.addEventListener("click", agregarCarrito)
}

function agregarCarrito(e){
    let boton = e.target;
    let producto = boton.parentElement;
    let prodID = producto.getAttribute("id")
    let prodName = producto.querySelector("h4").innerText;
    let precio = producto.querySelector(".product-prize").innerText;
    let contenedorProd = producto.parentElement
    console.log(contenedorProd)
    let imagen = contenedorProd.querySelector("img").src;
    agregarElemento(prodID,prodName,precio,imagen)
    // carritoDeCompras.push(precio)
    // console.log(precio)
}
///Productos en el Carrito/////

function agregarElemento(prodID,prodName,precio,imagen){
    let productRow = document.createElement("div");
    let contenedorProductos = document.querySelector(".product-rows");
    let elemProducto = `
        <div class="product-row" id="${prodID}">
            <img class="product-cart-image card-img-top align-self-center" src="${imagen}" alt="Card image"/>
            <span class="name-product-cart">${prodName}</span>
            <span class="cart-price">${precio}</span>
            <button class="remove-btn">Borrar</button>
        </div>
    `
    productRow.innerHTML = elemProducto;
    contenedorProductos.append(productRow);
    let botonesBorrar = productRow.querySelectorAll(".remove-btn");
    for(let boton of botonesBorrar) {
        boton.addEventListener("click", borrarElemento);
    }
    cantElementosCarrito();
    Swal.fire({
        background: "#fff",
        position: 'top-end',
        icon: 'success',
        title: 'Añadiste al carrito',
        showConfirmButton: false,
        timer: 1500
    })
    actualizarCarrito ();
}

function borrarElemento(e) {
    btn = e.target;
    btn.parentElement.parentElement.remove();
    cantElementosCarrito();
    actualizarCarrito ();
}

function cantElementosCarrito() {
    let cantidad = document.querySelectorAll(".product-rows > div");
    let cartQuantity = document.querySelector(".cart-quantity");
    cartQuantity.innerText = cantidad.length;
}

// function  actualizarCarrito (){
//     contadorCarrito.innerText = carritoDeCompras.length
//     total.innerText = carritoDeCompras.reduce((acc, el)=> acc + el.precio, 0)
// }
