const express = require('express');
const router = express.Router();

const roomController = require('../controller/room');

router.get('',roomController.getAllRooms);
router.get('/all',roomController.getRoomsForAdmin);
router.get('/:roomId',roomController.getSingleRoom);
router.get('/name/:roomName',roomController.getRoomsByType);
router.get('/standard/:standard',roomController.getRoomByStandard);


router.put('/update/:roomId',roomController.updateRoom);

module.exports = router;