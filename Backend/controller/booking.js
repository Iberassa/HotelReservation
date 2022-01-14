const Booking = require('../model/booking');

exports.bookRoom = async (req, res, next) => {
    try {
        const { roomNumber, roomId, guestEmail, guestId, guestName, dateIn, dateOut } = req.body;
        const newBooking = new Booking({ roomNumber, roomId, guestEmail, guestId, guestName, dateIn, dateOut, left: false })
        await newBooking.save();
        res.status(201).json({ Success: true })
    } catch (err) {
        next(err)
    }
}

exports.getAllBooking = async (req, res, next) => {
    try {
        const bookedRooms = await Booking.find();
        if (!bookedRooms) {
            res.status(204).json({ Success: true, result: null })
        } else {
            res.status(200).json({ Success: true, result: bookedRooms })
        }
    } catch (err) {
        next(err)
    }
}

exports.getOneBooking = async (req, res, next) => {
    try {
        const bookingId = req.params.bookingId;
        const singleBooking = await Booking.findOne({ _id: bookingId });
        if (!singleBooking) {
            res.status(204).json({ Success: true, result: null })
        } else {
            res.status(200).json({ Success: true, result: singleBooking })
        }
    } catch (err) {
        next(err)
    }
}


exports.updateBooking = async (req, res, next) => {
    try {
        const { roomNumber, roomId, guestEmail, guestId, guestName, dateIn, dateOut, left } = req.body;
        const bookingId = req.params.bookingId;
        const updatedBooking = await Booking.updateOne({ _id: bookingId }, {
            roomNumber, roomId, guestEmail, guestId, guestName, dateIn, dateOut, left
        })
        res.status(202).json({ Success: true })
    } catch (err) {
        next(err)
    }
}

exports.deleteBooking = async (req, res, next) => {
    try {
        const bookingId = req.params.bookingId;
        const deleteBooking = await Booking.deleteOne({ _id: bookingId });
        res.json({ Success: true })
    } catch (err) {
        next(err)
    }
}
