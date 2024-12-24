{
    // abstraction

    //idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    //real implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`I am starting the car`);
        }
        stopEngine(): void {
            console.log(`I am stopping the car`);
        }
        move(): void {
            console.log(`I am moving the car`);
        }
    }

    const audiCar = new Car1();
    audiCar.startEngine();


    //abstract class

    //idea
    abstract class Car2  {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
    }

    //real implementation
    class hondaCar extends Car2 {
        startEngine(): void {
            console.log(`I am starting the car`);
        }
        stopEngine(): void {
            console.log(`I am stopping the car`);
        }
        move(): void {
            console.log(`I am moving the car`);
        }
    }

    const hondaCar1 = new hondaCar();
    hondaCar1.move()





    //
}