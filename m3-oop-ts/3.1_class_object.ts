{
  //class and object

  // oop - class
  class Animal {
    //parameter properties
    constructor(public name: string, public age: number) {}

    showName() {
      console.log(`The animal is ${this.name}`);
    }

    showAge() {
      console.log(`The ${this.name} age is ${this.age}`);
    }
  }

  const dog = new Animal("German Shepard", 3);
  const cat = new Animal("Persian Cat", 1);
  dog.showName();
  cat.showAge();

  //
}
