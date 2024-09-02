let mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userSchema"
    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"bookSchema"
    }
})

let order = mongoose.model("orderSchema",orderSchema)

module.exports = order