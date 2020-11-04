const express = require('express')
const Post = require('../models/facebook-post')
const router = new express.Router()

//post new user post obj needed -> owner(token/auth/id), message
router.post('/add-new-post', async (req, res) => {
    const post = new Post(req.body)
    try {
        await post.save()
        res.status(201).send({ post})
    } catch (e) {
        res.status(400).send(e)
    }
})

//update exists post with new comment -> need get owner(owner id) , message
router.patch('/add-post-comment/:id', async (req, res) => {
    const comment = new Post(req.body)
    try {
        const updatedPast = await Post.findByIdAndUpdate(req.params.id,{ $push:{comments:comment}})

        if(!updatedPast){
            res.status(400).send()
        }
        
        res.send(updatedPast);
 
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router