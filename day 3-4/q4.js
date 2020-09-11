let students = [{
        name: "guru",
        age: "18",
        country: "India",
        hobbies: ['singing', 'watching moives', 'eating food']
    },
    {
        name: "vedant",
        age: "20",
        country: "USA",
        hobbies: ['sing', 'dance', 'fight']
    },
    {
        name: "samrudhi",
        age: "25",
        country: "russia",
        hobbies: ['study', 'reading', 'write']
    },

    {
        name: "shreays",
        age: "32",
        country: "span",
        hobbies: ['movies', 'dance', 'write']
    }
];

function displayAge(students) {
    console.log("people with the age less than 30");

    console.log("______________________________________________________________________________");
    criminals.forEach(element => {
        if (element.age < 30) {
            console.log(element);
        }

    });
}

function displayCountry(students) {
    console.log("people with country as India");

    console.log("______________________________________________________________________________");
    criminals.forEach(element => {
        if (element.country == "India") {
            console.log(element);
        }

    });
}
displayAge(students);
displayCountry(students);