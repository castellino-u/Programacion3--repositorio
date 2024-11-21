//EJERCICIO 3: TIPOS DE DATOS
const str: string="Hola, TypeScript!";
const num:number=123;
const bool:boolean=true;
const date: string="12/01/2003"

const text = document.getElementById("text");
const number=document.getElementById("number");
const booleano=document.getElementById("booleano");
const date1=document.getElementById("date");


if(text&&number&&booleano&&date1){
    text.textContent=str;
    number.textContent=num.toString();
    booleano.textContent=bool.toString();
    date1.textContent=date;
}

//EJERCICIO 4 : FUNCION DE NUMERO A CADENA
const num2:number=986;

function numeroACadena(num:number):string {
    const pasadoACadena:string=num2.toString();
    return pasadoACadena;
}
const cadena =document.getElementById("num2");

if(cadena){
    cadena.textContent=numeroACadena(num2);
}

//EJERCICI0 5: SUMA DEL ARRAY
const numeros:number[]=[1,7,5];

function sumaArray(numeros:number[]): number {
    let suma=0;
    for (let i = 0; i < numeros.length; i++) {
        suma=suma+numeros[i];
    }
    return suma;
}

const sumaDelArray=document.getElementById("suma");

if (sumaDelArray) {
    sumaDelArray.textContent=sumaArray(numeros).toString();
}

// EJERCICIO 6: OBJETO 
const estudiante={
    nombre: "Paula",
    edad:21,
    curso:"Programacion"
}

const name1 =document.getElementById("name");
const age1=document.getElementById("age");
const curso1=document.getElementById("curso");

if (name1 && age1 && curso1) {
    name1.textContent=estudiante.nombre;
    age1.textContent=estudiante.edad.toString();
    curso1.textContent=estudiante.curso;
}

// EJERCICIO 7: DEFINIR TYPE
type Direccion={
    calle:string,
    ciudad:string,
    cp:number
}

let direccion: Direccion={
    calle:"Av Principal",
    ciudad:"Mendoza",
    cp:1235
}

const direccion1=document.getElementById("direccion");


if (direccion1) {
    direccion1.textContent="Direccion: Callle:"+direccion.calle+", Ciudad:"+ direccion.ciudad+" CP:"+direccion.cp;
}

// EJERCICIO 8: INTERFACE 

interface Usuario{
    name:string,
    email:string
}

let usuario :Usuario={
    name:"Paula",
    email:"paula@gmail.com"
}

function saludarUsuario(usuario:Usuario) {
    return `Hola, mi nombre es ${usuario.name}`
}

const saludar=document.getElementById("saludar");

if (saludar) {
    saludar.textContent=saludarUsuario(usuario);
}

// EJERCICIO 9: CLASE

class Persona{
    nombre: string;
    edad:number;

    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }

    saludar(){
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`
    }
}

const persona= new Persona("Paula",21);

const saludando=document.getElementById("saludando");

if (saludando) {
    saludando.textContent=persona.saludar();
}

// EJERCICIO 10: CLASE CON VALOR GENERICO
class Caja <T> {
    private mensaje:T;

    constructor(mensaje:T) {
        this.mensaje=mensaje;
    }
    
    obtenerMensaje():T{
        return this.mensaje;
    }
}

let cajadeTexto=new Caja<string>("Mensaje secreto");
let cajaDeNumero=new Caja<number>(42);

const texto=document.getElementById("cajaDeTexto");
const numero=document.getElementById("cajaDeNumero");

if (texto&&numero) {
    texto.textContent="Contenido de cajaDeTexto: "+cajadeTexto.obtenerMensaje();
    numero.textContent="Contenido de cajaDeNumero: "+cajaDeNumero.obtenerMensaje();
}

//EJERCICIO 11

function identidad<T> (valor:T):T{
    return valor;
}

let number1:number=73;
let texto1:string="Texto"

const imprimir=document.getElementById("imprimir");

if (imprimir) {
    imprimir.innerHTML=`
    <p>Identidad del numero : ${identidad<number>(number1)}</p>
    <p>Identidad del texto:${identidad<string>(texto1)} </p>   `
}

// EJERCICIO 12

enum Color{
    Rojo="rojo",
    Amarillo="amarillo",
    Verde="verde"
}

let colorFavorito:Color=Color.Rojo;

const color=document.getElementById("color");

if (color) {
    color.innerHTML=`Color favorito: ${colorFavorito}`
}
