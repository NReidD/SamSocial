const express = require('express');
const router = express.Router({mergeParams: true});
const Org = require('../controllers/organization')

// render all orgs
router.get('/organizations', Org.getOrgs)

// render new org form
router.get('/organizations/new', Org.getNewForm)
// post new org
router.post('/organizations/new', Org.createOrg)


// render individual org
router.get('/organizations/:orgId', Org.getOneOrg)


// render edit form
router.get('/organizations/:orgId/edit', Org.getEditForm)
// updates org
router.put('/organizations/:orgId/edit', Org.updateOrg)

// deletes org
router.delete('/organizations/:orgId', Org.deleteOrg)

module.exports = router