const formulario = document.querySelector("#formAlumno")
const listaAlumnos = document.querySelector("#listaAlumnos")
const mensaje = document.querySelector("#mensaje")

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim()
    const carrera = document.querySelector("#carrera").value.trim()
    const correo = document.querySelector("#correo").value.trim()

    if (alumnoEditandoId === null) {
        const alumno = {
            id: Date.now(),
            nombre: nombre,
            carrera: carrera,
            correo: correo
        }
        alumnos.push(alumno)
        mostrarMensaje("Alumno guardado correctamente", "mje-exito")
    } else {
        const alumno = alumnos.find(alumno => alumno.id === alumnoEditandoId)
        alumno.nombre = nombre
        alumno.carrera = carrera
        alumno.correo = correo
        alumnoEditandoId = null
        formulario.querySelector("button").textContent = "Guardar Alumno"

        mostrarMensaje("Alumno actualizado correctamente", "mje-exito")
    }
    localStorage.setItem("alumnos", JSON.stringify(alumnos))
    mostraAlumnos(alumnos)
    formulario.reset()
});

function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = tipo
    setTimeout(() => {
        mensaje.textContent = " ";
        mensaje.className = "oculto"
    }, 3000);
}

function obtenerAlumnos() {
    const datos = localStorage.getItem("alumnos")
    return datos ? JSON.parse(datos) : [];
}

function mostrarAlumnos(alumnos){
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos) {
        listaAlumnos.innerHTML += `
        <tr>
            <td>${alumno.id}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.carrera}</td>
            <td>${alumno.correo}</td>
            <td>
            <button class="editar" data-id="${alumno.id}">Editar</button>
            <button class="eliminar" data-id="${alumno.id}">Eliminar</button>
            </td>
        </tr>
        `
    }
}

function eliminarAlumno(id) {
    const alumnos = obtenerAlumnos()
    const alumnosActualizados = alumnos.filter(alumno => alumno.id !== id)
    localStorage.setItem("alumnos", JSON.stringify(alumnosActualizados))
    mostrarAlumnos(alumnosActualizados)
    mostrarMensaje("Alumno eliminado correctamente", "mje-exito")
}

listaAlumnos.addEventListener("click", function(event){
    if (e.target.classList.contains("btn-eliminar")) {
        const id = Number(e.target.dataset.id)
        eliminarAlumno(id)
    }
    if (e.target.classList.contains("btn-editar")) {
        const id = Number(e.target.dataset.id)
        editarAlumno(id)
    }
})

function editarAlumno(id) {
    const alumnos = obtenerAlumnos()
    const alumno = alumnos.find(alumno => alumno.id === id)
    document.querySelector("#nombre").value = alumno.nombre
    document.querySelector("#carrera").value = alumno.carrera
    document.querySelector("#correo").value = alumno.correo
    alumnoEditandoId = id
}
if (!correo.includes("@")) {
        mostrarMensaje("Ingrese un correo electrónico válido", "mje-error")
        return
    }
    if (nombre.length < 3) {
        mostrarMensaje("El nombre debe tener al menos 3 caracteres", "mje-error")
        return
    }

    

