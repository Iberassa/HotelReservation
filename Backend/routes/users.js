const express = require('express');
const router = express.Router();

const userController = require('../controller/user');


router.get('/admin', userController.getAllUsers);
router.get('/admin/user/:userId',userController.getOneUSer);


router.post('/admin/signup',userController.signup);
router.post('/admin/login',userController.login);


router.put('/admin/update/:userId',userController.updateUser);

router.use('/admin',userController.authorize);

module.exports = router;
