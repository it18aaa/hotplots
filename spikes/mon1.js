var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    // connected


    //  Schema defines document data layout
    var kittySchema = new mongoose.Schema({
        name: String
    });

    kittySchema.methods.speak = function () {
        var greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name";
        console.log(greeting);
    };

    // compile schema into a model
    var Kitten = mongoose.model('Kitten', kittySchema);

    var fluffy = new Kitten({ name: "fluffy" });
    fluffy.speak();

    fluffy.save(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    });

    Kitten.find(function(err, kittens) {
        if(err) return console.error(err);
        console.log(kittens);
    });
});

