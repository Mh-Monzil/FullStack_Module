{
    var getAddressCity = function (person) {
        var _a;
        return (_a = person === null || person === void 0 ? void 0 : person.address) === null || _a === void 0 ? void 0 : _a.city;
    };
    var person = {
        address: {
            city: "Dhaka",
            street: "road 12",
        },
    };
    console.log(getAddressCity(person));
    //
}
