var message = 'Hello, TypeScript!';
// create a new heading 1 element
var heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);
// Arrow function
var isHappy = function (food) {
    var happy;
    food === 'Cake' ? happy = true : happy = false;
    return happy;
};
