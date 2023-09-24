const hours = require('../models/hours')
module.exports.getHours = (req, res, next) => {
    res.render('samSocial/hours')
}
