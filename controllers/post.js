const Post = require('../models/Posts')

module.exports.getNewForm = (req, res) => {
    res.render('post/new')
}

module.exports.createPost = async (req, res) => {
    const post = new Post(req.body)
    await post.save()
    res.redirect(`/organizations/placeholder/posts/${post._id}`)
}

module.exports.getPost = async (req, res) => {
    const { postId } = req.params
    const post = await Post.findById(postId)
    res.render('post/show', { post })
}

module.exports.getEditPost = async (req, res) => {
    const { postId } = req.params
    const post = await Post.findById(postId)
    res.render('post/edit', { post })
}

module.exports.updatePost = async (req, res) => {
    const { postId } = req.params
    const post = await Post.findByIdAndUpdate(postId, (req.body))
    res.redirect(`/organizations/placeholder/posts/${post._id}`)
}

module.exports.deletePost = async (req, res) => {
    const { postId } = req.params
    await Post.findByIdAndDelete(postId)
    res.send('successfully deleted post!')
}