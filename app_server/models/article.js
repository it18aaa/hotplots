// var mongoose = require('mongoose');

// // articles model
// var articleSchema = new mongoose.Schema({
//     title: String,
//     author: String,
//     img: String,
//     date: Date,
//     body: String
// });

// var Article = mongoose.model('article', articleSchema);


// static for now
var data = [
    {
        id: 0,
        title:"Welcome to Hot Plots!",
        author: "Biff Cosmos",
        img: 'gardening.jpg',
        date: new Date('December 17, 2014 09:00:00'),
        body: "This is a website for budding gardeners!  We are a "
    },
    {
        id: 1,
        title:"Rules",
        author: "Biff Cosmos",
        date: new Date('December 19, 2016 11:00:00'),
        img: '3.jpg',
        body:`Having a set of screens is great, but these need to relate to incoming URL s. Before we
        do any coding it’s a good idea to map this out and to get a good standard in place.
        Take a look at table 4.1. It shows a simple mapping of the screens against URL s. These
        will form the basis of the routing for our application.`
    },
    {
        id: 2,
        title:"My Patio Hacks",
        author: "Rick Astley",
        date: new Date('July 1, 2018 19:30:00'),
        img: '3.jpg',
        body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim sed faucibus turpis. Maecenas pharetra convallis posuere morbi leo urna molestie at. Et tortor consequat id porta nibh venenatis. Lobortis elementum nibh tellus molestie nunc non blandit. Curabitur vitae nunc sed velit dignissim. Et egestas quis ipsum suspendisse. Sit amet risus nullam eget felis. Gravida quis blandit turpis cursus in hac habitasse. Purus sit amet volutpat consequat mauris nunc congue nisi. Nullam vehicula ipsum a arcu cursus. Ullamcorper morbi tincidunt ornare massa eget egestas. Nec dui nunc mattis enim. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae.

        Magna sit amet purus gravida quis blandit turpis cursus. Blandit libero volutpat sed cras ornare arcu dui vivamus. Nulla facilisi etiam dignissim diam. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Mi proin sed libero enim sed faucibus turpis. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Cras pulvinar mattis nunc sed blandit. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. In massa tempor nec feugiat nisl. Sit amet massa vitae tortor. Enim ut sem viverra aliquet. Risus in hendrerit gravida rutrum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Convallis a cras semper auctor neque. Sit amet consectetur adipiscing elit ut.
        
        Duis convallis convallis tellus id interdum. Maecenas accumsan lacus vel facilisis. Ullamcorper sit amet risus nullam eget felis eget. Sed id semper risus in hendrerit. Gravida dictum fusce ut placerat orci nulla. Morbi tempus iaculis urna id volutpat lacus laoreet non. Pulvinar proin gravida hendrerit lectus. Ut consequat semper viverra nam. Id aliquet lectus proin nibh. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Aliquet sagittis id consectetur purus ut faucibus. Eget nulla facilisi etiam dignissim diam. Semper quis lectus nulla at volutpat diam ut. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Convallis aenean et tortor at risus viverra adipiscing at in. Odio morbi quis commodo odio aenean. Mauris ultrices eros in cursus turpis massa tincidunt dui.
        
        Orci eu lobortis elementum nibh tellus. Netus et malesuada fames ac turpis. Risus sed vulputate odio ut enim blandit volutpat maecenas. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Varius morbi enim nunc faucibus a pellentesque. Dolor sed viverra ipsum nunc aliquet bibendum. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Non blandit massa enim nec dui nunc mattis enim. Aliquam ultrices sagittis orci a scelerisque. Purus in massa tempor nec feugiat nisl.
        
        Fermentum iaculis eu non diam phasellus vestibulum lorem sed. At imperdiet dui accumsan sit. Integer feugiat scelerisque varius morbi. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Nec nam aliquam sem et tortor consequat id porta. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Elementum nisi quis eleifend quam adipiscing. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Luctus venenatis lectus magna fringilla urna porttitor. Odio euismod lacinia at quis risus sed vulputate. Adipiscing elit duis tristique sollicitudin nibh sit. Egestas sed sed risus pretium. Elementum nibh tellus molestie nunc non blandit massa enim. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Metus vulputate eu scelerisque felis. Varius morbi enim nunc faucibus a. Mi eget mauris pharetra et ultrices neque. Mi quis hendrerit dolor magna eget est. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum.`
    },
    {
        id: 3,
        title:"Football gardens for kids",
        author: "Albert Stubbins",
        date: new Date('August 23, 2019 23:00:00'),
        img: '',
        body: `In index.js you’ll need to have the routes for the three screens in the Locations collection, and also the About page in the Others collection. Each of these routes will also need a reference to the controllers. Remember that routes simply serve as a mapping service, taking the URL of an incoming request and mapping it to a specific piece of application functionality.`
    },
    {
        id: 4,
        title:"Lovely little pots",
        author: "Horace Cope",
        date: new Date('August 23, 2019 23:00:00'),
        img: '4.jpg',
        body: `Once upon a time, our garden was a terrible mess of mud and sporadic leftover lawnage.  Then Rick Astley suggested to me that we should use some gravel and plant pots.
        
        Plants pots?  We had a big stack of them in our garden shed.  What a lovely thought from Rick. And thus the Lovely Pots were born.  We set to work planting lots of new plants into our pots.
        
        Great stuff!`
    },
    {
        id: 5,
        title:"Patio cleaning the easy way",
        author: "Clive Dunn",
        date: new Date('August 30, 2018 23:00:00'),
        img: '5.jpg',
        body: `A solid foundation is key to the success of any endeavor, and gardening is no exception. Like humans, plants need good nutrition to grow, thrive, and be better able to fend off the effects of harmful pests and diseases. Good soil, which provides the foundation for a healthy garden, seldom occurs naturally, but has to be created. One of the best ways to enhance the fertility and consistency of the existing soil is to make your own compost.

        Nearly all native soils are deficient in nutrients and tilth (physical condition), with most being too clay, rocky, lean, or sandy, resulting in a less-than-ideal environment for plants to grow. Enhancing the soil with compost and other nutrient-rich substances such as livestock manure or worm castings will improve soil structure, texture, aeration, and its ability to retain water. It also helps with erosion control, pH balance, and healthy root development.
        
        WHAT IS COMPOST?
        In its raw form, compost consists of carbon-based brown matter such as dead leaves and small twigs, and nitrogen-based green matter such as grass clippings, fresh plant trimmings, and plant-based kitchen waste. Composting is the process of transforming this raw material through decomposition with the assistance of beneficial insects, earthworms, and microorganisms (bacteria and fungi) into a nutrient-dense, soil-like matter that’s added to existing soil.`
    },
    {
        id: 6,
        title:"Gardens and Dogs - preventing the Great Escape.",
        author: "Cliff Hanger",
        date: new Date('August 30, 2018 23:00:00'),
        img: '6.jpg',
        body: `In index.js you’ll need to have the routes for the three screens in the Locations collec-
        tion, and also the About page in the Others collection. Each of these routes will also
        need a reference to the controllers. Remember that routes simply serve as a mapping
        service, taking the URL of an incoming request and mapping it to a specific piece of
        application functionality.`
    },
    {
        id: 7,
        title:"Tidy borders",
        author: "Basil Rush",
        date: new Date('August 30, 2018 23:00:00'),
        img: '',
        body: `In index.js you’ll need to have the routes for the three screens in the Locations collec-
        tion, and also the About page in the Others collection. Each of these routes will also
        need a reference to the controllers. Remember that routes simply serve as a mapping
        service, taking the URL of an incoming request and mapping it to a specific piece of
        application functionality.`
    },
    {
        id: 8,
        title:"My favourite screening trees for medium sized gardens",
        author: "Max Power",
        date: new Date('August 30, 2018 23:00:00'),
        img: 'gravelgarden.jpg',
        body: `In index.js you’ll need to have the routes for the three screens in the Locations collec-
        tion, and also the About page in the Others collection. Each of these routes will also
        need a reference to the controllers. Remember that routes simply serve as a mapping
        service, taking the URL of an incoming request and mapping it to a specific piece of
        application functionality.`
    },
    {
        id: 8,
        title:"My Groovey Gravel Garden",
        author: "Graham Mayhem",
        img: '',
        date: new Date('December 1, 2018 13:00:00'),
        body: `In index.js you’ll need to have the routes for the three screens in the Locations collec-
        tion, and also the About page in the Others collection. Each of these routes will also
        need a reference to the controllers. Remember that routes simply serve as a mapping
        service, taking the URL of an incoming request and mapping it to a specific piece of
        application functionality.`
    },
];

module.exports = {
    data
};