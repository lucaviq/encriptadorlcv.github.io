const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const botonCopiar = document.querySelector(".btn-copiar");

const munieco = document.querySelector(".contenedormunieco");
const contenedorParrafo = document.querySelector(".contenedor-parrafo");

const resultado = document.querySelector(".texto-resultado");
const cajaTexto = document.querySelector(".cajatexto");

/* BOTONES */

botonEncriptar.addEventListener("click", encriptar);

botonDesencriptar.addEventListener("click", desencriptar);

botonCopiar.addEventListener("click", copiarTexto);

/* ENCRIPTAR */

function encriptar(){

    const texto = recuperarTexto();

    if(texto === ""){
        mostrarAlerta("Por favor ingresa un texto.");
        return;
    }

    if(!validarTexto(texto)){
        mostrarAlerta("Solo letras minúsculas y sin acentos.");
        return;
    }

    ocultarElementos();

    resultado.textContent = encriptarTexto(texto);
}

/* DESENCRIPTAR */

function desencriptar(){

    const texto = recuperarTexto();

    if(texto === ""){
        mostrarAlerta("Por favor ingresa un texto.");
        return;
    }

    ocultarElementos();

    resultado.textContent = desencriptarTexto(texto);
}

/* RECUPERAR */

function recuperarTexto(){
    return cajaTexto.value.trim();
}

/* VALIDAR */

function validarTexto(texto){

    const regex = /^[a-zñ\s]+$/;

    return regex.test(texto);
}

/* OCULTAR */

function ocultarElementos(){

    munieco.classList.add("ocultar");

    contenedorParrafo.classList.add("ocultar");
}

/* ENCRIPTACIÓN */

function encriptarTexto(texto){

    return texto
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
}

/* DESENCRIPTAR */

function desencriptarTexto(texto){

    return texto
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
}

/* COPIAR */

async function copiarTexto(){

    const contenido = resultado.textContent;

    if(contenido === ""){
        mostrarAlerta("No hay texto para copiar.");
        return;
    }

    try{

        await navigator.clipboard.writeText(contenido);

        botonCopiar.textContent = "¡Copiado!";

        setTimeout(() => {

            botonCopiar.textContent = "Copiar";

        }, 2000);

    }catch(error){

        mostrarAlerta("No se pudo copiar.");
    }
}

/* ALERTA */

function mostrarAlerta(mensaje){

    alert(mensaje);
}
