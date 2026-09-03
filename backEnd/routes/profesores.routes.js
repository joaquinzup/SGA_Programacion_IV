const express = require('express');
const router = express.Router();
const { 
     obtenerProfesores,
     obtenerProfesor,
     obtenerProfesorId,
     agregarProfesor,
     actualizarProfesor,
     eliminarProfesor
      } = require('../controllerss/profesores.controllers');

router.get('/', obtenerProfesores);

router.get('/materia/:materia', obtenerProfesor);

router.get('/:id', obtenerProfesorId);

router.post('/', agregarProfesor);

router.put('/:id', actualizarProfesor);

router.delete('/:id', eliminarProfesor);
