//MongoClient is used to establish a connection between your Node.js application and a MongoDB database server. 
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// -----------------------------------------------------------------------------------------------//
// Connection URL

// The url variable is expected to be a connection string (URI) that specifies the address of your MongoDB server or cluster.
// It often includes authentication credentials, the database host, and additional options.
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
        throw error;
      }
    }
    return db
}

module.exports = connenctDatabase