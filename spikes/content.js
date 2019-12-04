var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


let input = {};
if (process.argv.length > 4) {
    input.type = process.argv[2];
    input.title = process.argv[3];
    input.body = process.argv[4];

    db.once('open', function () {

        var contentSchema = new mongoose.Schema({
            title: String,
            body: String,
            type: String,
            author: [mongoose.Schema.ObjectID],
            parent: mongoose.Schema.Types.ObjectID,
            child: [mongoose.Schema.Types.ObjectId]
        });

        // compile the schema
        var Content = mongoose.model('Content', contentSchema);


        var b = new Content();

        b.title = input.title;
        b.body = input.body;
        b.type = input.type;
        b.save(function (err, contents) {
            if (err) return console.error(err);
//            console.log(contents);
        });
    });

    Content.find((err, contents) => {
        if (err) return console.error(err);
        console.log(contents);
    });
    

} else {
    console.log("Usage: ...  <type>  <title> <content body> <parentID>");
}



