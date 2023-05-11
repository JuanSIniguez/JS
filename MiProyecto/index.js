// LET      permite reasignar valores a una variable mientras que CONST no lo permite
// CONST    no puede ser inicializada vacia

/*

    ==     igualdad
    >      mayor que
    <      menor que
    !=     distinto
    >=     mayor o igual
    <=     menor o igual
    ===    estrictamente igual (Tipo de valor)
    !==    estrictamente diferente (Tipo de valor)
    &&     AND
    ||     OR

    */

// PROMPT

// const nombre = prompt("Ingrese su nombre")

// IF   ELSE    ELSE IF

/* 

    if(condicion){
        //respuesta
    }else // else if{
        //otra respuesta

    -----

    let precio = prompt("Ingrese el precio de la hamburguesa")

    if (precio > 1000){
        console.log("Bastante cara")
    } else if( precio > 500){
        console.log("yyyy... puede ser")
    } else{
        console.log("Buena, bonita, barata")
    } 

    */

//WHILE

/* 

    while(condicion){
        //se genere determinada funcionalidad
    } 

    while (entrada != "ESC" && entrada != "esc"){
        texto += entrada + " "
        entrada = prompt("Ingrese texto o ESC para interrumpir")
    }

    */

//DO WHILE

/* 

    do {
        console.log("ciclo")
    }while (condicion) 

    ---

    let y = 40;
    do {
    console.log("el valor de la variable es: $" + y);
    y++;
    } while (y <= 50);

    */

//FOR

/*

    for (desde ; hasta ; actualizacion ){
        Realiza alguna funcion
    }

    for (let i = 0; i <= 10; i++){
        alert(`El valor de la variable es: ${i}`) 
    } 

    */

// SWITCH

/* 
    let cena = prompt("Que se te antoja")
    switch (cena){
        case "hamburguesa":
            console.log(`Pedido: ${cena}, valor $1500`)
            break
        case "pizza":
            console.log(`Pedido: ${cena}, valor $1000`)
            break
        case "lomito":
            console.log(`Pedido: ${cena}, valor $2000`)
            break
        default:
            console.log("Te ahorraste unos pesos de la cena")
            break
    } 

    */

// FUNCTION DECLARATION

/*
    function mostrarMensaje() {
    console.log("saludos");
    }
    
    mostrarMensaje(); 
    
    */
/*
function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
    case "+":
      return primerNumero + segundoNumero;
      break;
    case "-":
      return primerNumero - segundoNumero;
      break;
    case "*":
      return primerNumero * segundoNumero;
      break;
    case "/":
      return primerNumero / segundoNumero;
      break;
    default:
      return 0;
      break;
  }
}

let entrada = prompt("Desea realizar un calculo? Si / No");

while (entrada != "NO") {
  let numero1 = Number(prompt("ingrese un numero"));
  let numero2 = Number(prompt("ingrese otro numero"));
  let calculo = prompt("Ingresa alguna operación: + - * /");
  let total;
  console.log(calculadora(numero1, numero2, calculo));
  entrada = prompt("Desea realizar un calculo? Si / No");
}
*/


/*Object literal
    const producto = {
    //key / clave : value / valor
    nombre: "Monitor de 24 Pulgadas",
    precio: 1500,
    disponible: true,
    };
    console.log(producto.nombre);
    console.log(producto.precio);

    producto.disponible = false;
    producto.nombre = "teclado Genius";

    console.log(producto["disponible"]);
    console.log(producto.nombre);

    // Agregar propiedades a un objeto
    producto.imagen = "imagen.jpg";
    console.log(producto);

    //Eliminar propiedades de un objeto
    //delete producto.nombre;
    //console.log(producto);

*/

/* Destructuring / desestructuracion

    const nombreProducto = producto.nombre;
    console.log(nombreProducto);


    const { nombre, precio, disponible } = producto;
    console.log(nombre);
    console.log(precio);
    console.log(disponible);
  
    
    const persona = {
    nombre: "Juan",
    edad: 30,
    ocupacion: "Programador",
    saludar: function () {
        console.log(`Mi nombre es ${this.nombre}`);
    },
    };
    persona.saludar(); 

    const cadena = "bienvenidos a coderhouse ";
    console.log(cadena.length);
    console.log(cadena.toLowerCase());
    console.log(cadena.toUpperCase());
    */

