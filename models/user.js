const mongoose = require('mongoose')
const { Schema } = mongoose
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({})

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema)