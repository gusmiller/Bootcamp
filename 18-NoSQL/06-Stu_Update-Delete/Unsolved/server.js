const express = require('express');
const mongodb = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3001;
const connectionStringURI = `mongodb://127.0.0.1:27017`;
const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'inventoryDB';

client.connect()
     .then(() => {
          console.log('Connected successfully to MongoDB');
          db = client.db(dbName);

          app.listen(port, () => {
               console.log(`Example app listening at http://localhost:${port}`);
          });
     })
     .catch((err) => {
          console.error('Mongo connection error: ', err.message);
     });

app.use(express.json());

app.post('/create', (req, res) => {
     // The title and author will be provided by the request body
     db.collection('bookCollection').insertOne(
          { title: req.body.title, author: req.body.author }
     )
          .then(results => res.json(results))
          .catch(err => {
               if (err) throw err;
          });
});

app.delete('/delete/:id', (req, res) => {

     const bookId = new ObjectId(req.body.id);

     db.collection('bookCollection').deleteOne(
          { _id: bookId }
     ).then(results => {
          console.log(results);
          res.send(
               results.deletedCount ? 'Document deleted' : 'No document found!'
          );
     })
          .catch(error => {
               if (error) throw err;
          })
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