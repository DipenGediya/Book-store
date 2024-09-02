const { bookSchema } = require("../models")

let post_book = (body) => {
    return bookSchema.create(body);
}

let get_book = () => {
    return bookSchema.find();
}

let findByIdAndDelete = (id) => {
    return bookSchema.findByIdAndDelete(id);
}

let findByIdAndUpdate = (id, body) => {
    return bookSchema.findByIdAndUpdate(id, body);
}

module.exports = { post_book, get_book, findByIdAndDelete, findByIdAndUpdate };