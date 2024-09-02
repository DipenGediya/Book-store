let express = require("express");
let userRoute = require("./user.route")
let bookRoute = require("./book.route")
let orderRoute = require("./order.route");
const { bookService } = require("../services");

let routes = express.Router();

routes.use("/user",userRoute);
routes.use("/book",bookRoute);
routes.use("/order",orderRoute)



module.exports = routes