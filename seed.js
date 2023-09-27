const Post = require('./models/Posts')
const Organization = require('./models/Organizations')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/SamSocial')
    .then(() => {
        console.log('DB CONNECTED');
    })
    .catch(e => {
        console.log('DB CONNECTION ERROR');
        console.log(e);
    })


const createOrg = (num) => {
    for (let i = 0; i < num; i++) {

    }
}