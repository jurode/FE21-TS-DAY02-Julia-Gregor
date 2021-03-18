// Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price
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
//     Create a Parent Class called Vehicles
//     Define properties and methods for the super Class
//     Consider the inheritance concept
//     Define 2 other Child classes and name them Motorbikes and Trucks
//     Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula)
// var cars : Array<{
//     brand: string;
//     model: string;
//     wheels: number;
//     doors: number;
//     seats: number;
//     fuelType: string;
//     kilometers: number;
//     productionYear: number;
//     automaticGear: boolean;
//     weight: number;
//     color: string;
// }> = [];
// var trucks : Array<{
//     brand: string;
//     model: string;
//     wheels: number;
//     doors: number;
//     seats: number;
//     fuelType: string;
//     kilometers: number;
//     productionYear: number;
//     automaticGear: boolean;
//     weight: number;
//     color: string;
//     transportWeight: number;
// }> = [];
// var bikes : Array<{
//     brand: string;
//     model: string;
//     wheels: number;
//     doors: number;
//     seats: number;
//     fuelType: string;
//     kilometers: number;
//     productionYear: number;
//     automaticGear: boolean;
//     weight: number;
//     color: string;
//     maxSpeed: number;
// }> = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(brand, model, wheels, doors, seats, fuelType, kilometers, productionYear, automaticGear, weight, color) {
        this.brand = brand;
        this.model = model;
        this.wheels = wheels;
        this.doors = doors;
        this.seats = seats;
        this.fuelType = fuelType;
        this.kilometers = kilometers;
        this.productionYear = productionYear;
        this.automaticGear = automaticGear;
        this.weight = weight;
        this.color = color;
    }
    Vehicles.prototype.calcPrice = function () {
        var price = 50000 - (this.kilometers * 0.1);
        return price;
    };
    return Vehicles;
}());
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(brand, model, wheels, doors, seats, fuelType, kilometers, productionYear, automaticGear, weight, color, transportWeight) {
        var _this = _super.call(this, brand, model, wheels, doors, seats, fuelType, kilometers, productionYear, automaticGear, weight, color) || this;
        _this.transportWeight = transportWeight;
        return _this;
    }
    return Trucks;
}(Vehicles));
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(brand, model, wheels, doors, seats, fuelType, kilometers, productionYear, automaticGear, weight, color, maxSpeed) {
        var _this = _super.call(this, brand, model, wheels, doors, seats, fuelType, kilometers, productionYear, automaticGear, weight, color) || this;
        _this.maxSpeed = maxSpeed;
        return _this;
    }
    return Motorbikes;
}(Vehicles));
// import data from JSON
var vehicles = JSON.parse(cars);
var abfc = JSON.parse(trucks);
var werafe = JSON.parse(bikes);
