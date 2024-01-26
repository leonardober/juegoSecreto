//puente de union entre Js y Html pot el querySelector de la etiqueta h1
//variable titulo esto es un objeto no un texto
//JS FASE1
/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';
//creamos una function o bloque de codigo que arroja un resultado
//aca declaramos la function Onclick
function intentoDeUsuario() {
    alert('Click desde el boton');
}*/
//JSFASE2 asignarTextoElemento()
//asignamos la funcion asignarTextoRlemento()
//o seaEliminamos la declaracion de variables
//dentro de la funcion encapsulamos las variables
// Invocamos la funcion desde fuera del h1 y p
//elemento y texto son variables(parametros) reemplaza h1 y  p deparrafo
/*function asignarTextoElemento(elemento, texto){
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
}
function intentoDeUsuario() {
    alert('Click desde el boton');
}
asignarTextoElemento('h1', 'Juego del numero secreto!');   //llamar la funcion
asignarTextoElemento('p', 'Indica un numero del 1 al 100');*/
//JSFASE3 FUNCION GENERA NUMERO ALEATORIO
//let numeroSecreto es variable global
/*let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
    return;
}
function intentoDeUsuario() {
    alert('Click desde el boton');
    return;
}
function generarNumeroSecreto() {
    //no  necesita crear variable interna de bloque let numeroSecreto
    return Math.floor(Math.random() * 10) + 1;
    
}
asignarTextoElemento('h1', 'Juego del numero secreto!');   //llamar la funcion
asignarTextoElemento('p', 'Indica un numero del 1 al 100!');*/
//JSFASE4 CAPTURANDO EL VALOR DEL INPUT
/*let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto){
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
    return;
}
//debe coincidir con onclick de HTML llamado de function
function verificarIntento() { //donde usuario registra su numero or value
    //input del HTMl  donde le colocamos el id valorUsuario retorna el valor
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof (numeroDeUsuario));
    console.log(numeroSecreto);//muestra numero secreto en la consola
    console.log(typeof (numeroSecreto));
    console.log(numeroDeUsuario);//vemos el numero del usuario en la consola
    console.log( numeroDeUsuario === numeroSecreto);//valida y compara valor y tipo de dato
    return;
}
function generarNumeroSecreto() { //genera el numero secreto automatico
    //no  necesita crear variable interna de bloque let numeroSecreto
    return Math.floor(Math.random()*10)+1;
    
}
asignarTextoElemento('h1', 'Juego del numero secreto!');   //llamar la funcion
asignarTextoElemento('p', 'Indica un numero del 1 al 100!');


/* DESAFIOS:
Crear una función que muestre "¡Hola, mundo!" en la consola.*/
/*function mostrarHola() {
    console.log('¡Hola, mundo!');
}
mostrarHola();
/*Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function mostrarHolaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
mostrarHolaNombre("Luz");
/*Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function calcularDoble(numero) {
    return numero * 2;
}
let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

/*Crear una función que reciba tres números como parámetros y devuelva su promedio.
function calcularpromedio(a, b, c) {
    return (a + b + c) / 3;
}
let promedio = calcularpromedio(4, 7, 9);
console.log(promedio);

/*Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function encontrarMayor(a,b) {
    return a > b ? a : b; //? reemplaza al if  los : reempaza a else
}
let numeroMayor = encontrarMayor(16, 7);
console.log(numeroMayor);
/*Crear una función que reciba un número como parámetro y
devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
    return (numero * numero);
}
let resultado = cuadrado(6);
console.log(resultado);*/
//JSFASE3MENSAJE SI ACERTO
/*let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto){
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
    return;
}
//debe coincidir con onclick de HTML llamado de function
function verificarIntento() { //donde usuario registra su numero or value
    //input del HTMl  donde le colocamos el id valorUsuario retorna el valor
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   // console.log(numeroSecreto);
   /* console.log(typeof (numeroDeUsuario));
    console.log(numeroSecreto);//muestra numero secreto en la consola
    console.log(typeof (numeroSecreto));
    console.log(numeroDeUsuario);//vemos el numero del usuario en la consola
    //console.log( numeroDeUsuario === numeroSecreto);
    //valida y compara valor y tipo de dato*/
   /* if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste el numero');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
           asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
           asignarTextoElemento('p', 'El numero secreto es mayor'); 
        }
    }
    return;
}
function generarNumeroSecreto() { //genera el numero secreto automatico
    //no  necesita crear variable interna de bloque let numeroSecreto
    return Math.floor(Math.random()*10)+1;
    
}
asignarTextoElemento('h1', 'Juego del numero secreto!');   //llamar la funcion
asignarTextoElemento('p', 'Indica un numero del 1 al 100!');*/


