const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const PORT = process.env.PORT || 3333;

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


// Import routes
const postsRoute = require('./routes/posts.js');

const filesRoute = require('./routes/files.js');

app.use('/posts', postsRoute);
app.use('/files', filesRoute);


// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

// Connect to db
mongoose.connect(process.env.DB_CONNECTION,
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, () => {
    console.log('Connected to db');
});

app.listen(PORT,"0.0.0.0", () => {
    console.log(`Server is up and running on port ${PORT}`);
});