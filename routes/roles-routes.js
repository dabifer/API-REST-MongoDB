/*
    Ruta: api/roles
*/
const { Router } = require('express');
const { postRole, getRoles, getRoleById, putRole, deleteRoleById } = require('../controllers/roles-controllers');

const checkName = require('../middlewares/check-name');


const router = Router();

// Obtener todos los roles
router.get('/', getRoles);

// Obtener un role por id
router.get('/:id', getRoleById);

// Crear un role
// checkName: middleware creado para verificar que el campo "name" llegue con información (requerido en el modelo "User")
router.post('/', checkName , postRole);

// Actualizar un role por id. En este caso, con el middleware corroboramos que al menos venga el nombre
router.put('/:id', checkName, putRole);

// Eliminar un role por id
router.delete('/:id', deleteRoleById);



module.exports = router;