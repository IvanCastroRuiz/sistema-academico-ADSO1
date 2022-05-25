console.log("Conectado");

// Bloque Importar
import { 
    validarFormulario

 }

 from "./helpers/funciones.js";

// Bloque de constantes y variables
const formulario = document.querySelector("#formulario");


// Bloque de Funciones


// Bloque de Programa Principal

formulario.addEventListener("submit", validarFormulario);
