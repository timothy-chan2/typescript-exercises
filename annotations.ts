// Primative types (string, number, boolean, null, undefined, symbol)
let counter: number;
let firstName: string = 'John';
const active: boolean = true;

// Object types (array)
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

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