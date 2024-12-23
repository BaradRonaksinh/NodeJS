const { ObjectId } = require('mongodb');
const connectToDatabase = require('../models/catModel');
// create a reuire functions...
const ins = async(req,res)=>{
    const name = req.body.name    //req.body ?
    const id = req.body.catid    //req.body ?
    const db = await connectToDatabase();
    const collection = db.collection('category')
    let result
    if(id!=''){
        //update
        let objId = new ObjectId(id)
        result = await collection.updateOne({_id:objId},{$set:{name}})
    } else {
        //insert
        result = await collection.insertOne({name})

    }
    if(result){
        console.log("Inserted successfully");
        res.redirect('/category')
    }
}
const disp = async(req,res)=>{
    const db = await connectToDatabase();
    const collection = db.collection('category')
    let data = await  collection.find({}).toArray()
    console.log(data);
    res.render('category',{
        "catdata":data,
        "edituser":''
    })
}
const delData = async(req,res)=>{
    let id = req.params.id
   
    const db = await connectToDatabase();
    const collection = db.collection('category')
    let objectId = new ObjectId(id)
    console.log(objectId);
    
    let data = await  collection.deleteOne({_id:objectId})
    if(data){
        res.redirect('/category')
    }
}
const editData = async(req,res) => {
    let id = res.params.id
   
    const db = await connectToDatabase();
    const collection = db.collection('category');
    let objectID = new ObjectId(id);
    // console.log(objectID);
    let data = await collection.find({}).toArray()
    let editData = await collection.find({_id:objectID}).toArray();
    if(data) {
        res.redirect('/category',{
            "catdata":data,
            "edituser":editData[0]
        })
    }
    console.log(data);
}
module.exports = {ins,disp,delData,editData}