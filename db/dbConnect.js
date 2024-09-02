let mongoose = require("mongoose");

let dbConnect = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("database connect successfully");
    }).catch((error) => {
        console.log(error, "error");
    })
}

module.exports = dbConnect