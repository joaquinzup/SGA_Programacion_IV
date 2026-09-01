const express = require('express');
const router = express.Router();

router.get("/", obteneralumnos);

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const alumno = alumnos.find(a => a.id === id);
    res.json(alumno);
})
router.post('/', (req, res) => {
    const nuevoAlumno = req.body;
    alumnos.push(nuevoAlumno);
    res.json({"message": "Alumno agregado correctamente"});
});

router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const alumno = alumnos.find(a => a.id === id);
    alumno.id = req.body.id;
    alumno.nombre = req.body.nombre;
    alumno.carrera = req.body.carrera;
    res.json({"message": "Alumno actualizado correctamente"});
});
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    alumnos = alumnos.filter(a => a.id !== id);
    res.json({"message": "Alumno eliminado correctamente"});
});