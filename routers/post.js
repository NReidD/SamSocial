const express = require('express');
const router = express.Router({mergeParams: true});
const post = require('../controllers/post')


// render new post form
router.get('/organizations/:orgId/posts/new', post.getNewForm)
// post new post
router.post('/organizations/:orgId/posts/new', post.createPost)


// render individual post
router.get('/organizations/:orgId/posts/:postId', post.getPost)


// render edit form
router.get('/organizations/:orgId/posts/:postId/edit', post.getEditPost)
// updates post
router.put('/organizations/:orgId/posts/:postId/edit', post.updatePost)

// deletes post
router.delete('/organizations/:orgId/posts/:postId', post.deletePost)

module.exports = router