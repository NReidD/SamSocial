const express = require('express');
const catchAsync = require('../utils/catchAsync')
const router = express.Router({mergeParams: true});
const { isLoggedIn, isAuthor } = require('../middleware')
const Org = require('../controllers/organization')

// render all orgs
router.get('/organizations', catchAsync(Org.getOrgs))

// render new org form
router.get('/organizations/new', isLoggedIn, Org.getNewForm)
// post new org
router.post('/organizations/new', isLoggedIn, catchAsync(Org.createOrg))


// render individual org
router.get('/organizations/:orgId', catchAsync(Org.getOneOrg))


// render edit form
router.get('/organizations/:orgId/edit', isLoggedIn, isAuthor, catchAsync(Org.getEditForm))
// updates org
router.put('/organizations/:orgId/edit', isLoggedIn, isAuthor, catchAsync(Org.updateOrg))

// deletes org
router.delete('/organizations/:orgId', isLoggedIn, isAuthor, catchAsync(Org.deleteOrg))

module.exports = router