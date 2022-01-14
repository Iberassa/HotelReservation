const express = require('express');
const router = express.Router();

const roomController = require('../controller/room');

router.get('',roomController.getAllRooms);
router.get('/:roomId',roomController.getSingleRoom);
router.get('/openRooms', roomController.getOpenRooms);
router.get('/:roomName',roomController.getRoomsByType);
router.get('/:standard',roomController.getRoomByStandard);


router.post('/add',roomController.addRoom);


router.put('/update/:roomId',roomController.updateRoom);

module.exports = router;