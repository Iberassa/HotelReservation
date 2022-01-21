const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../model/users');

exports.signup = async (req, res, next) => {
    try {
        const { fullname, email, phone, password } = req.body;
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            res.status(401).json({ Success: true, result: "Authoriaztion Failed" })
        } else {
            const hashPassword = await bcrypt.hash(password, 10);
            const user = new User({
                fullname: fullname,
                email: email,
                password: hashPassword,
                phone: phone,
                role: 'user',
                active: true
            })
            await user.save();
            const signupUser = await User.findOne({ email: email }, ['_id', 'role']);
            const token = jwt.sign({ email, role: signupUser.role, _id: signupUser._id, fullname },process.env.SECRET_KEY );
            res.status(201).json({ Success: true, token });
        }
    } catch (err) {
        next(err)
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userExist =await User.findOne({ email: email });
        if (!userExist) {
            res.status(401).json({ Success: false, result: "Authorization Failed" })
        } else {
            const passwordCheck = await bcrypt.compare(password, userExist.password);
            const { _id, fullname, phone, email, role, active } = userExist;
            if (passwordCheck) {
                const token = jwt.sign({ _id, email, fullname, phone, role, active }, process.env.SECRET_KEY);
                res.status(201).json({ Success: true, token });
            } else {
                res.status(401).json({ Success: false, result: "Authorization Failed" })
            }
        }
    } catch (err) {
        next(err)
    }
}

exports.authorize = async (req, res, next)=>{
    try {
        const authorizationHeader = req.headers.authorization;
        if (authorizationHeader) {
            const token = authorizationHeader.split(' ')[1];
            jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
                if (err) {
                    res.status(403).json({ Success: false, error: 'Forbidden' })
                }
                req.email = decode.email;
                next();
            })
        } else {
            res.status(401).json({ Success: false, error: "Unauthorized" })
        }
    } catch (err) {
        next(err)
    }
}


exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        if (!users) {
            res.status(204).json({ Success: true, result:null })
        // } else if (users.role !== "user") {
        //     res.status(403).json({ Success: false, error: "Forbidden" })
        } else {
            const users = await User.find()
            res.status(200).json({ Success: true, result: users });
        }
    } catch (err) {
        next(err)
    }
}

exports.getOneUSer = async (req,res,next)=>{
    try{
        const userId = req.params.userId
        const user = await User.findOne({userId})
        if(!user){
            res.status(204).json({Success:true,result:null});
        }else{
            res.status(200).json({Success:true,result:user})
        }
    }catch(err){
        next(err);
    }
}

exports.updateUser = async(req,res,next)=>{
    try{
        const userId = req.params.userId;
        const {fullname, email, phone, role, active}=req.body;
        const update = await User.updateOne({_id:userId},{
            fullname, email, phone, role, active
        })
        res.status(202).json({Success:true})
    }catch(err){
        next(err);
    }
}

