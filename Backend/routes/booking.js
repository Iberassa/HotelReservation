const express = require('express');
const router = express.Router();

const bookingController = require('../controller/booking');


router.get('/admin/bookings', bookingController.getAllBooking);
router.get('/admin/booking/:bookingId',bookingController.getOneBooking);


router.post('/book',bookingController.bookRoom);


router.put('/admin/update/booking/:bookingId',bookingController.updateBooking);


router.delete('/admin/delete/booking',bookingController.deleteBooking);

module.exports = router;