//JSMENSAJE DEL NUMERO DE INTENTOS
/*let numeroSecreto = generarNumeroSecreto();
let intentos = 1; //contador

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
    return;
}
//debe coincidir con onclick de HTML llamado de function
function verificarIntento() { //donde usuario registra su numero or value
    //input del HTMl  donde le colocamos el id valorUsuario retorna el valor
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        //comilla invertida alt+96
        //template string y operador ternario el ? if     : else
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos=== 1) ? 'vez': 'veces'}`);
    } else {
        if (numeroDeUsuario > numeroSecreto) {
           asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
           asignarTextoElemento('p', 'El numero secreto es mayor'); 
        }
        intentos++;
    }
    return;
}
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
    
}
asignarTextoElemento('h1', 'Juego del numero secreto!');
asignarTextoElemento('p', 'Indica un numero del 1 al 100!');*/

//LIMPIAR EL CAMPO
/*let numeroSecreto = generarNumeroSecreto();
let intentos = 1; //contador

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
    return;
}
//debe coincidir con onclick de HTML llamado de function
function verificarIntento() { //donde usuario registra su numero or value
    //input del HTMl  donde le colocamos el id valorUsuario retorna el valor
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        //comilla invertida alt+96
        //template string y operador ternario el ? if     : else
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos=== 1) ? 'vez': 'veces'}`);
        //removemos Disable de nuevo Juego por query selectos or getById
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //eL USUARIO NO ACERTO
        if (numeroDeUsuario > numeroSecreto) {
           asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
           asignarTextoElemento('p', 'El numero secreto es mayor'); 
        }
        intentos++;
        limpiarCaja();  //Invocamos la funcion
    }
    return;
}
//Funcion que limpie el campo(recuerde es afuera)

function limpiarCaja() {
    //seleccionado por ID DEL INPUT llamado cuando No Acierta
    //let valorCaja = document.querySelector('#valorUsuario');
   // valorCaja.value = ''; //valor vacio 

    //otra opcion 
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
    
}
asignarTextoElemento('h1', 'Juego del numero secreto!');
asignarTextoElemento('p', 'Indica un numero del 1 al 100!');*/

//FUNCION REINICIAR boton NUEVOJUEGO
//let numeroSecreto =0;
/*let numeroSecreto = generarNumeroSecreto();//genera numeroaleatorio
let intentos = 1; //contador

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
    return;
}
//debe coincidir con onclick de HTML llamado de function
function verificarIntento() { //donde usuario registra su numero or value
    //input del HTMl  donde le colocamos el id valorUsuario retorna el valor
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        //comilla invertida alt+96
        //template string y operador ternario el ? if     : else
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos=== 1) ? 'vez': 'veces'}`);
        //removemos Disable de nuevo Juego por query selectos or getById
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
           asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
           asignarTextoElemento('p', 'El numero secreto es mayor'); 
        }
        intentos++;
        limpiarCaja();  //Invocamos la funcion
    }
    return;
}
//Funcion que limpie el campo(recuerde es afuera)

function limpiarCaja() {
    //seleccionado por ID DEL INPUT llamado cuando No Acierta
    //let valorCaja = document.querySelector('#valorUsuario');
   // valorCaja.value = ''; //valor vacio 

    //otra opcion 
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
    
}
//Creamos Function mensajes iniciales que llama el h1 y el p
function condicionesIniciales() {
        asignarTextoElemento('h1', 'Juego del numero secreto!');
        asignarTextoElemento('p', 'Indica un numero del 1 al 10!');
        numeroSecreto = generarNumeroSecreto();
        intentos = 1;
}
//creamos function reiniciar Juego
function reiniciarJuego() {
    //pasos:limpiarla caja
    limpiarCaja();
    //indicar mensaje de inicio intervalo de numeros
     condicionesIniciales() ;
    //generar el numero aleatorio asi que invocamos la function nuevamente
    //numeroSecreto = generarNumeroSecreto();
    //inicializar numero de intentos
    //intentos = 1;
    //Deshabilitar el boton de nuevo juego(porque se habilita cuando juego termina)
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}
condicionesIniciales();*/

