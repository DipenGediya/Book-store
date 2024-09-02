const Joi = require("joi");

let user = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        image: Joi.string().optional().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
        role: Joi.string().trim(),
    })
}

module.exports = { user }