/**
 * @module server
 * @file server.js
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const PORT = process.env.PORT || 3333;
const ConnectionString = process.env.DB_CONNECTION || 'mongodb+srv://Anton:axiospassword@axiosdb.juupn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const env = process.env.NODE_ENV || 'production'

const app = express()

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));


app.use(express.json());


if(process.env.NODE_ENV==='production') {
    app.use(express.static('../client/build'))
}



/**
 * importing post route 
 */
const postsRoute = require('./routes/posts.js');

/**
 *  importing files route
 */
const filesRoute = require('./routes/files.js');

app.use('/posts', postsRoute);
app.use('/files', filesRoute);


// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

/**
 * Connecting to the DB
 */
mongoose.connect(ConnectionString,
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, () => {
    console.log('Connected to db');
});

app.listen(PORT,"0.0.0.0", () => {
    console.log(`Server is up and running on port ${PORT}`);
});