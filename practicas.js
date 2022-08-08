

    // nuevoFunko(){
    //     let bandera = true
    //     while(bandera) {
    //         let nombreFunko = prompt(
    //             `Ingrese el nombre.`
    //         );
    //         let versionFunko =prompt(
    //             "¿Qué versión es?"
    //         );
    //         let categoriaFunko = prompt(
    //             "Ingrese la categoría (Peliculas, Series, Deportes, Música, etc.)."
    //         );
    //         let subcategoriaFunko = prompt(
    //             "Ingrese la subcategoría (nombre del programa, película, equipo o banda)."
    //         );
    //         let tamañoFunko = prompt(
    //             "Ingrese el tamaño del funko (grande, chico, mediano)."
    //         );
    //         let precioFunko = parseInt(prompt(
    //             "Ingrese el precio del funko."
    //         ));
    //         let funkoIngresado = new Funko (
    //             nombreFunko, 
    //             versionFunko, 
    //             categoriaFunko, 
    //             subcategoriaFunko, 
    //             tamañoFunko, 
    //             precioFunko, 
    //             listaProductos.funkos.length+1
    //         );
    //         console.log(funkoIngresado)
    //         listaProductos.añadirFunko(funkoIngresado)    
    //         let respuesta = prompt(
    //             `Agregaste correctamente el funko de ${nombreFunko}! Querés agregar otro? (si|no)`
    //         );
    //         if(respuesta =="no"){
    //             bandera = false
    //         }
        
    //     }
    // }

    // busquedaNombre(){
    //     let nombre = prompt(
    //         "Decinos el nombre del funko que estás buscando"
    //     );
    //     const busqueda1 = listaProductos.funkos.filter((funk)=>
    //         funk.nombre.toLowerCase() == nombre
    //     );
    //     return busqueda1
    // }
    // getBusquedaNombre(){
    //     this.busquedaNombre().forEach((el)=>
    //         console.log(
    //             `Tenemos el funko ${el.tamaño} de ${el.nombre} ${el.version} a $${el.precio} (Código ${el.codigo})`
    //         )
    //     );
    // }
    busquedaCategoria(){
        let categoria = prompt(
            "Decinos la categoría del funko que buscás (peliculas|series|deportes|música)."
        );
        const busqueda2 = listaProductos.funkos.filter((funk)=>
            funk.categoria.toLowerCase() == categoria
        );
        return busqueda2
    }
    getBusquedaCategoria(){
        this.busquedaCategoria().forEach((el)=>
            console.log(
                `En esta categoría tenemos el funko ${el.tamaño} de ${el.nombre} ${el.version} a $${el.precio} (Código ${el.codigo})`
            )
        );
    }
    busquedaSubcategoria(){
        let subcategoria = prompt(
            "Decinos el nombre de la pelicula/serie/equipo/banda."
        );
        const busqueda3 = listaProductos.funkos.filter((funk)=>
            funk.subcategoria.toLowerCase() == subcategoria
        );
        return busqueda3
    }
    getBusquedaSubcategoria(){
        this.busquedaSubcategoria().forEach((el)=>
            console.log(
                `De ${el.subcategoria} tenemos el funko ${el.tamaño} de ${el.nombre} ${el.version} a $${el.precio} (Código ${el.codigo})`
            )
        );
    }
    const funkoElegido = {
        nombre: busqueda1.nombre,
        version: busqueda1.version,
        categoria: busqueda1.categoria,
        subcategoria: busqueda1.subcategoria,
        tamaño: busqueda1.tamaño,
        precio: busqueda1.precio,
        codigo:  listaProductos.funkos.length+1,
    }




    function eleccionFunko(){
        let bandera2 = true
        while(bandera2){
            let codigoCompra= prompt(`Ingrese el codigo que quiera comprar`)
            carrito.seleccionarFunko(listaProductos.funkos[codigoCompra-1])
            console.log(carrito)
            console.log(carrito.funkosSeleccionados)
            let otraEleccion = prompt("Querés sumar otro funko?")
            if(otraEleccion=="no"){
                bandera2=false
            }
        }
    }
    
    
    function preguntarOpcion(){
        let opcion = parseInt(prompt(`Ingrese la opción deseada:
                            1 - Ver listado de funkos
                            2 - Comprar Funko
                            3 - Cargar un funko nuevo
                            4 - Buscador de funkos
                            5 - Eliminar
                            6 - Salir
        `))
        menu(opcion)
    }
    
    function menu(opcionSeleccionada){
        switch(opcionSeleccionada){
            case 6:
                salir = false
                alert(`Gracias por visitarnos`)
                break;
            case 1:
                listaProductos.mostrarFunkos()
                break;
            case 2:
                eleccionFunko()
                carrito.mostrarSeleccion()
                carrito.totalCompra()
                break;
            case 3:
                listaProductos.nuevoFunko()
                break;
            case 4:
                let preguntaBusqueda = parseInt(prompt(`
                    ¿Cómo querés buscarlo?
                    1 - Por nombre
                    2 - Por categoría
                    3 - Por precio 
                    0 - Volver
                `))
                buscarFunko(preguntaBusqueda)
                break;
            case 5:
                listaProductos.eliminarFunko()
                listaProductos.mostrarFunkos()
    
                break;
            default:
                alert(`Por favor ingrese una opción valida`)
        }
    }
    
    
    
    function buscarFunko(opcionBusqueda){
        switch(opcionBusqueda){
            case 1:
                listaProductos.getBusquedaNombre()
                break;
            case 2:
                listaProductos.getBusquedaCategoria()
                let refinarBusqueda = prompt(`Querés refinar la busqueda? (si|no)`)
                if (refinarBusqueda.toLowerCase()=="si"){
                    listaProductos.getBusquedaSubcategoria()
                }
                break;
            case 3:
                listaProductos.getBusquedaPrecio()
            break;
        }
    }
    




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
        this.funkos.forEach((funko) => console.log(`El funko ${funko.tamaño} de ${funko.nombre} ${funko.version} cuesta ${funko.precio}. (código ${funko.codigo})`))
    }
}

