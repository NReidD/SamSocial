const express = require('express');
const router = express.Router({mergeParams: true});
const Orgs = require('../controllers/organization');
router.get('/', Orgs.showOrgs)
//get/render organization dat
router.get('/organizations/:orgId', Orgs.getOrg)
//create new organization
router.get('/organizations/:orgId/create', Orgs.getNewForm)
//post new organization
router.post('/organizations/:orgId/create', Orgs.createOrg)


//send, post edit form for organization
router.route('/organizations/:orgId/edit')
.get(Orgs.getEditPost)
.post(Orgs.updateOrg)
.post(Orgs.deleteOrg)

module.exports = router