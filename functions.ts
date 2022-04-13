// Rest parameters: allows a function to accept zero or more arguments of the specified type
// Prefix the parameter name with three dots
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => total += num);
  return total;
}

console.log(getTotal()); // 0
console.log(getTotal(10, 20, 30)); // 60