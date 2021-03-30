// console.log("ssadas");
// const person ={
//     name:'jalme',
//     age:26,
//     location:{
//         city:'kemel',
//         temp:92
//     }
// };

// const {name:nome='aaaaa',age} = person;

// console.log(`${nome}`);

// const {city,temp:temperature} = person.location

// if (city && temperature){
//     console.log(`${temperature}`)
// }



// const book={
//     title:'capitao da mosca',
//     author:'Kyan daleste',
//     publisher:{
//         name:'penguinz0'
//     }
// };

// const {name:publisherName='SELF PUBLISHED'} = book.publisher;

// console.log(`o safadao é o ${publisherName}`)

const address= ['desembargador pedro','piladeifia','pensilvania','203'];

const [, ,state='nova yorik'] = address;
console.log(state);

const item = ['cafézinho', 'dois reais', 'dois e cinquenta','triquenta'];
const [itemName, , , giga] = item;

console.log(`A medium ${itemName} costs ${giga}`);