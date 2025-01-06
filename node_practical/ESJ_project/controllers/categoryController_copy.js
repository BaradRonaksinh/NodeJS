const { ObjectId } = require('mongodb');
const connectToDatabase = require('../models/catModel_copy');

// create a reuire functions...

// Create a INSERT func in controller...
const ins = async (req, res) => {
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
    // result = await collection.insertOne({ name })
    if (result) {
        console.log("Inserted successfully");
        res.redirect('/category')
    }
}

// Create a DISPLAY func in controller...
const disp = async (req, res) => {

    // Connect to DATABASE  -- [mongoDB]
    const db = await connectToDatabase();

    // is a reference object that provides methods to interact with the 'category' collection in the database.
    const collection = db.collection('category')

    // Array of Objects: For multiple documents, you get an array of JavaScript objects.
    let data = await collection.find({}).toArray()
    console.log(data);
    // console.log(editData);
    res.render('category', {
        "catdata": data,
        "edituser": ''
    })
}

// Create a DELETE func in controller...
const delData = async (req, res) => {
    let id = req.params.id

    const db = await connectToDatabase();
    const collection = db.collection('category')
    let objectId = new ObjectId(id)
    console.log(objectId);

    let data = await collection.deleteOne({ _id: objectId })
    if (data) {
        res.redirect('/category')
    }
}

// Create a EDIT func in controller...
const editData = async (req, res) => {
    let id = req.params.id

    const db = await connectToDatabase();
    const collection = db.collection('category');
    let objectID = new ObjectId(id);
    // console.log(objectID);
    let data = await collection.find({}).toArray()
    let editData = await collection.findOne({ _id: objectID });
    if (data) {

        // render the webPage.. with data   res.render(view, data):
        res.render('category', {
            "catdata": data,
            "edituser": editData
        })
    }
    console.log(data);
}
module.exports = { ins, disp, delData, editData }