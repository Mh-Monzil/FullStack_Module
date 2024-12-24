{
  //oop - inheritance

  //parent
  class Parent {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}

    getSleep(numOfHour: number) {
      console.log(`${this.name} will sleep for ${numOfHour}`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Parent {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string
    ) {
        super(name, age, address)
    }

    takeClass(numOfClass: number) {
      console.log(
        `${this.name} who is a ${this.designation} will take ${numOfClass} hours`
      );
    }
  }

  const student1 = new Student("S", 20, "dhaka");
  const teacher1 = new Teacher("T", 20, "dubai", "lecturer");


  student1.getSleep(10)
  teacher1.getSleep(20)

  //
}
