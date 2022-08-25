
//CLASES --------------------------------------------------------------------

class Productos {
    constructor(){
        this.funkos=[]
    }
    añadirFunko(funko){
        this.funkos.push(funko)
    }
    getFunkos(){
        return this.funkos
    }
    mostrarFunkos(){
        this.funkos.forEach((funko) => 
            console.log(
                `El funko ${funko.tamaño} de ${funko.nombre} ${funko.version} cuesta ${funko.precio}. (código ${funko.codigo})`
            )
        );
    }

    eliminarFunko(){
        let eliminar = parseInt(prompt(
            "Decinos el código del funko que querés eliminar"
        ));
        listaProductos.funkos.splice(eliminar-1, 1);
        console.log(listaProductos.funkos.filter((funko)=>
        funko.codigo == eliminar
        ));

    }
}



class Funko{
    constructor(nombre, version, categoria, subcategoria, tamanio, precio, codigo) {
        this.nombre = nombre;
        this.version = version;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
        this.tamanio = tamanio;
        this.precio = precio;
        this.codigo = listaProductos.funkos.length+1;
    }
}

class Carritos{
    constructor(){
        this.funkosSeleccionados=[]
    }

    seleccionarFunko(funko){
        this.funkosSeleccionados.push(funko)
        console.log(carrito)
        localStorage.setItem("carrito", JSON.stringify(this.funkosSeleccionados))
        Toastify({
            text: `Agregaste el funko de ${funko.nombre} al carrito`,
            className: "info",
            style: {
              background: "linear-gradient(to right, #1C110A, #D00000)",
            }
          }).showToast();
        
    }   
    getFunkosSeleccionados(){
        return this.funkosSeleccionados
    }
    mostrarSeleccion(){
        this.funkosSeleccionados.forEach((funk) => 
            console.log(`Seleccionaste el funko de ${funk.nombre}. Cuesta $ ${funk.precio}`)
        );
    }


}

// OBJETOS Y ARRAYS-----------------------------------------------------

const listaProductos=new Productos()

const funko1 = new Funko ("Jon Snow", "versión Lord Comander", "Series", "Game of Thrones", "mediano", 2500, 1)
listaProductos.añadirFunko(funko1)
const funko2 = new Funko ("Michael Jordan", "única versión", "Deportes", "Chicago Bulls", "mediano", 3000, 2)
listaProductos.añadirFunko(funko2)
const funko3 = new Funko ("Spiderman", "versión No Way Home", "Peliculas", "Spiderman", "mediano", 2000, 3)
listaProductos.añadirFunko(funko3)
const funko4 = new Funko ("Deadpool", "única versión", "Peliculas", "Deadepool", "mediano", 2500, 4)
listaProductos.añadirFunko(funko4)
const funko5 = new Funko ("Angus Young", "única versión", "Musica", "ACDC", "mediano", 3000, 5)
listaProductos.añadirFunko(funko5)
const funko6 = new Funko ("Cersei Lannister", "única versión", "Series", "Game of Thrones", "mediano", 3500, 6)
listaProductos.añadirFunko(funko6)
const funko7 = new Funko ("Saul Goodman", "única versión", "Series", "Better Call Saul", "mediano", 3600, 7)
listaProductos.añadirFunko(funko7)
const funko8 = new Funko ("Thanos", "versión sin mano", "Peliculas", "Avengers", "grande", 6000, 8)
listaProductos.añadirFunko(funko8)
const funko9 = new Funko ("Blue", "única versión", "Peliculas", "Jurassic World", "chico", 1200, 9)
listaProductos.añadirFunko(funko9)
const funko10 = new Funko ("Harry Potter", "versión Caliz de Fuego", "Peliculas", "Harry Potter", "mediano", 2000, 10)
listaProductos.añadirFunko(funko10)
const funko11 = new Funko ("Yoda", "versión Baby Yoda", "Peliculas", "Star Wars", "chico", 1100, 11)
listaProductos.añadirFunko(funko11)
const funko12 = new Funko ("Freddy Mercury", "versión Live Aid", "Musica", "Queen", "mediano", 2500, 12)
listaProductos.añadirFunko(funko12)

const carrito = new Carritos()



console.log(listaProductos.funkos)


///////////////////////////cargar funkos

function crearFunko(){
    let nombreFunko = document.getElementById("nombreFunko");
    let versionFunko = document.getElementById("versionFunko");
    let categoriaFunko = document.getElementById("categoriaFunko");
    let subcategoriaFunko = document.getElementById("subcategoriaFunko");
    let tamanioFunko = document.getElementById("tamanioFunko");
    let precioFunko = document.getElementById("precioFunko");
    let funkoIngresado = new Funko (
        nombreFunko.value, 
        versionFunko.value, 
        categoriaFunko.value, 
        subcategoriaFunko.value, 
        tamanioFunko.value, 
        precioFunko.value, 
        listaProductos.funkos.length+1
    );
    listaProductos.añadirFunko(funkoIngresado)    
    alert(`Agregaste correctamente el funko de ${nombreFunko.value}!`);
}







