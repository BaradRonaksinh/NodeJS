const User = require('../models/users')

async function handleGetAllUsers(req,res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers)
}

async function handleGetUsersByID(req,res){
    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({status: "Error", message: "User not found"});
    }
    return res.json(user);
}

async function handleUpdateUserByID(req, res){
    // Edit user with id
    await User.findByIdAndUpdate(req.params.id, req.body.last_name)
    return res.json({ status: "Success" });
}

async function handleDeleteUserByID(req, res){
    // TODO : Delete the user with id
    await User.findByIdAndDelete(req.params.id, req.body.email)
    return res.json({ status: "Success" });
}

async function handleCreateUserByID(req, res){
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_role
    ) {

        return res.status(400).json({ status: "error", message: "Please provide all the fields" });
    };


    // Create a New User*************
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_role
    })
    // *************Create a New User *************
    return res.status(201).json({ status: "success", id: result._id });

};




module.exports = {
    handleGetAllUsers,
    handleGetUsersByID,
    handleUpdateUserByID,
    handleDeleteUserByID,
    handleCreateUserByID
}