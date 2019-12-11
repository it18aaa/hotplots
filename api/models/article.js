var mongoose = require('mongoose');

// article schema defined
var articleSchema = new mongoose.Schema({
    title: String,
    author: String,
    img: String,
    date: Date,
    body: String
});

// compile schema
mongoose.model("Article", articleSchema);

console.log('stuff\'s happening');

