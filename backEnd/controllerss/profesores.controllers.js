function obtenerprofesores(req, res) {
    res.json(profesores);
}

function obtenerProfesor(req, res) {
    const materia = req.params.materia;
    const profesor = profesores.find(p => p.materia === materia);
    res.json(profesor);
};

function obtenerProfesorId (req, res) {
    const id = Number(req.params.id);
    const profesor = profesores.find(p => p.id === id);
    res.json(profesor);
};

function agregarProfesor(req, res) {
    const nuevoProfesor = req.body;
    profesores.push(nuevoProfesor);
    res.json({"message": "Profesor agregado correctamente"});
};

function actualizarProfesor(req, res){
    const id = Number(req.params.id);
    const profesor = profesores.find(p => p.id === id);
    profesor.id = req.body.id;
    profesor.nombre = req.body.nombre;
    profesor.materia = req.body.materia;
    res.json({"message": "Profesor actualizado correctamente"});
};

function eliminarProfesor(req, res) {
    const id = Number(req.params.id);
   const profesoresActualizados = profesores.filter(p => p.id !== id);
    profesores.length = 0;
    profesores.push(...profesoresActualizados);
    res.json({"message": "Profesor eliminado correctamente"});
};

module.exports = {obtenerprofesores, obtenerProfesor, obtenerProfesorId, agregarProfesor, actualizarProfesor, eliminarProfesor};