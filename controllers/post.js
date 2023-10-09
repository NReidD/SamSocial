const Post = require('../models/Posts')
const format = require('date-fns/format')
const Org = require('../models/Organizations')

module.exports.getNewForm = async (req, res) => {
    const { orgId } = req.params
    res.render('post/new', { orgId })
}

module.exports.createPost = async (req, res) => {
    const { orgId } = req.params
    const org = await Org.findById(orgId)
    const post = new Post(req.body)
    post.Created = format(new Date(), 'PP')
    post.Organization = org
    org.Posts.push(post)
    await post.save()
    await org.save()
    res.redirect(`/organizations/${org._id}/posts/${post._id}`)
}

module.exports.getPost = async (req, res) => {
    const { postId, orgId } = req.params
    const post = await Post.findById(postId)
    const org = await Org.findById(orgId)
    res.render('post/show', { post, org })
}

module.exports.getEditPost = async (req, res) => {
    const { postId, orgId } = req.params
    const post = await Post.findById(postId)
    const org = await Org.findById(orgId)
    res.render('post/edit', { post, org })
}

module.exports.updatePost = async (req, res) => {
    const { postId, orgId } = req.params
    const post = await Post.findByIdAndUpdate(postId, (req.body))
    res.redirect(`/organizations/${orgId}/posts/${post._id}`)
}

module.exports.deletePost = async (req, res) => {
    const { postId, orgId } = req.params
    await Org.findByIdAndUpdate(orgId, {$pull: { Posts: postId }})
    await Post.findByIdAndDelete(postId)
    res.redirect(`/organizations/${orgId}`)
}