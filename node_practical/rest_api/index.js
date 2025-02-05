const express = require('express');

const fs = require('fs')
const mongoose = require('mongoose');
const { type } = require('os');
const { log } = require('console');

const app = express();
const PORT = 9000;

// Connect to MongoDB
mongoose
    .connect('mongodb://localhost:27017/learnNode')   // Connection URL
    .then(() => console.log('Connected to MongoDB'))  // Success
    .catch((err) => console.log('MongoDB error', err)); //Error


// Schema*************
// create a user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    }
},{timestamps: true});
// *************Schema*************

// Create a model*************
// 1.Create a user model
const User = mongoose.model('user', userSchema)  //users is a collection name

// Middle-ware Plugin
app.use(express.urlencoded({ extended: false }));

// Define all ROUTES
app.get('/users', async(req, res) => {
    const allDbUsers = await User.find({});
    const html = `
    <ul>
        ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

// REST API points
app.get('/api/users', async(req, res) => {
    const allDbUsers = await User.find({});
    res.setHeader('X-myName', 'Barad Ronak') // Custom Header
    // Always add X in front of custom headers
    console.log(req.headers);
    return res.json(allDbUsers)
})


app
    .route('/api/users/:id')
    .get(async(req, res) => {
        const user = await User.findById(req.params.id);
        return res.json(user);
    })
    .patch(async(req, res) => {
        // Edit user with id
        await User.findByIdAndUpdate(req.params.id, req.body.last_name)
        return res.json({ status: "Success" });
    })
    .delete(async(req, res) => {
        // TODO : Delete the user with id
        await User.findByIdAndDelete(req.params.id, req.body.email)
        return res.json({ status: "Success" });
    })

app.post('/api/users', async (req, res) => {
    // TODO : create new user.
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

});


app.put('/api/users', (req, res) => {
    // TODO : create new user
    return res.json({ status: "pending" });
})

app.listen(PORT, () => console.log(`Server Started at PORT : ${PORT}`))