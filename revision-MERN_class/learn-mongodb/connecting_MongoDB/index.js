const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 3000;
const mongoURI = 'mongodb://localhost:27017/learning_db';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(error => console.error(error));

app.get('/', (req, res) => {
    res.send("mongodb connected successfully");
});

app.listen(port, () => {
    console.log("Server running: ", port);
});