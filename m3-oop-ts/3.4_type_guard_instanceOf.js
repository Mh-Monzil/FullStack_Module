var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    //instancesOf guard
    var Animal = /** @class */ (function () {
        function Animal(name, species) {
            this.name = name;
            this.species = species;
        }
        Animal.prototype.makeSound = function () {
            console.log("I am making sound");
        };
        return Animal;
    }());
    var Dog_1 = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, species) {
            return _super.call(this, name, species) || this;
        }
        Dog.prototype.makeBark = function () {
            console.log("I am barking");
        };
        return Dog;
    }(Animal));
    var Cat_1 = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name, species) {
            return _super.call(this, name, species) || this;
        }
        Cat.prototype.makeCry = function () {
            console.log("I am crying");
        };
        return Cat;
    }(Animal));
    var getAnimal = function (animal) {
        if (animal instanceof Dog_1) {
            animal.makeBark();
        }
        else if (animal instanceof Cat_1) {
            animal.makeCry();
        }
    };
    var dog = new Dog_1("dog brother", "Dog");
    var cat = new Cat_1("cat brother", "Cat");
    getAnimal(dog);
    getAnimal(cat);
    //
}
