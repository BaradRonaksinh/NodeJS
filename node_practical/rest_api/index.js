const express = require('express');
const {connectMongoDB} = require('./connection')

const {logReqRes} = require('./middlewares')

const userRouter = require('./routes/user');

const app = express();
const PORT = 9000;

// connection
connectMongoDB('mongodb://localhost:27017/learnNode').then(() => console.log("MongoDB Connected"));



// Middle-ware Plugin
app.use(express.urlencoded({ extended: false })); 
app.use(logReqRes('logs.txt'));

// Define all ROUTES

app.use('/api/users', userRouter);


app.listen(PORT, () => console.log(`Server Started at PORT : ${PORT}`))