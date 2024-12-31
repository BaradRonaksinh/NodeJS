const { ObjectId } = require('mongodb');
const subcatModel = require('../models/subcatModel');
const { all } = require('../routes/catRoutes');
// create a reuire functions...
const ins = async(req,res)=>{
    const id = req.body.subcatid    //req.body ?
    let alldata = req.body
   let result
    if(id!=''){
        result = await subcatModel.findByIdAndUpdate(id,alldata)
        // result = await collection.updateOne({_id:objId},{$set:{name}})
    } else {
        //insert
        result = await subcatModel.create(alldata)
    }
    if(result){
        console.log("Inserted successfully");
        res.redirect('/subcategory')
    }
}
const disp = async(req,res)=>{
    // const db = await connectToDatabase();
    // const collection = db.collection('category')
    // let data = await  collection.find({}).toArray()
    // console.log(data);
    let alldata = await subcatModel.find({})
    res.render('subcategory',{
        "alldata":alldata,
        "editsubcat":''
    })
}
const delData = async(req,res)=>{
    let id = req.params.id
   
    // const db = await connectToDatabase();
    // const collection = db.collection('category')
    // let objectId = new ObjectId(id)
    // console.log(objectId);
    
    let data = await subcatModel.findByIdAndDelete(id)
    if(data){
        res.redirect('/subcategory')
    }
}
const editData = async(req,res)=>{
    let id = req.params.id
   
    // const db = await connectToDatabase();
    // const collection = db.collection('category')
    // let objectId = new ObjectId(id)
    // let editdata = await collection.find({_id:objectId}).toArray()
    let data = await subcatModel.find({})
    let editdata = await subcatModel.findById(id)
    res.render('subcategory',{
        "alldata":data,
        "editsubcat":editdata
    })
}
module.exports = {ins,disp,delData,editData}