const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

// db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => console.log("DB Connected..."));

mongoose.connection.on('error', err => {
    console.log(`DB Connection error: ${err.message}`);
})

const postRoutes = require('./routes/post');
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', postRoutes);

const port = process.env.PORT || 3000;
app.listen(port);