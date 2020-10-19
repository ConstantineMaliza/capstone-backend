const Blog = require('../models/blog_models');

export const createblog = (req,res,next)=>{
    Blog.create(req.body)
     .then((blog) => {
        console.log('Blog Created ', blog);
        res.statusCode = 200;
        // res.setHeader('Content-Type', 'application/json');
        res.json(blog);
    }, (err) => next(err))
    .catch((err) => next(err));
 }

 export const readblog = (req, res, next) =>{
    Blog.find({})
    .then((blogs) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(blogs);
    }, (err) => next(err))
    .catch((err) => next(err));
 }

