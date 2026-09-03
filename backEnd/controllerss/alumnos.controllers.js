const alumnos = require('../data/alumnos');

function obteneralumnos(req, res) {
    res.json(alumnos);
}

function obtenerAlumno(req, res) {
    const id = Number(req.params.id);
    const alumno = alumnos.find(a => a.id === id);
    if (!alumno) {
        return res.status(404).json({ error: "Alumno no encontrado" });
    }
    res.json(alumno);
}

function agregarAlumno(req, res) {
    const nuevoAlumno = req.body;
    const { id, nombre, carrera } = req.body;
    if (!id || !nombre || !carrera) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
    }
    if (typeof nombre !== "string") {
        return res.status(400).json({ error: "El nombre debe ser una cadena de texto" });
    }
    alumnos.push(nuevoAlumno);
    res.status(201).json({"message": "Alumno agregado correctamente"});
};

function actualizarAlumno(req, res){
    const id = Number(req.params.id);
    const alumno = alumnos.find(a => a.id === id);
    if (!alumno) {
        return res.status(404).json({ error: "Alumno no encontrado" });
    }
    alumno.id = req.body.id;
    alumno.nombre = req.body.nombre;
    alumno.carrera = req.body.carrera;
    res.status(200).json({"message": "Alumno actualizado correctamente"});
};

function eliminarAlumno(req, res) {
    const id = Number(req.params.id);
   const alumnosActualizados = alumnos.filter(a => a.id !== id);
   const alumnoEliminado = alumnos.find(a => a.id === id);
    if (!alumnoEliminado) {
        return res.status(404).json({ error: "Alumno no encontrado" });
    }
    alumnos.length = 0;
    alumnos.push(...alumnosActualizados);
    res.status(200).json({"message": "Alumno eliminado correctamente"});
};


module.exports = {obteneralumnos, agregarAlumno, obtenerAlumno, actualizarAlumno, eliminarAlumno};