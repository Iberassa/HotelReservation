const mongoose = require('mongoose');

const Room = mongoose.model('Room',{
    roomName:String,
    roomStandard:String,
    roomNumber:Number,
    numberOfGuests:Number,
    description:String,
    price:Number,
    booked:Boolean
})

module.exports = Room;
