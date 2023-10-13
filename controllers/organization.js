const Org = require('../models/Organizations')
const format = require('date-fns/format')

const separateDate = date => {
    const dateArr = date.split('-')
    dateArr[1] = dateArr[1] - 1
    return format(new Date(dateArr[0], dateArr[1], dateArr[2]), 'PP')
}

module.exports.getOrgs = async (req, res) => {
    const orgs = await Org.find()
    res.render('orgs/index', { orgs })
}

module.exports.getNewForm = (req, res) => {
    res.render('orgs/new')
}

module.exports.createOrg = async (req, res) => {
    const org = new Org(req.body)
    org.Joined = format(new Date(), 'PP')
    org.Admin = req.user._id
    await org.save()
    res.redirect(`/organizations/${org._id}`)
}

module.exports.getOneOrg = async (req, res) => {
    const { orgId } = req.params
    const org = await Org.findById(orgId).populate('Posts').populate('Listings').populate('Admin')
    const founded = separateDate(org.Founded)
    res.render('orgs/show', { org, founded })
}

module.exports.getEditForm = async (req, res) => {
    const { orgId } = req.params
    const org = await Org.findById(orgId)
    res.render('orgs/edit', { org })
}

module.exports.updateOrg = async (req, res) => {
    const { orgId } = req.params
    const org = await Org.findByIdAndUpdate(orgId, req.body)
    await org.save()
    res.redirect(`/organizations/${org._id}`)
}

module.exports.deleteOrg = async (req, res) => {
    const { orgId } = req.params
    await Org.findByIdAndDelete(orgId)
    res.redirect('/organizations')
}
