let express = require("express");
const validate = require("../middleware/validate");
const { orderValidation } = require("../validation");
const { orderController } = require("../controllers");

let route = express.Router();

route.post("/create",validate(orderValidation.order),orderController.post_order);
route.get("/get",orderController.get_order);
route.delete("/delete/:id",orderController.delete_order);
route.put("/update/:id",validate(orderValidation.order),orderController.post_order)

module.exports = route
