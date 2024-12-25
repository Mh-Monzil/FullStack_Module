{
    //
    var addNumber = function (mixedData) {
        var total = 0;
        for (var i = 0; i < mixedData.length; i++) {
            if (typeof mixedData[i] === "number") {
                total = total + mixedData[i];
            }
        }
        return total;
    };
    console.log(addNumber([1, 'two', 3, 'four', 5]));
    //
}
