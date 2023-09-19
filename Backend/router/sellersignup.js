const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Signup = require('../models/signup');
const bcrypt = require('bcrypt');

router.post('/',(req,res,next)=>{
    bcrypt.hash(req.body.password,10,(err,signupresult)=>{
        if(err){
            res.status(404).json({
                error:err
            })
        }else {
            const signup = new Signup({
                _id: new mongoose.Types.ObjectId,
                name: req.body.name,
                email:req.body.email,
                gender:req.body.gender,
                password:signupresult,
            })
            signup.save().then(response=>{
                res.status(200).json({
                    new_signup:response
                })
            }).catch(err=>{
                res.status(404).json({
                    error:err
                })
            })
        }
    })
})

module.exports = router