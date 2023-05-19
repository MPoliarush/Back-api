// const mysql2 = require('mysql2/promise')

// const pool = mysql2.createPool({
//     host:'127.0.0.1',
//     database:'catalog',
//     user:'root',
//     password:'Meri_1994',
    
// })



// module.exports = pool

const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect("mongodb+srv://poliarushmaryna:jlfxPtT7ChrfRzPv@cluster0.i7gg2a6.mongodb.net/catalog?retryWrites=true&w=majority");
  database = client.db('catalog');
}

function getDb() {
  if (!database) {
    throw { message: 'Database not connected!' };
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
