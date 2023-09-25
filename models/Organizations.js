const mongoose = require('mongoose')
const { Schema } = mongoose


const orgSchema = new Schema({
    Name: String,
    Category: String,
    Bio: String,
    Founded: String,
    ProfilePicture: String,
    Posts: [ObjectId],
    rating: [{Number, ObjectId}],
    Listings: [ObjectId],
    Membrers: [ObjectId],
    Admins: [ObjectId],
    Joined: String,
    Reviews: [{ObjectId, Number}]

})

const Organizations = mongoose.model('Organizations', orgSchema)
module.exports = Organizations;
