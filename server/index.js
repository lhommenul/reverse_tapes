require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const Range = require('./schema/Range');

// Connet to the bdd
(async ()=>{
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xa3z5.mongodb.net/reversetapes?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
})();




app.listen()