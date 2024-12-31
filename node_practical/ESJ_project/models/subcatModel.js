const mongoose = require('mongoose');


async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/nodebatch9to10');
        console.log('Connected successfully to server');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        throw err;
    }  
}
connectToDatabase()
const Schema = mongoose.Schema;
const SubcatSchema = new Schema({
    category: String,
    name: String
  });

let subcatModel =  mongoose.model('subcategory', SubcatSchema);
module.exports = subcatModel;

