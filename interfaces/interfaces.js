// interface Vehicle {
//     name: string,
//     year: number,
//     broken: boolean;
// }
;
var oldCivicNextExx = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name ".concat(this.name);
    }
};
var printVehicleNextExx = function (vehicle) {
    console.log(vehicle.summary);
};
printVehicleNextEx(oldCivicNextExx);
