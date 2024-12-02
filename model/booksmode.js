const mongoose = require('mongoose');

const bookSchma = new mongoose.Schema({
    id:mongoose.Schema.ObjectId,
    name:String,
    email:String,
    mobile:Number,
})

module.exports = mongoose.model('Book',bookSchma)