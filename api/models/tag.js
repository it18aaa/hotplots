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
    articles: [{
        type: String,
        ref: 'Article'
    }]
});

tagSchema.statics.untagArticle = async function (name, articleid) {

    var query = this.findOne({
        name: name
    })

    await query.exec()
        .then(existing => {
            console.log(existing);
            if (existing.articles.includes(articleid)) {
                var i = existing.articles.indexOf(articleid);
                existing.articles.splice(i, 1)
                existing.article_count--;
                return existing.save();
            } else {
                throw "article not tagged " + name;
            }
        });
}

tagSchema.statics.tagArticle = async function (name, articleid) {

    var query = this.findOne({
        name: name
    });

    await query.exec()
        .then(existing => {
            if (existing) {
                if (!existing.articles.includes(articleid)) {
                    existing.articles.push(articleid);
                    existing.article_count++;
                    return existing.save();
                } else {
                    throw "article already tagged";
                }
            } else {
                newTag = new this({
                    name: name,
                    article_count: 1,
                    articles: [articleid]
                });
                return newTag.save();
            }
        })
        .catch(error => {
            throw error;
        });;
}

//compile schema
mongoose.model("Tag", tagSchema);