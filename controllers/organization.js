const Org = require('../models/Organizations')

module.exports.getOrgs = async (req, res) => {
    const orgs = await Org.find()
    res.render('orgs/index', { orgs })
}

module.exports.getNewForm = (req, res) => {
    res.render('orgs/new')
}

module.exports.createOrg = async (req, res) => {
    const org = new Org(req.body)
    await org.save()
    res.redirect(`/organizations/${org._id}`)
}

module.exports.getOneOrg = async (req, res) => {
    const { orgId } = req.params
    const org = await Org.findById(orgId)
    res.render('orgs/show', { org })
}

module.exports.getEditForm = async (req, res) => {
    const { orgId } = req.params
    const org = await Org.findById(orgId)
    res.render('orgs/edit', { org })
}

module.exports.updateOrg = async (req, res) => {
    const { orgId } = req.params
    const org = await Org.findByIdAndUpdate(orgId, req.body)
    res.redirect(`/organizations/${org._id}`)
}

module.exports.deleteOrg = async (req, res) => {
    const { orgId } = req.params
    await Org.findByIdAndDelete(orgId)
    res.redirect('/organizations')
}