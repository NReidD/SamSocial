const mongoose = require('mongoose');
const { Schema } = mongoose;


const postSchema = new Schema({
    Title: String,
    Media: String,
    Caption: String,
    Created: String,
    Organization: {
        ref: 'Organization',
        type: Schema.Types.ObjectId
    }
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;