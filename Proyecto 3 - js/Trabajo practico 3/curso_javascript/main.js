
let a = 1;
let b = 2;
let c= a+b;
console.log("la suma de "+a+" y "+b+" es de:"+c)

let nombre=prompt("Ingresa tu nombre");

console.log("hola "+nombre);


a=10
b=11
c=5
if(a>b && a>c){
 console.log("El numero de mayor valor entre los tres numeros es:"+a);
}else if(b>a && b>c){
  console.log("El numero de mayor valor entre los tres numeros es:"+b);
}else{
  console.log("El numero de mayor valor entre los tres numeros es:"+c);
}

let num=prompt("Ingresar un numero par")

let aux=num%2;

if(aux==0){
  console.log("El numero "+num+", es par")
}else{
  console.log("El numero "+num+", es impar")
}

aux=10
console.log(aux)
while(aux|=0){
  aux-=1
  console.log(aux)
}

do{
num=prompt("Ingresa un numero mayor a 100")
}while(num<100)
console.log("Ingresaste el numero "+num+" que es mayor a 100")

function espar(nume){
  let aux=nume%2;
  if(aux==0){
    return true
  }else{
    return false
  }

}

num=prompt("ingresar Numero")
if(espar(num)){
  console.log("El numero "+num+", es par")
}else{
  console.log("El numero "+num+", es impar")
}

function convertirCelsiusAFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  console.log(celsius + "°C es igual a " + fahrenheit + "°F");
}


convertirCelsiusAFahrenheit(0);  
convertirCelsiusAFahrenheit(25);  
convertirCelsiusAFahrenheit(100);

let persona = {
  nombre:'Maxi',
  edad:'21',
  ciudad:undefined,
  agregarciudad: function(ciudad){
    this.ciudad=ciudad
  },

};

persona.agregarciudad("mendoza");

console.log("Persona: "+persona.nombre+", Edad: "+persona.edad+", Ciudad: "+persona.ciudad);

let libro = {
  titulo:"El quijote",
  autor:"Miguel de Cervantes",
  ano:1605,
  esAntiguo: function() {
    const antiguedad = 2024 - this.ano;
    
    if (antiguedad > 10) {
        console.log("El libro '" + this.titulo + "' es antiguo (más de 10 años).");
    } else {
        console.log("El libro '" + this.titulo + "' es reciente (menos de 10 años).");
    }
  }
};
libro.esAntiguo();


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = [];

for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
}

console.log("Array original:", numeros);
console.log("Array con números multiplicados por 2:", numerosMultiplicados);


let pares = [];

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        pares.push(i); 
    }
    if (pares.length === 10) {
        break; 
    }
}

console.log("Primeros 10 números pares:", pares);

function cambiarColorP(){
  let parrafos = document.querySelectorAll("#contenedor-parrafos p");
  parrafos.forEach(function(parrafo){
     parrafo.style.color = "blue";
  });
}

const btnCambiarColor = document.querySelector("#boton-color");
btnCambiarColor.addEventListener("click", cambiarColorP);


export function mostrarValor() {
  const inputTexto = document.querySelector("#texto").value; 
  alert("Valor ingresado: " + inputTexto); 
}

window.addEventListener("DOMContentLoaded", () => {
  const btnMostrarValor = document.querySelector("#btn-mostrar-valor"); 

  btnMostrarValor.addEventListener("click", mostrarValor);
});


function mostrarTextoEnConsola(event) {
  console.log(event.target.textContent); 
}

window.addEventListener("DOMContentLoaded", () => {
  const lista = document.querySelector("#mi-lista"); 
  
  lista.querySelectorAll("li").forEach(item => {
      item.addEventListener("click", mostrarTextoEnConsola);
  });
});


function deshabilitarCampo() {
    document.querySelector("#mi-texto").disabled = true;
}


function habilitarCampo() {
    document.querySelector("#mi-texto").disabled = false;
}


window.addEventListener("DOMContentLoaded", () => {
  
    const btnDeshabilitar = document.querySelector("#btn-deshabilitar");
    const btnHabilitar = document.querySelector("#btn-habilitar");
    
   
    btnDeshabilitar.addEventListener("click", deshabilitarCampo);
    btnHabilitar.addEventListener("click", habilitarCampo);
});

function guardarCorreo(event) {
  event.preventDefault(); 

  const correoInput = document.querySelector("#correo");
  const correo = correoInput.value;

  localStorage.setItem("correo", correo); 
  mostrarCorreo(); 
}


function mostrarCorreo() {
  const correoMostrado = document.querySelector("#correo-mostrado");
  const correo = localStorage.getItem("correo");

  if (correo) {
      correoMostrado.innerHTML = `
          <p>Correo guardado: ${correo}</p>
          <button id="btn-eliminar">Eliminar</button>
      `;

    
      document.querySelector("#btn-eliminar").addEventListener("click", eliminarCorreo);
  } else {
      correoMostrado.innerHTML = "";
  }
}


function eliminarCorreo() {
  localStorage.removeItem("correo"); 
  mostrarCorreo();
}


window.addEventListener("DOMContentLoaded", () => {

  document.querySelector("#form-correo").addEventListener("submit", guardarCorreo);
  mostrarCorreo();
});