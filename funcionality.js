//variables globales
var texto_a_encriptar;
var texto_a_desencriptar;
var modo= 0; //0 para encriptar; 1 para desencriptar 

var botonEncriptar= document.getElementById("boton-encriptar");
var botonDesencriptar= document.getElementById("boton-desencriptar");
var botonCambiar= document.getElementById("boton-cambiar");

botonEncriptar.onclick= encriptarTexto;
botonDesencriptar.onclick= desencriptarTexto;
botonCambiar.onclick= cambiarModo;


function encriptarTexto(){
    let textoAux= document.getElementById("texto-ingresado").value;

    texto_a_encriptar= textoAux;
}

function desencriptarTexto(){
    let textoAux= document.getElementById("texto-resultado").value;

    texto_a_desencriptar= textoAux;
}

function cambiarModo(){
    let text_entradaAux= document.getElementById("texto-ingresado");
    let text_salidaAux= document.getElementById("texto-resultado");

    if (modo== 0){
        botonDesencriptar.disabled= false;
        botonEncriptar.disabled= true;
        
        text_entradaAux.placeholder= "Mensaje encriptado";
        text_salidaAux.placeholder= "Mensaje plano";

        modo= 1;
    } else {        
        botonDesencriptar.disabled= true;
        botonEncriptar.disabled= false;

        text_entradaAux.placeholder= "Mensaje plano";
        text_salidaAux.placeholder= "Mensaje encriptado";

        modo= 0;
    }
}