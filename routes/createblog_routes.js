const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Blog = require('../models/blog_models');
const {createblog, readblog} = require('../controllers/createblog_controllers')

const blogRouter = express.Router();


blogRouter.use(bodyParser.json());

blogRouter.route('/')
  .get(readblog)
  .post(createblog)
  .put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported on blog');
  
  })
  
  .delete((req,res,next)=>{
    Blog.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));  
  });

  blogRouter.route('/:blogId')
    .get((req,res,next)=>{
        Blog.findById(req.params.blogId)
      .then((blog) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(blog);
      }, (err) => next(err))
      .catch((err) => next(err));
  })
  
    .post((req,res,next)=>{
    res.statusCode=403;
    res.end('POST opration not supported on /todos/'
    + req.params.blogId);
  
  })
    .put((req,res,next)=>{
        Blog.findByIdAndUpdate(req.params.blogId, {
        $set: req.body
    }, { new: true })
    .then((blog) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(blog);
    }, (err) => next(err))
    .catch((err) => next(err));
  
  })
  
    .delete((req,res,next)=>{
        Blog.findByIdAndRemove(req.params.blogId)
      .then((resp) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(resp);
      }, (err) => next(err))
      .catch((err) => next(err));
  });
  
  module.exports=blogRouter;