class Carritos{
    constructor(){
        this.carritoFunko=[]
    }
    añadirCarrito(funko){
        this.carritoFunko.push(funko)
    }
    getCarrito(){
        return this.carritoFunko
    }
    abrirCarrito(){
        this.carritoFunko.forEach((funko) => console.log(`El funko ${funko.tamaño} de ${funko.nombre} ${funko.version} cuesta ${funko.precio}. (código ${funko.codigo})`))
    }

}



class Funko{
    constructor(nombre, version, categoria, subcategoria, tamaño, precio, codigo) {
        this.nombre = nombre;
        this.version = version;
        this.categoria = categoria;
        this.subcategoria = subcategoria;
        this.tamaño = tamaño;
        this.precio = precio;
        this.codigo = codigo
    }

}
function nuevoFunko(){
    let nombreFunko = prompt("Ingrese el nombre.")
    let versionFunko =prompt("¿Qué versión es?")
    let categoriaFunko = prompt("Ingrese la categoría (Peliculas, Series, Deportes, Música, etc.).")
    let subcategoriaFunko = prompt("Ingrese la subcategoría (nombre del programa, película, equipo o banda).")
    let tamañoFunko = prompt("Ingrese el tamaño del funko (grande, chico, mediano).")
    let precioFunko = prompt("Ingrese el precio del funko.")
    let funkoIngresado = new Funko (nombreFunko, versionFunko, categoriaFunko, subcategoriaFunko, tamañoFunko, precioFunko, listaProductos.funkos.length+1)
    console.log(funkoIngresado)
    listaProductos.añadirFunko(funkoIngresado)
}

