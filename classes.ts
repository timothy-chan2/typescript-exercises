// Access modifiers: private, protected, public (default)
// private = can access only within the class
// protected = can access within the class and subclasses (that inherits the class)
// readonly = class property cannot be reassigned a new value once a value is set
class Person {
  constructor(protected ssn: string, private firstName: string, private lastName: string, readonly birthDate: Date) {
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthDate = birthDate;
  }

  getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person('153-07-3130', 'John', 'Doe', new Date(1990, 12, 25));