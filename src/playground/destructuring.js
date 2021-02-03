// const person = {
//     name: 'Pang',
//     age: 25,
//     location: {
//         city: 'Singapore',
//         temp: 92
//     }
// };

// //ES6 DESTRUCTURING

// const {name = 'Anonymous', age } = person;

// console.log(`${name} is ${age}.`);

// const {city,temp: temperature} = person.location

// if (city && temperature) {
// console.log(`It's ${temperature} farenheit
// in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName="Self-Published"} = book.publisher;

// console.log(publisherName);     


//Array destructuring

const address = ['50 Beach Road' , 'Singapore' , 'West', '827322'];

const [, city, state='Singapore has no state'] = address;

console.log (`you are in ${city}, ${state}`);

//---------------------------------------------

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee='Coffee (cold)', ,mediumcost='free'] = item;

console.log(`A medium ${coffee} costs ${mediumcost}`);