const funko1 = new Funko ("Jon Snow", "versión Lord Comander", "Series", "Game of Thrones", "mediano", 2500, 1)
const funko2 = new Funko ("Micheal Jordan", "única versión", "Deportes", "Chicago Bulls", "mediano", 3000, 2)
const funko3 = new Funko ("Spiderman", "versión No Way Home", "Peliculas", "Spiderman", "mediano", 2000, 3)
const funko4 = new Funko ("Deadpool", "única versión", "Peliculas", "Deadepool", "mediano", 2500, 4)
const funko5 = new Funko ("Angus Young", "única versión", "Musica", "ACDC", "mediano", 3000, 5)
const funko6 = new Funko ("Cersei Lannister", "única versión", "Series", "Game of Thrones", "mediano", 3500, 6)
const funko7 = new Funko ("Saul Goodman", "única versión", "Series", "Better Call Saul", "mediano", 3600, 7)
const funko8 = new Funko ("Thanos", "versión sin mano", "Peliculas", "Avengers", "grande", 6000, 8)
const funko9 = new Funko ("Blue", "única versión", "Peliculas", "Jurassic World", "chico", 1200, 9)
const funko10 = new Funko ("Harry Potter", "versión Caliz de Fuego", "Peliculas", "Harry Potter", "mediano", 2000, 10)
const funko11 = new Funko ("Yoda", "versión Baby Yoda", "Peliculas", "Star Wars", "chico", 1100, 11)
const funko12 = new Funko ("Freddy Mercury", "versión Live Aid", "Musica", "Queen", "mediano", 2500, 12)
const listaProductos=new Productos()
listaProductos.añadirFunko(funko1)
listaProductos.añadirFunko(funko2)
listaProductos.añadirFunko(funko3)
listaProductos.añadirFunko(funko4)
listaProductos.añadirFunko(funko5)
listaProductos.añadirFunko(funko6)
listaProductos.añadirFunko(funko7)
listaProductos.añadirFunko(funko8)
listaProductos.añadirFunko(funko9)
listaProductos.añadirFunko(funko10)
listaProductos.añadirFunko(funko11)
listaProductos.añadirFunko(funko12)

const carrito = new Carritos()


// const miObjeto = {"stock": 1,funko1}

console.log(listaProductos.getFunkos())
listaProductos.mostrarFunkos()

let bandera1 = true
let pregunta = prompt("Querés cargar un funko?")
if (pregunta=="si"){
    while(bandera1){
    nuevoFunko()
    let pregunta2 = prompt("Querés cargar otro funko?")
    if(pregunta2.toLowerCase() == "no"){
        bandera1=false
     }
}
}

let bandera2=true
while(bandera2){
let codigoCompra = prompt("Ingrese el código del funko que quiere comprar")
let busqueda1 = listaProductos.funkos.filter((elem) =>elem.codigo == codigoCompra)
console.log(busqueda1)
carrito.añadirCarrito(busqueda1)
console.log(carrito.getCarrito())
let pregunta2 = prompt("¿Querés sumar otro?")
if (pregunta2=="no"){
    bandera2=false
}
}

for (let elem of carrito.carritoFunko)
console.log(elem)
// carritoFunko.forEach((funko) => console.log(`El funko ${funko.tamaño} de ${funko.nombre} ${funko.version} cuesta ${funko.precio}. (código ${funko.codigo})`))





// function precio(){
//     let precioProducto = parseInt(prompt("Ingrese el valor del producto"))
//     return precioProducto
// }

// function nombre(){
//     let nombreProducto = prompt("Ingrese el nombre del producto")
//     return nombreProducto
// }

// function cuotas (){
//     let cantCuotas = parseInt(prompt("¿Lo pagás en 3, 6 o 12 cuotas? (ingrese el número)"))
//     return cantCuotas
// }

// function calculo(precioProducto, cuotas, interes){
//     let resultado = precioProducto * interes / cuotas
//     return resultado
// }
// function calculo2 (precioProducto, interes){
//     let total = precioProducto * interes
//     return total
// }

// function mostrarResultado(nombre, precio, cuotas, valorCuota, valorTotal){
//     console.log(`Tu ${nombre} cuesta ${precio}. Pagando en ${cuotas} cuotas cada una queda de ${valorCuota}. Pagarías un valor final de ${valorTotal}`)
//     alert(`Tu ${nombre} cuesta ${precio}. Pagando en ${cuotas} cuotas cada una queda de ${valorCuota}. Pagarías un valor final de ${valorTotal}`)
// }


