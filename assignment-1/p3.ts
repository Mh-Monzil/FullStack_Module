{
  //
  class Animal {
    constructor(public name: string) {}
  }

  class Cat extends Animal {
    constructor(name: string) {
      super(name);
    }
  }

  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
  }

  const isCat = (animal: Animal): string => {
    if (animal instanceof Cat) {
      return `yes, it's a cat`;
    } else {
      return `no, it's not a cat`;
    }
  };

  const cat = new Cat("Kitty");
  console.log(isCat(cat)); // Output: yes, it's a cat

  const dog = new Dog("Buddy");
  console.log(isCat(dog)); // Output: no, it's not a cat

  //
}
