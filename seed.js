const Post = require('./models/Posts')
const Organization = require('./models/Organizations')
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

const createPost = async num => {
    const postArr = []
    for (let i = 0; i < num; i++) {
        const post = new Post({
            Title: 'Feeding the homeless!',
            Media: 'https://uhrelief.org/wp-content/uploads/2021/11/Feeding-the-Homeless-1.jpg',
            Caption: 'Helen had a very fun time today at Wilmington Hope Shelter!'
        })

        await post.save()
        postArr.push(post._id)
    }

    return postArr
}

const createOrg = async num => {
    for (let i = 0; i < num; i++) {
        const postArr = await createPost(5)
        const organization = new Organization({
            Name: 'Homeless Shelter',
            Category: 'Volunteer',
            Bio: 'The Wilmington Hope Shelter is a welcoming refuge nestled in the heart of Wilmington, Delaware. Committed to providing a safe haven for individuals facing homelessness, our shelter offers warm beds, nourishing meals, and compassionate support to those in need. With dedicated staff and a strong sense of community, we strive to empower individuals on their journey toward stability and brighter futures. Join us in our mission to bring hope, dignity, and a helping hand to those experiencing homelessness in Wilmington.',
            Founded: 'December 13, 2005',
            Joined: format(new Date(), 'PP'), 
            ProfilePicture: 'https://user-content.givegab.com/uploads/group/logo/440493/d7767453a9540caf9b70b96edfb7fe583a213c82.png', 
            Posts: postArr
        })

        await organization.save()
    }
    mongoose.connection.close()
}

createOrg(5)