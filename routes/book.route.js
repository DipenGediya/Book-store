let express = require("express");
const upload = require("../middleware/upload");
const { bookController } = require("../controllers");
const validate = require("../middleware/validate");
const { bookValidation } = require("../validation");

let route = express.Router();

route.post("/create",upload.single("image"),validate(bookValidation.book),bookController.post_book);
route.get("/get",bookController.get_book);
route.delete("/delete/:id",bookController.delete_book);
route.put("/update/:id",upload.single("image"),validate(bookValidation.book),bookController.update_book)

module.exports = route