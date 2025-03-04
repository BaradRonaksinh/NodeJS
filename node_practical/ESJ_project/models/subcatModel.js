// connect mongoose...
const mongoose = require('mongoose')

// model async func to create switchON typeOF means connection are ON or OFF
async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/ejsproject');
        console.log('Connected successfully to server');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        throw err;
    }  
}
connectToDatabase();
// end hear 

// Create Model with Mongoose Schema
const Schema = mongoose.Schema;
const SubcatSchema = new Schema({
    categories: {
        type:Schema.Types.ObjectId,
        ref:"category"
    },
    name:String,
    image:String
  });

let subcatModel =  mongoose.model('subcategory', SubcatSchema);

// export module
module.exports = subcatModel;

