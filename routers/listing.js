const express = require('express')
const router = express.Router({mergeParams: true})
const listing = require('../controllers/listing')

// render new listing form
router.get('/organizations/:orgId/listings/new', listing.getNewForm)
// post new listing
router.post('/organizations/:orgId/listings/new', listing.createListing)


// render individual listing
router.get('/organizations/:orgId/listings/:listingId', listing.getListing)


// render edit form
router.get('/organizations/:orgId/listings/:listingId/edit', listing.getEditForm)
// updates listing
router.put('/organizations/:orgId/listings/:listingId/edit', listing.updateListing)

// deletes listing
router.delete('/organizations/:orgId/listings/:listingId', listing.deleteListing)

module.exports = router