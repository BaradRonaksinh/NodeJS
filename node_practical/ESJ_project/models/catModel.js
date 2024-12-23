const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

let db
// Database Name
const dbName = 'ejsproject';

async function connenctDatabase() {
  // Use connect method to connect to the server
    if(!db){
      try {
        await client.connect();
        console.log('Connected Successfully to SERVER');
        db = client.db(dbName)
      } catch (error) {
        console.log('Failed to connect to MongoDB', error)
        throw err;
      }
    }
    return db
}

module.exports = connenctDatabase