const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Add this line to parse JSON bodies

app.listen(3001, () => {
    console.log('Server started on port 3001');
});

mongoose.connect('mongodb+srv://vamsiniki:tea@cluster10.bxygsk4.mongodb.net/');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

const userRoute = require('./Routes/routes');
app.use('/', userRoute);
