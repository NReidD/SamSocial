const mongoose = require('mongoose')
const { Schema } = mongoose


const listSchema = new Schema({
    EventName: String,
    Category: String,
    SignUps: [ObjectId],
    Start: String,
    End: String,
    Description: String,
    Questions: [String]
})

const Listings = mongoose.model('Listings', listSchema)
module.exports = Listings;