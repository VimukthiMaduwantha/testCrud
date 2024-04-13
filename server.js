const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const url = process.env.MONGO_URL;
app.use(cors());
app.use(express.json());

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//DB Connection
const connection = mongoose.connection;
connection.once("open", () => {
    console.log('\x1b[33m', "MongoDB Connected");
})

app.listen(port, () => {
    console.log('\x1b[33m', "PORT connected to " + port)
})




















// user name::  maduwanthavimukthi
// password::  ltIy32E1f6NgEzui
// mongodb+srv://maduwanthavimukthi:ltIy32E1f6NgEzui@testdb.ssmwy1v.mongodb.net/