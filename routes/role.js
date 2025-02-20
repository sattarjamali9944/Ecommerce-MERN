const express = require('express'); 
const router = express.Router();
const roleController =require('../server/controllers/RoleController');


/* route for role */
router.get('/add-role',roleController.getHome);
router.post('/add-role',roleController.addRolePost);
router.delete('/add-role/(:id)', roleController.deleteRole);
router.get('/edit-role/:id',roleController.getRole);




module.exports = router;