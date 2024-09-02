const { createToken } = require("../middleware/auth");
const { userService } = require("../services");
const sendEmail = require("../services/email.service");

let post_user = async (req, res) => {
    try {
        let body = req.body;
        let { path } = req.file;

        let duplicate = await userService.findByEmail(body.email);
        if (duplicate) {
            throw new Error("user already created")
        }

        let newBody = {
            ...body,
            image: path
        }
        let user = await userService.post_user(newBody)
        if (user) {
            let result = await sendEmail(user.email, "joining us", `thank you for joining ${user.name}`)
        }
        res.status(201).json({
            message: "user Created success",
            user
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let get_user = async (req, res) => {
    try {
        let user = await userService.get_user()
        res.status(200).json({
            message: "get all user success",
            user
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let delete_user = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await userService.findByIdAndDelete(id)
        res.status(200).json({
            message: "user delete success",
            user
        })
    } catch (error) {
        res.status(500).json({ error: error })

    }
}

let update_user = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;
        let { path } = req.file;

        let newBody = {
            ...body,
            image: path
        }
        let seconBody = {
            id,
            ...newBody
        }

        let user = await userService.findByIdAndUpdate(id ,newBody)
        res.status(200).json({
            message: "update Success",
            seconBody
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let login = async (req,res)=>{
    try {
        let {email,password} = req.body;
        let user = await userService.findByEmail(email);
        if (!user) {
            throw new Error("Invalid Email")
        }
        if (user.password !== password) {
            throw new Error("Invalid password")
        }
        let token = createToken({user})
        res.cookie("token",token)
        res.status(200).json({
            message:"login success",
            token
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = { post_user, get_user, delete_user, update_user ,login}