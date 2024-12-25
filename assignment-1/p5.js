var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var car1 = {
        make: "audi",
        model: "audi r8",
        year: 2015
    };
    var driver1 = {
        name: "m",
        licenseNumber: 1126
    };
    var combine = function (car, driver) {
        return __assign(__assign({}, car), driver);
    };
    console.log(combine(car1, driver1));
    //
}
