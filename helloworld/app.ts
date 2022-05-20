let message: string = 'Hello, TypeScript!';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);

// Arrow function
const isHappy = (food: string): boolean => {
  let happy: boolean;
  
  food === 'Cake' ? happy = true : happy = false;

  return happy;
}