const express = require('express');
const router = express.Router();

app.get('/', (req, res) => {
    res.json(profesores);
}); 

app.get('/materia/:materia', (req, res) => {
    const materia = req.params.materia;
    const profesor = profesores.find(p => p.materia === materia);
    res.json(profesor);
});
app.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const profesor = profesores.find(p => p.id === id);
    res.json(profesor);
});