// let bandera = true
// while(bandera){
// let interes = 0
// let nombreProducto = nombre()
// let precioProducto = precio()
// let cantCuotas = cuotas()
// if (cantCuotas == 3) {
//     interes = 1.2
// } else if (cantCuotas == 6){
//     interes = 1.5
// } else {
//     interes = 1.75
// }
// let resultado = calculo(precioProducto, cantCuotas, interes)
// let total = calculo2(precioProducto, interes)
// mostrarResultado(nombreProducto, precioProducto, cantCuotas, resultado, total)
// let respuesta = prompt("¿Querés simular otro producto? (SI|NO)")
// if (respuesta.toLowerCase() == "no") {
//     bandera = false
// }
// }
























// listaProductos.mostrarFunkos()











// function nuevoFunko(){
//     let bandera = true
//     while (bandera){
//     let nombreFunko = prompt("Ingrese el nombre.")
//     let versionFunko =prompt("¿Qué versión es?")
//     let categoriaFunko = prompt("Ingrese la categoría (Peliculas, Series, Deportes, Música, etc.).")
//     let subcategoriaFunko = prompt("Ingrese la subcategoría (nombre del programa, película, equipo o banda).")
//     let tamañoFunko = prompt("Ingrese el tamaño del funko (grande, chico, mediano).")
//     let precioFunko = prompt("Ingrese el precio del funko.")
//     let funkoIngresado = new Funko(nombreFunko, versionFunko, categoriaFunko, subcategoriaFunko, tamañoFunko, precioFunko, Funkos.length+1)
//     console.log(funkoIngresado)
//     Funkos.push(funkoIngresado)
//     console.log(Funkos)
//     alert(`Cargaste el funko de ${nombreFunko} correctamente!`)
//     let pregunta = prompt("Querés cargar otro? (SI|NO)")
//     if (pregunta.toLowerCase()=="no"){
//         bandera = false
//         }
//     }

// }

// function inicio(){
//     let respuesta1 = prompt("¿Querés comprar un funko o cargar uno nuevo? (comprar|cargar|salir)")
//     return respuesta1
// }

// function compraPregunta1(){
//     let busqueda = prompt("¿Cómo querés buscar tu funko? (nombre|categoría|precio|ver lista)")
//     return busqueda
// }

// function listado(){
//     Funkos.forEach((funko) => console.log(`El funko ${funko.tamaño} de ${funko.nombre} ${funko.version} cuesta ${funko.precio}. (código ${funko.codigo})`))
// }
// function seleccion(){
//     let eleccion = prompt("Decinos el nombre del funko que querés")
//     return eleccion
// }

// function compraPreguntaNombre(){
//     let nombre= prompt("Decinos el nombre del funko que estás buscando")
//     return nombre
// }

// function compraPreguntaCategoria(){
//     let categoria = prompt("Decinos la categoría del funko que buscás (peliculas|series|deportes|música).")
//     return categoria
// }

// function compraPeliculas(){
//     let categoriaPeliculas = prompt("Decinos el nombre de la película")
//     return categoriaPeliculas
// }

// function compraSeries(){
//     let categoriaSeries = prompt("Decinos el nombre de la serie")
//     return categoriaSeries
// }

// function compraDeportes(){
//     let categoriaDeportes = prompt("Decinos el nombre del equipo")
//     return categoriaDeportes
// }

// function compraMusica(){
//     let categoriaMusica = prompt("Decinos el nombre de la banda")
//     return categoriaMusica
// }

// function agregarCarrito(){
//     let carrito = prompt("ingrese el código del funko que quiera comprar")
//     return carrito
// }

// function pagar(){
//     let preguntaPagar = prompt("¿Finalizar compra? (SI|NO)")
//     return preguntaPagar

// }




// let bandera = true
// let acum = 0
// const Carrito = []
// const CarritoMusicaTemp = []
// const CarritoDeportesTemp = []
// const CarritoPeliculaTemp = []
// const CarritoSeriesTemp = []
// const CarritoNombreTemp = []
// const CarritoListaTemp = []
// const CarritoMusica = []
// const CarritoSeries = []
// const CarritoDeportes= []
// const CarritoLista = []
// const CarritoNombre = []
// const CarritoPeliculas = []

