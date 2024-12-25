const express = require('express')

const app = express()
// const catRoutes = require('./routes/catRoutes')
const catRoutes = require('./routes/catRoutes')
const catApiRoutes = require('./routes/catApiRoutes')

app.set('view engine','ejs')  //pug hbs
app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.render('dashboard')
})
app.use(express.urlencoded({extended:false}))
//change get to use and require catRoutes
app.use("/category",catRoutes)
app.use("/category/api",catApiRoutes)

app.get("/contact",(req,res)=>{
    res.render('contact')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.listen(4000,()=>{
    console.log("listening on 4000 port");   
})