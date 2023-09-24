const express = require('express')
const router = express.Router()
const hours = require('../controllers/hours')

router.get('/', hours.getHours)


module.exports = router