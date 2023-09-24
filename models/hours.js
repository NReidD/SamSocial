const mongoose = require('mongoose')
const { Schema } = mongoose

const hoursSchema = new Schema({
    title: String, 
    author: String, 
    date: String, 
    timeFrame: String, 
    image: String, 
    text: [String], 
    category: String
})

const hours = mongoose.model('hours', hoursSchema)
module.exports = hours

