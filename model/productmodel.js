const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_Id: mongoose.Schema.Types.ObjectId, 
    Category_ID: {type:Number ,required:true}, 
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    imageURL: { type: String, required: false },
});

module.exports = mongoose.model("Product", productSchema);
