let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})

let user = mongoose.model("userSchema",userSchema);

module.exports = user