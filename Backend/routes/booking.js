const express = require('express');
const router = express.Router();

const bookingController = require('../controller/booking');


router.get('/:roomId',bookingController.getBookingByRoomID);

router.post('/book',bookingController.bookRoom);
router.post('/send-Email',bookingController.sendEmail);
router.post('/create-checkout-session',bookingController.pay);

module.exports = router;
