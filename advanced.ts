// Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

//     Create a Parent Class called Vehicles
//     Define properties and methods for the super Class
//     Consider the inheritance concept
//     Define 2 other Child classes and name them Motorbikes and Trucks
//     Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula)

class Vehicles {
    brand: string;
    model: string;
    wheels: number;
    doors: number;
    seats: number;
    fuelType: string;
    kilometers: number;
    productionYear: number;
    automaticGear: boolean;
    weight: number;
    color: string;
    constructor(brand, model, wheels, doors, seats, fuelType, kilometers, productionYear, automaticGear, weight, color) {
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

    calcPrice() {
        let price = 50000 - (this.kilometers * 0.1);
        return price;
    }
}

class Trucks extends Vehicles {
    transportWeight: number;
    constructor(brand, model, wheels, doors, seats, fuelType, kilometers, productionYear, automaticGear, weight, color, transportWeight) {
        super(brand, model, wheels, doors, seats, fuelType, kilometers, productionYear, automaticGear, weight, color);
        this.transportWeight = transportWeight;
    }
}

class Motorbikes extends Vehicles {
    maxSpeed: number;
    constructor(brand, model, wheels, doors, seats, fuelType, kilometers, productionYear, automaticGear, weight, color, maxSpeed) {
        super(brand, model, wheels, doors, seats, fuelType, kilometers, productionYear, automaticGear, weight, color);
        this.maxSpeed = maxSpeed;
    }
}


// == import data from JSON

let carsArr = JSON.parse(cars);
let trucksArr = JSON.parse(trucks);
let bikesArr = JSON.parse(bikes);

for (let i = 0; i < carsArr.length; i++) {

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

let priceBtns = Array.from(document.getElementsByClassName("calcPriceBtn"));
console.log(priceBtns);


for (let i = 0; i < priceBtns.length; i++){
    priceBtns[i].addEventListener("click", function(){
        Swal.fire('Price: € ' + calcPrice());
        
    });
    
    function calcPrice(){
        
        let fuelType : number;
        if (carsArr[i].fuelType = "electric"){
            fuelType = 1000;
        } else if (carsArr[i].fuelType = "gasoline"){
            fuelType = 600;
        } else if (carsArr[i].fuelType = "diesel"){
            fuelType = 700;
        };

        let calcKilometers : number;
        if (carsArr[i].kilometers > 300000) {
            calcKilometers = -200;
        } else if (carsArr[i].kilometers > 200000) {
            calcKilometers = -100;
        } else if (carsArr[i].kilometers > 100000) {
            calcKilometers = 100;
        } else if (carsArr[i].kilometers > 50000) {
            calcKilometers = 250;
        } else if (carsArr[i].kilometers > 20000) {
            calcKilometers = 1000;
        }
    
        let objCalcPrice : number = carsArr[i].wheels * 300 + carsArr[i].doors * 400 + carsArr[i].seats * 300 + calcKilometers + fuelType;
        return objCalcPrice;
    }
    
}

