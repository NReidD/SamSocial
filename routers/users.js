const express = require('express')
const router = express.Router()
const passport = require('passport')
const catchAsync = require('../utils/catchAsync')
const User = require('../models/user')

router.get('/register', (req, res) => {
    res.render('users/register')
})

router.post('/register', catchAsync(async (req, res) => {
    try {
        const { username, password } = req.body
        const user = new User({username})
        const registeredUser = await User.register(user, password)
        console.log(registeredUser)
        // change redirect to user profile
        res.redirect('/organizations')
    } catch (error) {
        req.flash('error', error.message)
        res.redirect('/register')
    }
}))

router.get('/login', (req, res) => {
    res.render('users/login')
})

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    // change to user profile
    res.redirect('/organizations')
})

router.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/organizations');
    });
}); 

module.exports = router