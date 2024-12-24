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
    // polymorphism
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.getSleep = function () {
            console.log("I am sleeping for 8 hours per day");
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Student.prototype.getSleep = function () {
            console.log("I am sleeping for 6 hours per day");
        };
        return Student;
    }(Person));
    var Developer = /** @class */ (function (_super) {
        __extends(Developer, _super);
        function Developer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Developer.prototype.getSleep = function () {
            console.log("I am sleeping for 4 hours per day");
        };
        return Developer;
    }(Person));
    var getSleepingHours = function (param) {
        param.getSleep();
    };
    var person1 = new Person();
    var person2 = new Student();
    var person3 = new Developer();
    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);
    //
}
