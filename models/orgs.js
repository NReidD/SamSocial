const mongoose = require('mongoose')
const { Schema } = mongoose


const orgSchema = new Schema({
    title: String, 
    author: String, 
    date: String, 
    image: String, 
    text: [String], 
    category: String
})

const Organizations = mongoose.model('Organizations', orgSchema)
module.exports = Organizations;