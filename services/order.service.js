const { orderSchema } = require("../models")

let post_order = (body) => {
    return orderSchema.create(body)
}

let get_order = () => {
    return orderSchema.find().populate(["bookId","userId"])
}

let findByIdAndDelete = (id) => {
    return orderSchema.findByIdAndDelete(id)
}

let findByIdAndUpdate = (id, body) => {
    return orderSchema.findByIdAndUpdate(id, body)
}

module.exports = { post_order, get_order, findByIdAndUpdate, findByIdAndDelete }