var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    authorid: {
        type: String,
    },    
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    likes: {
        type: Number, 
        default: 0,
    }
});

// article schema defined
var articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    likes: {
        type: Number,        
        default: 0        
    },
    author: {
        type: String,
        required: true,
    }, 
    authorid: {
        type: String,
    },   
    picture: String,
    date: {
        type: Date,
        required: true
    },
    tags: {
        type: [String], index: true 
    },
    comment_count: {
        type: Number,
        default: 0,
        required: true
    },
    comments: [commentSchema]
});

// compile schema
mongoose.model("Article", articleSchema);
