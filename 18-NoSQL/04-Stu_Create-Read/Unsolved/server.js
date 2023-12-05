const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

//Connection string
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Instantiate local instance of MongoClient
const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'inventoryDB';

client.connect() //Connect to mongo server
     .then(() => {
          console.log('Connected successfully to MongoDB');
          db = client.db(dbName); // Use client.db

          //Startup express server and listen on port
          app.listen(port, () => {
               console.log(`Example app listening at http://localhost:${port}`);
          });
     })
     .catch((err) => {
          console.error('Mongo connection error: ', err.message);
     });

app.use(express.json());

app.post('/create', (req, res) => {
     db.collection('bookCollection').insertOne(
          { title: req.body.title, author: req.body.author }
     )
          .then(results => res.json(results))
          .catch(err => {
               if (err) throw err;
          });
});

app.post('/create-many', (req, res) => {
     db.collection('bookCollection').insertMany(
          [
               {
                   "title": "Genesis",
                   "author": "moses",
                   "chapter": 1,
                   "verses": 31
               },
               {
                   "title": "Genesis",
                   "author": "moses",
                   "chapter": 1,
                   "verses": 31
               }
           ]
     )
          .then(results => res.json(results))
          .catch(err => {
               if (err) throw err;
          });
});

app.get('/read', (req, res) => {
     db.collection('bookCollection')
          .find({})
          .toArray()
          .then(results => res.json(results))
          .catch(err => {
               if (err) throw err;
          });
});
