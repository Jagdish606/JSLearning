class Vehicle {
    constructor(company, modelName, color, price, type) {
        this.company = company;
        this.modelName = modelName;
        this.color = color;
        this.price = price;
        this.type = type;
    }
    
    show() {
        console.log(`Name of the company is ${this.company}, Model name is ${this.modelName}, 
        color of vehicle ${this.color}, Price of the vehicle ${this.price}, Type of the vehicle is ${this.type}`);
    }
}

let vehicleOne = new Vehicle("MS", "OMNI", "White", 300000, "Minivan");
let vehicleTwo = new Vehicle("Ford", "Mustang", "Red", 8000, "car");
let vehicleThree = new Vehicle("Honda", "Civic", "Blue", 12000, "car");
let vehicleFour = new Vehicle("Tesla", "Model S", "White", 500, "car");
let vehicleFive = new Vehicle("Chevrolet", "Equinox", "Black", 25000, "car");

const array = [vehicleOne, vehicleTwo, vehicleThree, vehicleFour, vehicleFive];
console.log("Traversing array");
for (const vehicle of array) {
    vehicle.show();
}

class College{
    constructor(college,city,cource,university){
        this.college=college;
        this.city=city;
        this.cource=cource;
        this.university=university;
    }
    display(){
        console.log(`college Name is ${this.college}, City is ${this.city} Cource is ${this.cource},University is ${this.university}`);
    }
}
let Collegea = new College("SGM","Karad","Mca","Shivaji");
let Collegeb = new College("BVDU","Pune","Mca","Bharti");
let Collegec = new College("Asdf","Pune","Medical","asdf");
let Colleged = new College("WRE","Delhi","Agri","Wre");
Collegea.display()
Collegeb.display()
Collegec.display()
Colleged.display()

