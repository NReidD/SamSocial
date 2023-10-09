const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync')
const post = require('../controllers/post')


// render new post form
router.get('/organizations/:orgId/posts/new', catchAsync(post.getNewForm))
// post new post
router.post('/organizations/:orgId/posts/new', catchAsync(post.createPost))


// render individual post
router.get('/organizations/:orgId/posts/:postId', catchAsync(post.getPost))


// render edit form
router.get('/organizations/:orgId/posts/:postId/edit', catchAsync(post.getEditPost))
// updates post
router.put('/organizations/:orgId/posts/:postId/edit', catchAsync(post.updatePost))

// deletes post
router.delete('/organizations/:orgId/posts/:postId', catchAsync(post.deletePost))

module.exports = router