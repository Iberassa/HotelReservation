const mongoose = require('mongoose');

const Room = mongoose.model('Room',{
    roomName:String,
    roomNumber:Number,
    numberOfGuests:Number,
    price:Number,
    booked:Boolean
})

module.exports = Room;
