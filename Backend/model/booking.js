const mongoose = require('mongoose');

const Booking = mongoose.model('Booking',{
    roomNumber:Number,
    roomId:String,
    guestEmail:String,
    guestName:String,
    phone:Number,
    dateIn:Object,
    dateOut:Object,
    left:Boolean
})

module.exports = Booking