import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config'
import signupRoutes from './routes/signup_routes';
import blogRoutes from './routes/createblog_routes';


const mongoose = require('mongoose');
const Blog = require('./models/blog_models');
const url = 'mongodb://localhost:27017/capstone';
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());

app.use(signupRoutes);
app.use('/blog', blogRoutes);

app.get('/', (req, res) => {
    res.end("hello world");
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})





