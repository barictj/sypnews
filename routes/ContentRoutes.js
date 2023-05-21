"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { Model } = require("mongoose");
const Content = require('../models/Content');
const ContentRoutes = express_1.default.Router();
ContentRoutes.get('/', async (req, res) => {
    try {
        const data = await Content.find().sort({ date: -1 });
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
ContentRoutes.post('/post-content', async (req, res) => {
    console.log('postContent');
    const data = new Content(req.body);
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
module.exports = ContentRoutes;
// export default ContentRoutes
