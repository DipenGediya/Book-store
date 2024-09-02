let Joi = require("joi")

let book = {
    body: Joi.object().keys({
        image: Joi.string().optional().trim(),
        name: Joi.string().required().trim(),
        disc: Joi.string().required().trim(),
        author: Joi.string().required().trim(),
        price: Joi.number().required(),
    })
}

module.exports = {book}