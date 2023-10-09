const mongoose = require('mongoose');
const Post = require('./Posts')
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

orgSchema.post('findOneAndDelete', async doc => {
    await Post.deleteMany({_id: {$in: doc.Posts} })
})

const Organization = mongoose.model('Organization', orgSchema);
module.exports = Organization;
