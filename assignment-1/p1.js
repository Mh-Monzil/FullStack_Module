{
    //
    var squareNumber = function (value) {
        if (typeof value === 'string') {
            return value.length;
        }
        else if (typeof value === 'number') {
            return value * value;
        }
    };
    console.log(squareNumber(10));
    console.log(squareNumber("hello"));
    //
}
