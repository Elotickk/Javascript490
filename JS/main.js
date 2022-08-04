

////Inventario de Productos ////

class Productos {
    constructor (id, nombre, tipo, descripcion, precio, color, img, stock){
        this.id = id,
        this.nombre= nombre,
        this.tipo = tipo,
        this.descripcion = descripcion,
        this.precio = precio,
        this.color = color,
        this.img = img,
        this.stock = stock
    }
}

const products = []
const prod1 = new Productos("1", "Mochila Pierre Cardin", "mochila", "Mochila reforzada de 17' con espacio para portanotebook", 13000, "azul",'images/Mochila Pierre Cardin Azul USB.png', 1);
const prod2 = new Productos("2",  "Mochila Pierre Cardin",  "mochila", "Mochila reforzada de 17' con espacio para portanotebook",  13000, "gris",  'images/Mochila Pierre Cardin Gris USB.png',2)
const prod3 = new Productos("3",  "Mochila Head",  "mochila", "Mochila de 16' con 2 compartimientos", 7500, "negra", 'images/Mochila Head Negro.png',2)
const prod4 = new Productos("4",  "Bolsito Cruzado",  "bolso", "100% de cuero vacuno con 2 compartimientos",  8700, "Marron", 'images/bolsito marron.png',2)
const prod5 = new Productos("5",  "Bolsito Cruzado",  "bolso", "100% de cuero vacuno con 2 compartimientos",  8700, "Rosa Claro", 'images/bolsito rosa claro.png',2)
const prod6 = new Productos("6",  "Bolsito Cruzado",  "bolso", "BOLSITO CRUZADO,3 CIERRES,MATERIAL PU -INTERIOR MATERIA NO TEJO",  8700, "Gris", 'images/Bolsito.png',3)
const prod7 = new Productos("7",  "Bandolera Portacelular",  "bandolera", "100% de cuero vacuno con 2 compartimientos",  4000, "Gris", 'images/Bandolera Portacelular3.png',5)
const prod8 = new Productos("8",  "Bandolera Portacelula",  "bandolera", "100% de cuero vacuno con 2 compartimientos",  4000, "Rojo", 'images/Bandolera Portacelular.png',4)
const prod9 = new Productos("9",  "Portatermo",  "portatermo", "Portatermo de 100% Cuero vacuno",  11000, "marron", 'images/20210708_185328.png',3)
const prod10 = new Productos("10",  "Portatermo",  "portatermo", "Portatermo de 100% Cuero vacuno",  11000, "negro", 'images/20210708_184528.png',2)
const prod11 = new Productos("11",  "Mochila con carro S.W.A.T",  "mochila", "Mochila con carro reforzada de S.W.A.T",  16000, "Negro", 'images/20210708_184813.png',3)
const prod12 = new Productos("12",  "Kit Juego Set de Asado Carpincho",  "Asado", "Incluye cuchillo,tenedor y plato de madera para asado",  5000, "marron", 'images/Set asado 2.png',2)

products.push(prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10, prod11, prod12)

class Carrito{
    constructor(id,nombre,imagen,precio,cantidad){
        this.id = id,
        this.nombre = nombre,
        this.imagen = imagen,
        this.precio = precio,
        this.cantidad = cantidad
    }
}




let contenedorProductos = document.getElementById('contenedor-productos');

///     Mostrar Productos en el HTML con JS ////
function mostrarProductos(){
    products.forEach(item => {
    let div = document.createElement('div')
    div.className = 'card col-md-3'
    div.id = `${item.id}`
    div.innerHTML = `<img class="product-image card-img-top align-self-center" src="${item.img}" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">${item.nombre}</h4>
                        <p class="card-text">${item.descripcion}</p>
                        <button class="add-to-cart add-to-cart btn btn-success">Comprar</button>
                        <p>Precio:$<span class ="product-prize">${item.precio}</span></p>
                    </div>
                    `
    contenedorProductos.appendChild(div)
    })
}

mostrarProductos()

////////////////

let carritoDeCompras = []
console.log(carritoDeCompras)
const carrito = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");
let contadorCarrito = document.getElementById('contadorCarrito')
let total = document.getElementById('precioTotal') 


function agregarCarrito(e){
    let boton = e.target;
    let producto = boton.parentElement;
    let prodName = producto.querySelector("h4").innerText;
    let precio = parseFloat(producto.querySelector(".product-prize").innerText);
    let contenedorProd = producto.parentElement
    let prodID = contenedorProd.getAttribute("id")
    let imagen = contenedorProd.querySelector("img").src;
    let buscar = products.find(elemento => elemento.id == prodID)
    if(buscar){
        let productoAgregado = carritoDeCompras.find(elemento => elemento.id == buscar.id)
        if(productoAgregado){
            productoAgregado.cantidad += 1
        }else{
            carritoDeCompras.push(new Carrito( prodID,prodName,imagen,precio,1))
            agregarElemento(prodID,prodName,precio,imagen)
        }
    }
    localStorage.setItem("products",JSON.stringify(carritoDeCompras))
    Swal.fire({
        background: "#fff",
        position: 'top-end',
        icon: 'success',
        title: 'Añadiste al carrito',
        showConfirmButton: false,
        timer: 1500
    })
    actualizarCarrito()
    console.log(carritoDeCompras)
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
    actualizarCarrito()
    cantElementosCarrito();
    Swal.fire({
        background: "#fff",
        position: 'top-end',
        icon: 'success',
        title: 'Añadiste al carrito',
        showConfirmButton: false,
        timer: 1500
    })
    actualizarCarrito()
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

function  actualizarCarrito (){
    contadorCarrito.innerText = carritoDeCompras.length
    total.innerText = carritoDeCompras.reduce((acc, el)=> acc + el.precio, 0)
}


///MODAL/////
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
