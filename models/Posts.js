const mongoose = require('mongoose');
const { Schema } = mongoose;


const postSchema = new Schema({
    Title: String,
    Media: [String],
    Caption: String,
    CommentsEnabled: Boolean,
    Likes: [ObjectId],
    Comments: [ObjectId],
    Shares: Number
})

const Posts = mongoose.model('Posts', postSchema);
module.exports = Posts;