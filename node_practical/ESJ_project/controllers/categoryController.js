const catModel = require('../models/catModel');

// create a reuire functions...
const ins = async(req,res)=>{
    const id = req.body.catid    //req.body ?
    let alldata = req.body
   let result
    if(id!=''){
        result = await catModel.findByIdAndUpdate(id,alldata)
    } else {
        result = await catModel.create(alldata)
    }
    if(result){
        console.log("Inserted successfully");
        res.redirect('/category')
    }
}
const disp = async(req,res)=>{
    let alldata = await catModel.find({})
    res.render('category',{
        "alldata":alldata,
        "editcat":''
    })
}
const delData = async(req,res)=>{
    let id = req.params.id
    let data = await catModel.findByIdAndDelete(id)
    if(data){
        res.redirect('/category')
    }
}
const editData = async(req,res)=>{
    let id = req.params.id
    let data = await catModel.find({})
    let editdata = await catModel.findById(id)
    res.render('category',{
        "alldata":data,
        "editcat":editdata
    })
}
module.exports = {ins,disp,delData,editData}