//DESAFIO3
/*
Crea una función que calcule el índice de masa corporal (IMC) 
de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}
calculoMasaCorporal();

Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

Crea una función que convierta un valor en dólares, pasado como parámetro, y
 devuelva el valor equivalente en reales(moneda brasileña
. Para esto, considera la cotización del dólar igual a R$4,80.

function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.80;
  var reales = dolares * cotizacionDolar;
  return reales;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);


Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
 utilizando la altura y la anchura que se proporcionarán como parámetros.
 
 function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);


Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
 utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

 function calcularAreaYPerimetroCircular(radio) {
  var pi = 3.14;
  var area = pi * radio * radio;
  var perimetro = 2 * pi * radio;
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);

Crea una función que muestre en pantalla la tabla de 
multiplicar de un número dado como parámetro.

function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);
*/

//DESAFIO4
/* Desafíos
Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

Crea una lista de lenguajes de programación llamada
 "lenguagesDeProgramacion con los siguientes elementos: 
 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];


Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');


Crea una función que muestre en la consola todos los elementos
 de la lista "lenguagesDeProgramacion.

 function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesSeparadamente();

Crea una función que muestre en la consola todos los elementos 
de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesReversoSeparadamente();

Crea una función que calcule el promedio de los elementos 
en una lista de números.

function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Média:', media);

Crea una función que muestre en la consola el número más grande 
y el número más pequeño en una lista.

function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);


Crea una función que devuelva la suma de todos los elementos
 en una lista.

 function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log('Suma:', suma);


Crea una función que reciba una lista como parámetro y retorne el índice de un elemento también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.
function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}*/

//4Js LISTASDENUMEROSorteadosYRECURSIVIDAD

let numeroSecreto =0;
//let numeroSecreto = generarNumeroSecreto();//genera numeroaleatorio
let intentos = 0; //contador
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
    return;
}
//debe coincidir con onclick de HTML llamado de function
function verificarIntento() { //donde usuario registra su numero or value
    //input del HTMl  donde le colocamos el id valorUsuario retorna el valor
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        //comilla invertida alt+96
        //template string y operador ternario el ? if     : else
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos=== 1) ? 'vez': 'veces'}`);
        //removemos Disable de nuevo Juego por query selectos or getById
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
           asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
           asignarTextoElemento('p', 'El numero secreto es mayor'); 
        }
        intentos++;
        limpiarCaja();  //Invocamos la funcion
    }
    return;
}
//Funcion que limpie el campo(recuerde es afuera)

function limpiarCaja() {
    //seleccionado por ID DEL INPUT llamado cuando No Acierta
    //let valorCaja = document.querySelector('#valorUsuario');
   // valorCaja.value = ''; //valor vacio 

    //otra opcion 
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    //creamos variable numeroGenerado de la lista
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //verificamos if numero generado esta en la lista
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles')
    } else {
        
    
         if (listaNumerosSorteados.includes(numeroGenerado)) {
             return generarNumeroSecreto();
         } else {
        //numeroGenerado se almacenan en la lista(recursividad)
        //para no repetirlo como control
            listaNumerosSorteados.push(numeroGenerado);
             return numeroGenerado;
         }
    }
}
//Creamos Function mensajes iniciales que llama el h1 y el p
function condicionesIniciales() {
        asignarTextoElemento('h1', 'Juego del numero secreto!');
        asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
        numeroSecreto = generarNumeroSecreto();
        intentos = 1;
}
//creamos function reiniciar Juego
function reiniciarJuego() {
    //pasos:limpiarla caja
    limpiarCaja();
    //indicar mensaje de inicio intervalo de numeros
     condicionesIniciales() ;
    //generar el numero aleatorio asi que invocamos la function nuevamente
    //numeroSecreto = generarNumeroSecreto();
    //inicializar numero de intentos
    //intentos = 1;
    //Deshabilitar el boton de nuevo juego(porque se habilita cuando juego termina)
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}
condicionesIniciales();
