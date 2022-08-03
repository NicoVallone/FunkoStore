
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
//             let busquedaCategoria = compraPreguntaCategoria()
//             if (busquedaCategoria.toLowerCase()=="peliculas"){
//                 const Peliculas = Funkos.filter((funk)=>funk.categoria.toLowerCase() == busquedaCategoria.toLowerCase())
//                 console.log(Peliculas)
//                 Peliculas.forEach((funko)=> console.log(`En esta categoría tenemos el funko ${funko.tamaño} de ${funko.nombre} ${funko.version} a ${funko.precio} pesos.(código ${funko.codigo})`))
//                 let categoriaPeliculas = compraPeliculas()
//                 const busquedaPelicula = Funkos.filter((funk)=>funk.subcategoria.toLowerCase() == categoriaPeliculas.toLowerCase())
//                 busquedaPelicula.forEach((funko)=> console.log(`De esta película tenemos el funko ${funko.tamaño} de ${funko.nombre} ${funko.version} a ${funko.precio} pesos.(código ${funko.codigo})`))
//                 let codigoCompra = agregarCarrito()
//                 const CarritoPeliculas = Funkos.filter((funk)=>funk.codigo == codigoCompra)
//                 console.log(CarritoPeliculas)
//                 CarritoPeliculas.forEach((elem) => console.log(`Agregaste el funko ${elem.tamaño} de ${elem.nombre} a tu carrito.`))
//                 let respuestaPagar = pagar()
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


