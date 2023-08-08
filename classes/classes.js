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
var Vehicle = /** @class */ (function () {
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.honk = function () {
        console.log('beep');
    };
    return Vehicle;
}());
var vehicle = new Vehicle('orange');
console.log(vehicle.color);
var Car2 = /** @class */ (function (_super) {
    __extends(Car2, _super);
    function Car2(wheels, color) {
        var _this = _super.call(this, color) || this;
        _this.wheels = wheels;
        return _this;
    }
    Car2.prototype.drive = function () {
        console.log('vroom');
    };
    Car2.prototype.startDrivingProcess = function () {
        this.drive();
        this.honk();
    };
    return Car2;
}(Vehicle));
var car = new Car2(4, 'red');
car.startDrivingProcess();
