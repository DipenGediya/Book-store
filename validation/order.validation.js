const Joi = require("joi");

let order = {
    body:Joi.object().keys({
        userId:Joi.string().required().trim(),
        bookId:Joi.string().required().trim()
    })
}


module.exports = {order}