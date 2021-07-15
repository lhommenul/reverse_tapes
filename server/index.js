require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// ROOTER
const rooter = require('./rooter')
app.use('/',rooter)
const Range = require('./schema/Range');
const Product = require('./schema/Product');


// Connection to the bdd
(async ()=>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xa3z5.mongodb.net/reversetapes?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
    } catch (error) {
        console.error(error);
    }
})();


app.listen(8080)