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


const cargarFunko = document.getElementById("cargar__funko");
cargarFunko.addEventListener("click", crearFunko)