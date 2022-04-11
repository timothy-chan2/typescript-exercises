// Primative types (string, number, boolean, null, undefined, symbol)
let counter: number;
let firstName = 'John'; // Infer to type string
const active = true; // Infer to type boolean

// string literal types and type alias
type acceptedMouseEvents = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent: acceptedMouseEvents;
mouseEvent = 'click'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'mouseover'; // compiler error

// Object types (array)
let names = ['John', 'Jane', 'Peter', 'David', 'Mary']; // Infer to type string[]
let items = [0, 1, null, 'Hi']; // Infer to type (number | string)[]

// Tupple: An array with a fixed number of elements whose types are known
// Optional tupple elements specified with ?
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

// Object types (object)
let employee: object;

let person: {
  name: string;
  age: number;
};

person = {
  name: 'John',
  age: 25
};

// Enum: (enumerated type) A group of named constant values that are closely related
enum ApprovalStatus {
  draft,      // By default can also refer to it by 0
  submitted,  // By default can also refer to it by 1 and so on
  approved,
  rejected
};

const request =  {
  id: 1,
  status: ApprovalStatus.approved,
  description: 'Please approve this request'
};

// Object types (function)
let greeting : (name: string) => string;

greeting = function (name: string) {
  return `Hi ${name}`;
};

function increment(counter: number) : number {
  return counter++;
}

// void type: When a function doesn't return a value
function log(message): void {
  console.log(message);
}

// never type contains no value and you do not need to write out its type
// Used when a function always throws an error or contains an indefinite loop
let neverOccur = () => {
  throw new Error('Never!');
}