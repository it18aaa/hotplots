var mongoose = require('mongoose');

var tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    article_count: {
        type: Number,
        default: 0,
        required: true
    },
    articles: {
        type: [String]        
    }
});

//compile schema
mongoose.model("Tag", tagSchema);

