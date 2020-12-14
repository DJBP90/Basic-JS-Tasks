const myArray = ['Hello', 'my', 'name', 'is', 'David', 'Breckon-Payne'];
const numbers = [1, 2, 3];
const numbersIterator = numbers[Symbol.iterator]();

console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());

for (const n of myArray) {
    console.log(n);


};



