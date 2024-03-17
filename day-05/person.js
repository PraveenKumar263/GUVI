class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  getGender() {
    return this.gender;
  }

  setGender(gender) {
    this.gender = gender;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

}


var p1 = new Person('Mark', 30, 'male');
console.log(p1.greet());
console.log(p1.getGender());
p1.setAge(23);
console.log(p1.getAge());
