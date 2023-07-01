const express = require('express');
const Content = require('../models/Content');
const ContentRoutes = express.Router()
const Tags = require('../models/Tags');


ContentRoutes.get('/', async (req, res) => {

    //var to gather all the data
    let readyData = []
    try{
        const cnnData = (await Content.find({source: 'cnn' }).sort({date_published: -1}).skip(0).limit(45))
        const politicoData = (await Content.find({source: 'politico' }).sort({date_published: -1}).skip(0).limit(45))
        const nbcNewsData = (await Content.find({source: 'nbcnews' }).sort({date_published: -1}).skip(0).limit(45))
        for(let i = 0; i < 25; i++){
            readyData.push(cnnData[i])
            readyData.push(politicoData[i])
            readyData.push(nbcNewsData[i])
        }
        const readyToSort = readyData.sort((a, b) => new Date(b.date_published).valueOf() - new Date(a.date_published).valueOf())
        const sortedData = readyToSort.sort((a, b) => new Date(b.date_published).valueOf() - new Date(a.date_published).valueOf())
        const tags = (await Tags.find())
        // sortedData = sortedData.limit(75)
        res.json({data:readyData, tags: tags, cnnlength: cnnData.length , pollength:politicoData.length, nbclength:nbcNewsData.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
ContentRoutes.post('/post-content', async (req, res) => {
    const data = new Content(req.body)
    try{
    const tagsData = await Tags.find()
    // checking to see if tag is in the title or body
    tagsData.filter(tag => {
        if (data.title.toLowerCase().includes(tag.tag_name.toLowerCase()) || data.body.toLocaleLowerCase().includes(tag.tag_name.toLowerCase()) ) {
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
    try{
        const data = await Content.findByIdAndRemove(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//for page 2 and beyond of home page
ContentRoutes.get('/get-more/:number', async (req, res) => {
    const startNumber = req.params.number
    const data = (await Content.find().sort({date_published: -1}).skip(startNumber).limit(50))    
    res.json({data: data})
    
})

//by_source with itemskip
ContentRoutes.get('/source/:source/:pageNumber', async (req, res) => {
    const sourceRequested = req.params.source
    let pageNumber = req.params.pageNumber
    let itemSkip = pageNumber * 24 - 24
    const data = (await Content.find({source: sourceRequested}).sort({date_published: -1}).skip(itemSkip).limit(24))
    const count = (await Content.find({source: sourceRequested}).count())
    res.json({data: data, pageNumber: pageNumber, count: count})
})

//for deletion gettin all the data
ContentRoutes.get('/for_delete', async (req, res) => {
    try{
        // const tagsData = await Tags.find()
        const data = (await Content.find())
        const sortedData = data.sort((a, b) => new Date(a.date_published).valueOf() - new Date(b.date_published).valueOf())
        // sortedData = sortedData.limit(75)
        res.json({data: sortedData, number: sortedData.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
ContentRoutes.get('/for_all', async (req, res) => {
    try{
        // const tagsData = await Tags.find()
        const data = (await Content.find())
        const sortedData = data
        // sortedData = sortedData.limit(75)
        res.json({data: sortedData, number: sortedData.length})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//search function
ContentRoutes.get('/search/:text/:pageNumber', async (req, res) => {
    try{
        
        const text = req.params.text
        let pageNumber = req.params.pageNumber
        const query = { $text: { $search: `${text}` } };
        let itemSkip = pageNumber * 24 - 24
        // Return only the `title` of each matched document
        const projection = {
        //   id: 0,
        _id: 3,
          title: 1,
          body: 2,
          score: { $meta: "textScore" },
          url: 4,
            date_published: 5,
            image:5,
            source: 6,

          
        };

        const data = (await Content.find(query, projection).sort({score: {$meta: "textScore"}}).skip(itemSkip).limit(24))
        const count = (await Content.find(query, projection).count())
        res.json({data: data, pageNumber: pageNumber, count: count})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }

})

module.exports = ContentRoutes ;
// export default ContentRoutes

