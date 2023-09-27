const mongoose = require('mongoose');
const { Schema } = mongoose;


const orgSchema = new Schema({
    Name: String,
    Category: String,
    Bio: String,
    Founded: String,
    ProfilePicture: String,
    Posts: [ObjectId],
    rating: [{Number, ObjectId}],
    Listings: [ObjectId],
    Joined: String

})

const Organizations = mongoose.model('Organizations', orgSchema);
module.exports = Organizations;
