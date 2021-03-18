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
    constructor(brand, model, wheels, doors, seats, fuelType, kilometers, productionYear, automaticGear, weight, color){
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

    calcPrice(){
        let price = 50000 - (this.kilometers * 0.1);
        return price;
    }
}

class Trucks extends Vehicles {
    transportWeight: number;
    constructor(brand, model, wheels, doors, seats, fuelType, kilometers, productionYear, automaticGear, weight, color, transportWeight){
        super(brand, model, wheels, doors, seats, fuelType, kilometers, productionYear, automaticGear, weight, color);
        this.transportWeight = transportWeight;
    }
}

class Motorbikes extends Vehicles{
    maxSpeed: number;
    constructor(brand, model, wheels, doors, seats, fuelType, kilometers, productionYear, automaticGear, weight, color, maxSpeed){
        super(brand, model, wheels, doors, seats, fuelType, kilometers, productionYear, automaticGear, weight, color);
        this.maxSpeed = maxSpeed;
    }
}

// TODO include JSON