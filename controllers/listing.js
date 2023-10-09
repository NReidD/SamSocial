const Listing = require('../models/Listings')
const Org = require('../models/Organizations')

module.exports.getNewForm = (req, res) => {
    const { orgId } = req.params
    res.render('listing/new', { orgId })
}

module.exports.createListing = async (req, res) => {
    const { orgId } = req.params
    const org = await Org.findById(orgId)
    const listing = new Listing(req.body)
    listing.Organization = org
    org.Listings.push(listing)
    await listing.save()
    await org.save()
    res.redirect(`/organizations/${org._id}/listings/${listing._id}`)
}

module.exports.getListing = async (req, res) => {
    const { listingId, orgId } = req.params
    const listing = await Listing.findById(listingId)
    res.render('listing/show', { listing, orgId })
}

module.exports.getEditForm = async (req, res) => {
    const { listingId, orgId } = req.params
    const listing = await Listing.findById(listingId)
    res.render('listing/edit', { listing, orgId })
}

module.exports.updateListing = async (req, res) => {
    const { listingId, orgId } = req.params
    const listing = await Listing.findByIdAndUpdate(listingId, (req.body))
    res.redirect(`/organizations/${orgId}/listings/${listing._id}`)
}

module.exports.deleteListing = async (req, res) => {
    const { listingId, orgId } = req.params
    await Org.findByIdAndUpdate(orgId, {$pull: { Listings: listingId }})
    await Listing.findByIdAndDelete(listingId)
    res.redirect(`/organizations/${orgId}`)
}