const formulario = document.querySelector("#formulario")
const listaAlumnos = document.querySelector("#listaAlumnos")
const mensaje = document.querySelector("#mensaje")
const cantAlumnos = document.querySelector("#cantAlumnos")

let alumnos = obtenerAlumnos()
let alumnoEditandoId = null
let alumnoEditar = null
const btnCancelar = document.querySelector("#btn-cancelar")
btnCancelar.style.display = "none"
const btnGuardar = document.querySelector("#btn-guardar")
formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim()
    const carrera = document.querySelector("#carrera").value.trim()
    const correo = document.querySelector("#correo").value.trim()
    
    if (nombre.length < 3) {
        mostrarMensaje("El nombre debe tener al menos 3 caracteres", "mje-error")
        return
    }
    if (!correo.includes("@")) {
        mostrarMensaje("Ingrese un correo electrónico válido", "mje-error")
        return
    }

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

        const datosActuales = {
            nombre: nombre,
            carrera: carrera,
            correo: correo
        }

        if(datosActuales.nombre === alumnoEditar.nombre && datosActuales.carrera === alumnoEditar.carrera && datosActuales.correo === alumnoEditar.correo) {
            mostrarMensaje("No se realizaron cambios en los datos del alumno", "mje-adv")
            return
        }
        alumnoEditar = null
        alumnoEditandoId = null
        formulario.querySelector("button").textContent = "Guardar ✅"

        mostrarMensaje("Alumno actualizado correctamente", "mje-exito")
    }

    guardarDatos("alumnos", alumnos)
    mostrarAlumnos(alumnos)
    formulario.reset()
});

function obtenerAlumnos() {
    return obtenerDatos("alumnos")
}

mostrarAlumnos(alumnos)

function mostrarAlumnos(alumnos) {
    listaAlumnos.innerHTML = ""

    if (cantAlumnos) {
        cantAlumnos.textContent = `Total: ${alumnos.length} alumno(s)`
    }

    if (alumnos.length === 0) {
        listaAlumnos.innerHTML = `
        <tr class="tabla-vacia">
            <td colspan="5">Todavía no hay alumnos cargados.</td>
        </tr>
        `
        return
    }

    for (const alumno of alumnos) {
        listaAlumnos.innerHTML += `
        <tr>
            <td data-label="Id">${alumno.id}</td>
            <td data-label="Nombre">${alumno.nombre}</td>
            <td data-label="Carrera">${alumno.carrera}</td>
            <td data-label="Correo">${alumno.correo}</td>
            <td data-label="Acciones">
            <button class="editar" data-id="${alumno.id}">Editar</button>
            <button class="eliminar" data-id="${alumno.id}">Eliminar</button>
            </td>
        </tr>
        `
    }
}

function eliminarAlumno(id) {
    alumnos = obtenerAlumnos().filter(alumno => alumno.id !== id)
    guardarDatos("alumnos", alumnos)
    mostrarAlumnos(alumnos)
    mostrarMensaje("Alumno eliminado correctamente", "mje-exito")
}

function editarAlumno(id) {
    const alumno = alumnos.find(alumno => alumno.id === id)
    if (!alumno) return

    document.querySelector("#nombre").value = alumno.nombre
    document.querySelector("#carrera").value = alumno.carrera
    document.querySelector("#correo").value = alumno.correo
    alumnoEditar = {
        nombre: alumno.nombre,
        carrera: alumno.carrera,
        correo: alumno.correo
    }
    alumnoEditandoId = id
    btnCancelar.style.display = "inline-block"

    btnGuardar.textContent = "Actualizar ✏️"
    document.querySelector("nombre").focus()
}

function cancelarEdicion() {
    formulario.reset()
    alumnoEditandoId = null
    alumnoEditar = null
    btnCancelar.style.display = "none"
    formulario.querySelector("button").textContent = "Guardar ✅"
}

btnCancelar.addEventListener("click", cancelarEdicion)

listaAlumnos.addEventListener("click", function (event) {
    if (event.target.classList.contains("eliminar")) {
        const id = Number(event.target.dataset.id)
        eliminarAlumno(id)
    }
    if (event.target.classList.contains("editar")) {
        const id = Number(event.target.dataset.id)
        editarAlumno(id)
    }
})
