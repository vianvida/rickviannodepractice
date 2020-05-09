
//Import npm packages
const express = require ('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

// const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;


const routes = require('./routes/api');

const MONGODB_URI = 'mongodb+srv://rickvian:testinghash@cluster0-aug3g.gcp.mongodb.net/test?retryWrites=true&w=majority'
const mongolocal = 'mongodb://127.0.0.1:27017/'; //error, later will figure out how to setup database

mongoose.connect(process.env.MONGODB_URI || mongolocal , {
    useNewUrlParser:true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () =>{
    console.log('mongoose connected');
})

// Data Parsing
app.use(express.json());
app.use(express.urlencoded({extended: false }));

// app.use(cors());

//HTTP Request logger
app.use(morgan('tiny'));
app.use('/api',routes);

//if our app in heroku
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

const path = require('path');
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));