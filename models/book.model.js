let mongoose = require("mongoose")

let bookSchema = new mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String
    },
    disc:{
        type:String
    },
    author:{
        type:String
    },
    price:{
        type:Number
    }
})

let book = mongoose.model("bookSchema",bookSchema);

module.exports = book