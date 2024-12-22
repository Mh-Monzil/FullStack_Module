{
    //class and object
    // oop - class 
    var Animal = /** @class */ (function () {
        function Animal(name, age) {
            this.name = name;
            this.age = age;
        }
        Animal.prototype.showName = function () {
            console.log("The animal is ".concat(this.name));
        };
        Animal.prototype.showAge = function () {
            console.log("The ".concat(this.name, " age is ").concat(this.age));
        };
        return Animal;
    }());
    var dog = new Animal("German Shepard", 3);
    var cat = new Animal("Persian Cat", 1);
    dog.showName();
    cat.showAge();
    //
}