/*  CONSTRUCTOR / PLANTILLA - TEMPLATE (EL contructor es la función que setea al objeto)

    function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
    }

    // El Objeto se inicializa con la palabra "new" y se setea con la función "Producto y sus valores
    const producto2 = new Producto("Teclado", 1000, false);
    console.log(producto2); 

 */

/*  
    function crearObjetoCuenta(nombre, apellido, saldo) {
    this.nombreCuenta = nombre = prompt("Ingrese su nombre");
    this.apellidoCuenta = apellido = prompt("Ingrese su apellido");
    this.saldoCuenta = saldo = Number(prompt("Ingrese el saldo"));
    this.mostrarCuenta = function () {
        return `Nombre: ${this.nombreCuenta}, apellido: ${this.apellidoCuenta}, saldo: ${this.saldoCuenta}`;
    };
    }
    const cuenta1 = new crearObjetoCuenta();
    console.log(cuenta1.mostrarCuenta()); 
*/

/*   const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
  //devuelve true porque la clave "nombre" existe en el objeto persona1
  console.log( "nombre" in persona1);
  //devuelve false porque la clave "origen" no existe en el objeto persona1
  console.log( "origen" in persona1);
  //recorremos todas las propiedades del objeto con el ciclo for...in
  for (const propiedad in persona1) {
      console.log(persona1[propiedad]);
  }
  
 */

// CLASES

/*

  class Persona{
      constructor(nombre, edad, calle) {
          this.nombre = nombre;
          this.edad   = edad;
          this.calle  = calle;
      }
      hablar(){
          console.log("HOLA SOY "+ this.nombre);
      }
  }
  const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
  persona1.hablar();


    */


// ARRAYS

/* 

    const arreglo = ["Coder", 25, true];
    const arreglo2 = ["🥙", "🍔", "🌭"];
  //Accediendo a valores de la lista
    console.log(arreglo[0]);
  // Cambiando valores de la lista
    arreglo[2] = false;
    console.log(arreglo);
  //Agregando elementos a la lista
    arreglo[3] = 89;
    console.log(arreglo);
    const numeros = [1, 2, 3, 4, 5, 6];
    for (let index = 0; index < 5; index++) {
      console.log(numeros[index]);
    }
    */
    /* const miArray = ["Samsung", 1500, true];
    console.log(miArray[1]); 
    */

// PUSH

/*   
  const carrito = [];
  carrito.push("Producto A");
  console.log(carrito);
  carrito.push("Producto B");
  console.log(carrito);
  //  "unsfhit" agrega al principio del array
  carrito.unshift("Producto C");
  console.log(carrito);
  //  "pop" eliminar el ultimo elemento del arreglo
  carrito.pop();
  console.log(carrito);
  //  "shift" eliminar el primer elemento del arreglo
  carrito.shift();
  console.log(carrito);
 */

//SPLICE
//El primer parametro desde donde arranca, y el segundo indica cuantos elementos elimino del array
/*

  const alumnos = ["Micaela", "Guido", "Clemencia", "Silvio"];
  alumnos.splice(1, 2);
  console.log(alumnos);
  //JOIN
  console.log(alumnos.join(", ")); 
  */

//Funciones de array

  /* 
  //CONCAT
  const bebidas = ["🧁", "🧉", "☕"];
  const alimentos = ["🍕", "🌭", "🥐"];
  const unidos = bebidas.concat(alimentos);
  console.log(unidos);


  const alumnos = ["Micaela", "Guido", "Clemencia", "Silvio"]; 
  //INDEXOF
  console.log(alumnos.indexOf("Clemencia"));
  //INCLUDES (true or false)
  console.log(alumnos.includes("Clemencia"));
  //REVERSE
  alumnos.reverse();
  console.log(alumnos);
  */


  // "PUSH" (Carga de datos en un array)

  /*   
    const listaNombres = [];
    let cantidad = 5;
    do {
      let entrada = prompt("Ingrese un nombre");
      listaNombres.push(entrada.toUpperCase());
    } while (listaNombres.length != cantidad);
    console.log(listaNombres); 
    */

  //  "SPLICE"
  /*   
    const alumnos = ["Micaela", "Guido", "Clemencia", "Silvio"];
    const eliminar = (alumno) => {
    let index = alumnos.indexOf(alumno);
    if (index != -1) {
      alumnos.splice(index, 1);
    }
  };
  eliminar("Guido");
  console.log(alumnos); 
  */

