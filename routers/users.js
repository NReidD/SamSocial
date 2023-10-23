const express = require('express')
const router = express.Router()
const passport = require('passport')
const catchAsync = require('../utils/catchAsync')
const User = require('../models/user')
const { storeReturnTo } = require('../middleware')

router.get('/register', (req, res) => {
    res.render('users/register')
})

router.post('/register', catchAsync(async (req, res, next) => {
    try {
        const { username, password } = req.body
        const user = new User({username})
        const registeredUser = await User.register(user, password)
        req.login(registeredUser, err => {
            if (err) return next(err)
            // change redirect to user profile
            res.redirect('/organizations')
        })
    } catch (error) {
        req.flash('error', error.message)
        res.redirect('/register')
    }
}))

router.get('/login', (req, res) => {
    res.render('users/login')
})

router.post('/login', storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    const redirectUrl = res.locals.returnTo || '/organizations'
    // change to user profile
    res.redirect(redirectUrl)
})

router.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/organizations');
    });
}); 

router.get('/users/:userId', catchAsync(async (req, res) => {
    const { userId } = req.params
}))

module.exports = router