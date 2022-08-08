let resultadoBusqueda = document.getElementById("resultado__busqueda")
let fraseBusqueda = document.getElementById("frase__busqueda")
const inputNombre = document.getElementById("input__nombre");
const inputCategoria = document.getElementById("input__categoria");
const inputSubcategoria = document.getElementById("input__subcategoria");
const inputPrecio = document.getElementById("input__precio");

let vertodos = document.getElementById("ver__todos")
vertodos.addEventListener("click", mostrarFunkos)

let nuevaBusqueda = document.getElementById("nueva__busqueda")
nuevaBusqueda.addEventListener("click", borrarListado)

const btnNombre= document.getElementById("btn__nombre");
btnNombre.addEventListener("click", getBusquedaNombre)

const btnCategoria= document.getElementById("btn__categoria");
btnCategoria.addEventListener("click", getBusquedaCategoria)

const btnSubcategoria= document.getElementById("btn__subcategoria");
btnSubcategoria.addEventListener("click", getBusquedaSubcategoria)

const btnPrecio= document.getElementById("btn__precio");
btnPrecio.addEventListener("click", getBusquedaPrecio)







function mostrarFunkos(){
    borrarListado()
    listaProductos.funkos.forEach((funko) => {
        let tarjeta = document.createElement("div")
        tarjeta.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="/Assets/${funko.nombre}.jpg" class="card-img-top" alt="funko de ${funko.nombre}">
                                <div class="card-body">
                                    <h3 class="card-title">${funko.nombre}</h3>
                                    <h4 class="card-title">${funko.subcategoria}</h4>
                                    <h5 class="card-title">$${funko.precio}</h5>
                                    <p class="card-text">Funko ${funko.tamanio} ${funko.version}</p>
                                    <button class="agregar__carrito" type="button" id="">Agregar al carrito</button>
                                </div>
                            </div>`
        resultadoBusqueda.appendChild(tarjeta)
    });
    let frase = document.createElement("div")
    frase.innerHTML = `<h2> Estos son todos los funkos que tenemos disponibles</h2>`
    fraseBusqueda.appendChild(frase)
};

function borrarListado(){
    resultadoBusqueda.innerHTML=""
    inputNombre.value = ""
    inputCategoria.value = ""
    inputSubcategoria.value = ""
    inputPrecio.value = ""
    fraseBusqueda.innerHTML = ""
}

function busquedaNombre(){
    let nombre = inputNombre.value
    const busqueda1 = listaProductos.funkos.filter((funk)=>
        funk.nombre.toLowerCase() == nombre.toLowerCase()
    );
    return busqueda1
}
function getBusquedaNombre(){
    fraseBusqueda.innerHTML = ""
    resultadoBusqueda.innerHTML=""
    busquedaNombre().forEach((funko) => {
        let tarjeta = document.createElement("div")
        tarjeta.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="/Assets/${funko.nombre}.jpg" class="card-img-top" alt="funko de ${funko.nombre}">
                                <div class="card-body">
                                    <h3 class="card-title">${funko.nombre}</h3>
                                    <h4 class="card-title">${funko.subcategoria}</h4>
                                    <h5 class="card-title">$${funko.precio}</h5>
                                    <p class="card-text">Funko ${funko.tamanio} ${funko.version}</p>
                                    <button class="agregar__carrito" type="button" id="">Agregar al carrito</button>
                                </div>
                            </div>`
        resultadoBusqueda.appendChild(tarjeta)
    });
    let frase = document.createElement("div")
    frase.innerHTML = `<h2> Estos son los funkos de ${inputNombre.value}</h2>`
    fraseBusqueda.appendChild(frase)
    inputNombre.value = ""

}

function busquedaCategoria(){
    let categoria = inputCategoria.value
    const busqueda2 = listaProductos.funkos.filter((funk)=>
        funk.categoria.toLowerCase() == categoria.toLowerCase()
    );
    return busqueda2
}
function getBusquedaCategoria(){
    fraseBusqueda.innerHTML = ""
    resultadoBusqueda.innerHTML=""
    busquedaCategoria().forEach((funko) => {
        let tarjeta = document.createElement("div")
        tarjeta.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="/Assets/${funko.nombre}.jpg" class="card-img-top" alt="funko de ${funko.nombre}">
                                <div class="card-body">
                                    <h3 class="card-title">${funko.nombre}</h3>
                                    <h4 class="card-title">${funko.subcategoria}</h4>
                                    <h5 class="card-title">$${funko.precio}</h5>
                                    <p class="card-text">Funko ${funko.tamanio} ${funko.version}</p>
                                    <button class="agregar__carrito" type="button" id="">Agregar al carrito</button>
                                </div>
                            </div>`
        resultadoBusqueda.appendChild(tarjeta)
    });
    let frase = document.createElement("div")
    frase.innerHTML = `<h2> Estos son los funkos de la categoría ${inputCategoria.value}</h2>`
    fraseBusqueda.appendChild(frase)
    inputCategoria.value = ""
}

function busquedaSubcategoria(){
    let subcategoria = inputSubcategoria.value
    const busqueda2 = listaProductos.funkos.filter((funk)=>
        funk.subcategoria.toLowerCase() == subcategoria.toLowerCase()
    );
    return busqueda2
}
function getBusquedaSubcategoria(){
    fraseBusqueda.innerHTML = ""
    resultadoBusqueda.innerHTML=""
    busquedaSubcategoria().forEach((funko) => {
        let tarjeta = document.createElement("div")
        tarjeta.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="/Assets/${funko.nombre}.jpg" class="card-img-top" alt="funko de ${funko.nombre}">
                                <div class="card-body">
                                    <h3 class="card-title">${funko.nombre}</h3>
                                    <h4 class="card-title">${funko.subcategoria}</h4>
                                    <h5 class="card-title">$${funko.precio}</h5>
                                    <p class="card-text">Funko ${funko.tamanio} ${funko.version}</p>
                                    <button class="agregar__carrito" type="button" id="">Agregar al carrito</button>
                                </div>
                            </div>`
        resultadoBusqueda.appendChild(tarjeta)
    });
    let frase = document.createElement("div")
    frase.innerHTML = `<h2> Estos son los funkos de ${inputSubcategoria.value}</h2>`
    fraseBusqueda.appendChild(frase)
    inputSubcategoria.value = ""
}

function busquedaPrecio(){
    let precio = parseInt(inputPrecio.value)
    const busqueda4 = listaProductos.funkos.filter((funk)=>
        funk.precio <= precio
    );
    return busqueda4
}
function getBusquedaPrecio(){
    fraseBusqueda.innerHTML = ""
    resultadoBusqueda.innerHTML=""
    busquedaPrecio().forEach((funko) => {
        let tarjeta = document.createElement("div")
        tarjeta.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="/Assets/${funko.nombre}.jpg" class="card-img-top" alt="funko de ${funko.nombre}">
                                <div class="card-body">
                                    <h3 class="card-title">${funko.nombre}</h3>
                                    <h4 class="card-title">${funko.subcategoria}</h4>
                                    <h5 class="card-title">$${funko.precio}</h5>
                                    <p class="card-text">Funko ${funko.tamanio} ${funko.version}</p>
                                    <button class="agregar__carrito" type="button" id="">Agregar al carrito</button>
                                </div>
                            </div>`
        resultadoBusqueda.appendChild(tarjeta)
    });
    let frase = document.createElement("div")
    frase.innerHTML = `<h2 class="frase"> Estos son los funkos que valen menos de $${inputPrecio.value}</h2>`
    fraseBusqueda.appendChild(frase)
    inputPrecio.value = ""
}
