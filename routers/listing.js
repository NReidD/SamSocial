const express = require('express')
const catchAsync = require('../utils/catchAsync')
const router = express.Router({mergeParams: true})
const { isLoggedIn } = require('../middleware')
const listing = require('../controllers/listing')

// render new listing form
router.get('/organizations/:orgId/listings/new', isLoggedIn, listing.getNewForm)
// post new listing
router.post('/organizations/:orgId/listings/new', isLoggedIn, catchAsync(listing.createListing))


// render individual listing
router.get('/organizations/:orgId/listings/:listingId', catchAsync(listing.getListing))


// render edit form
router.get('/organizations/:orgId/listings/:listingId/edit', isLoggedIn, catchAsync(listing.getEditForm))
// updates listing
router.put('/organizations/:orgId/listings/:listingId/edit', isLoggedIn, catchAsync(listing.updateListing))

// deletes listing
router.delete('/organizations/:orgId/listings/:listingId', isLoggedIn, catchAsync(listing.deleteListing))

module.exports = router