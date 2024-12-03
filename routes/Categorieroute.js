const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Categoriesmodel = require("../model/Categoriesmodel");



router.post('/categories',(req,res,next)=>{
    const categories = new Categoriesmodel({
        Category_ID:new mongoose.Types.ObjectId(),
        name:req.body.name,
        description:req.body.description

    })
    categories.save().then((result)=>{
        res.status(200).json({
            categories:result
        })
    }).catch((err)=>{
        res.status(500).json({
            error:err
        })
    })
})

module.exports = router;