const  mongoose = require("mongoose");

const categoriesShema = new mongoose.Schema({
    Category_ID:mongoose.Schema.Types.ObjectId,
    name:{ type: String, required: true },
    description:{ type: String, required: true },
})



module.exports = mongoose.model("Categories",categoriesShema)