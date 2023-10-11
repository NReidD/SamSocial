const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync')
const { isLoggedIn } = require('../middleware')
const post = require('../controllers/post')


// render new post form
router.get('/organizations/:orgId/posts/new', isLoggedIn, catchAsync(post.getNewForm))
// post new post
router.post('/organizations/:orgId/posts/new', isLoggedIn, catchAsync(post.createPost))


// render individual post
router.get('/organizations/:orgId/posts/:postId', catchAsync(post.getPost))


// render edit form
router.get('/organizations/:orgId/posts/:postId/edit', isLoggedIn, catchAsync(post.getEditPost))
// updates post
router.put('/organizations/:orgId/posts/:postId/edit', isLoggedIn, catchAsync(post.updatePost))

// deletes post
router.delete('/organizations/:orgId/posts/:postId', isLoggedIn, catchAsync(post.deletePost))

module.exports = router