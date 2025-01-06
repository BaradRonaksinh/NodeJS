const mongoose = require('mongoose');


async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/ejsproject');
        console.log('Connected successfully to server');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        throw err;
    }  
}
connectToDatabase()

const Schema = mongoose.Schema;
const catSchema = new Schema({
    name: String
  });

let catModel =  mongoose.model('category', catSchema);
module.exports = catModel;

