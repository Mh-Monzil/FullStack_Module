{
    //
    var Animal = /** @class */ (function () {
        function Animal(name) {
        }
        return Animal;
    }());
    var Cat_1 = /** @class */ (function () {
        function Cat(name) {
        }
        return Cat;
    }());
    var Dog = /** @class */ (function () {
        function Dog(name) {
        }
        return Dog;
    }());
    var isCat = function (animal) {
        if (animal instanceof Cat_1) {
            return "yes it's a cat";
        }
        else {
            return "no, it's not a cat";
        }
    };
    var cat = new Cat_1("kitty");
    console.log(isCat(cat));
    //
}
