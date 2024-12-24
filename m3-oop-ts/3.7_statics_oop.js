{
    // static
    var Counter_1 = /** @class */ (function () {
        function Counter() {
        }
        Counter.prototype.increment = function () {
            return (Counter.count = Counter.count + 1);
        };
        Counter.decrement = function () {
            return (Counter.count = Counter.count - 1);
        };
        Counter.count = 0;
        return Counter;
    }());
    var instance1 = new Counter_1();
    console.log(instance1.increment());
    console.log(instance1.increment());
    var instance2 = new Counter_1();
    console.log(instance2.increment());
    // const instance3 = new Counter();
    console.log(Counter_1.decrement()); // if use static decrement
    //
}
