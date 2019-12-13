var answers = [
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
];


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
        tags: ['lawn','maintenance'],       
        answers: answers
    },
    {
        id: 1,
        title:"Waterlogged border, clay soil",     
        user: 'fred titmus',   
        date: new Date('December 17, 2014 09:00:00'),
        modified: new Date('December 17, 2017 09:00:00'),
        body: "The border at the bottom of my garden gest waterlogged, what can I do about it?  the top soil is decent stuff that I topped up last year, but underlying soil is very clay like.  Can anybody suggest any remedies?  Any help much appreciated",
        answered: false,
        rating : 17,
        voted: ["dave", "jimbo", "sarah", "bean"],
        answers: answers
    },
    {
        id: 2,
        title:"Moles!",     
        user: 'Mike Christmas',   
        date: new Date('December 17, 2014 09:00:00'),
        modified: new Date('December 17, 2017 09:00:00'),
        body: "The border at the bottom of my garden gest waterlogged, what can I do about it?  the top soil is decent stuff that I topped up last year, but underlying soil is very clay like.  Can anybody suggest any remedies?  Any help much appreciated",
        answered: false,
        rating : 4,
        voted: ["dave", "jimbo", "sarah", "bean"],
        answers: answers
    },
    {
        id: 3,
        title:"Dog digging under one part of fence",     
        user: 'Mike Christmas',   
        date: new Date('December 17, 2014 09:00:00'),
        modified: new Date('December 17, 2017 09:00:00'),
        body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        answered: false,
        rating : 4,
        voted: ["dave", "jimbo", "sarah", "bean"],
        answers: answers
    },
    
    {
        id: 3,
        title:"Tomatoes aren't growing in greenhouse",     
        user: 'Bob Daniels',   
        date: new Date('December 17, 2014 09:00:00'),
        modified: new Date('December 17, 2017 09:00:00'),
        body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        answered: false,
        rating : 4,
        voted: ["dave", "jimbo", "sarah", "bean"],
        answers: answers
    },
    
    {
        id: 3,
        title:"Swamp things attacking my garden veggies!",     
        user: 'Geoffry Lebowski',   
        date: new Date('December 17, 2014 09:00:00'),
        modified: new Date('December 17, 2017 09:00:00'),
        body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        answered: false,
        rating : 4,
        voted: ["dave", "jimbo", "sarah", "bean"],
        answers: answers
    },
];


module.exports = { data };