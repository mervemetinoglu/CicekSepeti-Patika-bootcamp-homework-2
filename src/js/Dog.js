import Animal from './Animal';

class Dog extends Animal {
  constructor(name, image, age) {
    super(name, image, 4);
    this.age = age;
  }
}

export default Dog;
