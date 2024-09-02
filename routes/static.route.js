let express = require("express");
const { bookService } = require("../services");

let route = express();

route.get("/", async (req,res)=>{
    let book = await bookService.get_book()
    return res.render("index",{
        book
    })
})


module.exports = route