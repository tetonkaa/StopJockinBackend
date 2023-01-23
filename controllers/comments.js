const express = require('express')
const router = express.Router()
const db = require('../models')
const jwt = require('jwt-simple')
const config = require('../config/config')
const Comment = require('../models/comment')



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

module.exports = router