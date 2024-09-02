const { userSchema } = require("../models")

let post_user = (body) => {
    return userSchema.create(body)
}

let findByEmail = (email) => {
    return userSchema.findOne({ email })
}

let get_user = () => {
    return userSchema.find()
}

let findByIdAndDelete = (id) => {
    return userSchema.findByIdAndDelete(id)
}

let findByIdAndUpdate = (id, body) => {
    return userSchema.findByIdAndUpdate(id, body)
}

module.exports = { post_user, get_user, findByEmail, findByIdAndUpdate, findByIdAndDelete }