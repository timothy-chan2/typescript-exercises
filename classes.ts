// Access modifiers: private, protected, public (default)
// Private = can access only within the class
// Protected = can access within the class and subclasses (that inherits the class)
class Person {
  constructor(protected ssn: string, private firstName: string, private lastName: string) {
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
  }

  getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
  }
}