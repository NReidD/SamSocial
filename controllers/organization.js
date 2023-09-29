const Orgs = require('../models/Organizations')

module.exports.getNewForm = (req, res) => {
    res.render('orgs/new')
}
module.exports.showOrgs = async (req, res) => {
    const query = req.query.category
    if (query === undefined) {
        const organizations = await Orgs.find().sort({_id: -1}).limit(10)
        res.render('orgs/index', {organizations, category: query})
    } else {
        const organizations = await Orgs.find({category: query}).sort({_id: -1}).limit(10)
        res.render('orgs/index', {organizations, category:  query})
    }
}

module.exports.createOrg = async (req, res) => {
    const org = new Orgs(req.body)
    await org.save()
    res.redirect(`/organizations/${org._id}`)
}

module.exports.getOrg = async (req, res) => {
    const { orgId } = req.params
    const org = await Orgs.findById(orgId)
    res.render('orgs/show', { org })
}

module.exports.getEditPost = async (req, res) => {
    const { orgId } = req.params
    const org = await Orgs.findById(orgId)
    res.render('orgs/edit', { org })
}

module.exports.updateOrg = async (req, res) => {
    const { orgId } = req.params
    const org = await Orgs.findByIdAndUpdate(orgId, (req.body))
    res.redirect(`/organizations/${org._id}`)
}

module.exports.deleteOrg = async (req, res) => {
    const { orgId } = req.params
    await Orgs.findByIdAndDelete(orgId)
    res.send('successfully deleted organization!')
}