var mongoose = require('mongoose');

var Article = mongoose.model('Article');
var Tag = mongoose.model('Tag');

var sendJsonResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
}

// data required
// articleid
// tag
// computed - article-count


module.exports.tagArticle = function (req, res) {

    // TODO: Validation?

    name = req.body.tag.trim();
    articleid = req.body.articleid;
    newTag = { name: name };

    // does tag exist,
    //    if so push articlid into artciles array
    // otherwise create tag    

    if (name && articleid) {
        Tag.findOne(newTag)
            .exec()
            .then(existingTag => {
                if (existingTag) {
                    if (!existingTag.articles.includes(articleid)) {
                        existingTag.articles.push(articleid);
                        existingTag.article_count++;
                        existingTag.save()
                            .then(sucess => {
                                sendJsonResponse(res, 200,
                                    { "message": "Tag: updated" });
                            });
                    } else {
                        throw "article already tagged";
                    }
                } else {
                    newTag = new Tag({
                        name: name,
                        article_count: 1,
                        articles: [articleid]
                    });
                    newTag.save()
                        .then(success => {
                            sendJsonResponse(res, 200,
                                { "message": "Tag: " + name + " created" });
                        });
                }
            })
            .catch(error => {
                sendJsonResponse(res, 400,
                    { "message": error });
            });

    } else {
        sendJsonResponse(res, 200, { "message": "two data items required" });
        console.log('error adding article to tag')
        console.log(tag);
        console.log(articleid);

    }

    //    sendJsonResponse(res, 200, { "message": "endpoint test ok" });
}

module.exports.untagArticle = function (req, res) {

    // data required
    // articleid
    // tag
    // computed - article-count

    req.body.
        sendJsonResponse(res, 200, { "message": "endpoint test ok" });
}