/*
    Ruta: api/tasks
*/
const { Router } = require('express');
const { postTask, getTasks, getTaskById, putTask, deleteTaskById } = require('../controllers/tasks-controllers');

const checkName = require('../middlewares/check-name');


const router = Router();

// Obtener todos los task
router.get('/', getTasks);

// Obtener un task por id
router.get('/:id', getTaskById);

// Crear un task
// checkName: middleware creado para verificar que el campo "name" llegue con información (requerido en el modelo "User")
router.post('/', checkName , postTask);

// Actualizar un task por id. En este caso, con el middleware corroboramos que al menos venga el nombre
router.put('/:id', checkName, putTask);

// Eliminar un task por id
router.delete('/:id', deleteTaskById);



module.exports = router;