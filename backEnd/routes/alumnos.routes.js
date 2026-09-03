const express = require('express');

const router = express.Router();

const { 
    obteneralumnos,
    agregarAlumno, 
    obtenerAlumno, 
    actualizarAlumno, 
    eliminarAlumno 
      } = require('../controllerss/alumnos.controllers');

router.get("/", obteneralumnos);

router.get('/:id', obtenerAlumno)

router.post('/', agregarAlumno);

router.put('/:id', actualizarAlumno);

router.delete('/:id', eliminarAlumno);

module.exports = router;