let stockProductos = [
    {id:1, nombre: "Mochila Pierre Cardin", tipo: "mochila",descripcion: "Mochila reforzada de 17' con espacio para portanotebook", precio: 13000, color:"azul", img: '../images/Mochila Pierre Cardin Azul USB.png'},
    { id:2, nombre: "Mochila Pierre Cardin", tipo: "mochila",descripcion: "Mochila reforzada de 17' con espacio para portanotebook", precio: 13000,color:"gris", img: '../images/Mochila Pierre Cardin Gris USB.png'},
    { id:3, nombre: "Mochila Head", tipo: "mochila",descripcion: "Mochila de 16' con 2 compartimientos", precio: 7500,color:"negra",img: '../images/Mochila Head Negro.png'},
    {id:3, nombre: "Bolsito Cruzado", tipo: "bolso",descripcion: "100% de cuero vacuno con 2 compartimientos", precio: 8700, color:"Marron",img: '../images/bolsito marron.png'},
    {id:4, nombre: "Bolsito Cruzado", tipo: "bolso",descripcion: "100% de cuero vacuno con 2 compartimientos", precio: 8700, color:"Rosa Claro",img: '../images/bolsito rosa claro.png'},
    {id:5, nombre: "Bolsito Cruzado", tipo: "bolso",descripcion: "BOLSITO CRUZADO,3 CIERRES,MATERIAL PU -INTERIOR MATERIA NO TEJIDO", precio: 8700, color:"Gris",img: '../images/Bolsito.png'},
    {id:6, nombre: "Bandolera Portacelular", tipo: "bandolera",descripcion: "100% de cuero vacuno con 2 compartimientos", precio: 4000, color:"Gris",img: '../images/Bandolera Portacelular3.png'},
    {id:6, nombre: "Bandolera Portacelula", tipo: "bandolera",descripcion: "100% de cuero vacuno con 2 compartimientos", precio: 4000, color:"Rojo",img: '../images/Bandolera Portacelular.png'},
    {id:7, nombre: "Portatermo", tipo: "portatermo",descripcion: "Portatermo de 100% Cuero vacuno", precio: 11000, color:"marron",img: '../images/20210708_185328.png'},
    {id:8, nombre: "Portatermo", tipo: "portatermo",descripcion: "Portatermo de 100% Cuero vacuno", precio: 11000, color:"negro",img: '../images/20210708_184528.png'},
    {id:8, nombre: "Mochila con carro S.W.A.T", tipo: "mochila",descripcion: "Mochila con carro reforzada de S.W.A.T", precio: 16000, color:"Negro",img: '../images/20210708_184813.png'},
    {id:9, nombre: "Kit Juego Set de Asado Carpincho", tipo: "mochila",descripcion: "Incluye cuchillo,tenedor y plato de madera para asado", precio: 5000, color:"marron",img: '../images/Set asado 2.png'},
]


let contenedorProductos = document.getElementById('contenedor-productos');
console.log(contenedorProductos);



function mostrarProductos(){
    stockProductos.forEach(item => {
    let div = document.createElement('div')
    div.className = 'card col-md-3'
    div.innerHTML = `<img class="card-img-top align-self-center"src="${item.img}" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">${item.nombre}</h4>
                        <p class="card-text">${item.descripcion}</p>
                        <a href="#" class="btn btn-success">$${item.precio}</a>
                    </div>
                    `
    contenedorProductos.appendChild(div) 
    })
}

mostrarProductos()
