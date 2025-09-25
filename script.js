/* Habilidades necesarias: Manejo del DOM, eventos, funciones.
Diseña una página web que inicialmente esté vacía (el body vacío), posteriormente, sólo con JavaScript realiza los siguientes puntos:
Añade una tabla vacía del contenido que prefieras, con un mínimo de 2 columnas.
Crea un botón para que cada vez que pulsemos, automáticamente se añada una fila a la tabla con datos aleatorios que tendrás previamente declarados.
El botón deberá ejecutar una función que realice esa tarea.
Se deberán usar arrays para guardar una serie de nombres y obtenerlos de ahí.
Por ejemplo, una tabla con nombres de personas y sus edades (un array de nombres y que la edad sea aleatoria entre 0-100)
let frutas = ["Manzana", "Banana"];
let primera = frutas[0]; // Manzana */

const tableElement = document.createElement("table")
document.body.appendChild(tableElement)

let counter = 0

function createTitle() {
    const rowElement = document.createElement("tr")
    for (let i = 0; i < 3; i++) {
        const columnElement = document.createElement("th")
        columnElement.innerHTML = "Título " + counter
        counter++
        rowElement.appendChild(columnElement)
    }
    counter = 0;

    tableElement.appendChild(rowElement)
}

function createRowTwoColumns() {
    const rowElement = document.createElement("tr")
    for (let i = 0; i < 3; i++) {
        const columnElement = document.createElement("td")
        columnElement.innerHTML = "Elemento " + counter
        counter++
        rowElement.appendChild(columnElement)
    }
    tableElement.appendChild(rowElement)
}

createTitle()
createRowTwoColumns()
createRowTwoColumns()
createRowTwoColumns()

const buttonElement = document.createElement("button")
buttonElement.innerHTML = "Add row"
document.body.appendChild(buttonElement)

buttonElement.addEventListener("click", createRowTwoColumnsRandom)
const frutas = ["Manzana", "Pera", "Platano", "Naranja"]
const frutasLenght = frutas.length

function createRowTwoColumnsRandom() {
    const rowElement = document.createElement("tr")
    for (let i = 0; i < 2; i++) {
        const columnElement = document.createElement("td")
        columnElement.innerHTML = frutas[Math.floor(Math.random() * frutasLenght)]
        /* columnElement.innerHTML = frutas[3] */
        columnElement.style.border = "1px solid black"
        columnElement.style.padding = "10px"
        rowElement.appendChild(columnElement)
    }
    tableElement.appendChild(rowElement)
}

tableElement.style.border = "2px solid black"
function addBorders(celds) {
    celds.forEach(element => {
        element.style.border = "1px solid black"
        element.style.padding = "10px"
    });
}
addBorders(document.querySelectorAll("td"))

/* Mutation observer !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
/* const observer = new MutationObserver(() => {
    let celds = document.querySelectorAll("td");
    addBorders(celds);
});

// Start observing the whole document
observer.observe(document.body, {
    childList: true,   // detect added/removed nodes
    subtree: true      // include child elements
}); */

