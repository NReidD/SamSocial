const express = require('express')
const router = express.Router()
const home = require('../controllers/hours')

router.get('/', home.getHome)


module.exports = router