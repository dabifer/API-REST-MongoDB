const express = require('express');
const cors = require('cors');
const dbConnection = require('./database/config');

// Servidor Express
const app = express();

// Configurar CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Base de datos
dbConnection();


// Rutas
// Users
app.use('/api/users', require('./routes/users-routes'));

// Roles
app.use('/api/roles', require('./routes/roles-routes'));

// Tasks
app.use('/api/tasks', require('./routes/tasks-routes'));








app.listen(3000, () =>{
    console.log('Servidor corriendo en puerto: ' + 3000);
});