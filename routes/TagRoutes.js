const express = require('express');
const { Model } = require("mongoose");
const Tags = require('../models/Tags');
const TagRoutes = express.Router()
TagRoutes.get('/get-all-tags', async (req, res) => {
    console.log('get all content')
    try{
        const data = await Tags.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

TagRoutes.post('/post-tags', async (req, res) => {
    console.log('post tag')
    const data = new Tags(req.body)
    
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
module.exports = TagRoutes