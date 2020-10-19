import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const blogSchema = new Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    

    },


}, {
    timestamps: true
});

var Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;