"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const express = require('express');
const mongoose = require('mongoose');
const TagRoutes = require('./routes/TagRoutes');
// const uri = 'mongodb://127.0.0.1:27017/test';
const uri = 'mongodb+srv://stackyourprops:egYb2acoGB0YJwsq@contentdb.2wrsfg9.mongodb.net/?retryWrites=true&w=majority';
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const server = (0, next_1.default)({ dev });
const handle = server.getRequestHandler();
//impooort the routes
const ContentRoutes = require('./routes/ContentRoutes');
const bodyParser = require('body-parser');
const nocache = require('nocache');
const Content = require('./models/Content');
// write a function to connect to the mongodb database using mongoose and check for errors
const db = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 80000, maxIdleTimeMS: 80000 })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err, 'error'));
server.prepare().then(() => {
    // collection.createIndex({ title: "text", body: "text" })
    const app = express();
    app.disable('view cache');
    app.use(nocache());
    app.set('etag', false);
    app.use(express.json());
    app.use(express.urlencoded({ extended: true })); // Uses URL encoded query strings
    // All your routes will be listed under `/api/*`
    console.log('server is running');
    app.use('/api/content-routes', ContentRoutes);
    app.use('/api/tag-routes', TagRoutes);
    app.all('*', (req, res) => {
        return handle(req, res);
    });
    // listen on the port specified
    app.listen(port, (err) => {
        if (err)
            throw err;
        console.log(`> Ready on localhost:${port} - env
           ${process.env.NODE_ENV}`);
    });
});
