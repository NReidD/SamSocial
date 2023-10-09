const mongoose = require('mongoose');
const { Schema } = mongoose;


const listSchema = new Schema({
    EventName: String,
    Category: String,
    Date: String,
    Start: String,
    End: String,
    Description: String, 
    Organization: {
        ref: 'Organization',
        type: Schema.Types.ObjectId
    }
})

const Listing = mongoose.model('Listing', listSchema);
module.exports = Listing;