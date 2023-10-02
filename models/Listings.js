const mongoose = require('mongoose');
const { Schema } = mongoose;


const listSchema = new Schema({
    EventName: String,
    Category: String,
    Date: String,
    Start: String,
    End: String,
    Description: String
})

const Listing = mongoose.model('Listing', listSchema);
module.exports = Listing;