import Animal from './Animal';

class Duck extends Animal {
  constructor(name, image, age) {
    super(name, image, 2);
    this.age = age;
  }
}

export default Duck;
