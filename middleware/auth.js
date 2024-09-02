let jwt = require("jsonwebtoken");

let createToken = (data) => {
    let token = jwt.sign(data, process.env.SECRET)
    return token
}

let isLogin = ([...role]) => {
    return (req, res, next) => {
        try {
            let token = req.cookies["token"];
            let user = jwt.verify(token, process.env.SECRET)
            console.log(user ,"for token");

            if (!role.includes(user.user.role)) {
                throw new Error("you are not authorize")
            }
            req.user = user
            next()
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

module.exports = { createToken, isLogin }