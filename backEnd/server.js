const express = require('express');
const app = express();
app.use(express.json());
const alumnosRoutes = require('./routes/alumnos.routes');
//const profesoresRoutes = require('./routes/profesores.routes');
app.use('/alumnos', alumnosRoutes);
//app.use('/profesores', profesoresRoutes);

app.listen(3000, () => {
        console.log('El servidor esta funcionando en puerto 3000');
    });