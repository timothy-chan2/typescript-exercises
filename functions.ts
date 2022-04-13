// Rest parameters: allows a function to accept zero or more arguments of the specified type
// Prefix the parameter name with three dots
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => total += num);
  return total;
}

console.log(getTotal()); // 0
console.log(getTotal(10, 20, 30)); // 60

// Function overloading: establish the relationship between the parameter types and result types of a function
function add(a: number, b: number): number;
function add(a: string, b: string, c: string): string;
function add(a: any, b: any, c?: string): any {
  if (c) return a + b + c;
  return a + b;
}