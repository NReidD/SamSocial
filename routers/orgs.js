const express = require('express');
const router = express.Router({mergeParams: true});
const Orgs = require('../controllers/organization');

//create new organization
router.get('/organizations/create', Orgs.getNewForm);
//post new organization
router.post('/organizations/create', Orgs.createOrg);

router.get('/organizations', Orgs.showOrgs);
router.get('/organizations/:orgId', Orgs.getOrg);
//send, post edit form for organization
router.get('/organizations/:orgId/edit', Orgs.getEditPost);
router.post('/organizations/:orgId/edit', Orgs.updateOrg);
router.delete('/organizations/:orgId', Orgs.deleteOrg);
module.exports = router