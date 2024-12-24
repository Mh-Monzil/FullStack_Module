{
  //instancesOf guard

  class Animal {
    constructor(public name: string, public species: string) {}

    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark(){
        console.log("I am barking");
    }
  }


  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeCry(){
        console.log("I am crying");
    }
  }

  const isDog = (animal: Animal) => {
    return animal instanceof Dog;
  }
  const isCat = (animal: Animal) => {
    return animal instanceof Cat;
  }

  const getAnimal = (animal : Animal) => {
    if(isDog(animal)){
        animal.makeBark();
    }else if(isCat(animal)){
        animal.makeCry();
    }else {
        animal.makeSound();
    }
  }


  const dog = new Dog("dog brother", "Dog");
  const cat = new Cat("cat brother", "Cat");

  getAnimal(dog)
  getAnimal(cat)

  //
}
