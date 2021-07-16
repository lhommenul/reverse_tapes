require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// ===== CONFIG CORS ======
let params = ()=>{
  if (process.env.STATE === "dev") {
    console.log(`========= DEV MODE ==========`);
    return {
      origin: '*',
      optionsSuccessStatus: 200
    }
  } else {
    console.log(`========= PROD MODE ==========`);
    return {
      origin: 'http://localhost',
      optionsSuccessStatus: 200
    }
  }
}
app.use(cors(params()))

const mongoose = require('mongoose');
// ROOTER
const router = require('./router');
app.use('/',router);


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