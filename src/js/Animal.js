class Animal {
  constructor(name, image, numberOfLegs) {
    this.name = name;
    this.image = image;
    this.numberOfLegs = numberOfLegs;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

export default Animal;
