const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require("../model/authmodel");

router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            })
        }
        else {
            const user = new User({
                _id: new mongoose.Types.ObjectId,
                username: req.body.username,
                password: hash,
                email: req.body.email,
                phone: req.body.phone,
                gender: req.body.gender,
                userType: req.body.userType || 'Customer'
            })
            user.save()
                .then((result) => {
                    res.status(200).json({
                        new_user: result
                    })
                }).catch((err) => {
                    res.status(500).json({
                        error: err
                    })
                })
        }

    })
})

router.post('/login', (req, res, next) => {
    // console.log( req.body)
    User.find({ email: req.body.email })
        .exec()
        .then((user) => {
            console.log(user)
            if (user.length < 1) {
                return res.status(401).json({
                    message: "user not exist"
                })
            } else {
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (!result) {
                        return res.status(401).json({
                            msg: "password not matched"
                        })
                    }
                    if(result){
                        const token = jwt.sign({
                            userId: user[0]._id,
                            username:user[0].username,
                            userType:user[0].userType,
                            email:user[0].email,
                            phone:user[0].phone
                        },
                        'this is dummy text',
                        {expiresIn:"24h"}
                        );
                        res.status(200).json({
                            userId: user[0]._id,
                            username:user[0].username,
                            userType:user[0].userType,
                            email:user[0].email,
                            phone:user[0].phone,
                            token:token
                        })
                    }
                })
            }
        }).catch(err=>{
            res.status(500).json({
                error:err
            })
        })
})

module.exports = router;