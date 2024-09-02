let express = require("express");
const upload = require("../middleware/upload");
const validate = require("../middleware/validate");
const { userValidation } = require("../validation");
const { userController } = require("../controllers");
const { isLogin } = require("../middleware/auth");

let route = express.Router();

route.post("/register",upload.single("image"),validate(userValidation.user),userController.post_user);
route.post("/login",userController.login)
route.get("/get",isLogin(["admin","user"]),userController.get_user);
route.delete("/delete/:id",userController.delete_user)
route.put("/update/:id",upload.single("image"),validate(userValidation.user),userController.update_user)

module.exports = route