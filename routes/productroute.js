const express = require("express");
const mongoose = require("mongoose");
const checkauth = require("../middleware/AuthToken");

const router = express.Router();


router.post('/product_store',checkauth,(res,req,next)=>{
   const product = new Product({
    productId: mongoose.Schema.Types.ObjectId, 
    CategoryID: req.body.CategoryID, 
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
    imageURL: req.body.imageURL,
   })
   product.save().then((result)=>{
    res.status(200).json({
        product:result
    })
   }).catch((err)=>{
    res.status(500).json({
        error:err
    })
   })
})

module.exports = router;
