const Organization = require('./models/Organizations')
const Post = require('./models/Posts')
const Listing = require('./models/Listings')
const format = require('date-fns/format')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/SamSocial')
    .then(() => {
        console.log('DB CONNECTED');
    })
    .catch(e => {
        console.log('DB CONNECTION ERROR');
        console.log(e);
    })

const createOrg = async num => {
    await Organization.deleteMany()
    await Post.deleteMany()
    await Listing.deleteMany()
    for (let i = 0; i < num; i++) {
        const organization = new Organization({
            Admin: '6526c1828b32ef51a1b5ffc4',
            Name: 'Homeless Shelter',
            Category: 'Volunteer',
            Bio: 'The Wilmington Hope Shelter is a welcoming refuge nestled in the heart of Wilmington, Delaware. Committed to providing a safe haven for individuals facing homelessness, our shelter offers warm beds, nourishing meals, and compassionate support to those in need. With dedicated staff and a strong sense of community, we strive to empower individuals on their journey toward stability and brighter futures. Join us in our mission to bring hope, dignity, and a helping hand to those experiencing homelessness in Wilmington.',
            Founded: '2005-12-13',
            Joined: format(new Date(), 'PP'), 
            ProfilePicture: 'https://user-content.givegab.com/uploads/group/logo/440493/d7767453a9540caf9b70b96edfb7fe583a213c82.png'
        })

        await organization.save()
    }
    mongoose.connection.close()
}

createOrg(5)