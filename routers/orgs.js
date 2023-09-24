const express = require('express')
const router = express.Router()
const home = require('../controllers/orgs')

router.get('/', orgs.getOrgs)


module.exports = router