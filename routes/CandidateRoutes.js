const express = require('express');
const { Model } = require("mongoose");
const Candidates = require('../models/Candidates');
const CandidateRoutes = express.Router()
CandidateRoutes.get('/get-all-candidates', async (req, res) => {
    try{
        const data = await Candidates.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
CandidateRoutes.post('/post-candidates', async (req, res) => {
    const data = new Candidates(req.body)   
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
CandidateRoutes.post('/update-candidate/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try{
        const dataToSave = await Candidates.findByIdAndUpdate(id, data);
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})
CandidateRoutes.get('/delete-candidate/:id', async (req, res) => {
    try{
        const data = await Candidates.findByIdAndRemove(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = CandidateRoutes