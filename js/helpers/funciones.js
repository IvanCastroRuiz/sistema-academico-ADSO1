let estudiantes = []; // Vector
let estudiante = {}; // Obejeto literal

export const validarFormulario = (even) => {
    even.preventDefault();
    // console.log(even);

    const nombres = document.querySelector("#nombres").value;
    const apellidos = document.querySelector("#apellidos").value;
    const fecha = document.querySelector("#fecha").value;
    const edad = document.querySelector("#edad").value;
    const programa = document.querySelector("#programa").value;

    // Validacion 
    if ([nombres, apellidos, fecha, edad, programa].includes("")) {
        mostrarMensaje("Todos los campos son obligatorios", true);
        return
    }

    // Ingresar registros
    mostrarMensaje("Registro guardado de forma exitosa");
    guardarRegistro(nombres, apellidos, fecha, edad, programa);


};

const mostrarMensaje = (menj, error = null) => {

    const alerta = document.createElement("p");
    alerta.textContent = menj;

    if (error) {
        alerta.classList.add("error");
    } else {
        alerta.classList.add("correcto");
    };

    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000);

};

const guardarRegistro = (nombres, apellidos, fecha, edad, programa) => {
    estudiante = {

        "nombres": nombres,
        "apellidos": apellidos,
        "fecha": fecha,
        "edad": edad,
        "programa": programa
    };
    estudiantes.push(estudiante);
    formulario.reset();
    console.log(estudiantes);

}