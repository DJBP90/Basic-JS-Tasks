// This constant is named 'kelvin' and has an assigned value of 293
const kelvin = 293;
// This constant is named 'celsius' assigned by kelvin - 273
const celsius = kelvin - 273;
// This variable has been declared using LET meaning this value can change in its scope - The temp is calculated with the current value of celsius with an equation
let fahrenheit = celsius * (9/5) + 32;
//This let variable named newton works out the conversion from celsius to newtons
let newton = celsius * (33/100);
//This rounds down to a whole interger
newton = Math.floor(newton);

// Below this rounds down a decimal number to a whole integer
fahrenheit = Math.floor(fahrenheit);
//This is a string interpolation using back ticks
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);