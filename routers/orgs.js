const express = require('express');
const router = express.Router({mergeParams: true});
const Orgs = require('../controllers/organization');
router.get('/', Orgs.getOrgs)
//get/render organization dat
router.get('/organizations/:orgId')
//create new organization
router.get('/organizations/:orgId/create', Orgs.createScreen)
//post new organization
router.post('/organizations/:orgId/create', Orgs.createOrg)


//send, post edit form for organization
router.route('/organizations/:orgId/edit')
.get(Orgs.getEdit)
.post(Orgs.postEdit)


module.export = router