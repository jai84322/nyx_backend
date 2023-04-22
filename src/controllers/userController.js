const userModel = require('../models/userModel');


const createUser = async function (req, res) {
    try {
        console.log("hello");
        console.log(req.body)
        let { name, username, email, phone } = req.body

        let savedData = await userModel.create(req.body)
        
        return res.status(201).send({ status: true, data: "New author is created successfully"  })

    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}


const getAllUsers = async function (req, res) {
    try {

        let savedData = await userModel.find()
        return res.status(201).send({ status: true, data: savedData });
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}


const getUser = async function (req, res) {
    try {
        let userId = req.params.id;
        let savedData = await userModel.findById(userId);
        return res.status(200).send({ status: true, data: savedData });
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

const editUser = async function (req, res) {
    try {
        let userId = req.params.id;
        let {name, username, email, phone} = req.body;
        let savedData = await userModel.findOneAndUpdate({_id:userId}, {name:name, username:username, email:email, phone:phone}, {new:true});
        return res.status(201).send({ status: true, data: savedData });
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

const deleteUser = async function (req, res) {
    try {
        let userId = req.params.id;
        await userModel.findOneAndDelete({_id:userId});
        return res.status(201).send({ status: true, data: "deleted successfully" });
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}


module.exports = { createUser, getAllUsers, getUser, editUser, deleteUser }

