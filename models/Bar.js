const mongoose = require("mongoose");
const barSchema = new mongoose.Schema({
    name: String,
    address: String,
    rating: {type: Number, default: 3}, 
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}               //reference the user schema
})

const Bar = mongoose.model("Bar", barSchema)                                //create a bar module called "Bar" based on the barSchema
module.exports = Bar