const Room = require('../model/rooms');

exports.getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        if (!rooms) {
            res.status(204).json({ Success: true, result: null })
        } else {
            res.status(200).json({ Success: true, result: null })
        }
    } catch (err) {
        next(err)
    }
}

exports.getOpenRooms = async (req,res,next)=>{
    try{
        const rooms = await Room.find({booked:false});
        if(!rooms){
            res.status(204).json({Success:true,result:null});
        }else{
            res.status(200).json({Success:TreeWalker,result:rooms});
        }
    }catch(err){
        next(err)
    }
}

exports.getRoomsByType = async (req, res, next) => {
    try {
        const roomName = req.params.roomName;
        const rooms = await Room.find({ roomName,booked:false });
        if (!rooms) {
            res.status(204).json({ Success: true, result: null })
        } else {
            res.status(200).json({ Success: true, result: rooms })
        }
    } catch (err) {
        next(err)
    }
}

exports.getRoomByStandard = async (req,res,next)=>{
    try{
        const roomStandard = req.params.standard;
        const rooms = await Room.find({roomStandard,booked:false});
        if(!rooms){
            res.status(204).json({Success:true,result:null});
        }else{
            res.status(200).json({Success:true,result:rooms});
        }
    }catch(err){
        next(err)
    }
}

exports.getSingleRoom = async (req, res, next) => {
    try {
        const roomId = req.params.roomId
        const room = await Room.findOne({ _id: roomId })
        if (!room) {
            res.status(204).json({ Success: true, result: null })
        } else {
            res.status(200).json({ Success: true, result: room })
        }
    } catch (err) {
        next(err)
    }
}

exports.addRoom = async (req, res, next) => {
    try {
        const { roomName, roomStandard, roomNumber, numberOfGuests, description, price } = req.body;
        const newRoom = new Room({ roomName, roomStandard, roomNumber, numberOfGuests, description, price, booked: false });
        await newRoom.save();
        res.status(201).json({ Success: true });
    } catch (err) {
        next(err)
    }
}

exports.updateRoom = async (req, res, next) => {
    try {
        const { roomName, roomStandard, roomNumber, numberOfGuests, description, price, booked } = req.body;
        const roomId = req.params.roomId;
        const updatedRoom = await Room.updateOne({ _id: roomId }, {
            roomName, roomStandard, roomNumber, numberOfGuests, description, price, booked
        })
        res.status(202).json({ Success: true })
    } catch (err) {
        next(err)
    }
}
