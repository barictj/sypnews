const express = require('express');
const { Model } = require("mongoose");
const Content = require('../models/Content');
const ContentRoutes = express.Router()
ContentRoutes.get('/', async (req, res) => {
    console.log('get all content')
    try{
        const data = await Content.find().sort({date: -1});
        
        res.json(data.date_published.sort({date: -1}))
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
ContentRoutes.post('/post-content', async (req, res) => {
    console.log('postContent')
    const data = new Content(req.body)
    
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
//create route to get a single content and delete by id
//create route to get a single content and delete by id
ContentRoutes.get('/getone/:id', async (req, res) => {
    console.log('get single content')
    try{
        const data = await Content.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
// DELETE Content

ContentRoutes.get('/delete/:id', async (req, res) => {
    console.log('get single content')
    try{
        const data = await Content.findByIdAndRemove(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = ContentRoutes ;
// export default ContentRoutes
