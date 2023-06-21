const mongoose = require('mongoose');


const mongoURI ="mongodb://127.0.0.1:27017"

const connectToMongo =()=>{
     mongoose.connect(mongoURI);
     mongoose.connection.on('connected', () => console.log('Connected with the mongoose Succesfully '));
    mongoose.connection.on('error', () => console.log('Connection failed with - ',err));
}


module.exports = connectToMongo;