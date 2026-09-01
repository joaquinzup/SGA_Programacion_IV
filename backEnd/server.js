const express = require('express');
const app = express();
app.use(express.json());
const alumnosRoutes = require('./routes/alumnos.routes');
const profesoresRoutes = require('./routes/profesores.routes');
app.use('/alumnos', alumnosRoutes);
app.use('/profesores', profesoresRoutes);

let alumnos = [{
    id: 1,
    nombre: 'Juan',
    carrera: 'Ingeniería de Software',
},
{
    id: 2,
    nombre: 'María',
    carrera: 'Ingeniería de Sistemas',
},
{
    id: 3,
    nombre: 'Pedro',
    carrera: 'Ingeniería Industrial',
},
{
    id: 4,
    nombre: 'Ana',
    carrera: 'Ingeniería Civil',
}]

let profesores = [{
    id: 1,
    nombre: 'Carlos',
    materia: 'Matematicas',
},
{
    id: 2,
    nombre: 'Laura',
    materia: 'Fisica',
},
{
    id: 3,
    nombre: 'José',
    materia: 'Matematicas',
},
{
    id: 4,
    nombre: 'Marta',
    materia: 'Biologia',
}];


app.listen(3000, () => {
        console.log('El servidor esta funcionando en puerto 3000');
    });