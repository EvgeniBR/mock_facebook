const express = require('express')
const Post = require('../models/facebook-post')
const router = new express.Router()
const date = require('../util/date');

// CRUD POST

//get user posts (all posts)
router.get('/facebook-post/:owner', async (req, res) => {
    try {
        const usersPost = await Post.find({owner:req.params.owner})
        res.send(usersPost)
    } catch (e) {
        res.status(500).send()
    }
})

//post new user post obj needed -> owner(token/auth/id), message
router.post('/facebook-post', async (req, res) => {
    const myData = req.body;
    myData['createdDate'] = date.getFullDate();
    myData['updateDate'] = date.getFullDate();
    const post = new Post(myData)
    try {
        await post.save()
        res.status(201).send({ post})
    } catch (e) {
        res.status(400).send(e)
    }
})

//update post

//update exists post with new comment -> need get owner(owner id) , message
router.patch('/facebook-comment/:id', async (req, res) => {
    const myData = req.body;
    myData['createdDate'] = date.getFullDate();
    myData['updateDate'] = date.getFullDate();
    const comment = new Post(myData);
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