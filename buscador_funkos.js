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


/////////// enter

inputNombre.addEventListener("keypress", function(event) {
     if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn__nombre").click();
    }
});

inputCategoria.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
       event.preventDefault();
       document.getElementById("btn__categoria").click();
   }
});

inputSubcategoria.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
       event.preventDefault();
       document.getElementById("btn__subcategoria").click();
   }
});

inputPrecio.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
       event.preventDefault();
       document.getElementById("btn__precio").click();
   }
});




