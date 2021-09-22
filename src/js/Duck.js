import Animal from './Animal';

class Duck extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }

  speak() {
    console.log(`${this.name} ??`);
  }
}

export default Duck;
