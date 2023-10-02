const Listing = require('../models/Listings')

module.exports.getNewForm = (req, res) => {
    res.render('listing/new')
}

module.exports.createListing = async (req, res) => {
    const listing = new Listing(req.body)
    await listing.save()
    res.redirect(`/organizations/placeholder/listings/${listing._id}`)
}

module.exports.getListing = async (req, res) => {
    const { listingId } = req.params
    const listing = await Listing.findById(listingId)
    res.render('listing/show', { listing })
}

module.exports.getEditForm = async (req, res) => {
    const { listingId } = req.params
    const listing = await Listing.findById(listingId)
    res.render('listing/edit', { listing })
}

module.exports.updateListing = async (req, res) => {
    const { listingId } = req.params
    const listing = await Listing.findByIdAndUpdate(listingId, (req.body))
    res.redirect(`/organizations/placeholder/listings/${listing._id}`)
}

module.exports.deleteListing = async (req, res) => {
    const { listingId } = req.params
    await Listing.findByIdAndDelete(listingId)
    res.send('successfully deleted listing!')
}