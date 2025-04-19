db.rewards_and_recognition.insertMany([
    {
        name: {
            first_name: "Tanay",
            last_name: "Sahajwalla"
        }
    },
    {
        contrips :[
            "Fortran",
            "ALGOL",
            "Backus Naur Form",
            "FD"
        ]
    },
    {
        recognition :[
            {
                award: "Dowell Award",
                year: 1990,
                by: "IEEE Computer Society"
            },
            {
                award: "Draperz Award",
                year: 1991,
                by:"National Academy Engg"
            }
        ]
    }
    
])
// '0': ObjectId('6736e0bb811d5be3e442f807'),
//     '1': ObjectId('6736e0bb811d5be3e442f808'),
//     '2': ObjectId('6736e0bb811d5be3e442f809')