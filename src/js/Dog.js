import Animal from './Animal';

class Dog extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

export default Dog;
