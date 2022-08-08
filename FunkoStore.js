
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
        this.codigo = codigo
    }
}

class Carritos{
    constructor(){
        this.funkosSeleccionados=[]
    }

    seleccionarFunko(funko){
        this.funkosSeleccionados.push(funko)
    }   
    getFunkosSeleccionados(){
        return this.funkosSeleccionados
    }
    mostrarSeleccion(){
        this.funkosSeleccionados.forEach((funk) => 
            console.log(`Seleccionaste el funko de ${funk.nombre}. Cuesta $ ${funk.precio}`)
        );
    }
    totalCompra(){
       let sumaTotal =  this.funkosSeleccionados.reduce((acum, elemento) => acum + elemento.precio, 0);
       console.log(`El total de tu compra es $${sumaTotal}`) 
    }
}


// FUNCIONES GENERALES  -------------------------------------------------------

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


// OBJETOS Y ARRAYS-----------------------------------------------------


const funko1 = new Funko ("Jon Snow", "versión Lord Comander", "Series", "Game of Thrones", "mediano", 2500, 1)
const funko2 = new Funko ("Michael Jordan", "única versión", "Deportes", "Chicago Bulls", "mediano", 3000, 2)
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










// CODIGO ----------------------------------------------

// let salir = true
// while(salir){
// preguntarOpcion()
// }


