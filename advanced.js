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
// == import data from JSON
var carsArr = JSON.parse(cars);
var trucksArr = JSON.parse(trucks);
var bikesArr = JSON.parse(bikes);
for (var i = 0; i < carsArr.length; i++) {
    // container for each object (truck, motor...)
    var objContainer = document.createElement("div");
    objContainer.classList.add("card");
    objContainer.setAttribute("style", "width: 18rem;");
    document.getElementById("v-pills-all").appendChild(objContainer);
    var objImg = document.createElement("img");
    objImg.classList.add("card-img-top");
    objImg.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/3202/3202926.svg?token=exp=1616072910~hmac=041b47e59a7828df61c512f91c79c374");
    objContainer.appendChild(objImg);
    var objBody = document.createElement("div");
    objBody.classList.add("card-body");
    objContainer.appendChild(objBody);
    var objTitle = document.createElement("h5");
    objTitle.classList.add("card-title");
    var objTitleText = document.createTextNode(carsArr[i].brand + " " + carsArr[i].model);
    objTitle.appendChild(objTitleText);
    objBody.appendChild(objTitle);
    var objAttributes = document.createElement("p");
    objAttributes.classList.add("card-text", "my-0");
    var objAttributesText = document.createTextNode("Wheels: " + carsArr[i].wheels);
    objAttributes.appendChild(objAttributesText);
    objBody.appendChild(objAttributes);
    var objAttributes = document.createElement("p");
    objAttributes.classList.add("card-text", "my-0");
    var objAttributesText = document.createTextNode("Fuel: " + carsArr[i].fuelType);
    objAttributes.appendChild(objAttributesText);
    objBody.appendChild(objAttributes);
    var objAttributes = document.createElement("p");
    objAttributes.classList.add("card-text", "my-0");
    var objAttributesText = document.createTextNode("Doors: " + carsArr[i].doors);
    objAttributes.appendChild(objAttributesText);
    objBody.appendChild(objAttributes);
    var objAttributes = document.createElement("p");
    objAttributes.classList.add("card-text", "my-0");
    var objAttributesText = document.createTextNode("Kilometers: " + carsArr[i].kilometers);
    objAttributes.appendChild(objAttributesText);
    objBody.appendChild(objAttributes);
    var objButton = document.createElement("button");
    objButton.classList.add("calcPriceBtn", "btn", "btn-primary", "mt-2");
    var objButtonText = document.createTextNode("Price");
    objButton.appendChild(objButtonText);
    objBody.appendChild(objButton);
}
var priceBtns = Array.from(document.getElementsByClassName("calcPriceBtn"));
console.log(priceBtns);
var _loop_1 = function (i) {
    priceBtns[i].addEventListener("click", function () {
        Swal.fire('Price: € ' + calcPrice());
    });
    function calcPrice() {
        var fuelType;
        if (carsArr[i].fuelType = "electric") {
            fuelType = 1000;
        }
        else if (carsArr[i].fuelType = "gasoline") {
            fuelType = 600;
        }
        else if (carsArr[i].fuelType = "diesel") {
            fuelType = 700;
        }
        ;
        var calcKilometers;
        if (carsArr[i].kilometers > 300000) {
            calcKilometers = -200;
        }
        else if (carsArr[i].kilometers > 200000) {
            calcKilometers = -100;
        }
        else if (carsArr[i].kilometers > 100000) {
            calcKilometers = 100;
        }
        else if (carsArr[i].kilometers > 50000) {
            calcKilometers = 250;
        }
        else if (carsArr[i].kilometers > 20000) {
            calcKilometers = 1000;
        }
        var objCalcPrice = carsArr[i].wheels * 300 + carsArr[i].doors * 400 + carsArr[i].seats * 300 + calcKilometers + fuelType;
        return objCalcPrice;
    }
};
for (var i = 0; i < priceBtns.length; i++) {
    _loop_1(i);
}
