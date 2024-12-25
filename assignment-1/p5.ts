{
    //

    interface Car {
        make: string;
        model: string;
        year: number;
    }

    interface Driver {
        name: string;
        licenseNumber: number;
    }

    const car1: Car = {
        make: "audi",
        model: "audi r8",
        year: 2015
    }

    const driver1: Driver = {
        name: "m",
        licenseNumber: 1126
    }

    const combine = (car: Car, driver: Driver): Car & Driver => {
        return {...car, ...driver}
    }

    console.log(combine(car1, driver1));


    //
}