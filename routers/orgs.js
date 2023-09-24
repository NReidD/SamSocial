const express = require('express')
const router = express.Router()
const orgs = require('../controllers/orgs')

router.get('/', orgs.getOrgs)


module.exports = router