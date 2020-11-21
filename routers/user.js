const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()
const multer = require('multer')
const sharp = require('sharp')
const userPath = require('../util/pathCreator')
//create user
router.post('/users', async (req, res) => {
    const path = await userPath.pathCreator(req.body.last_name)
    const user = new User(req.body)
    user.path = path
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

//login user
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(200).send( {'error': 'Invalid mail or password' })
        console.log(e);
    }
})

//logout user
router.post('/users/logout' , auth, async (req, res) => {
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
           return token.token !== req.token
        })
        await req.user.save()

        res.send()
    }catch(e){
        res.status(500).send(e)
    }
})


//logout user from all platforms
router.post('/users/logoutAll' , auth, async (req, res) => {
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send(e)
    }
})
//get user own profile
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})
//get user path profile
router.get(`/users/:path`, async (req, res) => {
    const path = req.params.path

    try {
        const user = await User.findOne({path:path})

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
    
})
// get specific profile by id
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})
// update specific profile by authentication
router.patch('/users/me',auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = [ 'email', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})
// delete authenticated user 
router.delete('/users/me',auth, async (req, res) => {
    try {
    
        await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})


// this function uploads image files  has a 5 mb limit and accepts only jpg | jpeg | png
const upload = multer({
    limits:{
        fileSize: 50000000
    },
    fileFilter(req , file , cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){

            return cb(new Error('File must be a image'))
        }

        
        cb(undefined , true)
        
    }
})
// routs to upload delete and get avatar
router.post('/users/me/avatar',auth , upload.single('avatar') ,async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({width:500 , height:500 }).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
   res.send()
}, (error , req , res , next)=>{
    res.status(400).send({error: error.message})
})
router.delete('/users/me/avatar',auth , upload.single('avatar') ,async (req, res) => {
    req.user.avatar = undefined
    await req.user.save()
   res.send(req.user)
})
router.get('/users/:id/avatar' , async (req , res)=>{
    try{
        const user = await User.findById(req.params.id)

        if(!user || !user.avatar){
            throw new Error()
        }

        res.set('Content-Type' , 'image/png')
        res.send(user.avatar)
    }catch(e){
      res.status(404).send()  
    }
})
router.post('/users/me/cover',auth , upload.single('cover') ,async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({width:1280 , height:760 }).png().toBuffer()
    req.user.cover = buffer
    await req.user.save()
   res.send()
   console.log('5');
}, (error , req , res , next)=>{
    console.log('Game Over');
    console.log(error);
    res.status(400).send({error: error.message})
})

router.delete('/users/me/cover',auth , upload.single('cover') ,async (req, res) => {
    req.user.cover = undefined
    await req.user.save()
   res.send()
})

router.get('/users/:id/cover' , async (req , res)=>{
    try{
        const user = await User.findById(req.params.id)

        if(!user || !user.cover){
            throw new Error()
        }

        res.set('Content-Type' , 'image/png')
        res.send(user.cover)
    }catch(e){
      res.status(404).send()  
    }
})

module.exports = router