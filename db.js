require('dotenv').config()
const mongoose = require('mongoose');

const mongoURL = process.env.mongo_url;
mongoose.connect(mongoURL);
var db = mongoose.connection;
db.on('connected',()=>{
    console.log("MongoDb Connection Seccessful");
});

db.on('error',()=>{
    console.log("Connection Failed");
})

module.exports = mongoose;