// Primative types (string, number, boolean, null, undefined, symbol)
let counter: number;
let firstName = 'John'; // Infer to type string
const active = true; // Infer to type boolean

// Object types (array)
let names = ['John', 'Jane', 'Peter', 'David', 'Mary']; // Infer to type string[]
let items = [0, 1, null, 'Hi']; // Infer to type (number | string)[]

// Object types (object)
let person: {
  name: string;
  age: number
};

person = {
  name: 'John',
  age: 25
};

// Object types (function)
let greeting : (name: string) => string;

greeting = function (name: string) {
  return `Hi ${name}`;
};

function increment(counter: number) : number {
  return counter++;
}