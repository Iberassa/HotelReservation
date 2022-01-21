require("dotenv").config();
const AWS = require('aws-sdk');
const Booking = require('../model/booking');
const Room = require('../model/rooms');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

AWS.config.update({ region: process.env.REGION });

exports.bookRoom = async (req, res, next) => {
    try {
        const { roomNumber, roomId, guestEmail, guestName, dateIn, dateOut } = req.body;
        const newBooking = new Booking({ roomNumber, roomId, guestEmail, guestName, dateIn, dateOut, left: false })
        await newBooking.save();
        res.status(201).json({ Success: true })
    } catch (err) {
        next(err)
    }
}

exports.sendEmail = (req, res, next) => {
    const name = req.body.fullname;
    const email = req.body.email;
    let params = {
        Destination: {
            ToAddresses: [`${email}`]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: `<html><h2>Dear ${name}</h2><p>Thank you for booking our room. We cant wait to see you.</p></html>`
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "Thankyou"
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: "Thankyou from Subject"
            }
        },
        Source: process.env.SENDER_EMAIL_ADDRESS,
        ReplyToAddresses: [],
    };
    const sendPromise = new AWS.SES({ apiVersion: "2010-12-01" }).sendEmail(params).promise();
    sendPromise.then((data) => {
        console.log(data.MessageId);
        res.send(data)
    }).catch((err) => {
        console.log(err)
        res.send(err)
    })
}


exports.pay = async (req, res, next) => {
    try {
        const id = req.body.id;
        const singleRoom = await Room.findOne({_id:id});
        const room = { price: singleRoom.price, roomName: singleRoom.roomName }
        const price = room.price * 100
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: "payment",
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: { name: room.roomName },
                    unit_amount: price
                }, quantity: 1
            }],
            success_url: `${process.env.SERVER_URL_SUCCESS}`,
            cancel_url: `${process.env.SERVER_URL_FAILED}`
        })
        res.status(201).json({ url: session.url });

    } catch (err) {
        console.log(err);
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

exports.getBookingByRoomID = async (req, res, next) => {
    try {
        const roomId = req.params.roomId;
        const rooms = await Booking.find({ roomId })
        if (!rooms) {
            res.status(204).json({ Success: true, result: null })
        } else {
            res.status(200).json({ Success: true, result: rooms })
        }
    } catch (err) {
        next(err)
    }
}


exports.updateBooking = async (req, res, next) => {
    try {
        const { roomNumber, roomId, guestEmail, guestName, dateIn, dateOut, left } = req.body;
        const bookingId = req.params.bookingId;
        const updatedBooking = await Booking.updateOne({ _id: bookingId }, {
            roomNumber, roomId, guestEmail, guestName, dateIn, dateOut, left
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
