const Orgs = require("../models/Organizations")

module.exports.getOrg = async (req, res) => {
    const query = req.query.category
    const Organizations = await Orgs.find().sort({_id: -1}).limit(10)
    res.render('samSocial/organizations/index', {Organizations, category: query})

}
module.exports.newOrg = async(req, res) => {
const organization = new Orgs(req.body)
    organization.date = format(new Date(), 'PPP')
    organization.text = splitText(organization.text)
    await organization.save()
    res.redirect(`/samSocial/organizations/${organization._id}`)
    }
module.exports.getNewForm = async (req, res) => {
    res.render('samSocial/organizations/new', {category: ''})
    
}
module.exports.getEditForm = async (req, res) => {
    const { orgId } = req.params
    const org = Orgs.findById(orgID)
   res.render('samSocial/organizations/edit', org)
    } 
module.exports.UpdateOrg = async (req, res) => 

{
    const { orgId } = req.params
    const org = await Orgs.findByIdAndUpdate(orgId, (req.body))
    res.redirect(`/organizations/${org._id}`)

}