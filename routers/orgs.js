const express = require('express');
const router = express.Router({mergeParams: true});
const Orgs = require('../controllers/organization');

//get/render organization dat
router.get('/organizations/:orgId')
//create new organization
router.get('/organizations/:orgId/create')
//post new organization
router.post('/organizations/:orgId/create')


//send, post edit form for organization
router.route('/organizations/:orgId/edit')
.get('/organizations/:orgId/edit')
.post('/organizations/:orgId/edit')


