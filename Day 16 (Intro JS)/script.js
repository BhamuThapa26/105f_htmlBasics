
// var cup = "coffee" // string
// console.log(cup)

// var bag = "books" //string
// console.log(bag)

// var numberOfCandles = '5' //intger
// console.log(numberOfCandles)

// var Nepalislandlockcountry = 'True' //boolean c 
// console.log(Nepalislandlockcountry)

// var name1= "Bhamu Thapa"
// console.log(name1)

//Array
// var names = ['Bhamu Thapa', 'Puspa Thapa', 'Punam Thapa', 'Sarita Thapa', '45']
// // names.pop() //removes last element (word/sentence etc.) from array.
// // names.shift()  //removes first element from array.
// // names[0]= 'Bhim Thapa' //replaces first element of array.
// names.unshift('Indra Bahadur Thapa') //adds element at the beginning of array.
// names.push('Ram Thapa') //adds element at the end of array.
// console.log(names)
// // console.log(names.length)
// // console.log(names[4])


//Object

var person = {
    name: 'Bhamu Thapa',
    age: 36,
    address: 'Dhanusha'
}
//object मा property को values change गर्नु पर्दा ।
person.name = 'Puspa Thapa'
person.age = 14
person.address = 'Kathmandu'
delete person.address //deletes address property from object. delete word use garne.

console.log(person)

// console.log(person.name)
// console.log(person.age)
// console.log(person.address)

// //or (जुन use गर्दा पनि हुन्छ ।)

// console.log(person['name'])
// console.log(person['age'])
// console.log(person['address'])