// while(bandera){
//     let pregunta1 = inicio()
//     if (pregunta1.toLowerCase()=="salir"){
//         bandera=false
//     }else if (pregunta1.toLowerCase()=="cargar"){
//         nuevoFunko()
//     }else {
//         let busqueda = compraPregunta1()
//         if ((busqueda.toLowerCase()=="ver lista") || (busqueda.toLowerCase()=="lista")){
//             listado()
//             let eleccion = seleccion()
//             const busqueda1 = Funkos.filter((funk)=>funk.nombre.toLowerCase() == eleccion.toLowerCase())
//             console.log(busqueda1)
//             busqueda1.forEach((funko)=> console.log(`Tenemos el funko ${funko.tamaño} de ${funko.nombre} ${funko.version} a ${funko.precio} pesos.(código ${funko.codigo})`))
//             let codigoCompra = agregarCarrito()
//             const CarritoLista = Funkos.filter((funk)=>funk.codigo == codigoCompra)
//             console.log(CarritoLista)
//             CarritoLista.forEach((elem) => console.log(`Agregaste el funko ${elem.tamaño} de ${elem.nombre} a tu carrito.`))
//             let respuestaPagar = pagar()
//             if (respuestaPagar.toLowerCase() =="si"){
//                 const CarritoPagar = Carrito.concat(CarritoLista, CarritoNombre, CarritoPeliculas, CarritoSeries, CarritoDeportes, CarritoMusica, CarritoMusicaTemp, CarritoPeliculaTemp, CarritoSeriesTemp, CarritoDeportesTemp, CarritoNombreTemp, CarritoListaTemp)
//                 console.log("resumen de tu compra:")
//                 CarritoPagar.forEach((elem) => console.log(`Funko ${elem.tamaño} de ${elem.nombre} ${elem.version}`))
//                 let totalCompra = CarritoPagar.reduce((acum, elemento) => acum = acum + elemento.precio, 0)
//                 console.log(`El total a pagar es de ${totalCompra}`)
//             }else{
//                 const CarritoListaTemp = Carrito.concat(CarritoLista)
//             }
            
//         }else if (busqueda.toLowerCase()=="nombre"){
//             let eleccionNombre = compraPreguntaNombre().toLowerCase()
//             const busqueda2 = Funkos.filter((funk)=>funk.nombre.toLowerCase() == eleccionNombre)
//             console.log(busqueda2)
//             busqueda2.forEach((funko)=> console.log(`Tenemos el funko ${funko.tamaño} de ${funko.nombre} ${funko.version} a ${funko.precio} pesos.(código ${funko.codigo})`))
//             let codigoCompra = agregarCarrito()
//             const CarritoNombre = Funkos.filter((funk)=>funk.codigo == codigoCompra)
//             console.log(CarritoNombre)
//             CarritoNombre.forEach((elem) => console.log(`Agregaste el funko ${elem.tamaño} de ${elem.nombre} a tu carrito.`))
//             let respuestaPagar = pagar()
//             if (respuestaPagar.toLowerCase() =="si"){
//                 const CarritoPagar = Carrito.concat(CarritoLista, CarritoNombre, CarritoPeliculas, CarritoSeries, CarritoDeportes, CarritoMusica, CarritoMusicaTemp, CarritoPeliculaTemp, CarritoSeriesTemp, CarritoDeportesTemp, CarritoNombreTemp, CarritoListaTemp)
//                 console.log("resumen de tu compra:")
//                 CarritoPagar.forEach((elem) => console.log(`Funko ${elem.tamaño} de ${elem.nombre} ${elem.version}`))
//                 let totalCompra = CarritoPagar.reduce((acum, elemento) => acum = acum + elemento.precio, 0)
//                 console.log(`El total a pagar es de ${totalCompra}`)
//             }else{
//                 const CarritoNombreTemp = Carrito.concat(CarritoNombre)
//             }
//         }else if (busqueda.toLowerCase()=="categoria"){
            // let busquedaCategoria = compraPreguntaCategoria()
            // if (busquedaCategoria.toLowerCase()=="peliculas"){
            //     const Peliculas = Funkos.filter((funk)=>funk.categoria.toLowerCase() == busquedaCategoria.toLowerCase())
            //     console.log(Peliculas)
            //     Peliculas.forEach((funko)=> console.log(`En esta categoría tenemos el funko ${funko.tamaño} de ${funko.nombre} ${funko.version} a ${funko.precio} pesos.(código ${funko.codigo})`))
            //     let categoriaPeliculas = compraPeliculas()
            //     const busquedaPelicula = Funkos.filter((funk)=>funk.subcategoria.toLowerCase() == categoriaPeliculas.toLowerCase())
            //     busquedaPelicula.forEach((funko)=> console.log(`De esta película tenemos el funko ${funko.tamaño} de ${funko.nombre} ${funko.version} a ${funko.precio} pesos.(código ${funko.codigo})`))
            //     let codigoCompra = agregarCarrito()
            //     const CarritoPeliculas = Funkos.filter((funk)=>funk.codigo == codigoCompra)
            //     console.log(CarritoPeliculas)
            //     CarritoPeliculas.forEach((elem) => console.log(`Agregaste el funko ${elem.tamaño} de ${elem.nombre} a tu carrito.`))
            //     let respuestaPagar = pagar()