///////////////////////-------------CARRITO

let btnCarrito = document.getElementById("carrito_boton")
btnCarrito.addEventListener("click", () => {
 
    mostrarCarrito(carrito.funkosSeleccionados)
})

let modalCarrito = document.getElementById("carrito")


function mostrarCarrito(){
    modalCarrito.innerHTML=" "
    carrito.funkosSeleccionados.forEach((funko, indice) => {
        let tarjeta = document.createElement("div")
        tarjeta.innerHTML = `<div id="productoCarrito${funko.codigo}" class="card" style="width: 18rem;">
                                <img src="../Assets/${funko.nombre}.jpg" class="card-img-top" alt="funko de ${funko.nombre}">
                                <div class="card-body">
                                    <h3 class="card-title">${funko.nombre}</h3>
                                    <h4 class="card-title">${funko.subcategoria}</h4>
                                    <h5 class="card-title">$${funko.precio}</h5>
                                    <p class="card-text">Funko ${funko.tamanio} ${funko.version}</p>
                                    <button class="eliminar__carrito" type="button" id="botonEliminar${funko.codigo}">Eliminar</button>
                                </div>
                            </div>`
        modalCarrito.appendChild(tarjeta)
        let btnEliminar =  document.getElementById(`botonEliminar${funko.codigo}`)
        btnEliminar.addEventListener("click", ()=>{
            eliminar(funko, indice)
            Swal.fire({
                title: 'Funko Eliminado!',
                text: `Eliminaste el funko de ${funko.nombre}`,
                icon: 'error',
                confirmButtonText: 'OK'
              })
            
        })
    })
    compraTotal(carrito.funkosSeleccionados)
}

function eliminar(funko, indice, funkosSeleccionados){
    console.log(`Eliminaste el funko de ${funko.nombre}`)
    let cardProducto = document.getElementById(`productoCarrito${funko.codigo}`)
    console.log(cardProducto);
    cardProducto.remove()
    carrito.funkosSeleccionados.splice(indice, 1)
    console.log(funkosSeleccionados)
    localStorage.setItem("carrito", JSON.stringify(carrito.funkosSeleccionados))
    compraTotal(carrito.funkosSeleccionados)
}

let parrafoCompra = document.getElementById("parrafo_compra")

function compraTotal(productosTotal){
    acumulador = 0;
    productosTotal.forEach((productosCarrito)=>{
        acumulador += productosCarrito.precio
    })
    if(acumulador==0){
        parrafoCompra.innerHTML = `<p>No hay productos en el carrito</p>`
    }else{
        parrafoCompra.innerHTML = `<p> El total de su compra es $${acumulador}`
    }
}

let btnVaciarCarrito = document.getElementById("vaciar_carrito")
btnVaciarCarrito.addEventListener("click", vaciarCarrito)

function vaciarCarrito(){
    carrito.funkosSeleccionados=[];
    localStorage.setItem("carrito",[])
    parrafoCompra.innerHTML = `<p>No hay productos en el carrito</p>`
    modalCarrito.innerHTML=" "
}


//////////////////////////------BUSCADOR

function mostrarFunkos(){
    borrarListado()
    listaProductos.funkos.forEach((funko) => {
        let tarjeta = document.createElement("div")
        tarjeta.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="../Assets/${funko.nombre}.jpg" class="card-img-top" alt="funko de ${funko.nombre}">
                                <div class="card-body">
                                    <h3 class="card-title">${funko.nombre}</h3>
                                    <h4 class="card-title">${funko.subcategoria}</h4>
                                    <h5 class="card-title">$${funko.precio}</h5>
                                    <p class="card-text">Funko ${funko.tamanio} ${funko.version}</p>
                                    <button class="agregar__carrito" type="button" id="agregarBtn${funko.codigo}">Agregar al carrito</button>
                                </div>
                            </div>`
        resultadoBusqueda.appendChild(tarjeta)

        let btnAgregar = document.getElementById(`agregarBtn${funko.codigo}`)
        console.log(btnAgregar)
        btnAgregar.addEventListener("click", () =>(carrito.seleccionarFunko(funko)))
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
                                <img src="../Assets/${funko.nombre}.jpg" class="card-img-top" alt="funko de ${funko.nombre}">
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
                                <img src="../Assets/${funko.nombre}.jpg" class="card-img-top" alt="funko de ${funko.nombre}">
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
                                <img src="../Assets/${funko.nombre}.jpg" class="card-img-top" alt="funko de ${funko.nombre}">
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
                                <img src="../Assets/${funko.nombre}.jpg" class="card-img-top" alt="funko de ${funko.nombre}">
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


