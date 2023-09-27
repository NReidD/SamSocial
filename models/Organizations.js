const mongoose = require('mongoose');
const { Schema } = mongoose;


const orgSchema = new Schema({
    Name: String,
    Category: String,
    Bio: String,
    Founded: String,
    ProfilePicture: String,
    Posts: [
        {
            ref: 'Post',
            type: Schema.Types.ObjectId
        }
    ],
    Joined: String

})

const Organizations = mongoose.model('Organizations', orgSchema);
module.exports = Organizations;
