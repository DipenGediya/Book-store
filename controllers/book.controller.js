const { bookService } = require("../services");
const uploadImage = require("../services/cloudinary.service");

let post_book = async (req, res) => {
    try {
        let body = req.body;
        let { path , originalname} = req.file;

        let cloud = await uploadImage(path,originalname)

        let newBody = {
            ...body,
            image: cloud.url
        }

        let book = await bookService.post_book(newBody);
        // res.status(201).json({
        //     message: "book create success",
        //     book
        // })

        res.redirect("/")
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let get_book = async (req, res) => {
    try {
        let book = await bookService.get_book()
        res.status(200).json({
            message: "Get all book",
            book
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let delete_book = async (req, res) => {
    try {
        let { id } = req.params;

        let book = await bookService.findByIdAndDelete(id)
        res.status(200).json({
            message: "delete book successfully",
            book
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let update_book = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;
        let { path , originalname} = req.file

        let cloud = await uploadImage(path,originalname)
        let newBody = {
            ...body,
            image: cloud.url
        }
        let secondBody = {
            id,
            ...newBody
        }
        let book = await bookService.findByIdAndUpdate(id, newBody)
        res.status(200).json({
            message:"book update successfully",
            secondBody
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

module.exports = { post_book, get_book, delete_book, update_book }