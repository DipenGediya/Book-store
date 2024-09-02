const { orderService } = require("../services")

let post_order = async (req, res) => {
    try {
        let body = req.body
        let order = await orderService.post_order(body);
        res.status(201).json({
            message: "order create success",
            order
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let get_order = async (req, res) => {
    try {
        let order = await orderService.get_order()
        res.status(200).json({
            message: "order create success",
            order
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let delete_order = async (req, res) => {
    try {
        let {id}=req.params
        let order = await orderService.findByIdAndDelete(id)
        res.status(200).json({
            message: "order create success"
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let update_order = async (req, res) => {
    try {
        let {id}=req.params;
        let body = req.body;        
        let order = await orderService.findByIdAndUpdate(id,body)
        let newBody = {
            id,
            ...body
        }
        res.status(200).json({
            message: "order create success",
            newBody
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

module.exports = { post_order, get_order, delete_order, update_order }