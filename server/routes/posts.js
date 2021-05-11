const express = require('express')
const router = express.Router();
const Post = require('../models/Post');


/**
 * A function that sends all posts to the client.
 */
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err.message})
    }
});


/**
 * A function that handles post request from the client - 
 * i. e. adding new post object to the database.
 */
router.post('/',async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err.message})
    }
    
});

/**
 * A function that sends one specific post to the client.
 */
router.get('/:postId', async (req,res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err.message})
    }
});


/**
 * A function that deletes one specific post from the DB.
 */
router.delete('/:postId', async (req,res) => {
    try{
        const removedPost = await Post.deleteOne( {_id: req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message: err.message})
    }
});


/**
 * A function that changes one specific post in the DB.
 */
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne({_id: req.params.postId}, { $set : {title: req.body.title}});
        res.json(updatedPost);
    }catch(err){
        res.json({message: err.message})
    }
});

module.exports = router;