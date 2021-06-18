const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require('dotenv').config();

// App initialization
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
// Routes
app.use("/", require("./routes/index"));
app.use(cors());
app.listen(5000, () => {console.log("Haii");});

module.exports = app;

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true})
    .then(() =>{
        console.log('DB connected');
    })
    .catch((err) => { 
        console.log(err);
    });
