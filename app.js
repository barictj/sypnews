import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

import { Request, Response } from 'express' 
console.log( __dirname );
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const express = require('express');
const mongoose = require('mongoose');

// const uri = 'mongodb://127.0.0.1:27017/test';

const uri = 'mongodb+srv://stackyourprops:egYb2acoGB0YJwsq@contentdb.2wrsfg9.mongodb.net/?retryWrites=true&w=majority'
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const server = next({ dev })
const handle = server.getRequestHandler()
//impooort the routes
const Routes = require('./routes/Index.js');
const bodyParser = require('body-parser')




// write a function to connect to the mongodb database using mongoose and check for errors
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err, 'error'));


server.prepare().then(() => {
  const app = express()
  app.use(express.json())   
  app.use(express.urlencoded({ extended: true })) // Uses URL encoded query strings
  // All your routes will be listed under `/api/*`
  app.use('/api/', Routes)
  app.all('*', (req,res) => {
   return handle(req, res)   
  })
  // listen on the port specified
  app.listen(port, (err) => {
   if (err) throw err
   console.log(`> Ready on localhost:${port} - env
           ${process.env.NODE_ENV}`)
   })
})
