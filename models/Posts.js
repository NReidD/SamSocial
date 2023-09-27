const mongoose = require('mongoose');
const { Schema } = mongoose;


const postSchema = new Schema({
    Title: String,
    Media: String,
    Caption: String
})

const Posts = mongoose.model('Posts', postSchema);
module.exports = Posts;