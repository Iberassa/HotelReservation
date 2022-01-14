const mongoose = require('mongoose');

const Booking = mongoose.model('Booking',{
    roomNumber:Number,
    roomId:String,
    guestEmail:String,
    guestId:String,
    guestName:String,
    dateIn:Number,
    dateOut:Number,
    left:Boolean
})

module.exports = Booking