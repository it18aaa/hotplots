// articles model
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
        img: '2.jpg',
        body:`So looking at the collections we’ve decided upon, we’ll split the controllers up into
        Locations and Others. To see how this might work from a file architecture point of
        view, we can sketch out something like figure 4.3. Here the application includes the
        routes file, which in turn includes multiple controller files, each named according to
        the relevant collection`
    },
    {
        id: 3,
        title:"Football gardens for kids",
        author: "Albert Stubbins",
        date: new Date('August 23, 2019 23:00:00'),
        img: '1.jpg',
        body: `In index.js you’ll need to have the routes for the three screens in the Locations collec-
        tion, and also the About page in the Others collection. Each of these routes will also
        need a reference to the controllers. Remember that routes simply serve as a mapping
        service, taking the URL of an incoming request and mapping it to a specific piece of
        application functionality.`
    },
    {
        id: 4,
        title:"Lovely little pots",
        author: "Horace Cope",
        date: new Date('August 23, 2019 23:00:00'),
        img: '4.jpg',
        body: `In index.js you’ll need to have the routes for the three screens in the Locations collec-
        tion, and also the About page in the Others collection. Each of these routes will also
        need a reference to the controllers. Remember that routes simply serve as a mapping
        service, taking the URL of an incoming request and mapping it to a specific piece of
        application functionality.  In index.js you’ll need to have the routes for the three screens in the Locations collec-
        tion, and also the About page in the Others collection. Each of these routes will also
        need a reference to the controllers. Remember that routes simply serve as a mapping
        service, taking the URL of an incoming request and mapping it to a specific piece of
        application functionality.  In index.js you’ll need to have the routes for the three screens in the Locations collec-
        tion, and also the About page in the Others collection. Each of these routes will also
        need a reference to the controllers. Remember that routes simply serve as a mapping
        service, taking the URL of an incoming request and mapping it to a specific piece of
        application functionality.  In index.js you’ll need to have the routes for the three screens in the Locations collec-
        tion, and also the About page in the Others collection. Each of these routes will also
        need a reference to the controllers. Remember that routes simply serve as a mapping
        service, taking the URL of an incoming request and mapping it to a specific piece of
        application functionality.  In index.js you’ll need to have the routes for the three screens in the Locations collec-
        tion, and also the About page in the Others collection. Each of these routes will also
        need a reference to the controllers. Remember that routes simply serve as a mapping
        service, taking the URL of an incoming request and mapping it to a specific piece of
        application functionality.  In index.js you’ll need to have the routes for the three screens in the Locations collec-
        tion, and also the About page in the Others collection. Each of these routes will also
        need a reference to the controllers. Remember that routes simply serve as a mapping
        service, taking the URL of an incoming request and mapping it to a specific piece of
        application functionality.  In index.js you’ll need to have the routes for the three screens in the Locations collec-
        tion, and also the About page in the Others collection. Each of these routes will also
        need a reference to the controllers. Remember that routes simply serve as a mapping
        service, taking the URL of an incoming request and mapping it to a specific piece of
        application functionality.`
    },
    {
        id: 5,
        title:"Patio cleaning the easy way",
        author: "Clive Dunn",
        date: new Date('August 30, 2018 23:00:00'),
        img: '5.jpg',
        body: `In index.js you’ll need to have the routes for the three screens in the Locations collec-
        tion, and also the About page in the Others collection. Each of these routes will also
        need a reference to the controllers. Remember that routes simply serve as a mapping
        service, taking the URL of an incoming request and mapping it to a specific piece of
        application functionality.`
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
        img: '7.jpg',
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
        img: 'screentrees.jpg',
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