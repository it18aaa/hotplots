var mongoose = require('mongoose');



var User = mongoose.model('User', new mongoose.Schema({ name: String }));

var cosmo = new User({name: "cosmo wilson"});



mongoose.connect('mongodb://localhost:27017/myApp', { useNewUrlParser: true })
    .then( ()=> {
        console.log(`connection established`);
        cosmo.save();
    }) 
    .catch(error => {
        console.log(`Oooo caught an error: ${error}`);
    });

mongoose.connection.on('error', error => {
    console.log(`There was a problem with the mongoose connection error: ${error}`);
})


