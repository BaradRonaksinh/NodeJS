const express = require('express');
const users = require('./MOCK_DATA.json')
const fs = require('fs')

const app = express();
const PORT = 9000;

// Middle-ware Plugin
app.use(express.urlencoded({extended: false}));

// Define all ROUTES
app.get('/users', (req,res)=> {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

// REST API points
app.get('/api/users' ,(req,res)=>{
    res.setHeader('X-myName','Barad Ronak') // Custom Header
    // Always add X in front of custom headers
    console.log(req.headers);
    return res.json(users)
})

app
.route('/api/users/:id')
.get((req,res)=> {
    const UID = Number( req.params.id );
    const user = users.find((user) => user.id === UID);
    return res.json(user);
})
.patch((req,res) => {
    // Edit user with id
    return res.json({status:"pending"});
})
.delete((req,res) => {
    // TODO : Delete the user with id
    return res.json({status:"pending"});
})

app.post('/api/users', (req,res) => {
    // TODO : create new user.
    const body = req.body;
    if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_role){
        res.status(400).json({status:"error", message:"Please provide all the fields"});
    }
    // console.log("Body", body);
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.status(201).json({status:"success",id : users.length});
    })
    
    
})
app.put('/api/users', (req,res) => {
    // TODO : create new user
    return res.json({status:"pending"});
})

app.listen(PORT, () => console.log(`Server Started at PORT : ${PORT}`))