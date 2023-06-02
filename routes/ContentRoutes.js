const express = require('express');
const Content = require('../models/Content');
const ContentRoutes = express.Router()
const Tags = require('../models/Tags');
ContentRoutes.get('/', async (req, res) => {
    console.log('get all content')
    try{
        // const tagsData = await Tags.find()
        const data = (await Content.find().sort({ date: -1 })).splice(0, 25);
        console.log(data)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
ContentRoutes.post('/post-content', async (req, res) => {
    console.log('postContent')
    const data = new Content(req.body)
    try{
    const tagsData = await Tags.find()
    // checking to see if tag is in the title or body
    tagsData.filter(tag => {
        if (data.title.toLowerCase().includes(tag.tag_name) || data.body.toLocaleLowerCase().includes(tag.tag_name) ) {
            data.tags.push({tag_name: tag.tag_name})
        }
    })
    }
    catch(error){ 
        
     }
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
ContentRoutes.get('/find/:text', async (req, res) => {
    console.log('find by')
    console.log(req.params.text)
    const text = req.params.text
    const dataFound = []
    try{
        const data = await Content.find()
        data.filter(content => {
                if (content.title.toLowerCase().includes(text.toLowerCase())) {
                    if(!dataFound.includes(content.title))
                        console.log(content.title)
                        dataFound.push(content)
                }
                else if (content.body != null){
                    if (content.body.toLowerCase().includes(text.toLowerCase())) {
                        if(!dataFound.includes(content.body))
                            dataFound.push(content)
                }}
            }) 
        res.json(dataFound)       
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = ContentRoutes ;
// export default ContentRoutes
