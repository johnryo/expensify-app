//
// Object destructuring
//

// const person = {
//   name: 'John',
//   age: 64,
//   location: {
//     city: 'Nome',
//     temp: 0
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && typeof temperature === 'number') {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// Challenge
// const book = {
//   title: 'The Go-Giver',
//   author: 'Bob Burg',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

const address = ['5432 Hidden Lane', 'Portland', 'Oregon', '97140'];
const [, city, state = 'Hawaii'] = address;
console.log(`You are in ${city}, ${state}!`);

// Challenge
const item = ['Coffee (hot)', '$3.00', '$3.75', '$4.25'];
const [itemHotCoffee, smallHotCoffee, mediumHotCoffee] = item;
console.log(`A medium ${itemHotCoffee} costs ${mediumHotCoffee}.`);
