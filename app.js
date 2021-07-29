require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const app = express();
var path = require("path");

app.use(express.json());
app.use(cors());

const tradingCardRouter = require('./controllers/tradingCard');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.sfnyy.mongodb.net/video?retryWrites=true&w=majority";


mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => console.log('connected to MongoDB'))
    .catch((error) => console.log('error connecting to MongoDB:', error.message));

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
module.exports = app;