//ARRAY DE OBJETOS

/* 
  const objeto1 = {
  id: 1,
  producto: "TV",
  };

  const array = [
    objeto1,
    {
      id: 2,
      producto: "Monitor",
    },
  ];

  array.push({
  id: 3,
  producto: "Teclado",
  });

  console.log(array); */

// FOR OF...

/* 
  const productos = [
    { id: 1, marca: "A" },
    { id: 2, marca: "B" },
    { id: 3, marca: "C" },
  ];
  
  console.log(productos);
  
  for (const x of productos) {
    console.log(x.id);
    console.log(x.marca);
  }
   */










//-------------------------------------------------------------------------------------------------//









  
// FUNCIONES DE ORDEN SUPERIOR

/* function primero() {
  console.log("PRIMERO");
}
function segundo() {
  console.log("SEGUNDO");
}
primero();
segundo(); */

/* function primero(segundo) {
  setTimeout(function () {
    console.log("PRIMERO");
    segundo();
  }, 5000);
}
function segundo() {
  console.log("SEGUNDO");
}
primero(segundo); */

//FOR EACH()

/* const pendientes = ["desafios", "preentregas", "asistencias", "book"]; */

// console.log(pendientes);

/* pendientes.forEach((pendiente, indice) => {
  console.log(`${indice}: ${pendiente}`);
}); */

//MAP()

/* pendientes.map((p, i) => {
  console.log(`${i}: ${p}`);
}); */

// REDUCE()

/* const carrito = [
  { nombre: "Monitor", precio: 1500 },
  { nombre: "TV", precio: 2000 },
  { nombre: "Teclado", precio: 500 },
  { nombre: "Mouse", precio: 200 },
]; */

/* // console.log(carrito);
let totalCompra = 0;
let resultado = carrito.reduce((accum, producto) => {
  return accum + producto.precio;
}, 0);
console.log(resultado); */

/* const carrito = [
  { nombre: "Monitor", precio: 1500 },
  { nombre: "TV", precio: 2000 },
  { nombre: "Teclado", precio: 500 },
  { nombre: "Mouse", precio: 200 },
];
 */
// FILTER()

/* let resultado = carrito.filter((producto) => producto.precio >= 1500);
let resultado2 = carrito.filter((producto) => producto.nombre === "TV"); */

/* console.log(resultado);
console.log(resultado2); */

//FIND()
/* let resultado3 = carrito.find((producto) => producto.nombre === "Teclado");
console.log(resultado3); */

// MATH

// const numero = 3.156;

/* const redondeo = Math.round(numero);
const redondeo2 = Math.ceil(numero); // hacia arriba
const redondeo3 = Math.floor(numero); // hacia abajo */

//valor absoluto
/* const numero2 = -89;
const valorAbsoluto = Math.abs(numero2);
console.log(valorAbsoluto); */

//pow => potenica
//sqrt => raiz

/* const numAleatorio = Math.random();
console.log(numAleatorio); */

//DATE

/* const ahora = new Date();
const inicial = new Date("2023-03-20");
const fin = new Date("1985-03-06");
console.log(ahora.getFullYear()); // año completo
console.log(ahora.getMonth()); // mes completo
console.log(ahora.getDate()); // dia completo
console.log(ahora.getHours()); // hora completo
console.log(ahora.getMinutes()); // minutos completo */

  function mayorQue(n) {
    return (m) => m > n
}

let mayorQueDiez = mayorQue(2)
console.log(mayorQue)
console.log(mayorQueDiez)
console.log( mayorQueDiez(12) )  //  true
console.log( mayorQueDiez(8) )  //  false



















// FIN