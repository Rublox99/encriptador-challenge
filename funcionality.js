//variables globales
var textoIngresado= "";//variable que almacena el string del textarea ingresado
var textoResultado= "";
var modo= 0; //0 para encriptar; 1 para desencriptar 

var botonEncriptar= document.getElementById("boton-encriptar");
var botonDesencriptar= document.getElementById("boton-desencriptar");
var botonLimpiar= document.getElementById("boton-limpiar");

botonEncriptar.onclick= validarTextoEncriptado;
botonDesencriptar.onclick= validarTextoDesencriptado;
botonLimpiar.onclick= limpiarContenido;

var mensajeAdvertencia= ""; 
function validarTextoEncriptado(){
    //valida solo hayan carácteres del abecedario que no traten acentos, caracteres especiales o mayusculas
    if(/[a-z]$/.test(document.getElementById("texto-ingresado").value)){  
        textoIngresado= document.getElementById("texto-ingresado").value;
        encriptarTexto();

    } else{ //modifica el html del apartado divAdvertencia si no se cumplen los requisitos
        let modificadorAdvertencia= document.getElementById("contenidoAdvertencia");
        modificadorAdvertencia.innerHTML= "Su mensaje no debe tratar mayúsculas, caracteres especiales, tildes o mensajes vacíos";
    }
}

function encriptarTexto(){
    var acumulado_de_encriptacion= ""; //string para recorrer y acumular valores del texto ingresado
    
    //ciclo de iteraciones según la longitud del texto ingresado
    for (let i= 0; i< textoIngresado.length; i++){
        /*se revisa cada elemento del texto ingresado, acumulando en cada ciclo en el nuevo str y de coincidir un caso,
        lo acumula cambiado, si no, acumula el valor actual*/
        switch (textoIngresado[i]){
            case 'a':
                acumulado_de_encriptacion+= "ai";
                break;

            case 'e':
                acumulado_de_encriptacion+= "enter";
                break;

            case 'i':
                acumulado_de_encriptacion+= "imes";
                break;

            case 'o':
                acumulado_de_encriptacion+= "ober";
                break;

            case 'u':
                acumulado_de_encriptacion+= "ufat";
                break;
            
            default:
                acumulado_de_encriptacion+= textoIngresado[i];
                break;
        }
    }

    //almacena en la variable global y modifica el value del elemento HTML
    textoResultado= acumulado_de_encriptacion;
    document.getElementById("texto-resultado").value= textoResultado;

}

function validarTextoDesencriptado(){
        //valida solo hayan carácteres del abecedario que no traten acentos, caracteres especiales o mayusculas
        if(/[a-z]$/.test(document.getElementById("texto-ingresado").value)){  
            textoIngresado= document.getElementById("texto-ingresado").value;
            desencriptarTexto();
    
        } else{
            let modificadorAdvertencia= document.getElementById("contenidoAdvertencia");
            modificadorAdvertencia.innerHTML= "Su mensaje no debe tratar mayúsculas, caracteres especiales, tildes o mensajes vacíos";
        }
}

function desencriptarTexto(){
    var acumulado_de_desencriptacion= textoIngresado; //recopila el texto ingresado
    var auxContador= textoIngresado;

    //crea dos arreglos de tamaños simétricos, para comparar reemplazar con la función str.replace(buscarTal, sustituirPor)
    var vocales= ["a", "e", "i", "o", "u"];
    var reglas= ["ai", "enter", "imes", "ober", "ufat"];

    //se repite n veces y en cada ciclo, busca reglas; n= iteraciones asignadas
    var iteraciones= 100;
    for(let i= 0; i< iteraciones; i++){
        for(let j= 0; j< reglas.length; j++){
            acumulado_de_desencriptacion= acumulado_de_desencriptacion.replace(reglas[j], vocales[j]);
        }
    }

    //si el texto original al desencriptado son iguales, es porque el mensaje no tiene encriptación de este tipo
    //en ambos casos del condicionante, se modifica el contenido del mensaje
    if (acumulado_de_desencriptacion== auxContador){
        let modificadorAdvertencia= document.getElementById("contenidoAdvertencia");
        modificadorAdvertencia.innerHTML= "Su mensaje no tiene niveles de encriptación ONE";
    } else{
        //en este caso, cambia el contenido del mensaje al desencriptado
        textoResultado= acumulado_de_desencriptacion;
        document.getElementById("texto-resultado").value= textoResultado;
    }

}

function limpiarContenido(){
    textoIngresado= "";
    textoResultado= "";
    document.getElementById("texto-ingresado").value= "";
    document.getElementById("texto-resultado").value= "";
}