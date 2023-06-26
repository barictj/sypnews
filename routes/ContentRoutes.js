const express = require('express');
const Content = require('../models/Content');
const ContentRoutes = express.Router()
const Tags = require('../models/Tags');
ContentRoutes.get('/', async (req, res) => {
    try{
        // const tagsData = await Tags.find()
        const data = (await Content.find().sort({date_published: -1}).skip(0).limit(100))
        // sortedData = sortedData.limit(75)
        res.json({data: data, number: data.length})
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
ContentRoutes.get('/find/:text', async (req, res) => {
    const text = req.params.text
    const dataFound = []
    const textArray = text.split(/(\s+)/).filter( e => e.trim().length > 0)
    function getUncommon(sentence, common) {
        var wordArr = sentence.match(/\w+/g),
            commonObj = {},
            uncommonArr = [],
            word, i;
    
        common = common.split(',');
        for ( i = 0; i < common.length; i++ ) {
            commonObj[ common[i].trim() ] = true;
        }
    
        for ( i = 0; i < wordArr.length; i++ ) {
            word = wordArr[i].trim().toLowerCase();
            if ( !commonObj[word] ) {
                uncommonArr.push(word);
            }
        }
    
        return uncommonArr;
    }
    const uncommon = getUncommon(text, 'the,be,to,of,and,a,in,that,have,I,it,for,not,on,with,he,as,you,do,at,this,but,his,is,by,from,they,we,say,her,she,or,an,will,my,one,all,would,there,their,what,so,up,out,if,about,who,get,which,go,me,when,make,can,like,time,no,just,him,know,take,people,into,year,your,good,some,could,them,see,other,than,then,now,look,only,come,its,over,think,also,back,after,use,two,how,our,work,first,well,way,even,new,want,because,any,these,give,day,most,us')
        try{
        const data = await Content.find()
        data.filter(content => {
                if (content.title.toLowerCase().includes(text.toLowerCase())) {
                    if(!dataFound.includes(content.title))
                        content["matched"] = 100
                        dataFound.push(content)
                }
                else if (content.body != null && content.body.toLowerCase().includes(text.toLowerCase())){
                        if(!dataFound.includes(content.id))
                            dataFound.push(content)
                }
                else{
                    let wordMatch = 0
                    uncommon.filter(word => {
                        if (content.title.toLowerCase().includes(word.toLowerCase())) {
                            if(!dataFound.includes(content.title))
                                wordMatch++
                        }
                        else if (content.body != null){
                            if (content.body.toLowerCase().includes(word.toLowerCase())) {
                                if(!dataFound.includes(content.id))
                                    wordMatch++
                        }}
                    })
                    if(wordMatch > 0){
                        let newContent = content
                        newContent["matched"] = wordMatch
                        dataFound.push(newContent.splice(0,200))
                    }
                }
            }) 
        res.json(dataFound)       
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
ContentRoutes.get('/get-more/:number', async (req, res) => {
    const startNumber = req.params.number
    const data = (await Content.find().sort({date_published: -1}).skip(startNumber).limit(50))    
    res.json({data: data})
    
})
ContentRoutes.get('/source/:source', async (req, res) => {
    const sourceRequested = req.params.source
    const data = (await Content.find({source: sourceRequested}).sort({published_date: -1}).skip(0).limit(150))
    let readyContent = []
    data.map(content => {
        if(content.source.toLocaleLowerCase() == sourceRequested.toLocaleLowerCase()){
            readyContent.push(content)
        }
    })
    res.json({readyContent})
})
ContentRoutes.get('/for_delete', async (req, res) => {
    try{
        // const tagsData = await Tags.find()
        const data = (await Content.find())
        const sortedData = data.sort((a, b) => new Date(a.date_published).valueOf() - new Date(b.date_published).valueOf()).splice(0,7500)
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


module.exports = ContentRoutes ;
// export default ContentRoutes
