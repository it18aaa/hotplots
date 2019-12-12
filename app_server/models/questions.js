var data = [
    {
        id: 0,
        parent: 0,
        title:"My Garden is rubbish, how do I fix it",        
        date: new Date('December 17, 2014 09:00:00'),
        modified: new Date('December 17, 2017 09:00:00'),
        body: "My garden is a nondescript miniture meadow, how can I liven it up?",
        answered: false,
        rating : 3,
        voted: [1,2,3,6,9],        
        answers: [3,4,8,9]
            {
                id: 0,
                author: 3,
                body: "It is, what can I say",
                date: new Date('December 17, 2014 09:00:00'),
                modified: new Date('December 17, 2017 09:00:00'),
                rating: -4,
                voted: ["dave", "jimbo"]
            },
            {
                id: 1,
                author: 2,
                body: "It is, what can I say?   Perhaps start by digging out some borders and planting flowers.  Muddy areas you can put drainage, perhaps some gravel?",
                date: new Date('December 17, 2014 09:00:00'),
                modified: new Date('December 17, 2017 09:00:00'),
                rating: 3,
                voted: [1,2,4,9]
            }           
        ]
    },
    {
        id: 1,
        title:"Waterlogged border, clay soil",        
        date: new Date('December 17, 2014 09:00:00'),
        modified: new Date('December 17, 2017 09:00:00'),
        body: "The border at the bottom of my garden gest waterlogged, what can I do about it?  the top soil is decent stuff that I topped up last year, but underlying soil is very clay like.  Can anybody suggest any remedies?  Any help much appreciated",
        answered: false,
        rating : 17,
        voted: ["dave", "jimbo", "sarah", "bean"],
        answers: [
            {
                id: 0,
                author: 3,
                body: "Good question! ",
                rating: -4,
                voted: ["dave", "jimbo"]
            },
            {
                id: 1,
                author: 2,
                body: "It is, what can I say?   Perhaps start by digging out some borders and planting flowers.  Muddy areas you can put drainage, perhaps some gravel?",
                rating: 3,
                voted: [1,2,4,9]
            }           
        ]
    },
];

module.exports = { data };