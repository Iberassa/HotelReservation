const express = require('express');
const router = express.Router();

const userController = require('../controller/user');
const bookingController = require('../controller/booking');
const roomController = require('../controller/room');


router.use('/auth',userController.authorize);

router.get('/auth/users', userController.getAllUsers);
router.get('/auth/user/:userId', userController.getOneUSer);


router.post('/signup',userController.signup);
router.post('/login',userController.login);


router.put('/auth/update/:userId', userController.updateUser);


//Booking room
router.get('/auth/bookings', bookingController.getAllBooking);
router.get('/auth/booking/:bookingId',bookingController.getOneBooking);

router.put('/auth/update/booking/:bookingId',bookingController.updateBooking);

router.delete('/auth/delete/booking',bookingController.deleteBooking);

// Room
router.post('/auth/add',roomController.addRoom);

module.exports = router;

