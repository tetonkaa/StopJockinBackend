const express = require('express')
const router = express.Router()
const db = require('../models')
const jwt = require('jwt-simple')
const config = require('../config/config')
const Comment = require('../models/comment')


function isAuthenticated(req, res, next){
    if(req.headers.authorization){
        next()
    } else {
        console.log(req.headers)
        res.sendStatus(401)
    }
}

router.post('/', async (req, res) => {
    const createdComment = await Comment.create(req.body)
    res.json({
        comment: createdComment,
    })
    
})

// index route
router.get('/', async (req, res) => {
    const allComments = await Comment.find({})
    res.json(allComments)
})


//user comment create route


router.post('/', async (req, res) => {
    const createdComment = await Comment.create(req.body)
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    createdComment.user = decoded.id
    createdComment.save()
    res.json(createdComment)
})



//show user comment
// router.get("/show", async (req, res) => {
//     const token = req.headers.authorization
//     const decoded = jwt.decode(token, config.jwtSecret)
//     const comment = await db.Comment.findOne({"user": decoded.id})
//     res.json(comment);
// })

module.exports = router