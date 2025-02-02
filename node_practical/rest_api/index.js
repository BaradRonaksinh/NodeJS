const express = require('express');
const users = require('./MOCK_DATA.json')

const app = express();
const PORT = 9000;

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
    // TODO : create new user
    return res.json({status:"pending"});
})
app.put('/api/users', (req,res) => {
    // TODO : create new user
    return res.json({status:"pending"});
})

app.listen(PORT, () => console.log(`Server Started at PORT : ${PORT}`))