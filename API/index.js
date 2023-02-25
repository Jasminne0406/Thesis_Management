const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/routes');
const mongoose = require("mongoose"); 
mongoose.set("strictQuery", false);
const url = "mongodb+srv://prakmlis:dav0406$$@cluster0.wfmfo.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url,()=>{
    console.log("Database connected")
});
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type','x-requested-with');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json());
app.use(routes);
app.listen(3000, () => console.log('Listening on port 3000'));