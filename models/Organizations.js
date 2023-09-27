const mongoose = require('mongoose');
const { Schema } = mongoose;


const orgSchema = new Schema({
    Name: String,
    Category: String,
    Bio: String,
    Founded: String,
    Joined: String,
    ProfilePicture: String,
    Posts: [
        {
            ref: 'Post',
            type: Schema.Types.ObjectId
        }
    ],

})

const Organization = mongoose.model('Organization', orgSchema);
module.exports = Organization;
