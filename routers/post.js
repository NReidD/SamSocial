const express = require('express');
const router = express.Router({mergeParams: true});
const Post = require('../controllers/post')

// render new post form
router.get('/organizations/:orgId/posts/new')
// post new post
router.post('/organizations/:orgId/posts/new')


// render individual post
router.get('/organizations/:orgId/posts/:postId')


// render edit form
router.get('/organizations/:orgId/posts/:postId/edit')
// updates post
router.put('/organizations/:orgId/posts/:postId/edit')