//                 if (respuestaPagar.toLowerCase() =="si"){
//                     const CarritoPagar = Carrito.concat(CarritoLista, CarritoNombre, CarritoPeliculas, CarritoSeries, CarritoDeportes, CarritoMusica, CarritoMusicaTemp, CarritoPeliculaTemp, CarritoSeriesTemp, CarritoDeportesTemp, CarritoNombreTemp, CarritoListaTemp)
//                     console.log("resumen de tu compra:")
//                     CarritoPagar.forEach((elem) => console.log(`Funko ${elem.tamaño} de ${elem.nombre} ${elem.version}`))
//                     let totalCompra = CarritoPagar.reduce((acum, elemento) => acum = acum + elemento.precio, 0)
//                     console.log(`El total a pagar es de ${totalCompra}`)
//                 }else{
//                     const CarritoPeliculaTemp = Carrito.concat(CarritoPeliculas)
//                 }
//             }else if (busquedaCategoria.toLowerCase()=="series"){
//                 const Series = Funkos.filter((funk)=>funk.categoria.toLowerCase() == busquedaCategoria)
//                 Series.forEach((funko)=> console.log(`En esta categoría tenemos el funko ${funko.tamaño} de ${funko.nombre} ${funko.version} a ${funko.precio} pesos.(código ${funko.codigo})`))
//                 let categoriaSeries = compraSeries().toLowerCase()
//                 const busquedaSeries = Funkos.filter((funk)=>funk.subcategoria.toLowerCase() == categoriaSeries)
//                 busquedaSeries.forEach((funko)=> console.log(`De esta serie tenemos el funko ${funko.tamaño} de ${funko.nombre} ${funko.version} a ${funko.precio} pesos.(código ${funko.codigo})`))
//                 let codigoCompra = agregarCarrito()
//                 const CarritoSeries = Funkos.filter((funk)=>funk.codigo == codigoCompra)
//                 console.log(CarritoSeries)
//                 CarritoSeries.forEach((elem) => console.log(`Agregaste el funko ${elem.tamaño} de ${elem.nombre} a tu carrito.`))
//                 let respuestaPagar = pagar()
//                 if (respuestaPagar.toLowerCase() =="si"){
//                     const CarritoPagar = Carrito.concat(CarritoLista, CarritoNombre, CarritoPeliculas, CarritoSeries, CarritoDeportes, CarritoMusica, CarritoMusicaTemp, CarritoPeliculaTemp, CarritoSeriesTemp, CarritoDeportesTemp, CarritoNombreTemp, CarritoListaTemp)
//                     console.log("resumen de tu compra:")
//                     CarritoPagar.forEach((elem) => console.log(`Funko ${elem.tamaño} de ${elem.nombre} ${elem.version}`))
//                     let totalCompra = CarritoPagar.reduce((acum, elemento) => acum = acum + elemento.precio, 0)
//                     console.log(`El total a pagar es de ${totalCompra}`)
//                 }else{
//                     const CarritoSeriesTemp = Carrito.concat(CarritoSeries)
//                 }
//             }else if (busquedaCategoria.toLowerCase()=="deportes"){
//                 const Deportes = Funkos.filter((funk)=>funk.categoria.toLowerCase() == busquedaCategoria)
//                 Deportes.forEach((funko)=> console.log(`En esta categoría tenemos el funko de ${funko.nombre} ${funko.version} a ${funko.precio} pesos.(código ${funko.codigo})`))
//                 let categoriaDeportes = compraDeportes().toLowerCase()
//                 const busquedaDeportes = Funkos.filter((funk)=>funk.subcategoria.toLowerCase() == categoriaDeportes)
//                 busquedaDeportes.forEach((funko)=> console.log(`De este equipo teemos el funko ${funko.tamaño} de ${funko.nombre} ${funko.version} a ${funko.precio} pesos.(código ${funko.codigo})`))
//                 const CarritoDeportes = Funkos.filter((funk)=>funk.codigo == codigoCompra)
//                 console.log(CarritoDeportes)
//                 CarritoDeportes.forEach((elem) => console.log(`Agregaste el funko ${elem.tamaño} de ${elem.nombre} a tu carrito.`))
//                 let respuestaPagar = pagar()
//                 if (respuestaPagar.toLowerCase() =="si"){
//                     const CarritoPagar = Carrito.concat(CarritoLista, CarritoNombre, CarritoPeliculas, CarritoSeries, CarritoDeportes, CarritoMusica, CarritoMusicaTemp, CarritoPeliculaTemp, CarritoSeriesTemp, CarritoDeportesTemp, CarritoNombreTemp, CarritoListaTemp)
//                     console.log("resumen de tu compra:")
//                     CarritoPagar.forEach((elem) => console.log(`Funko ${elem.tamaño} de ${elem.nombre} ${elem.version}`))
//                     let totalCompra = CarritoPagar.reduce((acum, elemento) => acum = acum + elemento.precio, 0)
//                     console.log(`El total a pagar es de ${totalCompra}`)
//                 }else{
//                     const CarritoDeportesTemp = Carrito.concat(CarritoDeportes)
//                 }
//             }else if (busquedaCategoria.toLowerCase()=="musica"){
//                 const Musica = Funkos.filter((funk)=>funk.categoria == busquedaCategoria)
//                 Musica.forEach((funko)=> console.log(`En esta categoría tenemos el funko de ${funko.nombre} ${funko.version} a ${funko.precio} pesos.(código ${funko.codigo})`))
//                 let categoriaMusica = compraDeportes().toLowerCase()
//                 const busquedaMusica = Funkos.filter((funk)=>funk.subcategoria.toLowerCase() == categoriaMusica)
//                 busquedaMusica.forEach((funko)=> console.log(`De esta banda tenemos el funko ${funko.tamaño} de ${funko.nombre} ${funko.version} a ${funko.precio} pesos.(código ${funko.codigo})`))
//                 const CarritoMusica = Funkos.filter((funk)=>funk.codigo == codigoCompra)
//                 console.log(CarritoMusica)
//                 CarritoMusica.forEach((elem) => console.log(`Agregaste el funko ${elem.tamaño} de ${elem.nombre} a tu carrito.`))
//                 let respuestaPagar = pagar()
//                 if (respuestaPagar.toLowerCase() =="si"){
//                     const CarritoPagar = Carrito.concat(CarritoLista, CarritoNombre, CarritoPeliculas, CarritoSeries, CarritoDeportes, CarritoMusica, CarritoMusicaTemp, CarritoPeliculaTemp, CarritoSeriesTemp, CarritoDeportesTemp, CarritoNombreTemp, CarritoListaTemp)
//                     console.log("resumen de tu compra:")
//                     CarritoPagar.forEach((elem) => console.log(`Funko ${elem.tamaño} de ${elem.nombre} ${elem.version}`))
//                     let totalCompra = CarritoPagar.reduce((acum, elemento) => acum = acum + elemento.precio, 0)
//                     console.log(`El total a pagar es de ${totalCompra}`)
//                 }else{
//                     const CarritoMusicaTemp = Carrito.concat(CarritoMusica)
//                 }
//             }

//         }
        

//     }
// }


